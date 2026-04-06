import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function BentoCard({ children, className = "", delay = 0 }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col rounded-3xl bg-bg-mid border border-white/5 overflow-hidden transition-colors ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,59,59,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex h-full flex-col p-8">
        {children}
      </div>
    </motion.div>
  );
}
