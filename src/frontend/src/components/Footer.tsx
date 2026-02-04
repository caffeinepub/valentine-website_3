import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-rose-200/50 dark:border-rose-800/50 bg-white/60 dark:bg-rose-950/60 backdrop-blur-md py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <span className="text-rose-700 dark:text-rose-300 font-medium">
            Spread Love, Share Joy
          </span>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
        </div>
        
        <p className="text-rose-600 dark:text-rose-400 text-sm">
          © 2025. Built with{' '}
          <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500 mx-1" />
          using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium hover:text-rose-700 dark:hover:text-rose-300 transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
