"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";
import { getDocType, getDocLabel, isViewable } from "./DocumentConfig";
import { getVideoSource, normalizeVideos } from "./VideoConfig";
import ImageGallery from "./ImageGallery";
import VideoPlayer from "./VideoPlayer";
import ClientDetails from "./ClientDetails";
import StrategyList from "./StrategyList";
import ResultsList from "./ResultsList";
import DocumentsPanel from "./DocumentsPanel";

export default function AdventureGallery({ data }) {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
   const videos = normalizeVideos(data.videoUrl);

  const images =
    Array.isArray(data.images) && data.images.length > 0
      ? data.images
      : data.image
        ? [data.image]
        : [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Images */}
        <ImageGallery
          images={images}
          currentIndex={currentIndex}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
          goToSlide={goToSlide}
          client={data.client}
        />

        {/* Video */}
        <VideoPlayer videos={videos} />

        {/* Client Details */}
        <ClientDetails data={data} />

        {/* Strategy */}
        <StrategyList strategy={data.strategy} />

        {/* Results */}
        <ResultsList results={data.results} />
      </div>

      {/* Documents */}
      <DocumentsPanel
        documents={data.documents}
        selectedDocument={selectedDocument}
        setSelectedDocument={setSelectedDocument}
        getDocType={getDocType}
        getDocLabel={getDocLabel}
        isViewable={isViewable}
      />
    </div>
  );
}
