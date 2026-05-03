"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "home", label: "ホーム", href: "#home" },
  { id: "about", label: "自己紹介", href: "#about" },
  { id: "works", label: "制作物", href: "/works" },
  { id: "zenn", label: "Zenn", href: "#zenn" },
  { id: "youtube", label: "YouTube", href: "#youtube" },
];

type TabNavigationProps = {
  activeSection: string;
};

export function TabNavigation({ activeSection }: TabNavigationProps) {
  return (
    <nav aria-label="メインセクション" className="overflow-x-auto">
      <div className="flex min-w-max gap-1 rounded-full border border-slate-700/70 bg-slate-950/70 p-1">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300",
              activeSection === tab.id && "text-white",
            )}
            href={tab.href}
          >
            {activeSection === tab.id ? (
              <motion.span
                layoutId="active-tab"
                className="absolute inset-0 rounded-full bg-slate-800 shadow-glow"
                transition={{ duration: 0.22 }}
              />
            ) : null}
            <span className="relative">{tab.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
