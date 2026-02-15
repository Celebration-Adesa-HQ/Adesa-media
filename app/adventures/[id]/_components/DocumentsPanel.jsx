"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export default function DocumentsPanel({
  documents,
  selectedDocument,
  setSelectedDocument,
  getDocType,
  getDocLabel,
  isViewable,
}) {
  if (!documents || documents.length === 0) return null;

  return (
    <div className="lg:col-span-1">
      <div className="bg-brand-light rounded-xl shadow-md p-6 sticky top-24">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">
          Supporting Documents
        </h2>
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedDocument === doc.id
                  ? "border-brand-blue bg-brand-blue/10"
                  : "border-brand-dark/20 hover:border-brand-blue"
              }`}
              onClick={() =>
                setSelectedDocument(selectedDocument === doc.id ? null : doc.id)
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
                    <h3 className="font-medium text-brand-dark">{doc.name}</h3>
                    <p className="text-sm text-brand-dark/60">
                      {getDocLabel(getDocType(doc.url))}
                    </p>
                  </div>
                </div>
                {(() => {
                  const type = getDocType(doc.url);
                  const viewable = isViewable(type);

                  return (
                    <Link
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={!viewable}
                      className="text-brand-blue hover:text-brand-orange font-medium text-sm"
                    >
                      {viewable ? "View" : "Download"}
                    </Link>
                  );
                })()}
              </div>
              {selectedDocument === doc.id && (
                <div className="mt-4 pt-4 border-t border-brand-dark/20">
                  <p className="text-sm text-brand-dark/70">
                    {isViewable(getDocType(doc.url))
                      ? "This file opens in your browser for viewing."
                      : "Click download to save this file to your device."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
