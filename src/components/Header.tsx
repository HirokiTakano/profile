"use client";

import { useEffect, useState } from "react";
import { TabNavigation } from "@/components/TabNavigation";

const sectionIds = ["home", "about", "zenn", "youtube", "links"];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          },
          { rootMargin: "-38% 0px -52% 0px", threshold: 0.01 },
        );
        observer.observe(section as Element);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <a
          className="text-base font-bold text-white transition hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          href="#home"
        >
          Takano Hiroki
        </a>
        <TabNavigation activeSection={activeSection} />
      </div>
    </header>
  );
}
