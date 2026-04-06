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
  
  // 3D rotation transform for the massive hero dashboard mockup
  // Scales differently on mobile for better viewing
  const rotateX = useTransform(scrollYProgress, [0, 0.15], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-bg-dark font-sans selection:bg-primary/30 selection:text-white overflow-x-clip">
      <NoiseBackground />
      <Navbar />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[100vh] lg:min-h-[140vh] pt-32 lg:pt-40 overflow-hidden flex flex-col items-center">
        <div className="absolute top-[10%] lg:top-[20%] left-1/2 -translate-x-1/2 w-[300px] lg:w-[800px] h-[300px] lg:h-[600px] bg-primary/30 rounded-full blur-[100px] lg:blur-[150px] -z-10 animate-pulse pointer-events-none" />
        <div className="absolute top-[30%] lg:top-[40%] left-1/2 -translate-x-1/2 w-[400px] lg:w-[1000px] h-[300px] lg:h-[500px] bg-tertiary/20 rounded-full blur-[120px] lg:blur-[200px] -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center z-10 flex flex-col items-center lg:sticky lg:top-32 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md text-xs md:text-sm font-medium text-primary shadow-[0_0_20px_rgba(255,59,59,0.3)]"
          >
             <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary/50" />
             <span className="truncate max-w-[200px] sm:max-w-none">Siyuol Encrypted Core V2 Live</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-sans font-black tracking-tighter leading-[1.05] mb-6 md:mb-8 text-white w-full">
            <TextReveal text="Your love deserves" />
            <div className="text-neon-gradient relative">
              <TextReveal text="its own world." staggerDelay={0.08} />
              {/* Dynamic mobile underline glow */}
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 blur-sm lg:hidden" />
            </div>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 md:mb-10 max-w-2xl font-medium tracking-tight leading-relaxed px-2">
            Stop scattering your relationships across five different apps. Start charting, writing, playing, and existing together in one true end-to-end encrypted super-app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4 md:px-0">
            <Button variant="primary" className="py-4 px-8 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(255,59,59,0.3)]">Create Your Space</Button>
            <Button variant="ghost" className="py-4 px-8 text-lg w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 transition-all font-semibold">How it works</Button>
          </div>
          <p className="hidden md:block text-sm text-text-muted/60 mt-4 font-mono uppercase tracking-widest">Totally free • 10MB Encrypted Storage</p>
        </div>

        {/* 3D Tilted Dashboard Mockup interacting with scroll */}
        <div className="relative w-full max-w-6xl mx-auto mt-20 lg:mt-40 z-20 px-4 md:px-6 lg:[perspective:2000px]">
          <motion.div 
            style={{ rotateX, scale, opacity, transformStyle: "preserve-3d" }}
            className="w-full aspect-[9/16] md:aspect-[16/9] rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_0_60px_rgba(0,0,0,0.8)] lg:shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col md:overflow-hidden relative group"
          >
            {/* Fake OS Header */}
            <div className="h-10 md:h-12 border-b border-white/5 flex items-center px-4 md:px-6 gap-2 bg-white/[0.02] backdrop-blur-md z-30 shrink-0">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(255,0,0,0.4)]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(255,255,0,0.4)]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(0,255,0,0.4)]" />
            </div>
            
            {/* Split UI Mockup */}
            <div className="flex-1 flex overflow-hidden text-white/80 relative">
              {/* Sidebar (Hidden on tight mobile, visible md+) */}
              <div className="hidden md:flex w-[240px] h-full border-r border-white/5 bg-white/[0.01] flex-col p-4 shadow-[5px_0_30px_rgba(0,0,0,0.5)] z-20">
                 <div className="flex items-center gap-3 mb-8 px-2 mt-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-tertiary p-[1px] shadow-[0_0_15px_rgba(255,59,59,0.4)]">
                     <div className="w-full h-full bg-bg-dark rounded-full flex items-center justify-center">
                       <Heart className="w-5 h-5 text-primary fill-primary" />
                     </div>
                   </div>
                   <div>
                     <div className="font-bold text-sm text-white tracking-wide">us. <span className="text-[10px]">❤️</span></div>
                     <div className="text-xs text-text-muted">Connected 428 days</div>
                   </div>
                 </div>
                 {[
                   { icon: MessageCircle, text: "Private Chat" , active: true},
                   { icon: Images, text: "Memories", active: false },
                   { icon: ListTodo, text: "Dates & Goals", active: false },
                   { icon: Shield, text: "Secret Vault", active: false },
                 ].map((nav, i) => (
                   <div key={i} className={`flex items-center gap-3 p-3 rounded-xl mb-2 text-sm font-medium transition-colors cursor-pointer ${nav.active ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'text-text-muted hover:text-white hover:bg-white/5'}`}>
                     <nav.icon className={`w-4 h-4 ${nav.active ? 'text-primary' : ''}`} /> {nav.text}
                   </div>
                 ))}
                 
                 <div className="mt-auto p-4 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                   <div className="text-[10px] text-text-muted mb-2 font-bold uppercase tracking-wider flex justify-between"><span>Storage</span> <span>8.2MB</span></div>
                   <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden inset-shadow-sm">
                     <div className="h-full w-[80%] bg-gradient-to-r from-tertiary to-primary rounded-full shadow-[0_0_10px_rgba(255,59,59,0.8)]" />
                   </div>
                 </div>
              </div>

              {/* Main Content Area (Chat Mockup) */}
              <div className="flex-1 flex flex-col relative bg-[#030303] md:bg-[#050505]">
                {/* Chat Background Graphic */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiLz48L3N2Zz4=')] opacity-50 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-96 h-[150%] md:h-96 bg-primary/10 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen" />

                {/* Mobile Header */}
                <div className="md:hidden h-14 border-b border-white/5 flex items-center px-4 justify-between bg-black/40 backdrop-blur-md relative z-20">
                    <div className="flex items-center gap-2">
                       <Heart className="w-5 h-5 text-primary fill-primary shadow-[0_0_10px_rgba(255,59,59,0.5)]" />
                       <span className="font-bold text-sm tracking-wide">us. ❤️</span>
                    </div>
                    <Lock className="w-4 h-4 text-text-muted/50" />
                </div>

                <div className="flex-1 p-4 md:p-8 flex flex-col justify-end gap-3 md:gap-6 relative z-10 overflow-hidden">
                   {/* Mobile Specific Info bubble */}
                   <div className="self-center mb-auto md:hidden text-[10px] uppercase tracking-widest text-primary/70 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-md">
                     E2E Encrypted Chat
                   </div>

                   {/* Chat Bubble 1 */}
                   <div className="self-start max-w-[85%] md:max-w-[70%]">
                     <div className="bg-[#111] border border-white/10 text-white/90 p-3 md:p-4 rounded-2xl rounded-bl-sm text-sm md:text-base leading-relaxed shadow-lg backdrop-blur-sm">
                       I grabbed the tickets for Saturday! Can't wait! 🍿
                     </div>
                     <span className="text-[9px] md:text-[10px] text-text-muted/50 ml-2 mt-1 block tracking-wider">10:42 AM</span>
                   </div>
                   
                   {/* Chat Bubble 2 (User) */}
                   <div className="self-end max-w-[85%] md:max-w-[70%]">
                     <div className="bg-gradient-to-tr from-primary to-[#ff6b6b] border border-white/20 text-white p-3 md:p-4 rounded-2xl rounded-br-sm text-sm md:text-base leading-relaxed shadow-[0_10px_30px_rgba(255,59,59,0.3)] font-medium">
                       Omg yes!! Let's get dinner at that pasta place before? 🍝
                     </div>
                      <span className="text-[9px] md:text-[10px] text-text-muted/50 text-right mr-2 mt-1 block tracking-wider">Read 10:45 AM</span>
                   </div>
                </div>

                <div className="p-3 md:h-20 border-t border-white/5 bg-[#050505]/80 backdrop-blur-xl flex items-center px-4 md:px-6 gap-3 relative z-20">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                     <Zap className="w-4 h-4 text-text-muted" />
                   </div>
                   <div className="flex-1 h-10 md:h-12 bg-black/50 border border-white/10 rounded-full flex items-center px-4 shadow-inner">
                     <span className="text-xs md:text-sm text-text-muted truncate">Message locally encrypted via TweetNaCl...</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE STATS */}
      <section className="py-6 md:py-8 bg-bg-dark border-t border-white/5 relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Marquee speed={25}>
          {[
            "14.2K Couples Attached •", "AES-256 Encrypted •", "89k Love Notes Sent •", "Zero Data Sharing •", 
            "Real-time Subscriptions •", "1.4M Messages Secured •", "Private Encrypted Vaults •"
          ].map((text, i) => (
            <span key={i} className="text-text-muted text-sm md:text-base font-mono tracking-widest px-6 md:px-8 uppercase">
              {text}
            </span>
          ))}
        </Marquee>
      </section>

      {/* NEW: THE PROBLEM SECTION */}
      <section className="py-24 md:py-40 bg-bg-dark relative z-30 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-bg-dark -z-10" />
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
           <div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tighter">
               You don't need <br className="hidden md:block"/>another generic chat app.
             </h2>
             <p className="text-lg md:text-xl text-text-muted mb-6 md:mb-8 leading-relaxed font-medium">
               Most couples scatter their lives across the internet. You use WhatsApp to chat, Apple Notes for grocery lists, Google Calendar for dates, and a photo roll filled with screenshots and memes.
             </p>
             <p className="text-lg md:text-xl text-white leading-relaxed bg-white/5 border border-white/10 p-5 rounded-2xl shadow-xl">
               <strong className="text-primary tracking-wide">Siyuol replaces all of that.</strong> It connects your phones cryptographically, establishing a unified, perfectly organized world that belongs entirely to the two of you.
             </p>
           </div>
           
           <div className="relative h-[300px] md:h-[500px] w-full max-w-[400px] mx-auto perspective-[1000px]">
              {/* Chaos graph representation optimized for all sizes */}
              <div className="absolute inset-0 bg-transparent rounded-3xl p-4 overflow-visible transform-style-3d">
                <div className="absolute top-10 left-0 lg:-left-10 p-3 md:p-4 bg-[#0a0a0c]/90 backdrop-blur-xl rounded-xl border border-white/10 rotate-[-10deg] shadow-2xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0"><MessageCircle className="w-4 h-4 text-green-500"/></div>
                  <div><span className="text-white text-sm font-bold block">WhatsApp</span><span className="text-xs text-text-muted block">Unorganized texts</span></div>
                </div>

                <div className="absolute top-40 right-0 lg:-right-10 p-3 md:p-4 bg-[#0a0a0c]/90 backdrop-blur-xl rounded-xl border border-white/10 rotate-[8deg] shadow-2xl flex items-center gap-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0"><ListTodo className="w-4 h-4 text-yellow-500"/></div>
                  <div><span className="text-white text-sm font-bold block">Apple Notes</span><span className="text-xs text-text-muted block">Lost Grocery Lists</span></div>
                </div>

                <div className="absolute bottom-10 left-4 p-3 md:p-4 bg-[#0a0a0c]/90 backdrop-blur-xl rounded-xl border border-white/10 rotate-[5deg] shadow-2xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0"><Images className="w-4 h-4 text-blue-500"/></div>
                  <div><span className="text-white text-sm font-bold block">Google Photos</span><span className="text-xs text-text-muted block">Mixed with memes</span></div>
                </div>
                
                {/* Arrow mapping to Siyuol */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-bg-dark to-[#150a0a] rounded-full border-2 border-primary/40 flex flex-col items-center justify-center z-20 shadow-[0_0_50px_rgba(255,59,59,0.3)] animate-pulse">
                  <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary fill-primary drop-shadow-[0_0_20px_rgba(255,59,59,1)] mb-2 md:mb-4" />
                  <span className="text-sm md:text-xl font-black tracking-tight text-white">Siyuol App</span>
                </div>
              </div>
           </div>
         </div>
      </section>

      {/* 3. ASYMMETRICAL BENTO GRID */}
      <section id="features" className="py-24 md:py-40 relative z-30 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-20 grid lg:grid-cols-2 gap-6 md:gap-8 items-end text-center lg:text-left">
             <div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter mb-4 relative inline-block leading-[1.1]">
                  Designed <span className="text-primary drop-shadow-[0_0_20px_rgba(255,59,59,0.3)] block sm:inline">for connection.</span>
                </h2>
                <p className="text-lg md:text-xl text-text-muted mt-2 md:mt-4 max-w-lg mx-auto lg:mx-0">Everything you need to manage your relationship, communicate, and preserve memories — locked down.</p>
             </div>
             <div className="flex justify-center lg:justify-end">
               <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 py-4 px-6 font-bold w-full sm:w-auto">Explore all 15+ features</Button>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto min-h-[400px] md:auto-rows-[400px] gap-4 md:gap-6">
            
            {/* Chat Bento */}
            <BentoCard className="md:col-span-2 group/chat min-h-[400px] overflow-hidden">
              <Lock className="w-10 h-10 md:w-12 md:h-12 text-primary mb-auto drop-shadow-[0_0_15px_rgba(255,59,59,0.5)] relative z-20" />
              
              {/* Fake UI: Chat */}
              <div className="absolute -right-10 md:right-0 top-1/4 sm:top-[20%] translate-x-10 sm:translate-x-1/4 w-[350px] sm:w-[450px] bg-[#050505] border border-white/5 rounded-l-2xl p-4 sm:p-6 shadow-2xl transition-all duration-700 sm:group-hover/chat:-translate-x-10 sm:group-hover/chat:-rotate-2 border-l border-t border-b drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
                 <div className="text-[10px] sm:text-xs text-primary font-mono mb-3 sm:mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                   <Shield className="w-3 h-3" /> TweetNaCl.js Encrypted Stream
                 </div>
                 <div className="space-y-3 sm:space-y-4">
                   <div className="w-[85%] sm:w-[70%] text-xs sm:text-sm bg-bg-dark border border-white/10 text-white/80 p-3 rounded-2xl rounded-bl-sm">Did you lock the door? 🔑</div>
                   <div className="w-[75%] sm:w-[60%] text-xs sm:text-sm bg-gradient-to-tr from-primary to-[#ff6b6b] border border-white/10 text-white p-3 rounded-2xl rounded-br-sm ml-auto shadow-[0_5px_15px_rgba(255,59,59,0.2)] font-medium">Yes! Don't worry. See you soon. 🥰</div>
                 </div>
              </div>
              
              <div className="relative z-20 mt-auto pt-48 md:pt-0 pb-2 md:w-3/5 bg-gradient-to-t from-bg-mid via-bg-mid/80 to-transparent p-2 -mx-2 md:bg-none">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3">Hyper-Secure Chat</h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed text-balance">
                  Instant messaging mathematically unreadable to anyone but your partner's device. End-to-end encrypted locally.
                </p>
              </div>
            </BentoCard>

            {/* Vault Bento */}
            <BentoCard delay={0.2} className="group/vault relative overflow-hidden min-h-[300px] md:min-h-full">
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-secondary/10 blur-[60px] md:blur-[80px] rounded-full group-hover/vault:bg-secondary/30 transition-colors duration-500" />
              
              {/* Fake UI: PIN */}
              <div className="absolute right-4 top-4 grid grid-cols-3 gap-1 md:gap-2 opacity-[0.05] group-hover/vault:opacity-50 transition-opacity">
                 {[...Array(9)].map((_,i) => <div key={i} className="w-4 h-4 md:w-6 md:h-6 rounded border border-white/30 flex items-center justify-center text-[6px] md:text-[8px] font-mono">{i+1}</div>)}
              </div>

              <Shield className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-auto relative z-10 drop-shadow-[0_0_15px_rgba(255,143,0,0.5)]" />
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3">Secret Vault</h3>
                <p className="text-text-muted text-base md:text-lg">Store your surprise plans safely behind a secondary fake decoy PIN code.</p>
              </div>
            </BentoCard>

            {/* Location Bento */}
            <BentoCard delay={0.3} className="group/map overflow-hidden min-h-[300px] md:min-h-full">
              <div className="absolute -inset-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 transition-transform duration-1000 group-hover/map:scale-110" />
              
              {/* Mock map ping */}
              <div className="absolute top-1/3 md:top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full absolute -top-8 md:-top-12 -left-8 md:-left-12 animate-ping" />
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                </div>
              </div>

              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-white mb-auto relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3">Location Pings</h3>
                <p className="text-text-muted text-base md:text-lg">Send quick "I'm on my way" precise GPS tracking updates instantly.</p>
              </div>
            </BentoCard>

            {/* Memories Bento */}
            <BentoCard delay={0.4} className="md:col-span-2 overflow-hidden group/memories min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0a0a0c] via-transparent to-transparent z-10" />
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-tertiary mb-auto relative z-20 drop-shadow-[0_0_15px_rgba(166,33,255,0.5)]" />
              
              {/* Floating images mock */}
              <div className="absolute left-1/2 md:left-auto md:right-10 top-1/3 md:top-1/2 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 flex gap-4 z-0 opacity-40 group-hover/memories:opacity-80 transition-all duration-700 md:group-hover/memories:-translate-x-10 scale-90 md:scale-100">
                <div className="w-40 h-56 bg-[#050505] border border-white/20 rounded-xl md:rotate-12 p-3 shadow-2xl relative">
                   <div className="w-full h-36 bg-gradient-to-b from-tertiary/30 to-bg-dark rounded-lg mb-3 border border-white/5" />
                   <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                   <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-tertiary/80 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(166,33,255,0.8)] flex flex-col items-center justify-center text-[10px] font-bold text-white leading-[1]"><span>AUG</span><span className="text-lg tracking-tighter">14</span></div>
                </div>
                <div className="w-40 h-56 bg-[#050505] border border-white/20 rounded-xl -rotate-6 p-3 shadow-2xl mt-12 hidden sm:block">
                   <div className="w-full h-36 bg-gradient-to-b from-primary/30 to-bg-dark rounded-lg mb-3 border border-white/5" />
                   <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                </div>
              </div>

              <div className="relative z-20 mt-auto pt-48 md:pt-0 md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3">Shared Memory Timeline</h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed text-balance">
                  Upload photos to an encrypted chronological timeline. Automatically receive romantic "On This Day" flashbacks.
                </p>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      {/* 4. SECURITY & PRIVACY DEEP DIVE */}
      <section className="py-24 md:py-40 relative z-30 bg-[#030303] border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[150px] md:blur-[200px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-6 shadow-[0_0_15px_rgba(255,59,59,0.2)]">
              <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 fill-primary/50" /> Bank-grade Privacy
            </div>
            <h2 className="text-5xl lg:text-7xl font-sans font-black tracking-tighter leading-[1.05] mb-6 md:mb-8 text-white text-balance">
              Seen by <span className="text-primary relative inline-block drop-shadow-[0_0_15px_rgba(255,59,59,0.5)]">nobody.<div className="absolute bottom-1 left-0 w-full h-[3px] md:h-[6px] bg-primary rounded-full opacity-50" /></span>
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-8 md:mb-10 leading-relaxed max-w-lg font-medium text-balance">
              We literally cannot read your messages. Even if we wanted to. Your private keys never leave your specific device, meaning data is mathematically scrambled before touching our servers.
            </p>
            
            <ul className="space-y-6 md:space-y-8">
              {[
                { title: "TweetNaCl.js Encryption", desc: "Military-grade end-to-end encryption by default for all chat and vault data." },
                { title: "Screenshot Blocking", desc: "Native browser API integration actively blocks screenshots on mobile." },
                { title: "Fake Decoy Vaults", desc: "Enter a fabricated PIN to show a completely empty vault UI." },
              ].map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  key={i} className="flex items-start gap-4 md:gap-5"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#0a0a0c] border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,59,59,0.15)] mt-1">
                    <Lock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-lg md:text-xl mb-1 tracking-wide">{item.title}</h4>
                     <p className="text-text-muted text-base md:text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="relative aspect-square perspective-[1000px] mt-12 lg:mt-0 max-w-sm mx-auto w-full">
            <motion.div 
              animate={{ rotateY: 360, rotateZ: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-0 transform-style-3d opacity-80"
            >
              <div className="absolute inset-4 md:inset-10 border border-primary/40 rounded-full shadow-[inset_0_0_30px_rgba(255,59,59,0.2)]" />
              <div className="absolute inset-4 md:inset-10 border border-tertiary/30 rounded-full rotate-x-60" />
              <div className="absolute inset-4 md:inset-10 border-2 border-white/10 rounded-full rotate-y-60 shadow-[0_0_40px_rgba(255,255,255,0.05)]" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-32 h-32 md:w-48 md:h-48 bg-bg-dark/80 rounded-full border border-white/20 shadow-[0_0_80px_rgba(255,59,59,0.4)] flex items-center justify-center backdrop-blur-3xl shrink-0 z-10 relative overflow-hidden">
                 <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                 <Key className="w-12 h-12 md:w-20 md:h-20 text-primary drop-shadow-[0_0_20px_rgba(255,59,59,1)] relative z-10" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (3 STEPS) */}
      <section id="how" className="py-24 md:py-40 relative z-30 bg-bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black tracking-tighter mb-4 md:mb-6 leading-[1.1]">Initialize your world.</h2>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto text-balance">Three precise steps to establish your impenetrable digital space. Takes less than two minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-[40px] lg:top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(255,59,59,0.4)]" />
            
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent -z-10" />
            
            <ProcessStep num="01" title="Generate Core" desc="Sign up securely and instantly generate a 6-character cryptographic link code." delay={0} />
            <ProcessStep num="02" title="Establish Link" desc="Your partner enters the code on their device. Accounts securely tether." delay={0.2} />
            <ProcessStep num="03" title="Encrypt & Love" desc="Keys exchange locally. Your private space is officially locked down." delay={0.4} />
          </div>
          
          <div className="mt-16 md:mt-24 flex justify-center">
             <Button variant="primary" className="text-white hover:bg-white/10 font-bold px-8 py-4 md:px-10 md:py-5 text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(255,59,59,0.3)]">Deploy Siyuol Engine</Button>
          </div>
        </div>
      </section>

      {/* 6. PRICING & TIERS */}
      <section id="pricing" className="py-24 md:py-40 relative z-30 bg-[#020202] border-t border-white/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] opacity-50" />
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black tracking-tighter mb-4 md:mb-6">Built for longevity.</h2>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-medium text-balance">95% of couples will never need to pay. For extreme memory hoarders, we offer raw structural storage at cost.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:px-10">
            <PricingCard 
              tier="Lite Architecture" 
              price="$0" 
              desc="Perfect for everyday encrypted chat, vault storage, and starting out."
              features={["10MB Embedded Photo Storage", "Infinite Text & Voice Messages", "Live Mood Pings", "Fake Decoy Vaults"]}
              glowColor="rgba(255,255,255,0.05)"
            />
            <PricingCard 
              tier="Pro Link" 
              price="$3.99" 
              desc="For long-term couples who desire vast, uncompressed media backups."
              features={["+500MB Highly Secure Storage", "External Image Interfacing", "Priority Architecture Support", "HD Media Uploads"]}
              glowColor="rgba(255,59,59,0.15)"
              accent
            />
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="py-24 md:py-40 bg-bg-dark relative z-30">
         <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter mb-10 md:mb-16 text-center">System Queries</h2>
            <div className="space-y-3 md:space-y-4">
              <FaqItem question="Is my data actually fully private?" answer="Yes. We mathematically cannot view your messages. We utilize TweetNaCl.js for local end-to-end asymmetric encryption within your browser before the data is payloaded." />
              <FaqItem question="What happens if we break up?" answer="You can execute an 'Unlink' command. A strict 7-day countdown initiates, allowing exports. At zero-hour, the node is cryptographically destroyed forever." />
              <FaqItem question="Do you have an iOS/Android App?" answer="Yes! Siyuol is architected as a Progressive Web App (PWA). You install it directly to your home screen from Safari/Chrome without App Store tracking." />
              <FaqItem question="What happens when we hit the Free Limit?" answer="The dashboard will hard-warn you at 8MB. At capacity, you can safely purge older artifacts, utilize the 'External Link' architecture, or subscribe to Pro Link." />
            </div>
         </div>
      </section>

      {/* 8. PWA INSTALL BANNER */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-bg-mid via-[#1a0505] to-bg-dark border-y border-primary/20 relative overflow-hidden z-30">
         <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-bold text-white mb-6 uppercase tracking-widest shadow-xl">
                 <Smartphone className="w-3 h-3 md:w-4 md:h-4 text-primary" /> Supported on iOS / Android
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter mb-4 md:mb-6 text-white leading-[1.1]">Install natively. <br className="hidden md:block"/>Bypass the store.</h2>
              <p className="text-lg md:text-xl text-text-muted mb-8 md:mb-10 max-w-lg leading-relaxed text-balance mx-auto md:mx-0">Siyuol avoids App Store censorship by utilizing modern PWA technology. Install directly from your browser in 2 clicks.</p>
              
              <div className="flex justify-center md:justify-start">
                 <Button variant="primary" className="gap-3 shadow-[0_0_40px_rgba(255,59,59,0.5)] font-bold text-lg py-4 px-8 w-full sm:w-auto"><Smartphone className="w-6 h-6"/> Install PWA Now</Button>
              </div>
            </div>
            
            <div className="relative shrink-0 perspective-[1000px] w-56 sm:w-64 md:w-80 h-[400px] md:h-[500px]">
               <motion.div animate={{ rotateY: [-8, 8, -8], rotateX: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="w-full h-full relative">
                 <div className="absolute inset-0 bg-[#050505] rounded-[2rem] md:rounded-[3rem] border-[4px] md:border-[6px] border-[#222] shadow-[0_0_80px_rgba(255,59,59,0.3)] overflow-hidden relative group">
                   <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-5 bg-[#222] rounded-b-xl z-20" />
                   <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-bg-dark flex flex-col items-center justify-center p-6 md:p-8 text-center ring-1 ring-inset ring-white/10">
                     <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary drop-shadow-[0_0_20px_rgba(255,59,59,0.8)] mb-4 md:mb-6 animate-pulse" />
                     <h3 className="text-white font-bold text-xl md:text-2xl mb-1 md:mb-2 tracking-tight">Siyuol App</h3>
                     <p className="text-white/50 text-xs md:text-sm">Tap 'Add to Home Screen'</p>
                   </div>
                 </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 md:py-48 relative z-30 bg-bg-dark overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-sans font-black tracking-tighter mb-4 md:mb-8 text-white leading-[1.05]">Execute Launch.</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 md:mb-12 font-medium max-w-xl mx-auto text-balance">Link your nodes and establish your private sector today.</p>
          <Button variant="primary" className="mx-auto text-lg md:text-xl py-5 px-10 md:py-6 md:px-14 shadow-[0_0_50px_rgba(255,59,59,0.6)] font-bold tracking-wide w-full sm:w-auto">
            Initiate Account <Zap className="ml-2 w-5 h-5 md:w-6 md:h-6 inline fill-white/50" />
          </Button>
          <p className="mt-6 md:mt-8 text-text-muted text-xs md:text-sm tracking-widest uppercase opacity-70">End-to-End Encrypted • Hosted on Vercel</p>
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="flex flex-row md:flex-col items-center md:text-center relative z-10 gap-6 md:gap-0 bg-bg-mid/50 md:bg-transparent p-6 md:p-0 rounded-3xl border border-white/5 md:border-none"
    >
      <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-full bg-[#050505] border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.8)] flex items-center justify-center text-2xl md:text-4xl font-black text-white md:mb-8 relative overflow-hidden group">
        <div className="absolute inset-x-0 bottom-0 top-full bg-gradient-to-t from-primary/30 to-transparent group-hover:top-0 transition-all duration-500 ease-out" />
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-text-muted">{num}</span>
      </div>
      <div className="flex-1 md:w-full text-left md:text-center">
        <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-white tracking-tight">{title}</h3>
        <p className="text-text-muted text-sm md:text-lg leading-relaxed md:px-4 text-balance">{desc}</p>
      </div>
    </motion.div>
  );
}

function PricingCard({ tier, price, desc, features, glowColor, accent = false }) {
  return (
    <div className={`relative p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#050505] border ${accent ? 'border-primary/40 shadow-[0_0_30px_rgba(255,59,59,0.1)]' : 'border-white/5'} overflow-hidden group shadow-2xl`}>
      <div className="absolute -top-16 -right-16 md:-top-32 md:-right-32 w-64 h-64 md:w-96 md:h-96 rounded-full blur-[80px] md:blur-[100px] -z-10 transition-opacity duration-700 opacity-30 md:opacity-40 group-hover:opacity-100" style={{ backgroundColor: glowColor }} />
      <h3 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-3 tracking-tight">{tier}</h3>
      <div className="text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tighter flex items-end gap-2">
        {price} {price !== "$0" && <span className="text-lg md:text-xl text-text-muted mb-1.5 md:mb-2 font-medium tracking-normal">/mo</span>}
      </div>
      <p className="text-text-muted text-base md:text-xl mb-8 md:mb-10 min-h-[40px] md:min-h-[60px]">{desc}</p>
      
      <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 md:gap-4 text-white/80 text-sm md:text-lg">
            <Check className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-0.5" /> <span>{f}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={accent ? "primary" : "ghost"} className="w-full py-4 md:py-5 text-lg md:text-xl font-bold tracking-wide">
        {accent ? "Upgrade to Pro" : "Deploy Core"}
      </Button>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="border border-white/5 bg-[#0a0a0c] rounded-2xl md:rounded-3xl overflow-hidden hover:border-white/20 transition-colors">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full p-5 md:p-8 text-left flex justify-between items-center outline-none group gap-4"
      >
        <span className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight text-balance">{question}</span>
        <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 ${open ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5'}`}>
          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${open ? 'rotate-180 text-primary' : 'text-text-muted'}`} />
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
            <p className="px-5 pb-5 md:px-8 md:pb-8 text-text-muted text-sm md:text-lg leading-relaxed pt-2 md:pt-0">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
