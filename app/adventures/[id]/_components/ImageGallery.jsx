"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ImageGallery({
  images,
  currentIndex,
  goToNext,
  goToPrevious,
  goToSlide,
  client,
}) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const dragStart = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  if (!images || images.length === 0) return null;

  const openPreview = () => {
    setPreviewOpen(true);
    resetZoom();
  };

  const closePreview = () => {
    setPreviewOpen(false);
    resetZoom();
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleZoom = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      resetZoom();
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();

    let next = scale + e.deltaY * -0.001;
    next = Math.min(Math.max(1, next), 4);

    setScale(next);
  };

  const handleMouseDown = (e) => {
    if (scale === 1) return;

    isDragging.current = true;

    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="bg-brand-light rounded-xl shadow-md overflow-hidden mb-8">
        <div className="relative h-96 group cursor-zoom-in">
          <Image
            src={images[currentIndex]}
            alt={`${client} campaign image ${currentIndex + 1}`}
            fill
            className="object-contain bg-black/5 transition-opacity duration-500"
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            onClick={openPreview}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-blue/90 rounded-full p-2.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold"
              >
                ‹
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-blue/90 rounded-full p-2.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold"
              >
                ›
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-brand-blue w-3"
                        : "bg-brand-dark/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closePreview}
        >
          {/* Close Button */}
          <button
            onClick={closePreview}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ×
          </button>

          {/* Zoom Container */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onDoubleClick={toggleZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <Image
              src={images[currentIndex]}
              alt="Preview"
              width={1600}
              height={1000}
              priority
              className="select-none max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-200"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: scale > 1 ? "grab" : "zoom-in",
              }}
            />
          </div>

          {/* Hint */}
          <div className="absolute bottom-6 text-white/70 text-sm">
            Scroll to zoom. Double click to reset. Drag to move.
          </div>
        </div>
      )}
    </>
  );
}
