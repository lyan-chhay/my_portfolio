// components/Header.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-play attempt
  useEffect(() => {
    if (!isMounted || !audioRef.current) return;

    const attemptAutoPlay = async () => {
      try {
        audioRef.current.volume = 0.3;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Auto-play prevented");
        setIsPlaying(false);
      }
    };

    attemptAutoPlay();
  }, [isMounted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.log("Play failed:", error);
      });
      setIsPlaying(true);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <audio ref={audioRef} loop preload="auto" volume={0.3}>
        <source src="/mp3/default1.mp3" type="audio/mpeg" />
      </audio>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Name Section */}
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Ly An CHHAY
              </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
                Data Scientist
              </span>
            </div>

            {/* Music Player */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMusic}
                className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-full transition-all duration-300 group"
                aria-label={
                  isPlaying ? "Pause background music" : "Play background music"
                }
              >
                <div className="flex items-center space-x-2">
                  {isPlaying ? (
                    <div className="flex items-end space-x-1">
                      <div
                        className="w-1 bg-gray-600 dark:bg-gray-300 animate-music-bar"
                        style={{ height: "6px" }}
                      ></div>
                      <div
                        className="w-1 bg-gray-600 dark:bg-gray-300 animate-music-bar"
                        style={{ height: "10px", animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 bg-gray-600 dark:bg-gray-300 animate-music-bar"
                        style={{ height: "8px", animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300">🔇</span>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                    {isPlaying ? "Pause" : "Play"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
