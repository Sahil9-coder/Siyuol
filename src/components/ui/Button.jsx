import { motion } from "framer-motion";

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#ff5252] shadow-[0_0_15px_rgba(255,107,107,0.4)]",
    secondary: "bg-secondary text-white hover:bg-[#ff9f1c]",
    ghost: "bg-glass backdrop-blur-md text-white border border-glass-border hover:bg-white/10",
    outline: "border border-primary text-primary hover:bg-primary/10"
  };

  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
