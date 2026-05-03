/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { products, type Product } from "./products";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




function LandingPage({ setView, onOpenQuote }: { setView: (view: string) => void, onOpenQuote: () => void }) {
  const heroImages = [
    "/images/hero_solar.png",
    "/images/hero_security.png",
    "/images/hero_storage.png",
    "/images/hero_monitoring.png"
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="bg-white text-slate-800 font-sans overflow-x-hidden">


      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentHeroIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={heroImages[currentHeroIndex]} 
                alt="Hero Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/60"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 text-white pt-10">
          <span className="text-sm font-bold tracking-widest mb-4 block uppercase text-blue-200">10 Years Experience</span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-3xl drop-shadow-lg">
            Smart Solar &<br/>Security Services
          </h1>
          <p className="text-lg max-w-2xl mb-10 text-slate-200 leading-relaxed">
            Precision engineered energy and autonomous security architectures for a resilient future. Ensuring uninterrupted power and surveillance for your property.
          </p>
          <button onClick={onOpenQuote} className="bg-[#4D8BF8] hover:bg-[#0A62D0] text-white px-8 py-3.5 rounded font-bold text-sm transition-colors shadow-lg active:scale-95">
            GET A QUOTE
          </button>
        </div>
      </section>

      {/* Feature Cards Overlap */}
      <div className="relative z-20 -mt-24 max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Solar Arrays", desc: "High-yield PV installations for residential and commercial.", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/><line x1="15" x2="15" y1="3" y2="21"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/></svg> },
            { title: "Inverters", desc: "Precision power conversion and seamless switching.", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
            { title: "Battery Tech", desc: "Long-cycle energy storage for uninterrupted power.", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="11" y2="13"/><line x1="10" x2="10" y1="11" y2="13"/><line x1="14" x2="14" y1="11" y2="13"/></svg> },
            { title: "CCTV HD", desc: "4K surveillance networks with neural threat detection.", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L3 7v13h18V7l-6.5-3z"/><circle cx="12" cy="13" r="3"/></svg> }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-slate-50"
            >
              <div className="w-16 h-16 bg-blue-50 text-[#0A62D0] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">{feature.desc}</p>
              <button 
                onClick={() => setView("services")}
                className="text-[10px] font-bold text-slate-400 hover:text-[#0A62D0] tracking-widest uppercase transition-colors"
              >
                READ MORE
              </button>
            </motion.div>
          ))}
        </div>
      </div>




      {/* Trusted Partners Marquee */}
      <div className="w-full bg-white py-12 overflow-hidden flex flex-col items-center">
        <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-8 text-center">Engineering Infrastructure Powered By Trusted Tech</p>
        <div className="w-full max-w-7xl mx-auto relative">
          {/* Gradient Edges for smooth fade in/out */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-16 whitespace-nowrap items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center px-8">
                <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default">
                  <svg className="w-8 h-8 text-[#0A62D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <span className="font-bold text-xl tracking-tighter text-slate-800">VOLTX</span>
                </div>
                <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default">
                  <svg className="w-8 h-8 text-[#0A62D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  <span className="font-bold text-xl tracking-tighter text-slate-800">OMNI<span className="font-light">POWER</span></span>
                </div>
                <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default">
                  <svg className="w-8 h-8 text-[#0A62D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  <span className="font-bold text-xl tracking-tighter text-slate-800">Global<span className="text-[#0A62D0]">Grid</span></span>
                </div>
                <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default">
                  <svg className="w-8 h-8 text-[#0A62D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"/></svg>
                  <span className="font-bold text-xl tracking-tighter text-slate-800">NEXUS</span>
                </div>
                <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default">
                  <svg className="w-8 h-8 text-[#0A62D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14.5L14 3h6l-10 11.5v6.5L4 14.5z"/></svg>
                  <span className="font-bold text-xl tracking-tighter text-slate-800">Sun<span className="font-light">Sync</span></span>
                </div>
                <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default">
                  <svg className="w-8 h-8 text-[#0A62D0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  <span className="font-bold text-xl tracking-tighter text-slate-800">Aero<span className="text-[#0A62D0]">Tech</span></span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative pt-6 pr-6"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl relative h-[500px]">
            {/* Geometric Overlay */}
            <div className="absolute top-0 right-0 w-[120%] h-full bg-slate-100 z-0 origin-bottom-right -skew-x-12 scale-110"></div>
            <img src="/images/hero_solar.png" className="absolute inset-0 w-full h-full object-cover z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 75%)' }} alt="About Us" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="pl-0 lg:pl-8"
        >
          <span className="text-xs font-black text-[#0A62D0] uppercase tracking-widest mb-3 block">OUR ABOUT</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Prime exception<br/>infrastructure services</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-10">
            We specialize in designing and deploying robust solar arrays, heavy-duty inverters, and high-definition CCTV systems. Our certified engineers ensure your home or business remains powered and secure 24/7, providing absolute peace of mind through innovative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-sm border border-slate-100 flex-1 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-[#0A62D0] flex items-center justify-center rounded">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <h4 className="font-bold text-sm text-slate-800 leading-tight">Innovative<br/>work</h4>
            </div>
            <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-sm border border-slate-100 flex-1 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-[#0A62D0] flex items-center justify-center rounded">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h4 className="font-bold text-sm text-slate-800 leading-tight">Certified<br/>engineers</h4>
            </div>
          </div>
          
          <button 
            onClick={() => setView("services")}
            className="bg-[#4D8BF8] hover:bg-[#0A62D0] text-white px-8 py-3.5 rounded font-bold text-sm transition-colors shadow-md active:scale-95"
          >
            DISCOVER MORE
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden mt-16">
        {/* Subtle wavy pattern background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#0A62D0] uppercase tracking-widest mb-3 block">OUR SERVICE</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight max-w-2xl mx-auto">
              We're providing quality Solar<br/>& Security Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
            {[
              { img: "/images/hero_solar.png", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/><line x1="15" x2="15" y1="3" y2="21"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/></svg>, title: "Solar Installation", desc: "High-yield photovoltaic arrays tailored for your exact power consumption needs." },
              { img: "/images/hero_security.png", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L3 7v13h18V7l-6.5-3z"/><circle cx="12" cy="13" r="3"/></svg>, title: "CCTV Surveillance", desc: "4K ultra-HD security networks with remote mobile access and AI monitoring." },
              { img: "/images/hero_storage.png", icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="11" y2="13"/><line x1="10" x2="10" y1="11" y2="13"/><line x1="14" x2="14" y1="11" y2="13"/></svg>, title: "Energy Storage", desc: "Long-lasting LiFePO4 battery stacks for uninterrupted off-grid capability." }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group flex flex-col border border-slate-100/50"
              >
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <motion.img 
                    src={srv.img} 
                    className="w-full h-full object-cover transform origin-center" 
                    alt={srv.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  {/* Floating Action Button on Hover */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-white hover:text-[#0A62D0] transition-colors">
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </button>
                  </div>
                </div>
                {/* Overlapping Icon with Premium Gradient */}
                <div className="absolute top-[210px] left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#0A62D0] to-[#4D8BF8] text-white rounded-2xl rotate-3 flex items-center justify-center border-4 border-white shadow-xl z-20 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                  {srv.icon}
                </div>
                <div className="pt-16 pb-12 px-8 text-center flex flex-col items-center grow bg-white relative z-0">
                  <h3 className="text-xl font-extrabold text-slate-800 mb-4 group-hover:text-[#0A62D0] transition-colors">{srv.title}</h3>
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">{srv.desc}</p>
                  <button 
                    onClick={() => setView("services")}
                    className="mt-auto flex items-center gap-2 text-xs font-bold text-[#4D8BF8] hover:text-[#0A62D0] tracking-widest uppercase transition-colors"
                  >
                    Explore Service <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#0A62D0] uppercase tracking-widest mb-3 block">TESTIMONIALS</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight max-w-2xl mx-auto">
              What our clients say<br/>about our services
            </h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .flex.overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {[
              { name: "Sarah Jenkins", role: "Facility Manager, TechHub", text: "Prime Pro-Tech entirely transformed our office energy grid. We've seen a 40% reduction in costs since the solar installation, and the battery backup is flawless." },
              { name: "Michael Chang", role: "Homeowner", text: "The CCTV installation was professional and quick. The AI detection alerts me instantly if someone is on my property. Absolute peace of mind." },
              { name: "David Olowale", role: "Operations Director", text: "Their engineers are top-notch. From the initial consultation to the final inverter deployment, the entire process was seamless and incredibly transparent." },
              { name: "Elena Rodriguez", role: "Small Business Owner", text: "I can finally run my business without worrying about power outages. The hybrid system they designed specifically for our needs is worth every penny." }
            ].map((testi, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[400px] snap-center bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-[#0A62D0] mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-8 italic text-sm leading-relaxed">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-[#0A62D0] rounded-full flex items-center justify-center font-bold">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{testi.name}</h4>
                    <span className="text-xs text-slate-500">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



function ProductModal({ product, onClose, onAddToCart, setView }: { product: Product, onClose: () => void, onAddToCart: (p: Product) => void, setView: (v: any) => void }) {
  const [activeFrame, setActiveFrame] = useState(0); // 0, 1, 2, 3
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  // Rotation logic
  const rotationSequence = [0, 3, 1, 2]; // Front, Right, Back, Left
  const labels = ["Front", "Right", "Back", "Left"];
  
  // Motion values for drag
  const x = useMotionValue(0);
  const rotateSpring = useSpring(x, { stiffness: 300, damping: 30 });
  
  // Auto-rotate logic
  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInteracting]);

  const handleDrag = (_: any, info: any) => {
    setIsInteracting(true);
    const delta = info.delta.x;
    // Map horizontal drag to frame changes
    // Sensitivity: 50px drag = 1 frame change
    if (Math.abs(info.offset.x) > 50) {
      const direction = info.offset.x > 0 ? -1 : 1;
      // This is a bit tricky with motion values, let's use a simpler approach for the sequence
    }
  };

  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 animate-in fade-in duration-500 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] flex flex-col md:flex-row relative my-auto max-h-[85vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-slate-100/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all hover:scale-110 active:scale-90 group"
        >
          <span className="material-symbols-outlined text-slate-900 text-lg">close</span>
        </button>

        {/* Left: Visualizer Section */}
        <div className="md:w-3/5 bg-[#FBFBFD] relative flex flex-col p-8 md:p-12 border-r border-slate-100">
          <div className="flex-grow flex flex-col items-center justify-center relative">
            <div className="absolute top-0 left-0 w-full text-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block">Interactive 360° Experience</span>
            </div>

            {/* Main Stage */}
            <div 
              className="relative w-full aspect-square max-w-[450px] cursor-grab active:cursor-grabbing group select-none"
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => { setIsInteracting(false); setIsZooming(false); }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.05}
                onDragStart={() => setIsInteracting(true)}
                onDrag={(_, info) => {
                  const threshold = 40;
                  if (Math.abs(info.offset.x) > threshold) {
                    const direction = info.offset.x > 0 ? -1 : 1;
                    setActiveFrame((prev) => {
                      let next = (prev + direction) % 4;
                      if (next < 0) next += 4;
                      return next;
                    });
                  }
                }}
                onDragEnd={() => setTimeout(() => setIsInteracting(false), 2000)}
                className="w-full h-full relative"
                onMouseMove={(e) => {
                  if (isZooming) handleZoom(e);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFrame}
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl"
                    onMouseEnter={() => setIsZooming(true)}
                    onMouseLeave={() => setIsZooming(false)}
                  >
                    <img 
                      className={`w-full h-full object-contain transition-transform duration-500 ease-out pointer-events-none ${isZooming ? 'scale-[2.5]' : 'scale-100'}`}
                      style={isZooming ? { 
                        objectPosition: `${zoomPos.x}% ${zoomPos.y}%`
                      } : {}}
                      alt={product.name} 
                      src={product.images[rotationSequence[activeFrame]]}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Subtle Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/5 blur-2xl rounded-full -z-10"></div>
              </motion.div>

              {/* Drag Hint Overlay */}
              {!isInteracting && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm animate-pulse">swipe</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Drag to Rotate</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* View Selector Pills */}
            <div className="mt-12 flex items-center gap-2 p-1.5 bg-slate-100 rounded-full border border-slate-200 shadow-inner">
              {labels.map((label, i) => (
                <button
                  key={label}
                  onClick={() => { setActiveFrame(i); setIsInteracting(true); }}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeFrame === i 
                      ? 'bg-white text-primary shadow-sm scale-105' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="md:w-2/5 p-8 md:p-12 flex flex-col bg-white overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-0.5 bg-primary/5 text-primary text-[9px] font-black rounded uppercase tracking-wider border border-primary/10">{product.brand}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{product.type} Engineering</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 leading-[1.1] mb-4">{product.name}</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-manrope">{product.longDesc}</p>
          </div>

          <div className="space-y-8 flex-grow">
            <div>
              <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-3">
                Technical Architecture
                <div className="flex-grow h-[1px] bg-slate-100"></div>
              </h3>
              <div className="grid grid-cols-1 gap-1">
                {product.specs?.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 border-b border-slate-50 group hover:border-primary/20 transition-colors">
                    <span className="text-[11px] text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-[11px] text-slate-900 font-bold tracking-tight">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FBFBFD] p-6 rounded-2xl border border-slate-100">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-1">MSRP (EXW)</p>
                  <p className="text-3xl font-bold text-slate-900">{product.price}</p>
                </div>
                <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold border border-green-100">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  READY TO SHIP
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => { onAddToCart(product); onClose(); }}
                  className="w-full bg-primary text-white py-4 rounded-xl text-xs font-black tracking-widest flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-[0.98] shadow-lg shadow-primary/20 group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">shopping_cart</span>
                  ADD TO CART
                </button>
                <button 
                  onClick={onClose}
                  className="w-full bg-white border border-slate-200 text-slate-500 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Return to Catalogue
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
function ProductPage({ onAddToCart, setView, comparisonProducts, onToggleComparison, onOpenComparison }: { 
  onAddToCart: (p: Product) => void, 
  setView: (v: any) => void,
  comparisonProducts: Product[],
  onToggleComparison: (p: Product) => void,
  onOpenComparison: () => void
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = ["All Products", "Solar Systems", "CCTV Security", "Energy Storage"];

  const filteredProducts = products.filter(p => {
    if (activeCategory === "All Products") return true;
    if (activeCategory === "Solar Systems") return p.type === "Solar";
    if (activeCategory === "CCTV Security") return p.type === "CCTV";
    if (activeCategory === "Energy Storage") return p.type === "Energy" || p.type === "Storage";
    return true;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={onAddToCart} setView={setView} />}
      
      {/* Floating Comparison Bar */}
      <AnimatePresence>
        {comparisonProducts.length > 0 && (
          <motion.div 
            initial={{ y: 100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            exit={{ y: 100, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-[60] bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-8 border border-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {comparisonProducts.map(p => (
                  <div key={p.id} className="w-10 h-10 rounded-full bg-white border-2 border-slate-800 overflow-hidden p-1">
                    <img src={p.images[0]} className="w-full h-full object-contain" alt={p.name} />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">{comparisonProducts.length} Selected</p>
                <p className="text-xs font-bold">Compare Technical Specs</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={onOpenComparison}
                disabled={comparisonProducts.length < 2}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white text-[10px] font-black rounded-lg transition-all uppercase tracking-widest"
              >
                Compare Now
              </button>
              <button 
                onClick={() => comparisonProducts.forEach(p => onToggleComparison(p))}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black rounded-lg transition-all uppercase tracking-widest"
              >
                Clear
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Product Hero Section */}
      <div className="relative pt-48 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_storage.png" className="w-full h-full object-cover opacity-40" alt="Products Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A62D0]/40 via-slate-900/60 to-slate-900"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4 block">Engineered Excellence</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Technology <span className="text-blue-400">Catalog</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
              Explore our precision-engineered energy and security solutions designed for absolute resilience and a sustainable future.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 tech-grid-pattern relative z-10 -mt-10">
      <div className="mb-12 border-b border-slate-100 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-sm font-black text-[#0A62D0] uppercase tracking-widest mb-2">Inventory Overview</h2>
          <p className="text-slate-500 text-sm max-w-xl">Browse our current stock of high-yield solar arrays, security networks, and energy storage systems.</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>Results: <span className="text-[#0A62D0]">{filteredProducts.length} Units</span></span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-[11px] font-bold text-outline uppercase tracking-widest mb-3">Filter by Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      checked={activeCategory === cat}
                      onChange={() => {
                        setActiveCategory(cat);
                        setVisibleCount(8); // Reset count on filter change
                      }}
                      className="w-3.5 h-3.5 rounded-full border-slate-300 text-primary focus:ring-primary/20" 
                      type="radio"
                      name="category"
                    />
                    <span className={`text-xs transition-colors ${activeCategory === cat ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary'}`}>{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xs font-bold mb-1">Engineering Support</h4>
                  <p className="text-[10px] text-on-surface-variant mb-3">Custom infrastructure solutions for your facility.</p>
                  <button className="w-full py-1.5 bg-primary text-white font-bold rounded text-[10px] hover:bg-primary-container transition-all">Request Quote</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-grow">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Products */}
            {displayedProducts.map((p) => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProduct(p)}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden bg-slate-50">
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      className="w-[200%] h-[200%] object-cover group-hover:scale-105 transition-transform duration-500 max-w-none" 
                      style={{ objectPosition: '0 0' }}
                      alt={p.name} 
                      src={p.images[0]}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-white/90 backdrop-blur text-primary text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider border border-primary/10">{p.type}</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onToggleComparison(p); }}
                      className={`w-6 h-6 rounded flex items-center justify-center transition-all ${
                        comparisonProducts.find(cp => cp.id === p.id) 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white/90 text-slate-400 hover:text-blue-600'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {comparisonProducts.find(cp => cp.id === p.id) ? 'check_box' : 'add_box'}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <div className="mb-2">
                    <span className="text-[9px] font-bold text-outline uppercase tracking-wider">{p.brand}</span>
                    <h3 className="text-xs font-bold text-on-surface line-clamp-1 group-hover:text-primary transition-colors">{p.name}</h3>
                  </div>
                  <p className="text-[10px] text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">{p.desc}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">{p.price}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onAddToCart(p); }}
                      className="p-1.5 bg-slate-50 text-primary border border-slate-200 rounded hover:bg-primary hover:text-white transition-all active:scale-90"
                    >
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          {visibleCount < filteredProducts.length && (
            <div className="mt-10 flex justify-center border-t border-slate-100 pt-8">
              <button 
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="px-6 py-2 bg-white border border-slate-200 text-on-surface-variant font-bold text-xs rounded hover:border-primary hover:text-primary transition-all flex items-center gap-2"
              >
                Load More Products ({filteredProducts.length - visibleCount} remaining)
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
    </>
  );
}
function AboutPage() {
  return (
    <main className="tech-grid-pattern">
      <section className="relative pt-48 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_monitoring.png" className="w-full h-full object-cover opacity-40 grayscale" alt="About Us" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A62D0]/40 via-slate-900/60 to-slate-900"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4 block">Our Legacy</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Engineering the <span className="text-blue-400">Future</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
              Prime Pro-Tech is a premier infrastructure technology firm specializing in sustainable energy architectures and autonomous security networks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              To empower properties with resilient, self-sustaining technology ecosystems that bridge the gap between advanced engineering and everyday reliability.
            </p>
            <div className="space-y-4">
              {[
                { title: "Innovation", desc: "Pushing the boundaries of solar and security technology." },
                { title: "Integrity", desc: "Delivering honest, data-driven engineering solutions." },
                { title: "Sustainability", desc: "Committed to a decentralized, green energy future." }
              ].map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0A62D0]">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{v.title}</h4>
                    <p className="text-xs text-slate-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
              <img src="/images/hero_solar.png" className="w-full h-full object-cover" alt="Solar Tech" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <p className="text-3xl font-black text-[#0A62D0]">100+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="tech-grid-pattern min-h-screen">
      <section className="relative pt-48 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_security.png" className="w-full h-full object-cover opacity-40" alt="Contact Us" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A62D0]/40 via-slate-900/60 to-slate-900"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Contact <span className="text-blue-400">Engineering</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
              Have questions about an installation or need a technical consultation? Our team is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Office Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0A62D0] flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Tech Tower, Floor 12</p>
                    <p className="text-[10px] text-slate-500">Innovation District, Lagos, NG</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0A62D0] flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">+234 800 PRIME TECH</p>
                    <p className="text-[10px] text-slate-500">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0A62D0] flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">hello@primeprotech.com</p>
                    <p className="text-[10px] text-slate-500">Fast Technical Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Send a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message</label>
                <textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[150px]" placeholder="How can our engineers help?"></textarea>
              </div>
              <button className="md:col-span-2 py-4 bg-[#0A62D0] text-white font-bold rounded-xl text-sm shadow-lg hover:bg-blue-700 transition-all active:scale-95 uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
const solutions = [
  {
    id: "solutions",
    label: "Solutions",
    title: "Turnkey Solutions",
    subtitle: "Complete Infrastructure Architecture",
    description: "Our Solutions division provides absolute end-to-end engineering. From multi-site industrial surveys to municipal energy planning, we architect high-performance ecosystems that bridge the gap between complex hardware and seamless everyday reliability.",
    features: ["Custom System Schematics", "Full Project Management", "Certified Commissioning", "Lifecycle Analysis"],
    icon: "account_tree",
    image: "/images/hero_monitoring.png"
  },
  {
    id: "solar",
    label: "Solar Arrays",
    title: "Solar Arrays",
    subtitle: "High-Yield Photovoltaic Systems",
    description: "We deploy industrial-grade solar arrays utilizing high-efficiency N-Type TOPCon technology. Designed for maximum irradiance capture even in high-heat environments, our arrays are engineered to reduce utility overhead by up to 95% for enterprise facilities.",
    features: ["TOPCon Cell Technology", "Bifacial Gain Optimization", "Smart Inverter Integration", "Real-time Yield Tracking"],
    icon: "solar_power",
    image: "/images/hero_solar.png"
  },
  {
    id: "security",
    label: "Security Tech",
    title: "Security Tech",
    subtitle: "Autonomous Surveillance Networks",
    description: "Security is no longer just a camera—it's a neural network. Our Security Tech deployments feature AI-driven edge computing for autonomous threat detection, thermal perimeter monitoring, and high-encryption decentralized storage.",
    features: ["AI Threat Recognition", "Thermal Perimeter Mesh", "Zero-Latency Remote View", "End-to-End Encryption"],
    icon: "security",
    image: "/images/hero_security.png"
  },
  {
    id: "storage",
    label: "Grid Storage",
    title: "Grid Storage",
    subtitle: "Mission-Critical Energy Reserves",
    description: "Our Grid Storage solutions feature industrial LiFePO4 stacks with advanced BMS (Battery Management Systems). We enable peak-shaving, load-balancing, and sub-10ms switching to ensure zero-downtime for mission-critical medical or data infrastructure.",
    features: ["Load Balancing AI", "Sub-10ms Auto-Switch", "Modular Scaling Stacks", "Active BMS Balancing"],
    icon: "battery_charging_full",
    image: "/images/hero_storage.png"
  },
  {
    id: "consulting",
    label: "Consulting",
    title: "Technical Consulting",
    subtitle: "Expert Advisory & ROI Modeling",
    description: "Knowledge is the first step to resilience. Our senior engineers provide comprehensive energy audits, ROI financial modeling, and regulatory compliance advisory to ensure your infrastructure investment is optimized for the next 25 years.",
    features: ["Energy Audit Reports", "Financial ROI Projection", "Compliance Certification", "System Modernization Roadmaps"],
    icon: "engineering",
    image: "/images/hero_monitoring.png"
  }
];

function ServicesPage() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const currentSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <main className="tech-grid-pattern">
      {/* Cinematic Services Hero */}
      <section className="relative pt-48 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_monitoring.png" className="w-full h-full object-cover opacity-40" alt="Services Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A62D0]/40 via-slate-900/60 to-slate-900"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4 block">Infrastructure Solutions</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Technical <span className="text-blue-400">Services</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-medium leading-relaxed">
              High-precision engineering for sustainable energy and autonomous security architectures. We don't just install; we architect resilience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="max-w-md">
            <span className="text-[9px] font-black text-[#0A62D0] uppercase tracking-[0.25em] mb-2 block">Engineered Excellence</span>
            <h2 className="text-2xl md:text-2xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">Sustainable Energy &<br/>Precision Security</h2>
            <p className="text-[11px] md:text-xs text-slate-500 mb-6 leading-relaxed font-medium">
              High-tech infrastructure maintenance and installation services tailored for mission-critical operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="px-5 py-2.5 bg-[#0A62D0] text-white font-bold rounded-lg text-[11px] shadow-md hover:bg-blue-700 transition-all active:scale-95 flex items-center gap-2 uppercase tracking-wider" href="#quote">
                Request a Quote
              </a>
              <button 
                className="px-5 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-lg text-[11px] hover:bg-slate-50 transition-all uppercase tracking-wider" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: "bolt", label: "Power Systems", color: "from-amber-400 to-orange-500", bg: "bg-amber-50" },
              { icon: "security", label: "Security Tech", color: "from-blue-400 to-indigo-600", bg: "bg-blue-50" },
              { icon: "engineering", label: "Architecture", color: "from-emerald-400 to-teal-600", bg: "bg-emerald-50" },
              { icon: "monitoring", label: "Monitoring", color: "from-purple-400 to-pink-600", bg: "bg-purple-50" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative aspect-square rounded-3xl bg-white border border-slate-100 shadow-sm p-6 flex flex-col items-center justify-center text-center group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* Background Glow */}
                <div className={`absolute -bottom-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-gradient-to-br ${item.color}`}></div>
                
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                  <span className={`material-symbols-outlined text-3xl bg-gradient-to-br ${item.color} bg-clip-text text-transparent font-bold`}>
                    {item.icon}
                  </span>
                </div>
                
                <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest relative z-10 group-hover:text-[#0A62D0] transition-colors">
                  {item.label}
                </span>
                
                {/* Interaction Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-slate-300 text-sm">north_east</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solutions Showcase */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-[#0A62D0] uppercase tracking-[0.3em] mb-4">Core Competencies</h2>
            <p className="text-3xl font-black text-slate-900 tracking-tight">Our Integrated Solutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 space-y-3">
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  className={`w-full p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 group ${
                    activeTab === sol.id 
                      ? 'bg-[#0A62D0] text-white shadow-xl shadow-blue-900/20 translate-x-2' 
                      : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  <span className={`material-symbols-outlined text-2xl ${activeTab === sol.id ? 'text-white' : 'text-slate-400 group-hover:text-[#0A62D0]'}`}>
                    {sol.icon}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest">{sol.label}</span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row h-full min-h-[500px]"
                >
                  <div className="md:w-1/2 p-10 md:p-16 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-1 bg-[#0A62D0] rounded-full"></span>
                      <p className="text-[10px] font-black text-[#0A62D0] uppercase tracking-[0.3em]">{currentSolution.subtitle}</p>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{currentSolution.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                      {currentSolution.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                      {currentSolution.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#0A62D0] text-xs">check</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setView("contact")}
                      className="mt-12 group flex items-center gap-3 text-xs font-black text-[#0A62D0] uppercase tracking-widest hover:gap-5 transition-all"
                    >
                      Learn Technical Specs
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">trending_flat</span>
                    </button>
                  </div>

                  <div className="md:w-1/2 relative overflow-hidden bg-slate-900">
                    <img 
                      src={currentSolution.image} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-110 transition-transform duration-[2000ms]"
                      alt={currentSolution.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                        <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-2">Service Status</p>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <p className="text-xs font-bold text-white">Engineers Available for Commissioning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* High-Tech Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-6">Our Engineering Workflow</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-on-primary rounded-lg flex items-center justify-center font-bold text-sm">01</div>
                  <div>
                    <h4 className="text-base font-bold mb-1">Technical Site Survey</h4>
                    <p className="text-xs text-on-surface-variant">Precision drone mapping and electrical load analysis to design the optimal system architecture.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-on-primary rounded-lg flex items-center justify-center font-bold text-sm">02</div>
                  <div>
                    <h4 className="text-base font-bold mb-1">Design & Engineering</h4>

                    <p className="text-on-surface-variant">Custom hardware selection and schematic design by our certified senior engineers.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded flex items-center justify-center font-bold">03</div>
                  <div>
                    <h4 className="text-headline-md font-headline-md mb-2">Precision Implementation</h4>
                    <p className="text-on-surface-variant">Clean installation with meticulous cable management and hardware calibration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <img 
                  alt="Engineering Process" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl2lBPnGbQ7gZMgCJNr9wkFfm3pNuiNS5yCfnMyIh6r4CaQSKNqQJEC63wBXsmdZJWNZ6EyIeJCfAjc4snTrEJ_pxWTvzmE4fe4uA8bw6zo-GNOuaRx7ImC_wHazUUfes3fH_592CJyOydnB4S50yrui0hME5DmyrnSk2ygxz3XiH5tCtnDa9tofxFVLZC6d5CafnSkG3J2EKikk9hNiCvNHTgz5lPhjEuF6Gnk-Ey8My2K7K7RQPTmmZAUJ_1I5r8LifHakLFXb67"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl shadow-blue-900/10 border border-slate-100 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary-fixed text-on-secondary-fixed rounded-full">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">CERTIFIED QUALITY</p>
                    <p className="text-headline-md font-headline-md text-primary">ISO 9001:2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 bg-surface-container-high relative overflow-hidden" id="quote">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 flex flex-col lg:flex-row overflow-hidden border border-slate-200">
            <div className="lg:w-1/3 bg-primary p-12 text-on-primary flex flex-col justify-between">
              <div>
                <h2 className="text-headline-lg font-headline-lg mb-6">Request a Technical Quote</h2>
                <p className="text-on-primary-container mb-8">Ready to upgrade your infrastructure? Provide your details and our engineering team will conduct a preliminary feasibility study within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined">call</span>
                  <span className="text-body-md font-body-md">+234 (0) 800-PRIME-PRO</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined">mail</span>
                  <span className="text-body-md font-body-md">eng@primepro.tech</span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">FULL NAME</label>
                    <input className="w-full bg-slate-50 border-slate-200 rounded px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">COMPANY EMAIL</label>
                    <input className="w-full bg-slate-50 border-slate-200 rounded px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md" placeholder="john@company.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant">SERVICE TYPE</label>
                  <select className="w-full bg-slate-50 border-slate-200 rounded px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md">
                    <option>Solar Power Installation</option>
                    <option>CCTV & Integrated Security</option>
                    <option>Maintenance & Repair</option>
                    <option>Full System Upgrade</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant">PROJECT DETAILS</label>
                  <textarea className="w-full bg-slate-50 border-slate-200 rounded px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md" placeholder="Briefly describe your requirements..." rows="4"></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-bold rounded hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20" type="submit">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const parsePrice = (priceStr: string) => {
  return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
};

const formatPrice = (price: number) => {
  return "₦" + price.toLocaleString();
};

function ShoppingCartPage({ cart, onUpdateQuantity, onRemove, onProceedToCheckout, setView }: { 
  cart: {product: Product, quantity: number}[], 
  onUpdateQuantity: (id: string, d: number) => void,
  onRemove: (id: string) => void,
  onProceedToCheckout: () => void, 
  setView: (v: any) => void 
}) {
  const subtotal = cart.reduce((acc, item) => acc + (parsePrice(item.product.price) * item.quantity), 0);
  const tax = Math.round(subtotal * 0.075); // 7.5% VAT
  const total = subtotal + tax;

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-8 md:py-12 flex-grow w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-on-surface">Your Cart</h1>
            <p className="text-xs text-on-surface-variant mt-1">
              {cart.length === 0 ? "Your cart is empty." : `You have ${cart.length} item(s) ready for precision deployment.`}
            </p>
          </div>
          <button 
            onClick={() => setView("products")}
            className="flex items-center gap-2 text-primary font-bold text-xs hover:underline underline-offset-4 w-fit"
          >
            <span className="material-symbols-outlined text-sm">add_circle</span>
            ADD MORE PRODUCTS
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">shopping_cart_off</span>
            <p className="text-on-surface-variant mb-8">Start adding items to your cart to see them here.</p>
            <button 
              onClick={() => setView("products")}
              className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all"
            >
              Browse Catalogue
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4 hover:shadow-sm transition-shadow">
                  <div className="w-24 h-24 bg-slate-50 rounded border border-slate-100 overflow-hidden flex-shrink-0">
                    <img 
                      alt={item.product.name} 
                      className="w-full h-full object-cover" 
                      src={item.product.images[0]}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[8px] font-black text-primary uppercase tracking-widest">{item.product.brand}</span>
                        <h3 className="text-sm font-bold text-on-surface mt-0.5">{item.product.name}</h3>
                        <p className="text-[10px] text-on-surface-variant line-clamp-1">{item.product.desc}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">{item.product.price}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-slate-200 rounded overflow-hidden">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id.toString(), -1)}
                          className="px-2 py-1 bg-slate-50 hover:bg-slate-100 transition-colors border-r border-slate-200 text-xs font-bold"
                        >-</button>
                        <span className="px-3 text-xs font-bold w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id.toString(), 1)}
                          className="px-2 py-1 bg-slate-50 hover:bg-slate-100 transition-colors border-l border-slate-200 text-xs font-bold"
                        >+</button>
                      </div>
                      <button 
                        onClick={() => onRemove(item.product.id.toString())}
                        className="flex items-center gap-1 text-error font-bold text-[10px] hover:bg-error/5 px-2 py-1 rounded transition-all"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:col-span-4 sticky top-24">
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-sm font-bold text-on-surface border-b border-slate-100 pb-4 mb-4 uppercase tracking-wider">Order Summary</h2>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span className="font-bold text-on-surface">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold uppercase tracking-wider text-[10px]">Free</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>VAT (7.5%)</span>
                    <span className="font-bold text-on-surface">{formatPrice(tax)}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-on-surface">Total Amount</span>
                      <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button 
                    onClick={onProceedToCheckout}
                    className="w-full bg-primary text-white py-3 rounded font-bold text-xs hover:bg-primary-container transition-all shadow-md shadow-primary/10 active:scale-[0.98]"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

function CheckoutPage({ cart, setView }: { cart: {product: Product, quantity: number}[], setView: (v: any) => void }) {
  const subtotal = cart.reduce((acc, item) => acc + (parsePrice(item.product.price) * item.quantity), 0);
  const tax = Math.round(subtotal * 0.075);
  const total = subtotal + tax;

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-100 animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl font-bold">check</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Order Confirmed!</h1>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">Thank you for your purchase. Our engineering team has received your order and is preparing for deployment. You'll receive a confirmation email shortly.</p>
          <div className="bg-slate-50 p-4 rounded-lg mb-8 text-left border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Order ID</p>
            <p className="text-sm font-mono font-bold text-slate-700">PRM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          <button 
            onClick={() => { setView("landing"); window.location.reload(); }}
            className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex-grow w-full">
        <div className="mb-8 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-outline uppercase tracking-widest mb-3">
            <button onClick={() => setView("cart")} className="hover:text-primary transition-colors">Cart</button>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-primary">Checkout</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-on-surface">Secure Checkout</h1>
          <p className="text-sm text-on-surface-variant mt-1">Precision infrastructure acquisition.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Shipping */}
            <section className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs tracking-tighter">1</div>
                <h2 className="text-sm font-bold uppercase tracking-wider">Shipping Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1.5">Full Name</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-all" placeholder="John Doe" type="text"/>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1.5">Shipping Address</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-all" placeholder="123 Technology Way" type="text"/>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1.5">City</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-all" placeholder="Lagos" type="text"/>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1.5">Phone</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-all" placeholder="+234..." type="tel"/>
                </div>
              </div>
            </section>

            {/* Step 2: Payment */}
            <section className="bg-white border border-slate-200 rounded-lg p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs tracking-tighter">2</div>
                <h2 className="text-sm font-bold uppercase tracking-wider">Secure Payment</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1.5">Card Number</label>
                  <div className="relative">
                    <input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-all font-mono" placeholder="0000 0000 0000 0000" type="text"/>
                    <span className="absolute right-3 top-2.5 material-symbols-outlined text-slate-300 text-lg">credit_card</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1.5">Expiry</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-all" placeholder="MM/YY" type="text"/>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1.5">CVC</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-all" placeholder="123" type="text"/>
                  </div>
                </div>
                <button 
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg mt-4 hover:bg-primary-container transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/10"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">lock</span>
                      AUTHORIZE PAYMENT — {formatPrice(total)}
                    </>
                  )}
                </button>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sticky top-24">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">Order Summary</h3>
              <div className="max-h-60 overflow-y-auto pr-2 space-y-3 mb-6 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded p-1 flex-shrink-0">
                      <img alt={item.product.name} className="w-full h-full object-cover" src={item.product.images[0]} referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-[11px] font-bold text-on-surface truncate">{item.product.name}</p>
                      <p className="text-[10px] text-on-surface-variant">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-[11px] font-bold text-primary">{formatPrice(parsePrice(item.product.price) * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-xs border-t border-slate-200 pt-4">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="font-bold text-on-surface">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>VAT (7.5%)</span>
                  <span className="font-bold text-on-surface">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 mt-2 border-t border-slate-100">
                  <span className="text-on-surface">Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3 opacity-50">
                  <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                  <p className="text-[9px] font-bold uppercase tracking-widest leading-tight">ISO-Certified Security & Hardware Deployment</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

const commonAppliances = [
  { name: "Air Conditioner (1.5HP)", watts: 1200, icon: "ac_unit" },
  { name: "Refrigerator", watts: 150, icon: "kitchen" },
  { name: "Ceiling Fan", watts: 75, icon: "mode_fan" },
  { name: "LED TV (55\")", watts: 120, icon: "tv" },
  { name: "LED Bulb", watts: 12, icon: "lightbulb" },
  { name: "Washing Machine", watts: 500, icon: "local_laundry_service" },
  { name: "Electric Iron", watts: 1000, icon: "iron" },
  { name: "Water Heater", watts: 1500, icon: "water_drop" },
  { name: "Microwave Oven", watts: 1200, icon: "microwave" },
  { name: "Laptop / PC", watts: 65, icon: "laptop" },
  { name: "Water Pump", watts: 750, icon: "water_pump" },
  { name: "Chest Freezer", watts: 200, icon: "severe_cold" },
];

function EnergySavingsPage({ setView }: { setView: (v: any) => void }) {
  const [appliances, setAppliances] = useState<{ name: string, watts: number, quantity: number, hours: number }[]>([]);
  const [fuelCost, setFuelCost] = useState(800); // Naira per litre
  const [litresPerMonth, setLitresPerMonth] = useState(120);
  const [gridBill, setGridBill] = useState(15000);
  const [showResults, setShowResults] = useState(false);

  const addAppliance = (app: typeof commonAppliances[0]) => {
    const existing = appliances.find(a => a.name === app.name);
    if (existing) {
      setAppliances(prev => prev.map(a => a.name === app.name ? { ...a, quantity: a.quantity + 1 } : a));
    } else {
      setAppliances(prev => [...prev, { name: app.name, watts: app.watts, quantity: 1, hours: 8 }]);
    }
  };

  const removeAppliance = (name: string) => {
    setAppliances(prev => prev.filter(a => a.name !== name));
  };

  const updateAppliance = (name: string, field: 'quantity' | 'hours', value: number) => {
    setAppliances(prev => prev.map(a => a.name === name ? { ...a, [field]: Math.max(field === 'quantity' ? 1 : 1, value) } : a));
  };

  // Calculations
  const totalWatts = appliances.reduce((sum, a) => sum + (a.watts * a.quantity), 0);
  const totalWhPerDay = appliances.reduce((sum, a) => sum + (a.watts * a.quantity * a.hours), 0);
  const totalKwhPerDay = totalWhPerDay / 1000;
  const totalKwhPerMonth = totalKwhPerDay * 30;

  const monthlyFuelCost = fuelCost * litresPerMonth;
  const monthlyEnergyCost = monthlyFuelCost + gridBill;
  const yearlyEnergyCost = monthlyEnergyCost * 12;

  // Solar sizing
  const panelSizeKw = Math.ceil(totalWatts / 550); // number of 550W panels
  const inverterSizeKw = Math.ceil(totalWatts / 1000) * 1.25; // 25% overhead
  const batteryKwh = Math.ceil(totalKwhPerDay * 1.2); // 1.2x daily usage for autonomy

  // Cost estimates from catalogue
  const panelCost = panelSizeKw * 750000;
  const inverterCost = inverterSizeKw <= 5 ? 920000 : 1875000;
  const batteryCost = Math.ceil(batteryKwh / 10) * 5100000;
  const totalSystemCost = panelCost + inverterCost + batteryCost;

  const monthlySaving = monthlyEnergyCost;
  const yearlySaving = monthlySaving * 12;
  const paybackMonths = Math.ceil(totalSystemCost / monthlySaving);
  const paybackYears = (paybackMonths / 12).toFixed(1);
  const savingsOver25Years = (yearlySaving * 25) - totalSystemCost;

  const formatN = (n: number) => "₦" + n.toLocaleString();

  const chartData = Array.from({ length: 21 }, (_, i) => {
    const utilityCost = yearlyEnergyCost * i;
    const solarCost = i === 0 ? 0 : totalSystemCost + (totalSystemCost * 0.02 * i);
    return {
      name: `Yr ${i}`,
      utility: utilityCost,
      solar: i === 0 ? 0 : solarCost,
      savings: Math.max(0, utilityCost - solarCost)
    };
  });


  return (
    <>
      {/* Hero */}
      <div className="relative pt-48 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_solar.png" className="w-full h-full object-cover opacity-30" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A62D0]/50 via-slate-900/70 to-slate-900"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <span className="material-symbols-outlined text-sm text-green-400">savings</span>
              Energy Savings Calculator
            </span>
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4 max-w-2xl">
              How Much Can Solar <span className="text-[#4D8BF8]">Save You?</span>
            </h1>
            <p className="text-blue-200 text-sm max-w-xl leading-relaxed">
              Add your household appliances, enter your current fuel and electricity costs, and instantly see your projected savings and the ideal solar system for your home.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Inputs */}
          <div className="lg:col-span-7 space-y-8">

            {/* Step 1: Appliances */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0A62D0] text-white flex items-center justify-center font-black text-xs">1</div>
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-800">Select Your Appliances</h2>
              </div>

              {/* Quick-add grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
                {commonAppliances.map(app => (
                  <button 
                    key={app.name} 
                    onClick={() => addAppliance(app)}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-slate-100 hover:border-[#0A62D0]/30 hover:bg-blue-50/50 transition-all group text-center"
                  >
                    <span className="material-symbols-outlined text-xl text-slate-400 group-hover:text-[#0A62D0] transition-colors">{app.icon}</span>
                    <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-700 leading-tight">{app.name}</span>
                    <span className="text-[8px] font-bold text-slate-300">{app.watts}W</span>
                  </button>
                ))}
              </div>

              {/* Added appliances */}
              {appliances.length > 0 && (
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Your Appliances</p>
                  {appliances.map(a => (
                    <div key={a.name} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                      <span className="text-xs font-bold text-slate-700 flex-grow">{a.name}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] text-slate-400 font-bold">Qty:</span>
                        <button onClick={() => updateAppliance(a.name, 'quantity', a.quantity - 1)} className="w-6 h-6 rounded bg-white border border-slate-200 text-xs font-bold hover:bg-slate-100">-</button>
                        <span className="text-xs font-black text-slate-800 w-6 text-center">{a.quantity}</span>
                        <button onClick={() => updateAppliance(a.name, 'quantity', a.quantity + 1)} className="w-6 h-6 rounded bg-white border border-slate-200 text-xs font-bold hover:bg-slate-100">+</button>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] text-slate-400 font-bold">Hrs:</span>
                        <input 
                          type="number" min={1} max={24} value={a.hours}
                          onChange={(e) => updateAppliance(a.name, 'hours', parseInt(e.target.value) || 1)}
                          className="w-12 text-xs font-bold text-center bg-white border border-slate-200 rounded py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                      </div>
                      <span className="text-[10px] font-black text-[#0A62D0] min-w-[50px] text-right">{((a.watts * a.quantity * a.hours) / 1000).toFixed(1)} kWh</span>
                      <button onClick={() => removeAppliance(a.name)} className="text-slate-300 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {appliances.length === 0 && (
                <div className="text-center py-8 text-slate-300">
                  <span className="material-symbols-outlined text-4xl mb-2">touch_app</span>
                  <p className="text-xs font-bold">Tap appliances above to add them</p>
                </div>
              )}
            </motion.section>

            {/* Step 2: Current Costs */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0A62D0] text-white flex items-center justify-center font-black text-xs">2</div>
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-800">Current Energy Costs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Fuel Price (₦/Litre)</label>
                  <input type="number" value={fuelCost} onChange={(e) => setFuelCost(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Litres / Month</label>
                  <input type="number" value={litresPerMonth} onChange={(e) => setLitresPerMonth(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Grid Bill (₦/Month)</label>
                  <input type="number" value={gridBill} onChange={(e) => setGridBill(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
              </div>
            </motion.section>

            {/* Calculate Button */}
            <button 
              onClick={() => setShowResults(true)}
              disabled={appliances.length === 0}
              className="w-full bg-[#0A62D0] text-white py-4 rounded-2xl text-sm font-black tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 transition-all active:scale-[0.98] shadow-xl shadow-blue-900/10 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">calculate</span>
              CALCULATE MY SAVINGS
            </button>
          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence>
              {showResults && appliances.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 sticky top-24">

                  {/* Energy Profile */}
                  <div className="bg-slate-900 text-white rounded-2xl p-8">
                    <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-4">Your Energy Profile</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Peak Load</p>
                        <p className="text-2xl font-black">{(totalWatts / 1000).toFixed(1)}<span className="text-sm text-slate-400 ml-1">kW</span></p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Daily Usage</p>
                        <p className="text-2xl font-black">{totalKwhPerDay.toFixed(1)}<span className="text-sm text-slate-400 ml-1">kWh</span></p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Monthly Usage</p>
                        <p className="text-2xl font-black">{totalKwhPerMonth.toFixed(0)}<span className="text-sm text-slate-400 ml-1">kWh</span></p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Appliances</p>
                        <p className="text-2xl font-black">{appliances.reduce((s, a) => s + a.quantity, 0)}<span className="text-sm text-slate-400 ml-1">units</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Savings Breakdown */}
                  <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl p-8">
                    <p className="text-[10px] font-black text-green-200 uppercase tracking-widest mb-4">Projected Savings</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-xs text-green-100">Current Monthly Cost</span>
                        <span className="text-sm font-black">{formatN(monthlyEnergyCost)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-xs text-green-100">With Solar (Monthly)</span>
                        <span className="text-sm font-black text-green-200">₦0</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-xs text-green-100">Monthly Savings</span>
                        <span className="text-sm font-black">{formatN(monthlySaving)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-xs text-green-100">Yearly Savings</span>
                        <span className="text-lg font-black text-yellow-300">{formatN(yearlySaving)}</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-[9px] text-green-200 font-bold uppercase mb-1">Investment Recovery</p>
                      <p className="text-3xl font-black">{paybackYears}<span className="text-sm ml-1">Years</span></p>
                      <p className="text-[10px] text-green-200 mt-1">25-Year Net Savings: <span className="font-black text-white">{formatN(savingsOver25Years)}</span></p>
                    </div>
                  </div>
                  
                  {/* ROI Chart */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                    <p className="text-[10px] font-black text-[#0A62D0] uppercase tracking-widest mb-6">20-Year ROI Projection</p>
                    <div className="h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorUtility" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 9, fontWeight: 700, fill: '#94a3b8' }} 
                            interval={4}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 9, fontWeight: 700, fill: '#94a3b8' }}
                            tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`}
                          />
                          <Tooltip 
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '10px', fontWeight: 'bold' }}
                            formatter={(value: number) => [formatN(value), ""]}
                          />
                          <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
                          <Area type="monotone" dataKey="utility" name="Utility Cost" stroke="#ef4444" fillOpacity={1} fill="url(#colorUtility)" strokeWidth={2} />
                          <Area type="monotone" dataKey="solar" name="Solar Investment" stroke="#22c55e" fillOpacity={1} fill="url(#colorSolar)" strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-6 text-center font-medium">Projection includes estimated 2% annual maintenance for solar systems.</p>
                  </div>


                  {/* Recommended System */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-8">
                    <p className="text-[10px] font-black text-[#0A62D0] uppercase tracking-widest mb-4">Recommended System</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <span className="material-symbols-outlined text-[#0A62D0]">solar_power</span>
                        <div className="flex-grow">
                          <p className="text-xs font-black text-slate-800">Ultra-Max 550W Panel</p>
                          <p className="text-[10px] text-slate-400">{panelSizeKw} panels x {formatN(750000)}</p>
                        </div>
                        <p className="text-sm font-black text-[#0A62D0]">{formatN(panelCost)}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <span className="material-symbols-outlined text-[#0A62D0]">bolt</span>
                        <div className="flex-grow">
                          <p className="text-xs font-black text-slate-800">{inverterSizeKw <= 5 ? "Grid-Tie Inverter 5kW" : "Hybrid Inverter 8kW"}</p>
                          <p className="text-[10px] text-slate-400">1 unit</p>
                        </div>
                        <p className="text-sm font-black text-[#0A62D0]">{formatN(inverterCost)}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <span className="material-symbols-outlined text-[#0A62D0]">battery_charging_full</span>
                        <div className="flex-grow">
                          <p className="text-xs font-black text-slate-800">LiFePO4 10kWh Stack</p>
                          <p className="text-[10px] text-slate-400">{Math.ceil(batteryKwh / 10)} unit(s) x {formatN(5100000)}</p>
                        </div>
                        <p className="text-sm font-black text-[#0A62D0]">{formatN(batteryCost)}</p>
                      </div>

                      <div className="flex justify-between items-center pt-4 mt-2 border-t border-slate-200">
                        <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Total System Cost</span>
                        <span className="text-xl font-black text-[#0A62D0]">{formatN(totalSystemCost)}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setView("products")}
                      className="w-full mt-6 bg-[#0A62D0] text-white py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-[0.98]"
                    >
                      <span className="material-symbols-outlined text-sm">shopping_cart</span>
                      Browse & Purchase Components
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!showResults && (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-12 text-center sticky top-24">
                <span className="material-symbols-outlined text-5xl text-slate-200 mb-4">query_stats</span>
                <p className="text-sm font-bold text-slate-400 mb-1">Your savings report will appear here</p>
                <p className="text-xs text-slate-300">Add appliances and click Calculate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function BeforeAfterSlider({ before, after }: { before: string, after: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl cursor-ew-resize select-none shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Before Image */}
      <img src={before} className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" alt="Before" />
      <div className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-md px-3 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest border border-white/10">Before</div>

      {/* After Image */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
        <div className="absolute top-4 right-4 z-10 bg-[#0A62D0]/60 backdrop-blur-md px-3 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest border border-white/10">After Installation</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-slate-800 text-sm">unfold_more</span>
        </div>
      </div>
    </div>
  );
}

const caseStudies = [
  {
    id: 1,
    title: "TechHub Enterprise Grid",
    client: "TechHub South-East",
    type: "Solar & Storage",
    location: "Enugu, Nigeria",
    description: "Full-scale solar transformation for a 500-workstation facility, reducing grid dependency by 85%.",
    specs: [
      { label: "Capacity", value: "250kWp PV" },
      { label: "Storage", value: "480kWh LiFePO4" },
      { label: "Payback", value: "3.2 Years" }
    ],
    beforeImage: "/images/hero_monitoring.png",
    afterImage: "/images/project_techhub.png"
  },
  {
    id: 2,
    title: "SecureEstate HD Network",
    client: "Greenside Residentials",
    type: "Surveillance",
    location: "Lagos, Nigeria",
    description: "Deployment of a neural-network powered 4K CCTV mesh across 50 acres with autonomous threat detection.",
    specs: [
      { label: "Nodes", value: "128 4K Cameras" },
      { label: "AI", value: "Neural Edge Detection" },
      { label: "Uptime", value: "99.99% Guaranteed" }
    ],
    beforeImage: "/images/hero_security.png",
    afterImage: "/images/project_secure.png"
  },
  {
    id: 3,
    title: "EcoFactory Power Loop",
    client: "Manufacturing Corp",
    type: "Industrial Solar",
    location: "Ibadan, Nigeria",
    description: "Hybrid energy system designed for mission-critical manufacturing equipment with zero-millisecond switching.",
    specs: [
      { label: "Output", value: "1.2MW Peak" },
      { label: "Switching", value: "<10ms ATS" },
      { label: "Annual Saving", value: "₦45,000,000" }
    ],
    beforeImage: "/images/hero_solar.png",
    afterImage: "/images/project_ecofactory.png"
  },
  {
    id: 4,
    title: "Prime Residence Smart-Mini",
    client: "Private Client",
    type: "Residential Solar",
    location: "Abuja, Nigeria",
    description: "A compact, high-efficiency solar system for a luxury smart home, powering all high-load appliances.",
    specs: [
      { label: "Capacity", value: "15kWp PV" },
      { label: "Storage", value: "30kWh Stack" },
      { label: "Independence", value: "100% Off-grid" }
    ],
    beforeImage: "/images/hero_security.png",
    afterImage: "/images/hero_solar.png"
  },
  {
    id: 5,
    title: "AgriVantage Irrigation Node",
    client: "GreenFields Agri",
    type: "Agri-Solar",
    location: "Kaduna, Nigeria",
    description: "Solar-powered automated irrigation system for a 100-hectare farm, eliminating diesel costs.",
    specs: [
      { label: "Pump Power", value: "25HP Solar" },
      { label: "Fuel Saved", value: "2,000L/Month" },
      { label: "ROI", value: "1.8 Years" }
    ],
    beforeImage: "/images/hero_monitoring.png",
    afterImage: "/images/project_agri.png"
  },
  {
    id: 6,
    title: "CityLight Municipal Grid",
    client: "State Government",
    type: "Smart Lighting",
    location: "Port Harcourt",
    description: "Integrated solar street lighting with motion-sensing AI to optimize battery usage during low-traffic hours.",
    specs: [
      { label: "Units", value: "500 Smart Poles" },
      { label: "Efficiency", value: "+40% Battery Life" },
      { label: "Safety", value: "Zero Dark-Zones" }
    ],
    beforeImage: "/images/hero_security.png",
    afterImage: "/images/hero_monitoring.png"
  },
  {
    id: 7,
    title: "DataShield Tier-3 Center",
    client: "CloudNode Systems",
    type: "UPS & Storage",
    location: "Lekki, Lagos",
    description: "Mission-critical UPS backup system for a tier-3 data center using industrial LiFePO4 storage stacks.",
    specs: [
      { label: "Load", value: "500kVA UPS" },
      { label: "Redundancy", value: "N+1 System" },
      { label: "Response", value: "<1ms Switch" }
    ],
    beforeImage: "/images/hero_solar.png",
    afterImage: "/images/hero_storage.png"
  },
  {
    id: 8,
    title: "OmniStore Retail Security",
    client: "MegaMart Retail",
    type: "AI Surveillance",
    location: "Kano, Nigeria",
    description: "Advanced retail security system with heat-mapping and shoplifting detection AI across 15 branches.",
    specs: [
      { label: "Coverage", value: "360° Total View" },
      { label: "AI Alerts", value: "Real-time SMS" },
      { label: "Evidence", value: "Cloud-Encrypted" }
    ],
    beforeImage: "/images/hero_monitoring.png",
    afterImage: "/images/hero_security.png"
  },
  {
    id: 9,
    title: "Waterfront Hospitality Grid",
    client: "Azure Blue Resort",
    type: "Off-grid Solar",
    location: "Badagry, Lagos",
    description: "Seamless off-grid energy solution for a beachfront resort, providing silent power 24/7.",
    specs: [
      { label: "Capacity", value: "80kWp Solar" },
      { label: "Storage", value: "150kWh Stack" },
      { label: "Ambiance", value: "Zero Noise Poll" }
    ],
    beforeImage: "/images/hero_security.png",
    afterImage: "/images/hero_solar.png"
  },
  {
    id: 10,
    title: "EduLink Campus Network",
    client: "Prime Academy",
    type: "Institutional Solar",
    location: "Jos, Nigeria",
    description: "Hybrid solar solution for a multi-building campus, powering laboratories and computer centers.",
    specs: [
      { label: "Panels", value: "300 Units 550W" },
      { label: "Savings", value: "₦12M Annually" },
      { label: "Impact", value: "Sustainable Edu" }
    ],
    beforeImage: "/images/hero_monitoring.png",
    afterImage: "/images/hero_solar.png"
  }
];

function ComparisonModal({ products, onClose }: { products: Product[], onClose: () => void }) {
  if (products.length === 0) return null;

  // Extract all unique spec labels
  const allSpecLabels = Array.from(new Set(products.flatMap(p => p.specs?.map(s => s.label) || [])));

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Technical Comparison</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Side-by-side infrastructure analysis</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-all">
            <span className="material-symbols-outlined text-slate-600">close</span>
          </button>
        </div>

        <div className="flex-grow overflow-auto p-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-slate-50 rounded-tl-xl border-b border-slate-200 w-1/4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Specifications</th>
                {products.map(p => (
                  <th key={p.id} className="p-4 text-center border-b border-slate-200">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 bg-slate-50 rounded-lg p-2">
                        <img src={p.images[0]} className="w-full h-full object-cover" alt={p.name} />
                      </div>
                      <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{p.name}</p>
                      <p className="text-sm font-bold text-[#0A62D0]">{p.price}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allSpecLabels.map((label, i) => (
                <tr key={label} className={i % 2 === 1 ? 'bg-slate-50/30' : ''}>
                  <td className="p-4 text-xs font-bold text-slate-500 border-b border-slate-100">{label}</td>
                  {products.map(p => {
                    const spec = p.specs?.find(s => s.label === label);
                    return (
                      <td key={p.id} className="p-4 text-center text-xs font-medium text-slate-800 border-b border-slate-100">
                        {spec ? spec.value : "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Data generated by Prime Pro-Technology Engineering Division</p>
        </div>
      </motion.div>
    </div>
  );
}

function CaseStudiesPage() {

  return (
    <main className="tech-grid-pattern min-h-screen">
      <section className="relative pt-48 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_monitoring.png" className="w-full h-full object-cover opacity-40 grayscale" alt="Case Studies" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A62D0]/40 via-slate-900/60 to-slate-900"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4 block">Engineering Feats</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Case <span className="text-blue-400">Studies</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
              Explore our portfolio of high-impact engineering projects, from enterprise solar grids to autonomous security networks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 relative group h-[300px] md:h-[400px]">
                <div className="absolute -inset-4 bg-[#0A62D0]/5 rounded-3xl -z-10 group-hover:bg-[#0A62D0]/10 transition-colors"></div>
                <BeforeAfterSlider before={study.beforeImage} after={study.afterImage} />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0A62D0] flex items-center justify-center">
                      <span className="material-symbols-outlined">analytics</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Result</p>
                      <p className="text-sm font-bold text-slate-800">{study.specs[2].value}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-blue-50 text-[#0A62D0] text-[10px] font-black rounded-full uppercase tracking-wider">{study.type}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{study.location}</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight">{study.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  {study.specs.slice(0, 2).map((spec, j) => (
                    <div key={j} className="border-l-2 border-[#0A62D0] pl-6">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-lg font-bold text-slate-800">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-xs font-black text-[#0A62D0] hover:gap-4 transition-all uppercase tracking-widest group">
                  View Technical Blueprint
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">trending_flat</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}



export default function App() {

  const [view, setView] = useState<"landing" | "products" | "services" | "checkout" | "cart" | "about" | "contact" | "calculator" | "projects">("landing");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<{product: Product, quantity: number}[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setView("cart");
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };
  
  const toggleComparison = (product: Product) => {
    setComparisonProducts(prev => {
      if (prev.find(p => p.id === product.id)) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 3) return prev; // Limit to 3
      return [...prev, product];
    });
  };

  const [isChatOpen, setIsChatOpen] = useState(false);
  const initialMessage = { role: 'model' as const, content: "Hello! I'm your Prime Pro-Technology AI Consultant. Whether you're planning a solar installation or a security network, I'm here to help. What are you looking to build today?" };
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'model', content: string }[]>([initialMessage]);
  const lastChatActivity = useRef(Date.now());

  const handleOpenChat = () => {
    const inactiveMinutes = (Date.now() - lastChatActivity.current) / 1000 / 60;
    if (inactiveMinutes >= 5 && chatMessages.length > 1) {
      setChatMessages([initialMessage]);
    }
    lastChatActivity.current = Date.now();
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    lastChatActivity.current = Date.now();
    setIsChatOpen(false);
  };

  const isCheckoutOrCart = view === "checkout" || view === "cart";
  const isHeroView = view === "landing" || view === "products" || view === "services" || view === "about" || view === "contact" || view === "calculator" || view === "projects";

  return (
    <>
      {/* Global Navbar */}
      <nav className={`px-6 lg:px-12 py-4 flex justify-between items-center z-50 transition-colors duration-500 ${
        isHeroView 
          ? "absolute top-0 left-0 w-full bg-transparent text-white border-b border-white/10" 
          : "sticky top-0 w-full bg-white shadow-sm dark:bg-slate-950 dark:border-b dark:border-slate-800"
      }`}>
        <div className={`flex items-center gap-3 text-2xl font-black tracking-tighter cursor-pointer ${isHeroView ? "text-white" : "text-[#0A62D0]"}`} onClick={() => setView("landing")}>
          <img src="/images/logo.png" className="h-10 w-auto object-contain" alt="Prime Pro-Technology Logo" />
          PRIME PRO-TECHNOLOGY
        </div>
        <ul className={`hidden md:flex gap-8 text-sm font-bold ${isHeroView ? "text-white/80" : "text-slate-800 dark:text-slate-200"}`}>
          <li onClick={() => setView("landing")} className={`cursor-pointer pb-1 ${view === "landing" ? "text-white border-b-2 border-white" : (isHeroView ? "hover:text-white" : "hover:text-[#0A62D0]")}`}>Home</li>
          <li onClick={() => setView("about")} className={`cursor-pointer pb-1 ${view === "about" ? (isHeroView ? "text-white border-b-2 border-white" : "text-[#0A62D0] border-b-2 border-[#0A62D0]") : (isHeroView ? "hover:text-white" : "hover:text-[#0A62D0]")}`}>About</li>
          <li onClick={() => setView("products")} className={`cursor-pointer pb-1 ${view === "products" ? (isHeroView ? "text-white border-b-2 border-white" : "text-[#0A62D0] border-b-2 border-[#0A62D0]") : (isHeroView ? "hover:text-white" : "hover:text-[#0A62D0]")}`}>Products</li>
          <li onClick={() => setView("services")} className={`cursor-pointer pb-1 ${view === "services" ? (isHeroView ? "text-white border-b-2 border-white" : "text-[#0A62D0] border-b-2 border-[#0A62D0]") : (isHeroView ? "hover:text-white" : "hover:text-[#0A62D0]")}`}>Services</li>
          <li onClick={() => setView("projects")} className={`cursor-pointer pb-1 ${view === "projects" ? (isHeroView ? "text-white border-b-2 border-white" : "text-[#0A62D0] border-b-2 border-[#0A62D0]") : (isHeroView ? "hover:text-white" : "hover:text-[#0A62D0]")}`}>Projects</li>
          <li onClick={() => setView("calculator")} className={`cursor-pointer pb-1 ${view === "calculator" ? (isHeroView ? "text-white border-b-2 border-white" : "text-[#0A62D0] border-b-2 border-[#0A62D0]") : (isHeroView ? "hover:text-white" : "hover:text-[#0A62D0]")}`}>Calculator</li>
          <li onClick={() => setView("contact")} className={`cursor-pointer pb-1 ${view === "contact" ? (isHeroView ? "text-white border-b-2 border-white" : "text-[#0A62D0] border-b-2 border-[#0A62D0]") : (isHeroView ? "hover:text-white" : "hover:text-[#0A62D0]")}`}>Contact</li>
        </ul>
        <div className="flex items-center gap-6">
          
          {/* Cart */}
          <button 
            onClick={() => setView("cart")}
            className={`transition-all duration-200 active:scale-95 relative flex items-center ${
              view === "cart" 
                ? "text-[#0A62D0]" 
                : (isHeroView ? "text-white hover:text-white/80" : "text-slate-600 dark:text-slate-400 hover:text-[#0A62D0]")
            }`}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>

          <button onClick={() => setIsQuoteModalOpen(true)} className={`hidden md:block px-6 py-2.5 rounded text-xs font-bold transition-colors shadow-sm ${isHeroView ? "bg-white text-[#0A62D0] hover:bg-white/90" : "bg-[#4D8BF8] hover:bg-[#0A62D0] text-white"}`}>GET A QUOTE</button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex items-center justify-center p-2 rounded-lg transition-colors ${isHeroView ? "text-white hover:bg-white/10" : "text-slate-800 hover:bg-slate-100"}`}
          >
            <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8 pt-24"
          >
            <ul className="flex flex-col gap-6 text-2xl font-black text-slate-900 tracking-tight">
              {["landing", "about", "products", "services", "projects", "calculator", "contact"].map((v) => (
                <li 
                  key={v}
                  onClick={() => { setView(v); setIsMobileMenuOpen(false); }}
                  className="hover:text-[#0A62D0] transition-colors cursor-pointer capitalize"
                >
                  {v === "landing" ? "Home" : v}
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-4">
              <button 
                onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full bg-[#0A62D0] text-white py-4 rounded-xl font-black tracking-widest text-sm"
              >
                GET A QUOTE
              </button>
              <div className="flex justify-center gap-6 pt-6">
                <span className="material-symbols-outlined text-slate-400">public</span>
                <span className="material-symbols-outlined text-slate-400">shield</span>
                <span className="material-symbols-outlined text-slate-400">bolt</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {view === "landing" ? (
        <LandingPage setView={setView} onOpenQuote={() => setIsQuoteModalOpen(true)} />
      ) : view === "products" ? (
        <ProductPage 
          onAddToCart={addToCart} 
          setView={setView} 
          comparisonProducts={comparisonProducts}
          onToggleComparison={toggleComparison}
          onOpenComparison={() => setIsComparisonOpen(true)}
        />
      ) : view === "services" ? (
        <ServicesPage />
      ) : view === "about" ? (
        <AboutPage />
      ) : view === "contact" ? (
        <ContactPage />
      ) : view === "calculator" ? (
        <EnergySavingsPage setView={setView} />
      ) : view === "projects" ? (
        <CaseStudiesPage />
      ) : view === "cart" ? (
        <ShoppingCartPage 
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onProceedToCheckout={() => setView("checkout")} 
          setView={setView}
        />
      ) : (
        <CheckoutPage cart={cart} setView={setView} />
      )}

      {/* Footer */}
      {/* Premium Footer */}
      <footer className="w-full bg-[#0A62D0] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4 font-black text-2xl tracking-tighter mb-4">
              <img src="/images/logo.png" className="h-12 w-auto object-contain brightness-0 invert" alt="Prime Pro-Technology Logo" />
              PRIME PRO-TECHNOLOGY
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
              Leading the transition to decentralized green energy and autonomous security architectures. Engineering a sustainable, secure future.
            </p>
            <div className="flex gap-4 pt-4">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A62D0] transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A62D0] transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">shield</span></a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A62D0] transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">bolt</span></a>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-bold text-sm tracking-widest uppercase mb-6 text-white/90">Solutions</h5>
            <ul className="space-y-4">
              <li><button onClick={() => setView("products")} className="text-blue-200 hover:text-white text-sm transition-colors cursor-pointer">Solar Arrays</button></li>
              <li><button onClick={() => setView("products")} className="text-blue-200 hover:text-white text-sm transition-colors cursor-pointer">Security Tech</button></li>
              <li><button onClick={() => setView("products")} className="text-blue-200 hover:text-white text-sm transition-colors cursor-pointer">Grid Storage</button></li>
              <li><button onClick={() => setView("services")} className="text-blue-200 hover:text-white text-sm transition-colors cursor-pointer">Consulting</button></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-bold text-sm tracking-widest uppercase mb-6 text-white/90">Newsletter</h5>
            <p className="text-blue-200 text-sm mb-4">Subscribe for the latest in grid technology and exclusive offers.</p>
            <form className="flex mt-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:bg-white/20 text-white placeholder:text-blue-200 transition-colors"
                required
              />
              <button type="submit" className="bg-white text-[#0A62D0] px-6 py-3 rounded-r-lg font-bold text-sm hover:bg-blue-50 transition-colors flex items-center">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-white/10 py-6 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-xs text-blue-200">© 2026 PRIME PRO-TECHNOLOGY. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="text-xs text-blue-200 hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs text-blue-200 hover:text-white transition-colors" href="#">Terms of Service</a>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-100 uppercase tracking-wider">Systems Online</span>
            </div>
          </div>
        </div>
      </footer>
        {isQuoteModalOpen && <QuoteModal onClose={() => setIsQuoteModalOpen(false)} />}
        {isComparisonOpen && (
          <ComparisonModal 
            products={comparisonProducts} 
            onClose={() => setIsComparisonOpen(false)} 
          />
        )}
        
        {/* Floating AI Chat Trigger */}
        <button 
          onClick={() => handleOpenChat()}
          className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#0A62D0] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">support_agent</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </button>

        <AnimatePresence>
          {isChatOpen && (
            <ChatBot 
              messages={chatMessages} 
              setMessages={setChatMessages} 
              onClose={() => handleCloseChat()} 
            />
          )}
        </AnimatePresence>
      </>
    );
  }

function QuoteModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] flex flex-col md:flex-row relative w-full max-w-4xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center shadow-sm transition-all hover:scale-110 active:scale-90"
        >
          <span className="material-symbols-outlined text-slate-900 text-lg">close</span>
        </button>

        {/* Left Side: Visual/Branding */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#0A62D0] to-[#4D8BF8] p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10">
            <img src="/images/logo.png" className="h-14 w-auto object-contain brightness-0 invert mb-6" alt="Prime Pro-Technology Logo" />
            <h2 className="text-3xl font-bold mb-4">Let's power your future.</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Get a customized quote from our certified engineers. We evaluate your unique energy and security needs to deliver an optimal solution.
            </p>
          </div>
          <div className="relative z-10 mt-12 flex items-center gap-3">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center"><span className="material-symbols-outlined text-slate-800 text-sm">person</span></div>
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center"><span className="material-symbols-outlined text-slate-800 text-sm">person_2</span></div>
            </div>
            <p className="text-xs font-medium text-blue-100">Join 10,000+ satisfied clients</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-7/12 p-10 bg-white">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Request a Free Quote</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">First Name</label>
                <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Last Name</label>
                <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Email Address</label>
              <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Service Needed</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700">
                <option>Solar Panel Installation</option>
                <option>CCTV & Security Networks</option>
                <option>Inverter & Battery Storage</option>
                <option>Full Hybrid System</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Project Details</label>
              <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="Tell us about your property..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#0A62D0] hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2">
              Get My Free Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function ChatBot({ messages, setMessages, onClose }: { 
  messages: { role: 'user' | 'model', content: string }[], 
  setMessages: React.Dispatch<React.SetStateAction<{ role: 'user' | 'model', content: string }[]>>,
  onClose: () => void 
}) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput("");
    const newMessages = [...messages, { role: 'user', content: userMsg } as const];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const productContext = products.map(p => `- ${p.name} [${p.type}]: ${p.price}`).join("\n");
      
      const response = await fetch('/api/chat', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role,
            parts: [{ text: m.content }]
          })),
          systemInstruction: {
            role: "system",
            parts: [{ text: `You are the Prime Pro-Technology AI Consultant. Products: ${productContext}. Help clients calculate energy needs and recommend hardware. IMPORTANT: Never use markdown formatting. No asterisks, no hashtags, no bold/italic syntax. Use plain text only. Use dashes (-) for bullet points.` }]
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server error ${response.status}`);
      }

      const data = await response.json();
      let aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!aiResponse) {
        throw new Error("Empty response from AI");
      }
      
      // Strip markdown formatting
      aiResponse = aiResponse.replace(/\*\*/g, '').replace(/\*/g, '').replace(/#{1,6}\s?/g, '');
      
      setMessages(prev => [...prev, { role: 'model', content: aiResponse }]);
    } catch (error: any) {
      console.error("ChatBot Error:", error);
      const errorMsg = error.message?.includes("Too many") 
        ? "You're sending messages too quickly. Please wait a moment."
        : "Connection issue with the server. Please try again.";
      setMessages(prev => [...prev, { role: 'model', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.9 }}
      className="fixed bottom-24 right-8 z-[70] w-[380px] h-[550px] bg-white rounded-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] border border-slate-100 flex flex-col overflow-hidden"
    >
      <div className="bg-[#0A62D0] p-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">support_agent</span>
          </div>
          <div>
            <p className="text-sm font-black tracking-tight">AI Consultant</p>
            <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Active Now</p>
          </div>
        </div>
        <button onClick={onClose} className="hover:rotate-90 transition-transform">
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-[#0A62D0] text-white rounded-tr-none shadow-md' 
                : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'
            }`}>
              <p className="leading-relaxed whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Describe your appliances..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <button 
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 bg-[#0A62D0] text-white rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all"
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
        <p className="text-center text-[9px] text-slate-400 mt-3 font-medium">Powered by Gemini AI • Technical Consultation</p>
      </div>
    </motion.div>
  );
}
