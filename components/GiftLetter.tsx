import React from 'react';

interface GiftLetterProps {
  onBack: () => void;
}

const GiftLetter: React.FC<GiftLetterProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center h-full p-4 pt-8 pb-20 relative">
      <div className="w-full max-w-4xl flex items-start justify-start mb-4">
          <h1 className="text-5xl font-hand font-bold text-val-red underline decoration-wavy">
            Words from my Heart
          </h1>
      </div>

      <div className="relative w-full max-w-2xl flex-1 flex items-center justify-center">
        
        {/* Paper Container */}
        <div className="relative bg-[#fdfbf7] w-full p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transform -rotate-1 z-10">
          {/* Tape effect */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/50 transform rotate-1 border-l border-r border-white/40 backdrop-blur-sm"></div>

          {/* Lined Paper Pattern */}
          <div 
            className="w-full h-full font-note text-2xl leading-loose text-gray-700 space-y-2"
            style={{
              backgroundImage: 'linear-gradient(transparent 27px, #e5e7eb 28px)',
              backgroundSize: '100% 28px',
              lineHeight: '28px',
              paddingTop: '4px' // Align text with lines
            }}
          >
            <p>To the love of my life,</p>
            <p>You make my life meaningful and happy, and I wish it's the same for you.</p>
            <p>I am happy to call you my valentine this year too (sorry for last year).</p>
            <p>I love you so much and can't wait to love you for the rest of my life. Please always be my valentine, Komal.</p>
            <p>I know I say this every day and you are tired of hearing this,</p>
            <p>but you are the most beautiful, the cutest, and the hottest girl in this world.</p>
            <p className="mt-8 text-right font-bold text-val-red">- Your Valentine</p>
          </div>
        </div>

        {/* Decor */}
        {/* XOXO permanently positioned to the right side */}
        <div className="absolute -right-40 top-1/2 transform -translate-y-1/2 text-8xl font-hand text-val-red/80 rotate-12 pointer-events-none z-0">
          XOXO
        </div>
        
        {/* Cute peekaboo */}
        <div className="absolute -bottom-10 -left-20 w-40 transform rotate-12 z-20">
           <img 
            src="https://media.tenor.com/b2161Vd14uIAAAAi/mocha-bear-hide.gif" 
            alt="Peeking bear" 
            className="w-full"
           />
        </div>
      </div>

       <button 
        onClick={onBack}
        className="mt-12 text-val-dark font-hand font-bold text-xl hover:scale-110 transition-transform flex items-center gap-2 z-20"
      >
        <span>click me to go back</span>
        <span className="text-2xl">↩</span>
      </button>
    </div>
  );
};

export default GiftLetter;