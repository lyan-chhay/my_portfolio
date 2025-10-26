// // components/MusicPlayer.jsx - Ultra Compact
// "use client";
// import { useState, useRef, useEffect } from "react";

// export default function MusicPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted || !audioRef.current) return;

//     const attemptAutoPlay = async () => {
//       try {
//         audioRef.current.volume = 0.3;
//         await audioRef.current.play();
//         setIsPlaying(true);
//       } catch (error) {
//         setIsPlaying(false);
//       }
//     };

//     attemptAutoPlay();
//   }, [isMounted]);

//   const toggleMusic = () => {
//     if (!audioRef.current) return;
//     isPlaying ? audioRef.current.pause() : audioRef.current.play();
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (
//         event.code === "Space" &&
//         event.target.tagName !== "INPUT" &&
//         event.target.tagName !== "TEXTAREA"
//       ) {
//         event.preventDefault();
//         toggleMusic();
//       }
//     };

//     if (isMounted) {
//       document.addEventListener("keydown", handleKeyPress);
//       return () => document.removeEventListener("keydown", handleKeyPress);
//     }
//   }, [isMounted, isPlaying]);

//   if (!isMounted) return null;

//   return (
//     <>
//       <audio ref={audioRef} loop preload="auto">
//         <source src="/mp3/default1.mp3" type="audio/mpeg" />
//       </audio>

//       <div className="fixed top-6 right-6 z-50">
//         <button
//           onClick={toggleMusic}
//           className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
//             isPlaying
//               ? "bg-green-500/20 text-green-500 border border-green-500/30"
//               : "bg-gray-500/20 text-gray-500 border border-gray-500/30 hover:bg-gray-500/30"
//           } backdrop-blur-md`}
//           aria-label={isPlaying ? "Pause music" : "Play music"}
//         >
//           {isPlaying ? (
//             <div className="flex items-end gap-0.5">
//               <div className="w-0.5 h-1.5 bg-current animate-music-pulse rounded-full" />
//               <div
//                 className="w-0.5 h-2 bg-current animate-music-pulse rounded-full"
//                 style={{ animationDelay: "0.1s" }}
//               />
//               <div
//                 className="w-0.5 h-1 bg-current animate-music-pulse rounded-full"
//                 style={{ animationDelay: "0.2s" }}
//               />
//             </div>
//           ) : (
//             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           )}
//         </button>
//       </div>
//     </>
//   );
// }
// components/MusicPlayer.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  // Initialize and auto-play
  useEffect(() => {
    setIsMounted(true);

    const autoPlay = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play prevented, waiting for user interaction");
        // Show tooltip to indicate music is ready but needs interaction
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(autoPlay, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle user interaction for browsers that block auto-play
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        });
      }
    };

    // Listen for any user interaction
    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });
    document.addEventListener("scroll", handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  // Keyboard shortcut (Space)
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.code === "Space" &&
        !event.target.closest("input, textarea, [contenteditable]")
      ) {
        event.preventDefault();
        toggleMusic();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying]);

  if (!isMounted) return null;

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/mp3/default1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="fixed top-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-2 bg-black/80 text-white text-xs rounded-lg backdrop-blur-sm whitespace-nowrap">
            Click anywhere to play music
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-black/80"></div>
          </div>
        )}

        {/* Music Player Button */}
        <button
          onClick={toggleMusic}
          className={`
            group relative w-10 h-10 rounded-full flex items-center justify-center 
            transition-all duration-300 ease-out backdrop-blur-md border
            hover:scale-110 active:scale-95
            ${
              isPlaying
                ? "bg-emerald-500/20 text-emerald-600 border-emerald-500/30 shadow-lg shadow-emerald-500/10 hover:bg-emerald-500/30"
                : "bg-white/10 text-gray-600 border-white/20 shadow-lg hover:bg-white/20 hover:text-gray-800"
            }
          `}
          aria-label={
            isPlaying ? "Pause background music" : "Play background music"
          }
        >
          {/* Animated background pulse when playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-60"></div>
          )}

          {/* Icon */}
          <div className="relative z-10">
            {isPlaying ? (
              // Equalizer bars animation
              <div className="flex items-end gap-0.5">
                <div className="w-1 h-2 bg-current rounded-full animate-music-bar" />
                <div
                  className="w-1 h-3 bg-current rounded-full animate-music-bar"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="w-1 h-1.5 bg-current rounded-full animate-music-bar"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            ) : (
              // Play icon with hover effect
              <svg
                className="w-4 h-4 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>

          {/* Hover tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {isPlaying ? "Pause music" : "Play music"}{" "}
            <span className="text-gray-400">(Space)</span>
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes music-bar {
          0%,
          100% {
            height: 2px;
          }
          50% {
            height: 12px;
          }
        }
        .animate-music-bar {
          animation: music-bar 1s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
