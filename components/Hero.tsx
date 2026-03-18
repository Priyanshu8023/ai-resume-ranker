import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DarkVeil from "./DarkVeil";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/30 overflow-hidden font-sans">
      {/* Background Animation */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none overflow-hidden">
        <DarkVeil hueShift={220} speed={0.4} warpAmount={1.5} noiseIntensity={0.06} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black"></div>
      </div>

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          Introducing the ultimate AI tool
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 mb-6 drop-shadow-sm">
          Optimize your resume for the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">future of work.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg sm:text-xl text-white/60 mb-10 leading-relaxed font-light">
          Unlock the power of our advanced AI to analyze, score, and perfect your resume. Stand out to recruiters and land your dream job faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="/signup" 
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">Get Started for Free</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Link>
          
          <Link 
            href="/demo" 
            className="flex w-full sm:w-auto items-center justify-center px-8 py-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white font-medium hover:bg-white/10 transition-colors"
          >
            Watch Demo
          </Link>
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-white/50 border-t border-white/5 pt-10 w-full max-w-3xl">
          <div className="flex flex-col items-center justify-center group">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-sm">Success Rate</div>
          </div>
          <div className="flex flex-col items-center justify-center group">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">50k+</div>
            <div className="text-sm">Resumes Scored</div>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center group">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">Top AI</div>
            <div className="text-sm">Industry Ranked</div>
          </div>
        </div>
      </main>
    </div>
  );
}
