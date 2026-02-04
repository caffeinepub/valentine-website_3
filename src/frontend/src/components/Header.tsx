import { Heart, Music, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onToggleMusic: () => void;
  isMusicEnabled: boolean;
}

export default function Header({ onToggleMusic, isMusicEnabled }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-200/50 dark:border-rose-800/50 bg-white/80 dark:bg-rose-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Valentine's Day
          </h1>
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={onToggleMusic}
          className="border-rose-300 hover:bg-rose-100 dark:border-rose-700 dark:hover:bg-rose-900"
          aria-label={isMusicEnabled ? 'Disable music' : 'Enable music'}
        >
          {isMusicEnabled ? (
            <Music className="w-5 h-5 text-rose-500" />
          ) : (
            <VolumeX className="w-5 h-5 text-rose-400" />
          )}
        </Button>
      </div>
    </header>
  );
}
