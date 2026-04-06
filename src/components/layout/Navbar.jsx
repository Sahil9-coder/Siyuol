import { motion, useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const { scrollY } = useScroll();
  const bgBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(16px)"]);
  const bgColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)"]);
  const borderBottom = useTransform(scrollY, [0, 50], ["border-color: rgba(255,255,255,0)", "border-color: rgba(255,255,255,0.05)"]);

  return (
    <motion.nav 
      style={{ backgroundColor: bgColor, backdropFilter: bgBlur, borderBottom }}
      className="fixed top-0 left-0 right-0 z-[100] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
            <Heart className="w-8 h-8 text-primary shadow-primary drop-shadow-[0_0_10px_rgba(255,59,59,0.5)]" />
          </motion.div>
          <span className="text-2xl font-black tracking-tighter text-white">Siyuol</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-text-muted text-sm font-semibold tracking-wide">
          <a href="#features" className="hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]">Features</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="#how" className="hover:text-white transition-colors">Setup</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex py-2 px-5 text-sm">Log In</Button>
          <Button variant="primary" className="py-2 px-6 text-sm">Get Started</Button>
        </div>
      </div>
    </motion.nav>
  );
}
