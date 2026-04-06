import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif text-white font-bold">Siyuol</span>
          <span className="text-text-muted text-sm">Your private world.</span>
        </div>

        <div className="flex gap-6 text-sm text-text-muted">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-sm text-text-muted flex items-center gap-1">
          © 2025 Siyuol. Made with <Heart className="w-4 h-4 text-primary fill-primary" />
        </div>
      </div>
    </footer>
  );
}
