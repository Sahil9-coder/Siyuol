import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] p-6 text-[var(--text-primary)]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading font-medium">Siyuol Dashboard</h1>
        <button 
          onClick={signOut}
          className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-full text-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[var(--bg-mid)]/60 backdrop-blur-xl border border-[var(--glass-border)] p-6 rounded-3xl h-48 flex flex-col justify-center items-center">
          <p className="text-[var(--text-muted)]">Signed in as:</p>
          <p className="font-medium mt-2">{user?.email}</p>
        </div>
        {/* Placeholder cards for other features */}
        <div className="bg-[var(--bg-mid)]/60 backdrop-blur-xl border border-[var(--glass-border)] p-6 rounded-3xl h-48 flex items-center justify-center">
          <p className="text-[var(--text-muted)]">Chat coming soon...</p>
        </div>
        <div className="bg-[var(--bg-mid)]/60 backdrop-blur-xl border border-[var(--glass-border)] p-6 rounded-3xl h-48 flex items-center justify-center">
          <p className="text-[var(--text-muted)]">Memories coming soon...</p>
        </div>
      </div>
    </div>
  );
}
