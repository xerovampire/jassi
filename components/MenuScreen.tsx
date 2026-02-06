import React from 'react';
import { Screen } from '../types';

interface MenuScreenProps {
  onNavigate: (screen: Screen) => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      {/* Happy Character */}
      <div className="mb-6 animate-wiggle">
         <img 
          src="https://media.tenor.com/P1g6w_0suVoAAAAi/mocha-bear-hearts.gif"
          alt="Happy bear"
          className="w-40 h-40 object-contain"
        />
      </div>

      <h1 className="text-5xl font-hand font-bold text-val-red mb-2 text-center">
        Yay, you said yes!
      </h1>
      <p className="text-xl font-hand text-val-dark mb-12 text-center">
        I made all these for you hehe
      </p>

      {/* Gift Grid */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-4xl px-4">
        
        <GiftButton 
          label="Gift 1" 
          onClick={() => onNavigate(Screen.GIFT_FLOWER)}
          delay={0}
        />
        <GiftButton 
          label="Gift 2" 
          onClick={() => onNavigate(Screen.GIFT_LETTER)}
          delay={0.1}
        />
        <GiftButton 
          label="Gift 3" 
          onClick={() => onNavigate(Screen.GIFT_SONG)}
          delay={0.2}
        />

      </div>

      <div className="absolute bottom-4 right-4 animate-bounce">
         <div className="text-4xl">💌</div>
      </div>
      <div className="absolute bottom-4 left-4">
         <div className="text-4xl text-val-red/30 animate-pulse">♥</div>
      </div>
    </div>
  );
};

interface GiftButtonProps {
  label: string;
  onClick: () => void;
  delay: number;
}

const GiftButton: React.FC<GiftButtonProps> = ({ label, onClick, delay }) => (
  <button
    onClick={onClick}
    style={{ animationDelay: `${delay}s` }}
    className="aspect-square bg-val-pink/80 border-4 border-val-dark rounded-3xl flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(192,74,98,1)] hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(192,74,98,1)] active:shadow-none active:translate-y-3 transition-all transform animate-float group cursor-pointer"
  >
    <span className="text-3xl font-bold font-hand underline decoration-wavy decoration-val-red/50 group-hover:scale-110 transition-transform">
      {label}
    </span>
  </button>
);

export default MenuScreen;