import React, { useEffect, useState } from 'react';
import { FloatingHeart } from '../types';

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate random hearts for the background
    const newHearts: FloatingHeart[] = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="relative w-full h-full bg-val-pink overflow-hidden font-cute text-val-dark select-none">
      {/* Floating Hearts Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-val-red/20 text-4xl"
            style={{
              left: `${heart.left}%`,
              bottom: '-50px',
              animation: `float-up ${heart.animationDuration}s linear infinite`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ♥
          </div>
        ))}
        {/* CSS for the floating up animation specifically for these hearts */}
        {/* Changed translateY to use % of container height, not vh (viewport height) */}
        <style>{`
          @keyframes float-up {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.5; }
            100% { transform: translateY(-900px) rotate(360deg); opacity: 0; }
          }
        `}</style>
      </div>

      {/* Decorative Hanging Hearts (Top Left) */}
      <div className="absolute top-0 left-10 flex gap-4 pointer-events-none z-0 opacity-60">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
            <div className="w-0.5 h-24 bg-val-dark/30"></div>
            <div className="text-val-red text-4xl filter drop-shadow-sm">♥</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Background;
