"use client";

import { useState } from "react";

export default function VideoPlayer({ videos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videos.length) return null;

  const current = videos[currentIndex];

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % videos.length);
  };

  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + videos.length) % videos.length);
  };

  return (
    <div className="bg-brand-light rounded-xl shadow-md overflow-hidden mb-8">
      {/* Player */}
      <div className="relative pt-[56.25%] bg-brand-dark rounded-xl overflow-hidden group">
        {current.type === "iframe" ? (
          <iframe
            src={current.src}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <video
            src={current.src}
            controls
            className="absolute inset-0 w-full h-full object-contain"
          />
        )}

        {/* Navigation */}
        {videos.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-blue/90 text-white rounded-full px-3 py-1.5 text-xl opacity-0 group-hover:opacity-100 transition"
            >
              ‹
            </button>

            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-blue/90 text-white rounded-full px-3 py-1.5 text-xl opacity-0 group-hover:opacity-100 transition"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-brand-dark/20 flex items-center justify-between">
        <p className="text-sm text-brand-dark italic">
          Campaign highlights video
        </p>

        {/* Dots */}
        {videos.length > 1 && (
          <div className="flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === currentIndex ? "bg-brand-blue w-3" : "bg-brand-dark/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
