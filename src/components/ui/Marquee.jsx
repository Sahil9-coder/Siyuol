import { motion } from "framer-motion";

export function Marquee({ children, reverse = false, speed = 20 }) {
  return (
    <div className="flex w-full overflow-hidden bg-bg-mid border-y border-white/5 py-4">
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex w-fit whitespace-nowrap"
      >
        {/* We render children twice or more to ensure a seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
