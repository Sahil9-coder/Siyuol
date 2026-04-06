import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { NoiseBackground } from "../components/layout/NoiseBackground";
import { TextReveal } from "../components/animations/TextReveal";
import { BentoCard } from "../components/ui/BentoCard";
import { Marquee } from "../components/ui/Marquee";
import { Button } from "../components/ui/Button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Shield, MessageCircle, MapPin, Gamepad2, Heart, Lock, Check, Key, Smartphone, ChevronDown, Zap, Images, ListTodo, Clock } from "lucide-react";
import { useRef, useState } from "react";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const rotateX = useTransform(scrollYProgress, [0, 0.15], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0.5, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-bg-dark font-sans selection:bg-primary/30 selection:text-white">
      <NoiseBackground />
      <Navbar />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[140vh] pt-32 overflow-hidden flex flex-col items-center">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 animate-pulse pointer-events-none" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-tertiary/10 rounded-full blur-[200px] -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center sticky top-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(255,59,59,0.2)]"
          >
             <Zap className="w-4 h-4 text-primary fill-primary/50" />
            Siyuol Encrypted Core V2 is Live
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-sans font-black tracking-tighter leading-[1.1] mb-8 text-white">
            <TextReveal text="Your love deserves" />
            <div className="text-neon-gradient">
              <TextReveal text="its own private world." staggerDelay={0.08} />
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl font-medium tracking-tight leading-relaxed">
            Stop scattering your relationships across five different apps. Start charting, writing, playing, and existing together in one end-to-end encrypted super-app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button variant="primary" className="py-4 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(255,59,59,0.3)]">Create Your Space</Button>
            <Button variant="ghost" className="py-4 px-8 text-lg w-full sm:w-auto hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">How it works</Button>
          </div>
          <p className="text-sm text-text-muted/60 mt-4">Totally free. No credit card required. 10MB Encrypted Storage.</p>
        </div>

        {/* 3D Tilted Dashboard Mockup interacting with scroll */}
        <div className="relative w-full max-w-6xl mx-auto mt-40 z-20 px-6 [perspective:2000px]">
          <motion.div 
            style={{ rotateX, scale, opacity, transformStyle: "preserve-3d" }}
            className="w-full aspect-[16/9] rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden relative group"
          >
            {/* Fake OS Header */}
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02] backdrop-blur-md z-30">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            
            {/* Split UI Mockup */}
            <div className="absolute inset-0 pt-10 flex text-white/80">
              {/* Sidebar */}
              <div className="w-[240px] h-full border-r border-white/5 bg-white/[0.01] flex flex-col p-4">
                 <div className="flex items-center gap-3 mb-8 px-2 mt-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-tertiary p-[1px]">
                     <div className="w-full h-full bg-bg-dark rounded-full flex items-center justify-center">
                       <Heart className="w-5 h-5 text-primary fill-primary" />
                     </div>
                   </div>
                   <div>
                     <div className="font-bold text-sm text-white">us. ❤️</div>
                     <div className="text-xs text-text-muted">Connected 428 days</div>
                   </div>
                 </div>
                 {[
                   { icon: MessageCircle, text: "Private Chat" },
                   { icon: Images, text: "Memories" },
                   { icon: ListTodo, text: "Dates & Goals" },
                   { icon: Shield, text: "Secret Vault" },
                 ].map((nav, i) => (
                   <div key={i} className={`flex items-center gap-3 p-3 rounded-xl mb-2 text-sm font-medium ${i===0 ? 'bg-white/10 text-white' : 'text-text-muted hover:text-white hover:bg-white/5'} transition-colors`}>
                     <nav.icon className="w-4 h-4" /> {nav.text}
                   </div>
                 ))}
                 
                 <div className="mt-auto p-4 rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                   <div className="text-xs text-text-muted mb-2 font-bold uppercase tracking-wider">Storage</div>
                   <div className="w-full h-1 bg-bg-dark rounded-full overflow-hidden">
                     <div className="h-full w-[80%] bg-primary rounded-full shadow-[0_0_10px_rgba(255,59,59,0.8)]" />
                   </div>
                   <div className="text-[10px] text-text-muted mt-2">8.2MB / 10.0MB used</div>
                 </div>
              </div>

              {/* Main Content Area (Chat Mockup) */}
              <div className="flex-1 flex flex-col relative bg-[#050505]">
                {/* Chat Background Graphic */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full mix-blend-screen" />

                <div className="flex-1 p-8 flex flex-col justify-end gap-6 relative z-10">
                   {/* Chat Bubble 1 */}
                   <div className="self-start max-w-[60%] slide-in-bottom">
                     <div className="bg-bg-mid border border-white/5 text-text-muted p-4 rounded-2xl rounded-bl-sm text-sm shadow-xl">
                       I grabbed the tickets for Saturday! Can't wait. 🍿
                     </div>
                     <span className="text-[10px] text-text-muted/50 ml-2 mt-1 block">10:42 AM</span>
                   </div>
                   {/* Chat Bubble 2 (User) */}
                   <div className="self-end max-w-[60%]">
                     <div className="bg-gradient-to-tr from-primary/90 to-primary/60 border border-t-[rgba(255,255,255,0.2)] text-white p-4 rounded-2xl rounded-br-sm text-sm shadow-[0_10px_30px_rgba(255,59,59,0.2)] font-medium">
                       Omg yes!! Let's get dinner at that pasta place before? 🍝
                     </div>
                      <span className="text-[10px] text-text-muted/50 text-right mr-2 mt-1 block">Read 10:45 AM</span>
                   </div>
                </div>

                <div className="h-20 border-t border-white/5 bg-[#0a0a0c] flex items-center px-6 gap-4 relative z-10">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                     <Zap className="w-4 h-4 text-text-muted" />
                   </div>
                   <div className="flex-1 h-10 bg-[#050505] border border-white/10 rounded-full flex items-center px-4">
                     <span className="text-sm text-text-muted">Message locally encrypted...</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE STATS */}
      <section className="py-8 bg-bg-dark relative z-30">
        <Marquee speed={30}>
          {[
            "14.2K Couples Attached •", "AES-256 Encrypted •", "89k Love Notes Sent •", "Zero Data Sharing •", 
            "Real-time Subscriptions •", "1.4M Messages Secured •", "Private Encrypted Vaults •"
          ].map((text, i) => (
            <span key={i} className="text-text-muted/60 text-base font-mono tracking-widest px-8 uppercase">
              {text}
            </span>
          ))}
        </Marquee>
      </section>

      {/* NEW: THE PROBLEM SECTION */}
      <section className="py-40 bg-bg-mid/30 relative z-30 border-y border-white/5">
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
           <div>
             <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">You don't need another generic chat app.</h2>
             <p className="text-xl text-text-muted mb-8 leading-relaxed">
               Most couples scatter their lives across the internet. You use WhatsApp to chat, Apple Notes for grocery lists, Google Calendar for dates, and an immense photo roll filled with screenshots and memes.
             </p>
             <p className="text-xl text-text-muted leading-relaxed">
               Siyuol replaces all of that. It connects your phones cryptographically, establishing a unified, beautifully organized, hyper-secure world that belongs entirely to the two of you.
             </p>
           </div>
           <div className="relative h-[400px]">
              {/* Chaos graph representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark to-transparent rounded-3xl border border-white/10 p-8 overflow-hidden">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute -top-1/2 -right-1/2 w-full h-full opacity-10 blur-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-primary via-tertiary to-secondary" />
                
                <div className="absolute top-10 left-10 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 rotate-[-5deg]">
                  <span className="text-red-400 font-medium">WhatsApp</span>: Unorganized texts
                </div>
                <div className="absolute top-40 right-10 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 rotate-[8deg]">
                  <span className="text-blue-400 font-medium">Apple Notes</span>: Lost lists
                </div>
                <div className="absolute bottom-20 left-20 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 rotate-[-3deg]">
                  <span className="text-yellow-400 font-medium">Google Photos</span>: Mixed with memes
                </div>
                
                {/* Arrow mapping to Siyuol */}
                <div className="absolute inset-0 bg-bg-dark/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <Heart className="w-16 h-16 text-primary fill-primary shadow-[0_0_50px_rgba(255,59,59,0.5)] mb-4" />
                  <span className="text-2xl font-black tracking-tight text-white">Siyuol App</span>
                </div>
              </div>
           </div>
         </div>
      </section>

      {/* 3. ASYMMETRICAL BENTO GRID */}
      <section id="features" className="py-40 relative z-30 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 grid lg:grid-cols-2 gap-8 items-end">
             <div>
                <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter mb-4 relative inline-block">
                  Designed <span className="text-primary drop-shadow-[0_0_20px_rgba(255,59,59,0.3)]">for connection.</span>
                </h2>
                <p className="text-xl text-text-muted mt-4 max-w-lg">Everything you need to manage your relationship, communicate, and preserve memories — locked down.</p>
             </div>
             <div className="flex lg:justify-end">
               <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 py-4">Explore all 15+ features</Button>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 auto-rows-[400px] gap-6">
            
            {/* Chat Bento */}
            <BentoCard className="md:col-span-2 group/chat">
              <Lock className="w-10 h-10 text-primary mb-auto drop-shadow-[0_0_15px_rgba(255,59,59,0.5)]" />
              
              {/* Actual Chat UI Mockup inside card */}
              <div className="absolute right-0 top-[20%] translate-x-1/4 w-[450px] h-full bg-[#050505] border border-white/5 rounded-2xl p-6 shadow-2xl transition-all duration-700 group-hover/chat:-translate-x-10 group-hover/chat:-rotate-2">
                 <div className="text-xs text-primary font-mono mb-4 flex items-center gap-2">
                   <Shield className="w-3 h-3" /> TweetNaCl.js E2E Active
                 </div>
                 <div className="space-y-4">
                   <div className="w-[70%] text-sm bg-white/5 border border-white/10 text-white/80 p-3 rounded-2xl rounded-bl-sm">Did you lock the door? 🔑</div>
                   <div className="w-[60%] text-sm bg-gradient-to-r from-primary to-primary/80 border-t border-white/20 text-white p-3 rounded-2xl rounded-br-sm ml-auto shadow-[0_5px_15px_rgba(255,59,59,0.2)]">Yes! Don't worry. See you soon. 🥰</div>
                 </div>
              </div>
              
              <div className="relative z-10 mt-auto md:w-3/5">
                <h3 className="text-3xl font-bold tracking-tight mb-3">Hyper-Secure Chat</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  Real-time, instant messaging that is mathematically unreadable to anyone but your partner's device. Supports text, reactions, and 'thinking of you' soft pings.
                </p>
              </div>
            </BentoCard>

            {/* Vault Bento */}
            <BentoCard delay={0.2} className="group/vault relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full group-hover/vault:bg-secondary/30 transition-colors duration-500" />
              
              {/* Fake PIN UI */}
              <div className="absolute right-4 top-4 grid grid-cols-3 gap-2 opacity-10 group-hover/vault:opacity-40 transition-opacity">
                 {[...Array(9)].map((_,i) => <div key={i} className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[8px]">{i+1}</div>)}
              </div>

              <Shield className="w-10 h-10 text-secondary mb-auto relative z-10 drop-shadow-[0_0_15px_rgba(255,143,0,0.5)]" />
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-bold tracking-tight mb-3">Secret Vault</h3>
                <p className="text-text-muted text-lg">Store your surprise ring photos or anniversary plans safely behind a secondary fake decoy PIN code.</p>
              </div>
            </BentoCard>

            {/* Location Bento */}
            <BentoCard delay={0.3} className="group/map overflow-hidden">
              <div className="absolute -inset-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 transition-transform duration-1000 group-hover/map:scale-110" />
              
              {/* Mock map ping */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-white/5 rounded-full absolute -top-12 -left-12 animate-ping" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>

              <MapPin className="w-10 h-10 text-white mb-auto relative z-10" />
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-bold tracking-tight mb-3">Location Pings</h3>
                <p className="text-text-muted text-lg">Send quick "I'm on my way" precise GPS tracking updates without switching to Maps.</p>
              </div>
            </BentoCard>

            {/* Memories Bento */}
            <BentoCard delay={0.4} className="md:col-span-2 overflow-hidden group/memories">
              <div className="absolute inset-0 bg-gradient-to-r from-bg-mid to-transparent z-10" />
              <Heart className="w-10 h-10 text-tertiary mb-auto relative z-20 drop-shadow-[0_0_15px_rgba(166,33,255,0.5)]" />
              
              {/* Glowing polaroid mocks */}
              <div className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 flex gap-4 z-0 transition-all duration-700 group-hover/memories:-translate-x-10">
                <div className="w-48 h-64 bg-bg-dark border border-white/10 rounded-xl rotate-12 p-3 shadow-2xl relative">
                   <div className="w-full h-40 bg-tertiary/20 rounded-lg mb-3" />
                   <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                   <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-tertiary/40 border border-tertiary shadow-[0_0_20px_rgba(166,33,255,0.5)] flex flex-col items-center justify-center text-[8px] font-bold text-white leading-tight"><span>AUG</span><span>14</span></div>
                </div>
                <div className="w-48 h-64 bg-bg-dark border border-white/10 rounded-xl -rotate-6 p-3 shadow-2xl mt-12">
                   <div className="w-full h-40 bg-primary/20 rounded-lg mb-3" />
                   <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                </div>
              </div>

              <div className="relative z-20 mt-auto md:w-1/2">
                <h3 className="text-3xl font-bold tracking-tight mb-3">Shared Memory Timeline</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  Upload your favorite photos to an encrypted chronological timeline. Automatically receive romantic "On This Day" flashbacks from previous years together.
                </p>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      {/* 4. SECURITY & PRIVACY DEEP DIVE */}
      <section className="py-40 relative z-30 bg-[#030303] border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <Shield className="w-3 h-3" /> Bank-grade Privacy
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
              Seen by <span className="text-primary relative inline-block">nobody.<div className="absolute bottom-0 left-0 w-full h-[6px] bg-primary rounded-full opacity-50" /></span>
            </h2>
            <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-lg">
              We literally cannot read your messages. Even if we wanted to. Your private keys never leave your specific device, meaning data is mathematically scrambled before touching our servers.
            </p>
            
            <ul className="space-y-8">
              {[
                { title: "TweetNaCl.js Asymmetric Encryption", desc: "Military-grade end-to-end encryption by default for all chat and vault data." },
                { title: "Hardware Screenshot Blocking", desc: "Native browser API integration actively blocks screenshots on supported mobile devices." },
                { title: "Fake Decoy PIN Vaults", desc: "If pressured, enter a fabricated PIN to show a completely empty vault interface." },
                { title: "Zero Ads. Zero Data Mining.", desc: "Your relationship data is not our product. We sustain entirely via premium storage tiers." }
              ].map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  key={i} className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#0a0a0c] border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,59,59,0.1)]">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-text-muted text-lg">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="relative aspect-square perspective-[1000px] hidden lg:block">
            {/* Massive visual for security */}
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 transform-style-3d opacity-80"
            >
              <div className="absolute inset-10 border border-primary/30 rounded-full shadow-[inset_0_0_50px_rgba(255,59,59,0.1)]" />
              <div className="absolute inset-10 border border-tertiary/30 rounded-full rotate-x-60" />
              <div className="absolute inset-10 border-2 border-white/5 rounded-full rotate-y-60 shadow-[0_0_50px_rgba(255,255,255,0.05)]" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-48 h-48 bg-bg-dark rounded-full border border-white/10 shadow-[0_0_80px_rgba(255,59,59,0.3)] flex items-center justify-center backdrop-blur-3xl shrink-0 z-10 relative overflow-hidden">
                 <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                 <Key className="w-20 h-20 text-primary drop-shadow-[0_0_15px_rgba(255,59,59,0.8)] relative z-10" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (3 STEPS) */}
      <section id="how" className="py-40 relative z-30 bg-bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Initialize your world.</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">Three precise steps to establish your impenetrable digital space. Takes less than two minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(255,59,59,0.5)]" />
            
            <ProcessStep num="01" title="Generate Core" desc="Sign up securely and instantly generate a 6-character cryptographic couple link code." delay={0} />
            <ProcessStep num="02" title="Establish Link" desc="Your partner enters the code on their device. Accounts merge securely." delay={0.2} />
            <ProcessStep num="03" title="Encrypt & Love" desc="Diffie-Hellman Key Exchange executes. Your space is officially locked down." delay={0.4} />
          </div>
          
          <div className="mt-20 flex justify-center">
             <Button variant="outline" className="text-white hover:text-bg-dark hover:bg-white border-white/20 transition-all font-bold px-10 py-5 text-lg">Start Configuration Setup</Button>
          </div>
        </div>
      </section>

      {/* 6. PRICING & TIERS */}
      <section id="pricing" className="py-40 relative z-30 bg-[#030303] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Built for longevity.</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">95% of couples will never need to pay. For extreme memory hoarders, we offer raw structural storage at cost.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:px-10">
            <PricingCard 
              tier="Lite Protocol" 
              price="$0" 
              desc="Perfect for everyday chat, vaults, and starting out in a new relationship."
              features={["10MB Encrypted Photo Storage", "Infinite Text & Voice Messages", "Live Mood & Location Pings", "Shared Timelines & Games", "Fake Decoy Vaults"]}
              glowColor="rgba(255,255,255,0.08)"
            />
            <PricingCard 
              tier="Pro Deep Link" 
              price="$3.99/mo" 
              desc="For long-term couples who desire vast, secure, uncompressed media storage backups."
              features={["+500MB Highly Secure Storage", "External Image Link Interfacing", "Priority Architecture Support", "Custom Colored App Themes", "HD Uncompressed Uploads"]}
              glowColor="rgba(255,59,59,0.25)"
              accent
            />
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="py-40 bg-bg-dark relative z-30">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-center">System Queries</h2>
            <div className="space-y-4">
              <FaqItem question="Is my data actually fully private?" answer="Yes. We mathematically cannot view your messages. We utilize TweetNaCl.js for local end-to-end asymmetric encryption within your browser before the data is payloaded to Supabase." />
              <FaqItem question="What happens if we break up?" answer="You can execute an 'Unlink' command. A strict 7-day countdown initiates, alerting both parties to export memory data. At zero-hour, the node is cryptographically destroyed forever." />
              <FaqItem question="Do you have an iOS/Android Native App?" answer="Yes. Siyuol is architected as a Progressive Web App (PWA). You install it directly to your home screen from Safari or Chrome. You get push notifications and an icon without dealing with App Store tracking." />
              <FaqItem question="What happens when we hit the 10MB Free Limit?" answer="The dashboard will hard-warn you at 8MB. At capacity, you can safely purge older artifacts, utilize the 'External Link' architecture, or subscribe to Pro Deep Link." />
              <FaqItem question="Can I use this for non-romantic relationships?" answer="While the brand targets couples, the underlying architecture is simply a secure two-person encrypted node. Best friends or business partners frequently use Siyuol." />
            </div>
         </div>
      </section>

      {/* 8. PWA INSTALL BANNER */}
      <section className="py-24 bg-gradient-to-r from-bg-dark via-[#1a0505] to-bg-dark border-y border-primary/20 relative overflow-hidden z-30">
         <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white mb-6 uppercase tracking-widest">
                 <Smartphone className="w-3 h-3 text-primary" /> Supported on iOS / Android
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white leading-[1.1]">Install natively. <br/>Bypass the store.</h2>
              <p className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">Siyuol avoids App Store censorship and trackers by utilizing modern PWA technology. Install directly from your browser in 2 clicks for the full native experience.</p>
              
              <div className="flex gap-4 justify-center md:justify-start">
                 <Button variant="primary" className="gap-3 shadow-[0_0_30px_rgba(255,59,59,0.5)] font-bold text-lg py-5 px-8"><Smartphone className="w-6 h-6"/> Install PWA Now</Button>
              </div>
            </div>
            
            <div className="relative shrink-0 perspective-[1000px] w-64 md:w-80 h-[500px]">
               <motion.div animate={{ rotateY: [-10, 10, -10], translateY: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="w-full h-full relative">
                 {/* Heavy 3D phone frame */}
                 <div className="absolute inset-0 bg-[#0a0a0c] rounded-[3rem] border-[6px] border-[#333] shadow-[0_0_100px_rgba(255,59,59,0.3)] overflow-hidden relative">
                   <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#333] rounded-b-xl z-20" />
                   <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-bg-dark flex flex-col items-center justify-center p-8 text-center ring-1 ring-inset ring-white/10">
                     <Heart className="w-20 h-20 text-primary drop-shadow-[0_0_15px_rgba(255,59,59,0.8)] mb-6" />
                     <h3 className="text-white font-bold text-2xl mb-2">Siyuol Desktop</h3>
                     <p className="text-white/50 text-sm">Add to inside home screen</p>
                   </div>
                 </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-48 relative z-30 bg-bg-dark overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -z-10 pointer-events-none animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 text-white">Execute Launch.</h2>
          <p className="text-2xl text-text-muted mb-12 font-medium">Link your nodes and establish your private sector today.</p>
          <Button variant="primary" className="mx-auto text-xl py-6 px-16 shadow-[0_0_50px_rgba(255,59,59,0.5)] font-bold tracking-wide">
            Initiate Account <Zap className="ml-2 w-6 h-6 inline fill-white/50" />
          </Button>
          <p className="mt-6 text-text-muted text-sm tracking-wide">End-to-End Encrypted. Hosted securely.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Subcomponents

function ProcessStep({ num, title, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center text-center relative z-10"
    >
      <div className="w-24 h-24 rounded-full bg-[#050505] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex items-center justify-center text-4xl font-black text-white mb-8 relative overflow-hidden group">
        <div className="absolute inset-x-0 bottom-0 top-full bg-primary/20 group-hover:top-0 transition-all duration-500 ease-out" />
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-text-muted">{num}</span>
      </div>
      <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">{title}</h3>
      <p className="text-text-muted text-lg leading-relaxed px-4">{desc}</p>
    </motion.div>
  );
}

function PricingCard({ tier, price, desc, features, glowColor, accent = false }) {
  return (
    <div className={`relative p-10 rounded-[2.5rem] bg-[#050505] border ${accent ? 'border-primary/40' : 'border-white/5'} overflow-hidden group shadow-2xl`}>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] -z-10 transition-opacity duration-700 opacity-40 group-hover:opacity-100" style={{ backgroundColor: glowColor }} />
      <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{tier}</h3>
      <div className="text-6xl font-black text-white mb-6 tracking-tighter flex items-end gap-2">
        {price} {price !== "$0" && <span className="text-xl text-text-muted mb-2 font-medium tracking-normal">per month</span>}
      </div>
      <p className="text-text-muted text-xl mb-10 min-h-[60px]">{desc}</p>
      
      <ul className="space-y-6 mb-12">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-4 text-white/80 text-lg">
            <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" /> <span>{f}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={accent ? "primary" : "ghost"} className="w-full py-5 text-xl font-bold tracking-wide">
        {accent ? "Upgrade to Pro Link" : "Deploy Free Core"}
      </Button>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="border border-white/10 bg-[#050505] rounded-3xl overflow-hidden hover:border-white/20 transition-colors">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full p-8 text-left flex justify-between items-center outline-none group"
      >
        <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${open ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${open ? 'rotate-180 text-primary' : 'text-text-muted'}`} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-8 text-text-muted text-lg leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
