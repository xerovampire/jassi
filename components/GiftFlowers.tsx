import React, { useState } from 'react';
import { Screen } from '../types';

interface GiftFlowersProps {
  onBack: () => void;
}

const GiftFlowers: React.FC<GiftFlowersProps> = ({ onBack }) => {
  // Image handling: Use hosted URL, fallback to Unsplash if it fails
  const [imgSrc, setImgSrc] = useState('https://i.ibb.co/YrBZbY7/file-0000000092a87230b0a314ee7679d9a3.png');
  const handleImgError = () => {
    setImgSrc('https://images.unsplash.com/photo-1563241527-30058e5f2259?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80');
  };

  return (
    <div className="flex flex-col items-center h-full p-4 pt-10 relative">
      <h1 className="text-5xl font-hand font-bold text-val-red mb-8 text-center px-6">
        Your Rose Bouquet 🌹
      </h1>

      <div className="flex-1 flex flex-row items-center justify-center w-full max-w-5xl gap-8 relative">
        
        {/* Left Messages */}
        <div className="flex flex-col gap-6 w-1/3 z-10">
          <MessageBubble rotation="-rotate-2">
            I will always love you unconditionally baby 💗.
          </MessageBubble>
          <MessageBubble rotation="rotate-3">
            You will always be my priority 🫰🏽.
          </MessageBubble>
        </div>

        {/* Center Image */}
        <div className="relative w-1/3 flex justify-center">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl transform scale-75"></div>
            
            {/* Bouquet Illustration with Theme Border */}
            <div className="transform rotate-1 hover:scale-105 transition-transform duration-500 bg-white p-3 rounded-[2rem] border-4 border-val-pink shadow-lg">
                 <img 
                    src={imgSrc}
                    onError={handleImgError}
                    alt="Rose Bouquet"
                    className="w-80 object-contain rounded-2xl"
                 />
            </div>
        </div>

        {/* Right Messages */}
        <div className="flex flex-col gap-6 w-1/3 z-10">
           <MessageBubble rotation="rotate-2">
            You are the peace I always needed 😌. 
          </MessageBubble>
          <MessageBubble rotation="-rotate-3">
            Please always be mine Komal 💘.
          </MessageBubble>
        </div>

      </div>

      <button 
        onClick={onBack}
        className="absolute bottom-8 right-8 text-val-dark font-hand font-bold text-xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <span>click me to go back</span>
        <span className="text-2xl">↩</span>
      </button>
    </div>
  );
};

const MessageBubble: React.FC<{ children: React.ReactNode, rotation: string }> = ({ children, rotation }) => (
  <div className={`bg-white border-2 border-val-pink text-val-dark p-4 rounded-xl shadow-md font-hand text-xl transform ${rotation} hover:scale-105 transition-transform text-center`}>
    {children}
  </div>
);

export default GiftFlowers;