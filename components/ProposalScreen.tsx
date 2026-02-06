import React, { useState, useEffect } from 'react';

interface ProposalScreenProps {
  onYes: () => void;
}

const ProposalScreen: React.FC<ProposalScreenProps> = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState<{ top: string; left: string; position: 'static' | 'fixed' }>({ top: 'auto', left: 'auto', position: 'static' });
  const [isHoveringNo, setIsHoveringNo] = useState(false);
  
  // Image handling: Use hosted URL, fallback to GIF if it fails
  const [imgSrc, setImgSrc] = useState('https://i.ibb.co/FLLW1fQh/valentine-s-day-rabbits-couple-hand-drawn-23-2148385504-removebg-preview.png');
  const handleImgError = () => {
    setImgSrc('https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif');
  };

  const moveNoButton = () => {
    // Calculate random position within viewport, keeping it somewhat accessible but elusive
    // Using 1024/768 boundaries approx
    const x = Math.random() * (1024 - 200);
    const y = Math.random() * (768 - 200);
    
    setNoBtnPosition({
      position: 'fixed',
      top: `${y}px`,
      left: `${x}px`,
    });
    setIsHoveringNo(true);
  };

  // Reset hover state after a delay to stop the jitter if user stops chasing
  useEffect(() => {
    if (isHoveringNo) {
      const timer = setTimeout(() => setIsHoveringNo(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isHoveringNo]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      
      {/* Cute Main Image */}
      <div className="mb-8 relative">
        <img 
          src={imgSrc} 
          onError={handleImgError}
          alt="Cute Valentine" 
          className="w-64 h-64 object-contain drop-shadow-xl transition-all duration-300"
        />
        <div className="absolute -top-6 -right-6 text-5xl animate-bounce">
          💌
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-val-dark mb-2 tracking-wide font-hand">
        Hey there,
      </h1>
      <h2 className="text-4xl font-bold text-val-dark mb-12 font-hand">
        Will you be my Valentine?
      </h2>

      {/* Buttons */}
      <div className="flex flex-row gap-6 items-center justify-center w-full max-w-md relative h-32">
        <button
          onClick={onYes}
          className="bg-val-pink border-2 border-val-dark text-val-dark px-8 py-3 rounded-full font-bold text-xl shadow-[4px_4px_0px_0px_rgba(192,74,98,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(192,74,98,1)] transition-all active:translate-y-2 active:shadow-none w-48 z-20"
        >
          YES OF COURSE
        </button>

        <button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
          style={{
            position: noBtnPosition.position,
            top: noBtnPosition.top,
            left: noBtnPosition.left,
          }}
          className="bg-val-card border-2 border-val-dark text-val-dark/70 px-8 py-3 rounded-full font-bold text-lg shadow-[4px_4px_0px_0px_rgba(192,74,98,0.5)] transition-all w-48 z-10 whitespace-nowrap"
        >
          {isHoveringNo ? "CATCH ME!" : "NO THANK YOU"}
        </button>
      </div>

      <div className="mt-12 opacity-50 text-sm font-hand">
        (Hint: The pink button is the only right answer hehe)
      </div>
    </div>
  );
};

export default ProposalScreen;