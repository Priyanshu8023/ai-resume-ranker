import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full shadow-2xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black transition-transform group-hover:scale-110 group-hover:rotate-12">
            <Sparkles size={16} />
          </div>
          <span className="text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">AI Ranker</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link 
            href="/login" 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="text-sm font-medium bg-white text-black px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
