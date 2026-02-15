"use client";

import { ChevronUp } from "lucide-react";

export default function SidebarTOC({ postData }) {
  return (
    <div className="bg-brand-light p-4 cursor-default">
      <aside className="hidden lg:block  top-24 h-fit max-w-md">
        <div className="bg-brand-light rounded-2xl shadow-card border border-brand-light p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-heading text-brand-blue flex items-center">
              <ChevronUp className="w-5 h-5 mr-2 text-brand-orange" />
              Table of Contents
            </h2>
            <span className="text-sm text-brand-dark font-body font-medium">
              4 sections
            </span>
          </div>

          <nav className="space-y-3">
            {postData.toc.map((item) => (
              <div
                key={item.id}
                className="block p-3 rounded-xl hover:bg-brand-orange/10 transition-colors group"
              >
                <div className="flex items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand-blue text-brand-light flex items-center justify-center font-medium text-sm mr-3 mt-1"></span>
                  <div>
                    <div className="font-medium text-brand-blue group-hover:text-brand-orange transition-colors font-body">
                      {item.title}
                    </div>
                    <div className="text-sm text-brand-dark mt-1 font-body">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-brand-light">
            <h3 className="font-medium text-brand-dark mb-3 font-body">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {postData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-brand-blue text-brand-light text-sm rounded-full hover:bg-brand-orange transition-colors cursor-pointer font-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
