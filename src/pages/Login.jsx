import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/ui/Input';
import SandEffect from '../components/animations/SandEffect';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, Loader2 } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { signIn, user } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [triggerSand, setTriggerSand] = useState(false);

  const passwordRef = useRef(null);

  // Auto-redirect if already logged in
  useEffect(() => {
    if (user) {
      // In a real app we would check couple state from db
      navigate('/dashboard'); 
    }
  }, [user, navigate]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setTriggerSand(true);
    setStep(2);
    setTimeout(() => {
      passwordRef.current?.focus();
    }, 500);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: signInError } = await signIn(email, password);
    
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      // User redirect triggered via useEffect check
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Re-enter your private world"
      bottomText="Don't have an account?"
      bottomLinkText="Sign up"
      bottomLinkTo="/register"
    >
      <SandEffect trigger={triggerSand} duration={2000} />
      
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">
          {error}
        </div>
      )}

      {step === 1 ? (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <Input
              type="email"
              placeholder="Your email address"
              className="pl-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[var(--primary)] hover:bg-[#ff5252] text-white py-3 rounded-xl font-medium transition-colors shadow-[0_0_15px_rgba(255,107,107,0.3)] hover:shadow-[0_0_25px_rgba(255,107,107,0.5)]"
          >
            Continue
          </button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div className="relative opacity-60 pointer-events-none pb-2 flex justify-between items-center">
             <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
              <Input
                className="pl-12 bg-transparent"
                value={email}
                readOnly
              />
            </div>
            <button 
              type="button" 
              onClick={() => setStep(1)} 
              className="ml-2 text-sm text-[var(--text-muted)] hover:text-white pointer-events-auto"
            >
              Edit
            </button>
          </div>

          <AnimatePresence>
            <motion.div
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              className="space-y-4 overflow-hidden"
            >
              <div className="relative pt-1">
                <Lock className="absolute left-4 top-[calc(50%+2px)] -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <Input
                  ref={passwordRef}
                  type="password"
                  placeholder="Your password"
                  className="pl-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                  Forgot password?
                </a>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center bg-[var(--primary)] hover:bg-[#ff5252] text-white py-3 rounded-xl font-medium transition-colors shadow-[0_0_15px_rgba(255,107,107,0.3)] hover:shadow-[0_0_25px_rgba(255,107,107,0.5)] disabled:opacity-70"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Log In"}
              </button>
            </motion.div>
          </AnimatePresence>
        </form>
      )}
    </AuthLayout>
  );
}
