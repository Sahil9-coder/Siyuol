import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/ui/Input';
import SandEffect from '../components/animations/SandEffect';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, User, Loader2 } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [triggerSand, setTriggerSand] = useState(false);

  const passwordRef = useRef(null);

  const validateEmail = (emailStr) => {
    const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Basic structural validation.
    if (!rx.test(emailStr)) return false;
    
    // Check blocklist (mock setup per instructions)
    const blockList = ['tempmail.com', '10minutemail.com', 'throwaway.com'];
    const domain = emailStr.split('@')[1];
    if (blockList.includes(domain)) return false;

    return true;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid, non-disposable email address.');
      return;
    }

    // Trigger sand effect and move to next step
    setTriggerSand(true);
    setStep(2);
    setTimeout(() => {
      passwordRef.current?.focus();
    }, 500);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    setLoading(true);
    const { error: signUpError } = await signUp(email, password, name);
    
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      // Success. Redirect to couple link setup.
      navigate('/couple/link');
    }
  };

  return (
    <AuthLayout
      title="Create Your Space"
      subtitle="Start your private world together"
      bottomText="Already have an account?"
      bottomLinkText="Log in"
      bottomLinkTo="/login"
    >
      <SandEffect trigger={triggerSand} duration={2500} />
      
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
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div className="relative opacity-60 pointer-events-none pb-2">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <Input
              className="pl-12 bg-transparent"
              value={email}
              readOnly
            />
          </div>

          <AnimatePresence>
            <motion.div
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              className="space-y-4 overflow-hidden"
            >
              <div className="relative pt-1">
                <User className="absolute left-4 top-[calc(50%+2px)] -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <Input
                  type="text"
                  placeholder="What should we call you?"
                  className="pl-12"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <Input
                  ref={passwordRef}
                  type="password"
                  placeholder="Create a password"
                  className="pl-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <Input
                  type="password"
                  placeholder="Confirm password"
                  className="pl-12"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center bg-[var(--primary)] hover:bg-[#ff5252] text-white py-3 rounded-xl font-medium transition-colors shadow-[0_0_15px_rgba(255,107,107,0.3)] hover:shadow-[0_0_25px_rgba(255,107,107,0.5)] disabled:opacity-70"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
              </button>
            </motion.div>
          </AnimatePresence>
        </form>
      )}
    </AuthLayout>
  );
}
