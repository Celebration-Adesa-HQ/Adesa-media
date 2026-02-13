"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

export default function AdventureGallery({ data }) {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        {images.length > 0 && (
          <div className="bg-brand-light rounded-xl shadow-md overflow-hidden mb-8">
            <div className="relative h-96 group">
              <Image
                src={images[currentIndex]}
                alt={`${data.client} campaign image ${currentIndex + 1} of ${images.length}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-blue/90 hover:bg-brand-blue rounded-full p-2.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold"
                  >
                    ‹
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-blue/90 hover:bg-brand-blue rounded-full p-2.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-brand-blue w-3" : "bg-brand-dark/50"}`}
                        aria-current={i === currentIndex ? "true" : undefined}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Video */}
        {data.videoUrl && (
          <div className="bg-brand-light rounded-xl shadow-md overflow-hidden mb-8">
            <div className="relative pt-[56.25%] bg-brand-dark">
              <video
                src={data.videoUrl}
                controls
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
            <div className="p-4 border-t border-brand-dark/20">
              <p className="text-sm text-brand-dark italic">
                Campaign highlights video
              </p>
            </div>
          </div>
        )}

        {/* Client Details */}
        <div className="bg-brand-light rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Client Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.client && (
              <div>
                <h3 className="font-semibold text-brand-dark">Client:</h3>
                <p className="text-brand-dark">{data.client}</p>
              </div>
            )}
            {data.industry && (
              <div>
                <h3 className="font-semibold text-brand-dark">Industry:</h3>
                <p className="text-brand-dark">{data.industry}</p>
              </div>
            )}
            {data.serviceProvided && (
              <div>
                <h3 className="font-semibold text-brand-dark">
                  Service Provided:
                </h3>
                <p className="text-brand-dark">{data.serviceProvided}</p>
              </div>
            )}
            {data.objective && (
              <div>
                <h3 className="font-semibold text-brand-dark">Objective:</h3>
                <p className="text-brand-dark">{data.objective}</p>
              </div>
            )}
          </div>
        </div>

        {/* Strategy */}
        {data.strategy && data.strategy.length > 0 && (
          <div className="bg-brand-light rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Strategy & Execution
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {data.strategy.map((item, i) => (
                <li key={i} className="text-brand-dark">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results */}
        {data.results && data.results.length > 0 && (
          <div className="bg-brand-light rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Results</h2>
            <ul className="list-disc pl-6 space-y-2">
              {data.results.map((item, i) => (
                <li key={i} className="text-brand-dark">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Documents */}
      {data.documents && data.documents.length > 0 && (
        <div className="lg:col-span-1">
          <div className="bg-brand-light rounded-xl shadow-md p-6 sticky top-8">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">
              Supporting Documents
            </h2>
            <div className="space-y-3">
              {data.documents.map((doc) => (
                <div
                  key={doc.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedDocument === doc.id
                      ? "border-brand-blue bg-brand-blue/10"
                      : "border-brand-dark/20 hover:border-brand-blue"
                  }`}
                  onClick={() =>
                    setSelectedDocument(
                      selectedDocument === doc.id ? null : doc.id,
                    )
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSelectedDocument(
                        selectedDocument === doc.id ? null : doc.id,
                      );
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-brand-blue/20 p-2 rounded-lg mr-3">
                        <Download className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-brand-dark">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-brand-dark/60">
                          PDF Document
                        </p>
                      </div>
                    </div>
                    <Link
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-orange font-medium text-sm"
                    >
                      Download
                    </Link>
                  </div>
                  {selectedDocument === doc.id && (
                    <div className="mt-4 pt-4 border-t border-brand-dark/20">
                      <p className="text-sm text-brand-dark/70">
                        This document provides detailed information about the
                        campaign. Click the download button to access it.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
