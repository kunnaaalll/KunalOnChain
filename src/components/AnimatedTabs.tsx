// src/components/AnimatedTabs.tsx
"use client";

import { motion } from "framer-motion"; // Make sure to import from 'framer-motion'
import { cn } from "../lib/utils"; // Assuming you have this utility file

// Define the shape of our tab objects
export type Tab = {
  label: string;
  href: string;
};

type AnimatedTabsProps = {
  tabs: Tab[];
  activeTab: string; // The active tab (label) is now passed in as a prop
  onTabClick: (tabLabel: string) => void; // Callback to update state in the parent
  variant?: "default" | "underline";
};

const AnimatedTabs = ({
  tabs,
  activeTab,
  onTabClick,
  variant = "default",
}: AnimatedTabsProps) => {

  if (variant === "underline") {
    return (
      <div className="relative flex items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.label;
          return (
            <a // <-- CHANGED from <button>
              key={tab.label}
              href={tab.href} // <-- ADDED href for scrolling
              onClick={() => onTabClick(tab.label)} // <-- Use the callback
              className={cn(
                "relative flex h-10 items-center px-4 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
                // This is from your old navbar, let's keep it!
                isActive
                  ? "text-purple-400" 
                  : "hover:text-purple-400 transition"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary bg-purple-400" // Added bg-purple-400
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </a>
          );
        })}
      </div>
    );
  }

  // --- Default (Pill) Variant ---
  return (
    <div className="relative mx-auto flex w-fit items-center rounded-full bg-background p-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <a // <-- CHANGED from <button>
            key={tab.label}
            href={tab.href} // <-- ADDED href for scrolling
            onClick={() => onTabClick(tab.label)} // <-- Use the callback
            className={cn(
              "relative flex h-8 items-center rounded-full px-3 text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab-background"
                className="absolute inset-0 rounded-full bg-primary"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default AnimatedTabs;