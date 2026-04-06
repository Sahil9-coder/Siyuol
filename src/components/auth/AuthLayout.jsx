import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AuthLayout = ({ children, title, subtitle, bottomText, bottomLinkText, bottomLinkTo }) => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[var(--bg-dark)]">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[var(--primary)]/10 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-[var(--tertiary)]/10 blur-[120px] mix-blend-screen" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        {/* App Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-3xl font-heading font-bold flex items-center gap-2 group">
            <span className="text-[var(--text-primary)] tracking-wide">Siyuol</span>
            <span className="text-[var(--primary)] transition-transform group-hover:scale-110">♥</span>
          </Link>
        </div>

        {/* Auth Card */}
        <div className="bg-[var(--bg-mid)]/60 backdrop-blur-xl border border-[var(--glass-border)] p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
          {/* Glass glare effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-2">{title}</h1>
            <p className="text-sm text-[var(--text-muted)]">{subtitle}</p>
          </div>

          {children}

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-muted)]">
              {bottomText}{' '}
              <Link to={bottomLinkTo} className="text-[var(--primary)] hover:text-white transition-colors font-medium">
                {bottomLinkText}
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
