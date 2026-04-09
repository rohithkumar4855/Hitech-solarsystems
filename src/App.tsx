import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Sun, ShieldCheck, TrendingUp, Leaf, Send, Phone, Mail, 
  MapPin, Menu, X, ChevronRight, Zap, MessageCircle, 
  IndianRupee, Landmark, FileText, ArrowRight, Star, 
  CheckCircle2, BatteryCharging
} from 'lucide-react';

// Make sure your paths match your project structure
import RoiCalculator from "./components/RoiCalculator";
import solarwater from './assets/solarwater.jpg';
import SolarStreetlights from './assets/SolarStreetlights.jpg';
import Solarpower from './assets/Solarpower.jpg';
import Battery from './assets/Battery.jpg';  
import solarpowered from './assets/solarpowered.jpg';
import solarpumps from './assets/solarpumps.jpg';
import solarVideo from './assets/Solar1.mp4'; 
import SolarHeater from './assets/solarheater.jpeg';
import solarfence from './assets/solarfence.webp';
import luminous from './assets/LuminousBattery.webp';
import ongrid from './assets/on-grid.jpeg'; 
import offgrid from './assets/off-grid-150.jpg';

const App: React.FC = () => {
  // ─── STATE MANAGEMENT ───
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // WhatsApp Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bill: ''
  });

  // ─── EFFECTS & HANDLERS ───
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // WhatsApp Form Submit Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const message = `Hello Hi-tech Power Solutions! I would like a free quote.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Avg Monthly Bill:* ${formData.bill || 'Not specified'}`;
    const whatsappNumber = "919515844725"; // Updated to the number from your contact section
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setFormData({ name: '', phone: '', bill: '' });
  };

  // ─── ANIMATION VARIANTS ───
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    
    <div className="min-h-screen bg-[#020617] text-slate-100 font-dm selection:bg-sun selection:text-sky-900 overflow-x-hidden">
      
      {/* ─── WHATSAPP FLOATING BUTTON ─── */}
      <a 
        href="https://wa.me/919515844725" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[1000] bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} className="text-white" />
      </a>

      {/* ─── NAVIGATION ─── */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 py-4 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl shadow-2xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-sun to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,166,35,0.4)]">
                <Sun className="text-slate-950 w-6 h-6" />
              </div>
              <div className="absolute inset-0 rounded-full border border-sun/30 animate-ping" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bebas text-2xl tracking-[0.15em] text-white">HI-TECH POWER SOLUTIONS</span>
              <span className="font-bebas text-sm tracking-[0.4em] text-sun">SYSTEMS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Home','Scheme','About', 'Services', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => item === 'Home' ? window.scrollTo({top: 0, behavior: 'smooth'}) : scrollToSection(item.toLowerCase())} 
                className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-sun text-white/80"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-sun to-amber-500 text-slate-950 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-tighter hover:scale-105 transition-all shadow-[0_0_15px_rgba(245,166,35,0.3)]">
              Get Free Quote
            </button>
          </div>

          <button className="md:hidden text-sun" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
     <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1120]" id="home">

  {/* ─── VIDEO BACKGROUND ─── */}
  <video
    autoPlay
    loop
    muted
    playsInline
preload="metadata"
    onCanPlay={(e) => {
      (e.currentTarget as HTMLVideoElement).classList.add('opacity-100');
    }}
    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 opacity-0"
  >
    <source src={solarVideo} type="video/mp4" />
  </video>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-slate-950/40"></div>

  {/* ─── HERO CONTENT ─── */}
  <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center flex flex-col items-center pt-24 md:pt-0">
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div className="inline-flex items-center gap-2 bg-sun/10 border border-sun/30 px-4 py-1.5 rounded-full bg-gradient-to-r from-sun to-sun-deep text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(245,166,35,0.1)]">
        <Zap size={14} className="text-sun" /> Tirupati's #1 Solar Provider
      </div>

      <h1 className="font-bebas text-5xl md:text-8xl lg:text-9xl leading-tight mb-6 drop-shadow-2xl flex flex-wrap justify-center gap-3">
        <span className="text-white">POWER</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun to-amber-500">YOUR LIFE</span>
        <span className="text-white">WITH SUN</span>
      </h1>

      <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
        Make the most of Tirupati’s <span className="text-sun font-bold">300+ sunny days</span> with solar power. 
        Reduce your electricity bills and get government subsidies up to 
        <span className="text-white font-semibold"> ₹78,000</span>. 
        We handle everything from installation to approvals, so you can enjoy clean and reliable energy without any hassle.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        <button onClick={() => scrollToSection('services')} className="border border-white/30 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-tight flex items-center gap-2 hover:scale-105 hover:border-sun hover:bg-sun/10 hover:text-sun transition-all active:scale-95 backdrop-blur-sm">
          View Services
        </button>
        <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-sun to-amber-500 text-slate-950 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-tight flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all active:scale-95 shadow-lg">
          Book Free Site Survey <ChevronRight size={18} strokeWidth={3} />
        </button>
      </div>
    </motion.div>
  </div>
  <script>
    {`
      function scrollToSection(id) {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    `}
  </script>
</header>

      {/* ─── PM SURYA GHAR YOJANA SECTION ─── */}
      <section id="scheme" className="py-20 relative overflow-hidden bg-slate-900 border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="lg:col-span-5 space-y-6"
            >
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Landmark size={16} /> Official Govt Initiative
              </motion.div>
              <motion.h2 variants={fadeUpVariant} className="font-bebas text-5xl md:text-7xl leading-[0.9]">
                PM SURYA GHAR <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun to-amber-500">MUFT BIJLI YOJANA</span>
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-slate-400 text-lg leading-relaxed">
                Take advantage of the central government's flagship solar scheme. We are an <span className="text-white font-semibold">approved vendor</span>, helping you secure up to 360 units of free electricity and massive direct-to-bank subsidies.
              </motion.p>
              
              <motion.ul variants={staggerContainer} className="space-y-4 pt-4">
                {[
                  "Up to ₹78,000 Direct Subsidy",
                  "360 Units Free Electricity Monthly",
                  "Zero Hassle Paperwork (We handle it all)",
                  "Collateral-free low interest loans available"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUpVariant} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="text-sun shrink-0" size={20} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sun to-amber-600"></div>
                
                <h3 className="font-bebas text-3xl mb-8 text-white tracking-wide">Subsidy Breakdown (2026 Guidelines)</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-sun/30 transition-colors">
                    <div className="mb-2 md:mb-0">
                      <div className="text-sun font-bold uppercase tracking-wider text-sm mb-1">0 - 150 Units / Month</div>
                      <div className="text-xl font-bold text-white">1 kW - 2 kW Plant</div>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-xl border border-green-500/20">
                      <IndianRupee size={18} />
                      <span className="font-bebas text-2xl tracking-wide">₹30,000 to ₹60,000</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-sun/30 transition-colors">
                    <div className="mb-2 md:mb-0">
                      <div className="text-sun font-bold uppercase tracking-wider text-sm mb-1">150 - 300 Units / Month</div>
                      <div className="text-xl font-bold text-white">2 kW - 3 kW Plant</div>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-xl border border-green-500/20">
                      <IndianRupee size={18} />
                      <span className="font-bebas text-2xl tracking-wide">₹60,000 to ₹78,000</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-sun/30 transition-colors">
                    <div className="mb-2 md:mb-0">
                      <div className="text-sun font-bold uppercase tracking-wider text-sm mb-1">&gt; 300 Units / Month</div>
                      <div className="text-xl font-bold text-white">Above 3 kW Plant</div>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-xl border border-green-500/20">
                      <IndianRupee size={18} />
                      <span className="font-bebas text-2xl tracking-wide">Max ₹78,000 Subsidy</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                 <a
  href="https://solarrooftop.pmsuryaghar.gov.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sun font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all"
>
  Check Your Eligibility Now <ArrowRight size={18} />
</a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="scroll-mt-20 py-10 mb-0  relative overflow-hidden bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-[85%] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-sky-900/20 mix-blend-overlay z-10"></div>
              <img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800" alt="Office" className="w-full h-[500px] object-cover" />
            </div>
            
            
            <div className="absolute -bottom-10 left-10 z-30 backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-[32px] shadow-2xl text-white">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sun to-amber-600 flex items-center justify-center">
                  <Star className="text-slate-950 w-8 h-8" fill="currentColor" />
                </div>
                <div>
                  <div className="text-4xl font-bebas tracking-wide">12+ YEARS</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Powering Tirupati</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-sun"></span>
              <h4 className="text-sun font-bold tracking-[0.2em] uppercase text-sm">Who We Are</h4>
            </motion.div>

            <motion.h2 variants={fadeUpVariant} className="font-bebas text-5xl md:text-7xl mb-8 leading-[0.9]">
              LOCAL EXPERTS.<br /> 
              <span className="text-white">GLOBAL STANDARDS.</span>
            </motion.h2>

            <motion.div variants={fadeUpVariant} className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
              <p>
                Founded in 2014, <span className="text-white font-medium">Hi-TECH Power Solutions</span> began with a single mission: to free the Rayalaseema region from rising electricity costs using pure, clean energy.
              </p>
              <p>
                We are more than just installers. We are Tirupati locals who intimately understand the regional climate, the specific architectural styles of local homes, and the intricate <span className="text-white">APSPDCL grid regulations</span> required for fast approvals.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-bebas text-5xl text-sun mb-2">500+</div>
                <div className="text-sm font-semibold text-slate-300 uppercase tracking-widest">Installations</div>
              </div>
              <div>
                <div className="font-bebas text-5xl text-sun mb-2">100%</div>
                <div className="text-sm font-semibold text-slate-300 uppercase tracking-widest">In-House Team</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
     <section id="services" className="scroll-mt-20 py-10 mb-0 relative overflow-hidden bg-[#050B14] border-t border-white/5 z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Expertise</h4>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none">
              ALL-TYPE <span className="text-white">SOLAR SOLUTIONS</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-right hidden md:block">
            Industrial-grade technology tailored for residential, commercial, and agricultural applications.
          </p>
        </div>

        {/* Updated Grid Container to 6 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          
          {/* 1. On-Grid (Takes half the row on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[30px] overflow-hidden cursor-pointer h-[360px] md:h-[420px] lg:col-span-3 col-span-1"
          >
            <img
              src={ongrid}
              alt="On Grid Solar"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-sun text-slate-950 w-12 h-12 rounded-full flex items-center justify-center mb-4 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight size={20} />
              </div>
              <h3 className="font-bebas text-4xl md:text-5xl text-white mb-2">On-Grid</h3>
              <p className="text-slate-300 text-sm md:text-base mb-4 max-w-md">
                Save more with net-metering. Ideal for homes & businesses connected to electricity grid.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-white">Residential</span>
                <span className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-white">Commercial</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Off-Grid (Takes the other half of the row on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[30px] overflow-hidden cursor-pointer h-[360px] md:h-[420px] lg:col-span-3 col-span-1"
          >
            <img
              src={offgrid}
              alt="Off Grid Solar"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="bg-green-400 text-black w-12 h-12 rounded-full flex items-center justify-center mb-4 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight size={20} />
              </div>
              <h3 className="font-bebas text-4xl md:text-5xl text-white mb-2">Off-Grid</h3>
              <p className="text-slate-300 text-sm md:text-base mb-4 max-w-md">
                Complete independence from electricity grid. Perfect for rural areas & power backup needs.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-white">Remote Areas</span>
                <span className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-white">Backup Power</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Mapped Services (Each takes 1/3rd of the row on large screens) */}
          {[
            { img: SolarHeater, title: "Solar Water Heaters", desc: "Instant hot water with high-efficiency ETC/FPC systems." },
            { img: solarpumps, title: "Agricultural Pumps", desc: "High-discharge DC/AC pumps for farming independence." },
            { img: SolarStreetlights, title: "Solar Street Lights", desc: "Integrated Li-Ion illumination for societies & streets." },
            { img: luminous, title: "Batteries & Inverters", desc: "Deep-cycle storage optimized for solar integration." },
            { img: solarfence, title: "Solar Fencing", desc: "Reliable perimeter security for farms and industries." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[30px] overflow-hidden cursor-pointer h-[320px] lg:col-span-2 col-span-1"
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10 group-hover:from-slate-950/90 transition-all duration-300"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-bebas text-3xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* ─── ADVANTAGES SECTION ─── */}
      <section className="py-24 bg-slate-900 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">The Hitech Advantage</h4>
            <h2 className="font-bebas text-5xl md:text-7xl">BEYOND JUST <span className="text-sun">PANELS</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdvantageCard 
              icon={<ShieldCheck className="text-sun" size={40} />} 
              step="01"
              title="Tier-1 Equipment" 
              desc="We only use DCR-compliant, high-efficiency monocrystalline panels with a 25-year performance warranty." 
            />
            <AdvantageCard 
              icon={<FileText className="text-sun" size={40} />} 
              step="02"
              title="End-to-End Paperwork" 
              desc="From net-metering approvals to claiming your PM Surya Ghar subsidy, we handle 100% of the documentation." 
            />
            <AdvantageCard 
              icon={<TrendingUp className="text-sun" size={40} />} 
              step="03"
              title="Maximized ROI" 
              desc="Custom 3D shadow analysis ensures your panels are placed for peak generation and fastest payback period." 
            />
            <AdvantageCard 
              icon={<BatteryCharging className="text-sun" size={40} />} 
              step="04"
              title="Lifetime Support" 
              desc="Because we are based in Tirupati, our maintenance team is always just a phone call away." 
            />
          </div>
        </div>
      </section>

      <RoiCalculator />

      {/* ─── PROCESS TIMELINE ─── */}
      <section className="py-32 bg-slate-950 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">How It Works</h4>
          <h2 className="font-bebas text-5xl md:text-7xl mb-20">YOUR JOURNEY TO <span className="text-white">ZERO BILLS</span></h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { title: "Free Site Visit", desc: "Our engineers assess your roof, load capacity, and shadow profile." },
                { title: "System Design", desc: "We provide a custom 3D model and detailed ROI projection." },
                { title: "Installation", desc: "Expert mounting and wiring completed within 3 to 5 working days." },
                { title: "Grid & Subsidy", desc: "We activate net-metering and process your direct-to-bank subsidy." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-950 shadow-[0_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-center font-bebas text-3xl text-sun mb-6 relative group hover:border-sun transition-colors">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION & WHATSAPP FORM ─── */}
      <section id="contact" className="py-20 bg-[#050B14] border-t border-white/5 relative">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-sun/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div>
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">Take Action</h4>
            <h2 className="font-bebas text-6xl md:text-8xl mb-8 leading-none">READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun to-amber-500">SWITCH?</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Book a free, no-obligation site survey today. Find out exactly how much you can save and your eligible subsidy amount.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-14 h-14 rounded-full bg-sky-900/50 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="text-sun" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Call Us Directly</div>
                  <div className="text-2xl font-bold text-white">+91 95158 44725</div>
                </div>
              </div>
              
              <a 
  href="mailto:hitechpowertirupati@gmail.com" 
  className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
>
  <div className="w-14 h-14 rounded-full bg-sky-900/50 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-sun transition-colors">
    <Mail className="text-sun" />
  </div>
  <div>
    <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Email Us</div>
    {/* I used text-lg md:text-2xl here so the long email address doesn't break on small mobile screens */}
    <div className="text-lg md:text-2xl font-bold text-white group-hover:text-sun transition-colors">
     hitechpowertirupati@gmail.com
    </div>
  </div>
</a>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 shadow-2xl">
            <h3 className="font-bebas text-3xl mb-8 text-white">Request Free Quote</h3>
            
            {/* The Connected Form */}
            <form className="space-y-5" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-2">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-sun outline-none text-white transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-2">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-sun outline-none text-white transition-colors" 
                  placeholder="+91 90000 00000" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-2">Average Monthly Bill (₹)</label>
                <select 
                  value={formData.bill}
                  onChange={(e) => setFormData({...formData, bill: e.target.value})}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-sun outline-none text-white transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select an estimate...</option>
                  <option value="Under ₹1,000">Under ₹1,000</option>
                  <option value="₹1,000 - ₹3,000">₹1,000 - ₹3,000</option>
                  <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
                  <option value="Above ₹5,000">Above ₹5,000</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-sun to-amber-500 text-slate-950 mt-4 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] transition-all active:scale-95"
              >
                Send via WhatsApp 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                </svg>
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="text-sun w-8 h-8" />
              <div className="flex flex-col leading-none">
                <span className="font-bebas text-2xl tracking-[0.15em] text-white">HI-TECH POWER SOLUTIONS</span>
                <span className="font-bebas text-sm tracking-[0.4em] text-sun">SYSTEMS</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering Rayalaseema with sustainable, reliable, and subsidized solar solutions. Registered vendor under PM Surya Ghar Yojana.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-sun transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('scheme')} className="hover:text-sun transition-colors">PM Surya Ghar Subsidy</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-sun transition-colors">Our Services</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-5 text-slate-400">
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=13.628806,79.419194" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-sun transition-colors group"
                >
                  <MapPin className="text-sun shrink-0 w-5 h-5 mt-1 group-hover:animate-bounce" />
                  <span className="text-sm leading-relaxed">
                    # 7-19/12, Vidhya Nagar Circle,<br/>
                    SV University Main Road,<br/>
                    Tirupati - 517501
                  </span>
                </a>
              </li>
              
              <li className="flex items-start gap-3">
                 <Phone className="text-sun shrink-0 w-5 h-5 mt-0.5" />
                 <div className="flex flex-col text-sm space-y-1.5">
                   <a href="tel:+919515844725" className="hover:text-white transition-colors">9515844725</a>
                   <a href="tel:+919676568753" className="hover:text-white transition-colors">9676568753</a>
                 </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center border-t border-white/5 pt-8">
          <p className="text-slate-600 text-sm tracking-widest uppercase">© 2026 HI-TECH POWER SOLUTIONS. Powering Tirupati with pride.</p>
        </div>
      </footer>

      {/* ─── MOBILE MENU ─── */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div  
                initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 z-[200] bg-slate-950 p-10 flex flex-col justify-center gap-8 border-l border-white/10"
              >
                <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-sun hover:scale-110 transition-transform">
                  <X size={40}/>
                </button>
                
                {['Home', 'Scheme', 'About','Services', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => { 
                      // 1. Close the menu first
                      setMobileMenuOpen(false); 
                      // 2. Then scroll to the correct section
                      item === 'Home' 
                        ? window.scrollTo({top: 0, behavior: 'smooth'}) 
                        : scrollToSection(item.toLowerCase()); 
                    }} 
                    className="font-bebas text-5xl text-left uppercase text-white hover:text-sun transition-colors"
                  >
                    {item}
                  </button>
                ))}

              </motion.div>
            )}
          </AnimatePresence>
    </div>
  );
};

// ─── HELPER COMPONENTS ───
interface AdvantageCardProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  desc: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, step, title, desc }) => (
  <div className="relative p-8 rounded-[32px] bg-slate-950/50 border border-white/5 hover:border-sun/30 transition-all group overflow-hidden">
    <div className="absolute top-0 right-0 p-6 opacity-5 font-bebas text-8xl text-white pointer-events-none transition-opacity group-hover:opacity-10">{step}</div>
    <div className="relative z-10">
      <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-300">{icon}</div>
      <h3 className="font-bebas text-3xl mb-3 text-white">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default App;