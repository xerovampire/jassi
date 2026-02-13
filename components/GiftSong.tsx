import React from 'react';

interface GiftSongProps {
  onBack: () => void;
  onRestart: () => void;
}

const GiftSong: React.FC<GiftSongProps> = ({ onBack, onRestart }) => {
  // Using a generic Spotify QR code or a placeholder. 
  // In a real app, this would be the actual song link.
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M";
  const recordImg = "https://i.ibb.co/H5Vdh0r/highquality-png-analog-record-disc-600nw-2561107141-removebg-preview.png";

  return (
    <div className="flex flex-col items-center h-full p-4 relative pt-10 overflow-hidden">
       <h1 className="text-5xl font-hand font-bold text-val-red mb-2 self-center w-full text-center px-6 z-10">
        A song for you
      </h1>

      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
        
        <h2 className="text-2xl font-hand font-bold text-val-dark mb-6 tracking-wide bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">
          Scan the QR code!
        </h2>

        {/* QR Code Frame */}
        <div className="relative bg-white p-4 rounded-xl border-4 border-val-pink shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
           {/* Decorative Hearts Border logic */}
           <div className="absolute -inset-2 border-2 border-dashed border-val-red/50 rounded-2xl pointer-events-none animate-pulse"></div>
           
           <img 
            src="https://iili.io/qHWXYRR.md.jpg"
            alt="Song QR Code" 
            className="w-64 h-64"
           />
           
           <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md whitespace-nowrap">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Spotify
           </div>
        </div>

        {/* Arrows */}
        <div className="absolute left-1/4 top-1/2 text-6xl text-val-dark font-thin transform -translate-y-1/2 -scale-x-100 animate-bounce delay-75">
           ⤵
        </div>
        <div className="absolute right-1/4 top-1/2 text-6xl text-val-dark font-thin transform -translate-y-1/2 animate-bounce">
           ⤵
        </div>

        {/* Decoration CD (New Image) */}
        <div className="absolute right-32 top-1/4 opacity-90">
             <img 
               src={recordImg} 
               alt="Vinyl Record"
               className="w-40 h-40 animate-spin-slow drop-shadow-xl"
             />
             <div className="absolute -top-4 -right-2 text-2xl animate-bounce">🎵</div>
        </div>

         {/* Decoration Music Player Icon */}
         <div className="absolute left-32 bottom-1/3 opacity-80 transform -rotate-12 hover:rotate-0 transition-transform">
            <div className="bg-white p-4 rounded-2xl border-2 border-val-dark shadow-[4px_4px_0px_0px_rgba(192,74,98,0.5)]">
                <div className="text-val-red text-5xl">♥</div>
            </div>
            <div className="absolute -top-6 -left-4 text-3xl text-val-dark animate-wiggle">♫</div>
        </div>
        
        {/* Extra Musical Props */}
        <div className="absolute top-1/3 left-1/4 text-4xl text-val-dark/20 font-hand rotate-12">
          ♪
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-5xl text-val-dark/20 font-hand -rotate-12">
          ♫
        </div>
        <div className="absolute top-20 left-1/2 text-xl text-val-red/40 animate-ping">
          ♥
        </div>

      </div>

      <div className="w-full flex justify-between items-end pb-8 px-12 relative z-20">
          <button 
            onClick={onBack}
            className="text-val-dark font-hand font-bold text-xl hover:scale-110 transition-transform bg-white/50 px-4 py-1 rounded-lg"
          >
            ← back
          </button>
          
          <button 
            onClick={onRestart}
            className="text-val-red font-hand font-bold text-xl hover:scale-110 transition-transform flex flex-col items-center bg-white/50 px-4 py-1 rounded-lg"
          >
             <span>click to restart!</span>
             <span className="text-3xl">↻</span>
          </button>
      </div>
      
      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GiftSong;