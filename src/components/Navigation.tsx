// src/components/Navigation.tsx
import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import AnimatedTabs from './AnimatedTabs'; 
import type { Tab } from './AnimatedTabs'

// Define the props our Navigation component will now accept
type NavigationProps = {
  scrolled: boolean;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  navLinks: Tab[];
  activeTab: string;
  onTabClick: (tabLabel: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({
  scrolled,
  isMenuOpen,
  onMenuToggle,
  navLinks,
  activeTab,
  onTabClick,
}) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : ''}`}>
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Kunal Parmar</span>
        </div>

        {/* --- THIS IS THE MAIN CHANGE --- */}
        <div className="hidden md:flex items-center space-x-8">
          <AnimatedTabs
            tabs={navLinks}
            activeTab={activeTab}
            onTabClick={onTabClick}
            variant="underline" // Use the underline variant!
          />
        </div>
        {/* --- END OF MAIN CHANGE --- */}


        <button className="hidden md:flex items-center space-x-2 bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-100 transition">
          <span>Get in Touch</span>
          <ArrowUpRight size={16} />
        </button>

        <button onClick={onMenuToggle} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu - We can also use AnimatedTabs here! */}
    {isMenuOpen && (
      <div className="md:hidden bg-black border-t border-white/10">
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              onClick={() => {
                onTabClick(tab.label);
                onMenuToggle(); // Close menu on click
              }}
              className={`block ${activeTab === tab.label ? 'text-purple-400' : 'hover:text-purple-400'}`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default Navigation;