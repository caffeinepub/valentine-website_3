import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/assets/generated/valentine-hero-bg.dim_1200x800.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-pulse" />
            <img 
              src="/assets/generated/heart-icon-transparent.dim_64x64.png" 
              alt="" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-50"
            />
          </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight">
          Love is in the Air
        </h2>
        
        <p className="text-xl md:text-2xl text-rose-700 dark:text-rose-300 mb-8 font-light">
          Express your feelings with a heartfelt message
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-rose-900/60 rounded-full backdrop-blur-sm border border-rose-200 dark:border-rose-700">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="text-rose-700 dark:text-rose-300 font-medium">Share Your Love</span>
          </div>
        </div>
      </div>
    </section>
  );
}
