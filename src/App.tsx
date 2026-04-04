import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, ShieldCheck, TrendingUp, Leaf, Send, Phone, Mail, 
  MapPin, Menu, X, ChevronRight, Zap, MessageCircle 
} from 'lucide-react';
import RoiCalculator from "./components/RoiCalculator";
import solarwater from './assets/solarwater.jpg';
import SolarStreetlights from './assets/SolarStreetlights.jpg';
import Solarpower from './assets/Solarpower.jpg';
import Battery from './assets/Battery.jpg';  
import solarpowered from './assets/solarpowered.jpg';
import solarpumps from './assets/solarpumps.jpg';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // FIX 1: Defined the missing state for the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation logic to scroll to IDs
  const scrollToSection = (id: string) => {
    // FIX 2: mobileMenuOpen is now defined so this works
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-sky-900 text-slate-100 font-dm selection:bg-sun selection:text-sky-900 overflow-x-hidden">
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[1000] bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} className="text-white" />
      </a>

      {/* ─── NAVIGATION ─── */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-sky-900/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-sun to-sun-deep rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,166,35,0.4)]">
                <Sun className="text-sky-900 w-6 h-6" />
              </div>
              <div className="absolute inset-0 rounded-full border border-sun/30 animate-ping" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bebas text-2xl tracking-[0.15em] text-white">HITECH SOLAR</span>
              <span className="font-bebas text-sm tracking-[0.4em] text-sun">SYSTEMS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-sun text-white/80">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-sun text-white/80">About</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-sun text-white/80">Services</button>
            <button onClick={() => scrollToSection('contact')} className="bg-sun text-sky-900 px-6 py-2 rounded-full font-black text-xs uppercase tracking-tighter hover:scale-105 transition-all">Get Free Quote</button>
          </div>

          <button className="md:hidden text-sun" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <header className="relative min-h-screen flex items-center pt-10 overflow-hidden" id="home">
        <div className="absolute inset-0 animate-grid-shift opacity-30 pointer-events-none z-0" />
        
        <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] md:right-[5%] z-0 pointer-events-none">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeOut" }} className="relative">
            <div className="w-64 h-64 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-sun-bright via-sun to-sun-deep shadow-[0_0_120px_rgba(245,166,35,0.4)] animate-sun-pulse" />
            <div className="absolute inset-[-30px] rounded-full border border-sun/20 animate-[ping_4s_linear_infinite]" />
            <div className="absolute inset-0 bg-sun/10 blur-[120px] rounded-full scale-150" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 bg-sun/10 border border-sun/30 px-4 py-1.5 rounded-full text-sun-bright text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <Zap size={14} className="animate-pulse" /> Tirupati's #1 Solar Provider
            </div>
            <h1 className="font-bebas text-7xl md:text-9xl leading-[0.85] mb-6 drop-shadow-2xl">
              <span className="block text-white">POWER</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun to-sun-deep block">YOUR LIFE</span>
              <span className="block text-white">WITH SUN</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-lg mb-10 leading-relaxed bg-sky-900/40 backdrop-blur-sm p-3 rounded-xl border border-white/5">
              Harness Tirupati’s <span className="text-sun font-bold">300+ sunny days</span>. 
              Premium rooftop solutions with government subsidies up to ₹78,000. 
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-sun to-sun-deep text-sky-900 px-10 py-5 rounded-full font-black uppercase tracking-tight flex items-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all active:scale-95">
                Book Free Site Survey <ChevronRight />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800" alt="Hitech Solar Office" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-sun p-6 rounded-3xl shadow-2xl text-sky-900 font-bebas">
              <div className="text-5xl leading-none">8+</div>
              <div className="text-xs font-bold uppercase tracking-tighter">Years in Tirupati</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Story</h4>
            <h2 className="font-bebas text-6xl md:text-7xl mb-8 leading-none">BORN IN <span className="text-sun">TIRUPATI</span>,<br /> POWERING ANDHRA</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>Founded in 2018, <span className="text-white font-semibold">Hitech Solar Systems</span> started with a single mission: to make clean energy accessible to every household in the Rayalaseema region.</p>
              <p>We are locals who understand Tirupati’s unique climate and APSPDCL regulations. From small residential rooftops to industrial plants, we’ve powered 500+ projects.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section className="py-24 bg-sky-800/20 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">Solar Advantages</h4>
            <h2 className="font-bebas text-6xl md:text-7xl">SMART ENERGY <span className="text-sun">BENEFITS</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdvantageCard icon={<Zap className="text-sun" size={32} />} title="Zero Bills" desc="Reduce monthly expenses by up to 90%." />
            <AdvantageCard icon={<ShieldCheck className="text-sun" size={32} />} title="25yr Warranty" desc="Tier-1 panels with performance guarantees." />
            <AdvantageCard icon={<Leaf className="text-sun" size={32} />} title="Tax Benefits" desc="40% accelerated depreciation for commercial." />
            <AdvantageCard icon={<TrendingUp className="text-sun" size={32} />} title="Value Boost" desc="Increase property resale value by 15%." />
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section id="services" className="py-24 relative overflow-hidden bg-sky-800/20 border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Offering</h4>
            <h2 className="font-bebas text-6xl md:text-7xl mb-6 leading-none">ALL-TYPE SOLAR SOLUTIONS</h2>
            <div className="h-1.5 w-24 bg-sun mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard imgUrl={solarwater} title="Solar Water Heaters" desc="Industrial-grade ETC and FPC systems for instant hot water." />
            <ProductCard imgUrl={SolarStreetlights} title="Solar Street Lights" desc="Standalone Li-Ion integrated lights for smart illumination." />
            <ProductCard imgUrl={Solarpower} title="Solar On Grid & Off Grid" desc="Complete rooftop EPC for residences and factories." />
            <ProductCard imgUrl={Battery} title="Batteries - Inverters" desc="Premium range of solar-optimized deep-cycle batteries." />
            <ProductCard imgUrl={solarpowered} title="Solar Fencing System" desc="Non-lethal high-voltage deterrent fencing." />
            <ProductCard imgUrl={solarpumps} title="Solar Pump Set" desc="High-efficiency DC/AC pumps for agriculture." />
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-sky-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">Why Choose Us</h4>
            <h2 className="font-bebas text-6xl md:text-7xl">TRUSTED SOLAR EXPERTS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<ShieldCheck size={32} />} title="Government Approved" desc="Registered vendor under PM Surya Ghar Yojana." />
            <FeatureCard icon={<Zap size={32} />} title="High Efficiency" desc="Tier-1 solar panels with 22%+ efficiency." />
            <FeatureCard icon={<TrendingUp size={32} />} title="90% Bill Reduction" desc="Most Tirupati homes save ₹5,000+ monthly." />
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 bg-sky-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-bebas text-6xl md:text-7xl mb-16">SIMPLE 4 STEP PROCESS</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Free Site Survey", "Custom Design", "Installation", "Start Saving"].map((step, i) => (
              <div key={i} className="p-8 rounded-3xl bg-sky-900/40 border border-white/5">
                <div className="text-sun font-bebas text-5xl mb-4">0{i + 1}</div>
                <p className="text-white font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoiCalculator />

      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="py-32 bg-sky-800/20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-sun font-bold tracking-[0.3em] uppercase text-sm mb-4">Get Started</h4>
            <h2 className="font-bebas text-7xl mb-8">READY TO <span className="text-sun">SWITCH?</span></h2>
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6"><Phone className="text-sun" /><span className="text-xl font-bold">+91 98765 43210</span></div>
              <div className="flex items-center gap-6"><Mail className="text-sun" /><span className="text-xl font-bold">info@hitechsolar.com</span></div>
              <div className="flex items-center gap-6"><MapPin className="text-sun" /><span className="text-xl font-bold">KT Road, Tirupati, AP</span></div>
            </div>
          </div>
          <div className="bg-sky-900 p-10 rounded-[40px] border border-white/10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="w-full bg-sky-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-sun outline-none text-white" placeholder="Your Name" />
              <input type="tel" className="w-full bg-sky-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-sun outline-none text-white" placeholder="WhatsApp Number" />
              <button className="w-full bg-sun text-sky-900 py-5 rounded-2xl font-black uppercase flex items-center justify-center gap-3">
                Submit Request <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className=" bg-sky-800/20 border-t border-white/5 py-10 text-center">
        <p className="text-slate-600 text-sm tracking-widest uppercase ">© 2026 HITECH SOLAR SYSTEMS. Powering Tirupati with pride.</p>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[200] bg-sky-950 p-10 flex flex-col justify-center gap-8">
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-sun"><X size={40}/></button>
            {['home','about', 'services', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="font-bebas text-6xl text-left uppercase text-white">{item}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Components
const FeatureCard = ({ icon, title, desc }: any) => (
  <div className="p-10 rounded-[35px] bg-sky-800/40 border border-white/5 hover:border-sun/20 transition-all hover:-translate-y-2">
    <div className="text-sun mb-6">{icon}</div>
    <h3 className="font-bebas text-3xl mb-3 text-white tracking-wide">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

const AdvantageCard = ({ icon, title, desc }: any) => (
  <div className="p-8 rounded-[35px] bg-sky-900/40 border border-white/5 backdrop-blur-md">
    <div className="w-16 h-16 bg-sky-800/50 rounded-2xl flex items-center justify-center mb-6">{icon}</div>
    <h3 className="font-bebas text-3xl mb-3 text-white">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

const ProductCard = ({ imgUrl, title, desc }: any) => (
  <div className="rounded-[40px] bg-sky-900/60 border border-white/10 shadow-2xl overflow-hidden group">
    <div className="relative h-60 overflow-hidden">
      <img src={imgUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent" />
      <Zap className="absolute top-6 left-6 text-sky-900 w-10 h-10 bg-sun p-2.5 rounded-full" />
    </div>
    <div className="p-8">
      <h3 className="font-bebas text-3xl mb-3 text-white">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 h-12 overflow-hidden">{desc}</p>
      <button className="text-xs font-bold uppercase tracking-widest text-sun border-b-2 border-sun/50 pb-1">View Product</button>
    </div>
  </div>
);

export default App;