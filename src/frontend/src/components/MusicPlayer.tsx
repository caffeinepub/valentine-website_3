import { useEffect, useRef } from 'react';

interface MusicPlayerProps {
  isEnabled: boolean;
}

export default function MusicPlayer({ isEnabled }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      
      // Using a romantic piano melody from a free music source
      // In a real app, you would host your own music file
      audioRef.current.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
    }

    if (isEnabled) {
      audioRef.current.play().catch((error) => {
        console.log('Audio playback failed:', error);
      });
    } else {
      audioRef.current.pause();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isEnabled]);

  return null;
}
