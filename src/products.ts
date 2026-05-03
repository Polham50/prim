export interface Product {
  id: number;
  brand: string;
  name: string;
  desc: string;
  longDesc: string;
  price: string;
  type: "Solar" | "CCTV" | "Energy" | "Storage" | "Lighting" | "Smart" | "EV";
  images: string[];
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    brand: "PrimePro Series",
    name: "Ultra-Max 550W Panel",
    desc: "High-performance monocrystalline module with advanced multi-busbar technology.",
    longDesc: "The Ultra-Max 550W represents the pinnacle of solar engineering. Utilizing high-density interconnect technology and PERC cells, it delivers industry-leading efficiency even in low-light conditions. Designed for both residential rooftops and large-scale industrial arrays.",
    price: "₦750,000",
    type: "Solar",
    images: ["/products/solar_panel.png", "/products/solar_panel.png", "/products/solar_panel.png", "/products/solar_panel.png"],
    specs: [
      { label: "Efficiency", value: "21.3%" },
      { label: "Cell Type", value: "Monocrystalline" },
      { label: "Weight", value: "28.5 kg" },
      { label: "Dimensions", value: "2279 × 1134 × 35 mm" },
      { label: "Warranty", value: "25 Years Linear Power" }
    ]
  },
  {
    id: 2,
    brand: "Nexus Core",
    name: "Hybrid Inverter 8kW",
    desc: "Dual MPPT tracking with integrated smart monitoring and seamless battery integration.",
    longDesc: "A versatile energy hub for the modern home. The Nexus Core Hybrid Inverter manages solar production, battery storage, and grid interaction simultaneously. Features an ultra-fast switchover time of <10ms, ensuring your sensitive electronics never lose power.",
    price: "₦1,875,000",
    type: "Energy",
    images: ["/products/inverter.png", "/products/inverter.png", "/products/inverter.png", "/products/inverter.png"],
    specs: [
      { label: "Rated Power", value: "8000W" },
      { label: "Max DC Input", value: "10400W" },
      { label: "MPPT Channels", value: "2" },
      { label: "Ingress Protection", value: "IP65" },
      { label: "Communication", value: "WiFi / RS485 / CAN" }
    ]
  },
  {
    id: 3,
    brand: "Guardian Eye",
    name: "4K AI Bullet Camera",
    desc: "Advanced person and vehicle detection with 100ft night vision.",
    longDesc: "Secure your perimeter with neural-link intelligence. The Guardian Eye 4K features edge-computing hardware that distinguishes between humans, vehicles, and pets, virtually eliminating false alarms. Its Starlight sensor provides full-color video even in near-total darkness.",
    price: "₦285,000",
    type: "CCTV",
    images: ["/products/cctv_camera.png", "/products/cctv_camera.png", "/products/cctv_camera.png", "/products/cctv_camera.png"],
    specs: [
      { label: "Resolution", value: "3840 x 2160 (4K)" },
      { label: "Lens", value: "4mm Fixed" },
      { label: "Night Vision", value: "30m (IR + Starlight)" },
      { label: "Storage", value: "MicroSD up to 256GB" },
      { label: "Protocol", value: "ONVIF / RTSP" }
    ]
  },
  {
    id: 4,
    brand: "SafeCell Tech",
    name: "LiFePO4 10kWh Stack",
    desc: "High-density lithium storage with 6000+ cycle life.",
    longDesc: "Energy independence starts here. This modular battery system uses the safest lithium iron phosphate chemistry. Its compact, stackable design allows you to scale from 10kWh to 100kWh as your energy needs grow. Integrated with a Grade-A Smart BMS for maximum longevity.",
    price: "₦5,100,000",
    type: "Storage",
    images: ["/products/battery.png", "/products/battery.png", "/products/battery.png", "/products/battery.png"],
    specs: [
      { label: "Capacity", value: "10.24kWh" },
      { label: "Nominal Voltage", value: "51.2V" },
      { label: "Max Discharge", value: "100A" },
      { label: "Cycle Life", value: "6000 @ 80% DoD" },
      { label: "Certification", value: "UL1973 / CE" }
    ]
  },
  {
    id: 5,
    brand: "Guardian Eye",
    name: "5MP Panoramic Dome",
    desc: "180-degree field of view with vandal-proof housing.",
    longDesc: "Eliminate blind spots with a single device. Our 180° Panoramic Dome replaces multiple standard cameras, providing a seamless wide-angle view of entryways or lobbies. The IK10 vandal-proof rating makes it ideal for public areas prone to tampering.",
    price: "₦217,500",
    type: "CCTV",
    images: ["/products/cctv_camera.png", "/products/cctv_camera.png", "/products/cctv_camera.png", "/products/cctv_camera.png"],
    specs: [
      { label: "Sensor", value: "5MP Progressive Scan" },
      { label: "FOV", value: "180° Horizontal" },
      { label: "Audio", value: "Built-in Mic & Speaker" },
      { label: "Protection", value: "IP67 / IK10" },
      { label: "AI", value: "Crossline Detection" }
    ]
  },
  {
    id: 6,
    brand: "PrimePro Series",
    name: "Bifacial 450W Pro",
    desc: "Generates power from both sides, increasing efficiency by up to 25%.",
    longDesc: "Double the capture, double the power. The Bifacial Pro series is designed for commercial roofs or ground mounts where reflected light (albedo) can be captured by the rear side of the panel. This results in significantly higher energy density per square meter.",
    price: "₦810,000",
    type: "Solar",
    images: ["/products/solar_panel.png", "/products/solar_panel.png", "/products/solar_panel.png", "/products/solar_panel.png"],
    specs: [
      { label: "Rear Gain", value: "Up to 25%" },
      { label: "Glass", value: "Dual-Glass 2.0mm" },
      { label: "Frame", value: "Anodized Aluminum" },
      { label: "LID", value: "< 0.45% Year 2-25" },
      { label: "Temp Coeff", value: "-0.34%/°C" }
    ]
  },
  {
    id: 7,
    brand: "SmartLink",
    name: "Precision Energy Meter",
    desc: "Real-time monitoring of energy consumption and production.",
    longDesc: "Take control of your utility bills. The SmartLink Meter installs directly into your DB board and provides second-by-second data on your home's energy flow. Compatible with Alexa and Google Home for voice-activated energy audits.",
    price: "₦145,000",
    type: "Smart",
    images: ["/products/smart_meter.png", "/products/smart_meter.png", "/products/smart_meter.png", "/products/smart_meter.png"],
    specs: [
      { label: "Accuracy", value: "Class 1.0" },
      { label: "Phase", value: "Single/Three Phase" },
      { label: "Current", value: "Up to 100A (CT)" },
      { label: "Connectivity", value: "WiFi 2.4GHz" },
      { label: "App", value: "SmartLife / Tuya" }
    ]
  },
  {
    id: 8,
    brand: "NovaLight",
    name: "Eco-Street 100W",
    desc: "Integrated solar street light with motion sensor and high-brightness LED.",
    longDesc: "Illuminate your community sustainably. This all-in-one street light combines a high-efficiency solar panel, long-life LiFePO4 battery, and ultra-bright LEDs. The built-in microwave sensor dims the light to 30% when no motion is detected, extending battery life significantly.",
    price: "₦320,000",
    type: "Lighting",
    images: ["/products/solar_street_light.png", "/products/solar_street_light.png", "/products/solar_street_light.png", "/products/solar_street_light.png"],
    specs: [
      { label: "Luminous Flux", value: "12,000 Lumens" },
      { label: "Battery", value: "LiFePO4 32700" },
      { label: "Charge Time", value: "6-8 Hours Sunlight" },
      { label: "Run Time", value: "3+ Rainy Days" },
      { label: "Mount Height", value: "6-8 Meters" }
    ]
  },
  {
    id: 9,
    brand: "PowerWay",
    name: "Portable Station 2kWh",
    desc: "Reliable off-grid power for outdoors or emergencies.",
    longDesc: "Power wherever you need it. The PowerWay 2000 is a robust portable generator with a 2000Wh capacity and 2400W AC output. It can power heavy appliances like refrigerators and power tools. Recharge via solar panels in as little as 4 hours.",
    price: "₦850,000",
    type: "Storage",
    images: ["/products/portable_power.png", "/products/portable_power.png", "/products/portable_power.png", "/products/portable_power.png"],
    specs: [
      { label: "Capacity", value: "2048Wh" },
      { label: "Inverter", value: "2400W Pure Sine" },
      { label: "Outlets", value: "4x AC, 4x USB, 1x DC" },
      { label: "Solar Input", value: "500W Max" },
      { label: "Weight", value: "22 kg" }
    ]
  },
  {
    id: 10,
    brand: "VoltDrive",
    name: "Smart EV Charger",
    desc: "Level 2 home charging station with scheduled charging.",
    longDesc: "Charge your electric vehicle at the fastest possible rate at home. The VoltDrive Smart Charger features a 7kW output and app-based scheduling, allowing you to charge during off-peak energy hours. Its rugged design is suitable for both indoor and outdoor installation.",
    price: "₦580,000",
    type: "EV",
    images: ["/products/ev_charger.png", "/products/ev_charger.png", "/products/ev_charger.png", "/products/ev_charger.png"],
    specs: [
      { label: "Output Power", value: "7.2kW (32A)" },
      { label: "Voltage", value: "230V AC" },
      { label: "Connector", value: "Type 2 (IEC 62196)" },
      { label: "Cable Length", value: "5 Meters" },
      { label: "Auth", value: "RFID / App" }
    ]
  },
  {
    id: 11,
    brand: "PrimePro Series",
    name: "Micro-Inverter Duo",
    desc: "Panel-level optimization for maximum efficiency.",
    longDesc: "Perfect for complex roofs with shading issues. Our Micro-Inverter Duo handles two panels independently, ensuring that if one panel is shaded, the other continues to produce at 100% capacity. This architecture also eliminates high-voltage DC on your roof for superior safety.",
    price: "₦125,000",
    type: "Energy",
    images: ["/products/inverter.png", "/products/inverter.png", "/products/inverter.png", "/products/inverter.png"],
    specs: [
      { label: "Input Power", value: "Up to 1000W" },
      { label: "Peak Efficiency", value: "96.7%" },
      { label: "MPPT Voltage", value: "22-60V" },
      { label: "Warranty", value: "12 Years" },
      { label: "Monitoring", value: "PLC / Zigbee" }
    ]
  },
  {
    id: 12,
    brand: "Guardian Eye",
    name: "PTZ Speed Dome",
    desc: "360-degree rotation with 30x optical zoom.",
    longDesc: "Total situational awareness. This high-speed PTZ camera can pan 360° in less than a second. Its powerful 30x optical zoom allows for clear face recognition from over 200 meters away. Features AI auto-tracking to follow suspicious targets automatically.",
    price: "₦410,000",
    type: "CCTV",
    images: ["/products/cctv_camera.png", "/products/cctv_camera.png", "/products/cctv_camera.png", "/products/cctv_camera.png"],
    specs: [
      { label: "Zoom", value: "30x Optical / 16x Digital" },
      { label: "Pan/Tilt Range", value: "360° / -15° to 90°" },
      { label: "Preset Positions", value: "300" },
      { label: "IR Distance", value: "150m" },
      { label: "Tracking", value: "Deep Learning Auto-Track" }
    ]
  },
  {
    id: 13,
    brand: "SafeCell Tech",
    name: "PowerWall 5kWh",
    desc: "Sleek wall-mounted lithium battery for residential storage.",
    longDesc: "Modern energy storage that looks as good as it performs. The PowerWall 5kWh is designed for slim installation against garage or utility walls. Its fanless cooling system ensures silent operation, making it perfect for indoor use.",
    price: "₦2,950,000",
    type: "Storage",
    images: ["/products/battery.png", "/products/battery.png", "/products/battery.png", "/products/battery.png"],
    specs: [
      { label: "Chemistry", value: "LiFePO4" },
      { label: "Usable Capacity", value: "5.12kWh" },
      { label: "Standard Charge", value: "50A" },
      { label: "Scalability", value: "Max 15 Units" },
      { label: "Size", value: "600 x 480 x 150 mm" }
    ]
  },
  {
    id: 14,
    brand: "NovaLight",
    name: "Garden Glow Set",
    desc: "Pack of 4 decorative solar-powered garden lights.",
    longDesc: "Transform your landscape with elegant, wire-free lighting. These premium solar stakes feature glass lenses and stainless steel construction for durability. They automatically illuminate at dusk, providing a warm, inviting glow for up to 12 hours.",
    price: "₦85,000",
    type: "Lighting",
    images: ["/products/solar_street_light.png", "/products/solar_street_light.png", "/products/solar_street_light.png", "/products/solar_street_light.png"],
    specs: [
      { label: "Color Temp", value: "3000K Warm White" },
      { label: "Material", value: "Stainless Steel + Glass" },
      { label: "Battery", value: "Ni-MH 1200mAh" },
      { label: "Qty", value: "4 Pieces per Set" },
      { label: "Run Time", value: "10-12 Hours" }
    ]
  },
  {
    id: 15,
    brand: "Nexus Core",
    name: "Grid-Tie Inverter 5kW",
    desc: "Efficient grid-interactive inverter with anti-islanding.",
    longDesc: "The reliable backbone of any solar system. This string inverter converts DC power from your panels into clean AC power for your home and the grid. Its wide voltage range ensures it starts earlier in the morning and stops later in the evening.",
    price: "₦920,000",
    type: "Energy",
    images: ["/products/inverter.png", "/products/inverter.png", "/products/inverter.png", "/products/inverter.png"],
    specs: [
      { label: "Efficiency", value: "98.4%" },
      { label: "THD", value: "< 3%" },
      { label: "Cooling", value: "Natural Convection" },
      { label: "Display", value: "LCD + LED" },
      { label: "Weight", value: "11.5 kg" }
    ]
  },
  {
    id: 16,
    brand: "SmartLink",
    name: "Smart Plug Pro",
    desc: "Remotely control and monitor any appliance.",
    longDesc: "Convert any device into a smart device. The SmartLink Plug Pro not only allows remote on/off control but also tracks the energy consumption of the connected device. Set schedules, timers, and use voice commands via your smart home assistant.",
    price: "₦25,000",
    type: "Smart",
    images: ["/products/smart_meter.png", "/products/smart_meter.png", "/products/smart_meter.png", "/products/smart_meter.png"],
    specs: [
      { label: "Max Load", value: "16A / 3500W" },
      { label: "Wireless", value: "Zigbee 3.0 / WiFi" },
      { label: "Features", value: "Overload Protection" },
      { label: "Compatibility", value: "iOS / Android" },
      { label: "Idle Power", value: "< 0.5W" }
    ]
  },
  {
    id: 17,
    brand: "PowerWay",
    name: "Solar Generator Kit",
    desc: "Complete bundle including 200W panels and 1kWh station.",
    longDesc: "The ultimate survival and camping companion. This kit includes everything you need to generate and store power off-grid. The foldable solar panels are lightweight and weather-resistant, while the power station features a rugged handle for easy transport.",
    price: "₦650,000",
    type: "Storage",
    images: ["/products/portable_power.png", "/products/portable_power.png", "/products/portable_power.png", "/products/portable_power.png"],
    specs: [
      { label: "Station Cap", value: "1024Wh" },
      { label: "Panel Power", value: "200W Foldable" },
      { label: "Charge Time", value: "5-6 Hours Solar" },
      { label: "Outputs", value: "8 Total Ports" },
      { label: "Inverter", value: "1000W Sine Wave" }
    ]
  },
  {
    id: 18,
    brand: "VoltDrive",
    name: "EV Charging Cable",
    desc: "Heavy-duty 5m Type 2 charging cable.",
    longDesc: "Don't get stranded without a connection. This high-quality Type 2 to Type 2 cable allows you to charge your vehicle at any public AC charging station. Built with premium TPE material that remains flexible even in cold weather.",
    price: "₦95,000",
    type: "EV",
    images: ["/products/ev_charger.png", "/products/ev_charger.png", "/products/ev_charger.png", "/products/ev_charger.png"],
    specs: [
      { label: "Type", value: "Mode 3 Type 2" },
      { label: "Current", value: "32A (22kW capable)" },
      { label: "Phase", value: "Three Phase" },
      { label: "Length", value: "5 Meters" },
      { label: "Rating", value: "IP55 Weatherproof" }
    ]
  },
  {
    id: 19,
    brand: "PrimePro Series",
    name: "Roof-Mount Rails",
    desc: "High-strength aluminum mounting hardware.",
    longDesc: "The foundation of a secure solar installation. Our anodized aluminum rails are designed to withstand high wind loads and harsh environmental conditions. The universal design is compatible with all tile, shingle, and metal roof types.",
    price: "₦12,500",
    type: "Solar",
    images: ["/products/solar_panel.png", "/products/solar_panel.png", "/products/solar_panel.png", "/products/solar_panel.png"],
    specs: [
      { label: "Material", value: "AL6005-T5 Aluminum" },
      { label: "Finish", value: "Clear Anodized" },
      { label: "Wind Load", value: "Up to 60m/s" },
      { label: "Snow Load", value: "Up to 1.4kN/m²" },
      { label: "Standards", value: "AS/NZS 1170" }
    ]
  },
  {
    id: 20,
    brand: "Guardian Eye",
    name: "NVR Pro 16-Channel",
    desc: "Enterprise grade network video recorder with 4K support.",
    longDesc: "Centralize your security management. The NVR Pro supports up to 16 4K cameras simultaneously. With dual hard drive bays and advanced H.265+ compression, it can store weeks of high-definition footage. Features an intuitive web interface for remote playback.",
    price: "₦540,000",
    type: "CCTV",
    images: ["/products/inverter.png", "/products/inverter.png", "/products/inverter.png", "/products/inverter.png"],
    specs: [
      { label: "Channels", value: "16 IP Channels" },
      { label: "Bandwidth", value: "160Mbps" },
      { label: "HDMI Output", value: "4K (3840 x 2160)" },
      { label: "HDD Bays", value: "2x SATA up to 10TB ea" },
      { label: "PoE", value: "16-Port Integrated" }
    ]
  }
];
