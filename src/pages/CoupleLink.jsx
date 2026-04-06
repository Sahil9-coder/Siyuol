import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';

export default function CoupleLink() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] flex flex-col items-center justify-center p-4 text-[var(--text-primary)]">
      <div className="max-w-md w-full bg-[var(--bg-mid)]/60 backdrop-blur-xl border border-[var(--glass-border)] p-8 rounded-3xl text-center">
        <h1 className="text-2xl font-heading font-medium mb-4">Link with your partner</h1>
        <p className="text-[var(--text-muted)] mb-8">
          Logged in as {user?.email}
        </p>
        
        <div className="space-y-4">
          <button className="w-full bg-[var(--primary)] text-white py-3 rounded-xl font-medium">
            Generate Code
          </button>
          <button className="w-full bg-[rgba(255,255,255,0.05)] text-white py-3 rounded-xl font-medium border border-[var(--glass-border)]">
            Use Partner's Code
          </button>
        </div>

        <button 
          onClick={() => signOut()}
          className="mt-8 text-sm flex items-center justify-center gap-2 text-[var(--text-muted)] hover:text-white mx-auto transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Log out
        </button>
      </div>
    </div>
  );
}
