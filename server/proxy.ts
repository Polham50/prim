import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

// ──────────────────────────────────────────────
// Security Middleware
// ──────────────────────────────────────────────

// Parse JSON with size limit to prevent payload attacks
app.use(express.json({ limit: '10kb' }));

// CORS - only allow requests from the frontend
app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// ──────────────────────────────────────────────
// Rate Limiting (in-memory, per IP)
// ──────────────────────────────────────────────

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20;          // max requests
const RATE_WINDOW_MS = 60000;   // per 1 minute

function rateLimit(req: express.Request, res: express.Response, next: express.NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return next();
  }

  if (entry.count >= RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment before trying again.' });
  }

  entry.count++;
  return next();
}

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetTime) rateLimitMap.delete(ip);
  }
}, 300000);

// ──────────────────────────────────────────────
// Input Sanitization
// ──────────────────────────────────────────────

function sanitizeText(text: string): string {
  if (typeof text !== 'string') return '';
  // Remove potential injection patterns, limit length
  return text
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim()
    .slice(0, 2000); // Max 2000 chars per message
}

// ──────────────────────────────────────────────
// Chat API Proxy Endpoint
// ──────────────────────────────────────────────

app.post('/api/chat', rateLimit, async (req, res) => {
  try {
    const API_KEY = process.env.VITE_GEMINI_API_KEY;
    
    if (!API_KEY) {
      console.error('GEMINI API KEY is not set in environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const { messages, systemInstruction } = req.body;

    // Validate request structure
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid request: messages array is required' });
    }

    // Sanitize all user messages
    const sanitizedMessages = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: sanitizeText(m.parts?.[0]?.text || '') }]
    }));

    // Build request to Gemini
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: sanitizedMessages,
          systemInstruction: systemInstruction || undefined
        })
      }
    );

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json();
      console.error('Gemini API Error:', errorData);
      return res.status(geminiResponse.status).json({ error: errorData.error?.message || 'AI service error' });
    }

    const data = await geminiResponse.json();
    res.json(data);

  } catch (error: any) {
    console.error('Proxy Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ──────────────────────────────────────────────
// Health Check
// ──────────────────────────────────────────────

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ──────────────────────────────────────────────
// Start Server
// ──────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`\n🔒 Prime Pro-Technology Secure API Proxy`);
  console.log(`   Running on http://localhost:${PORT}`);
  console.log(`   Rate limit: ${RATE_LIMIT} requests per minute`);
  console.log(`   API Key: ${API_KEY ? '✅ Loaded' : '❌ MISSING'}\n`);
});

const API_KEY = process.env.VITE_GEMINI_API_KEY;
