// src/App.tsx
import React, { useState, useEffect, useRef } from 'react';

// Import our models and controllers
import { PortfolioModel, PortfolioController } from './data/portfolioData';
import type{ Tab } from './components/AnimatedTabs'; // Import our new Tab type

// Import our new components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AnimatedShowcase from './components/AnimatedShowcase';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Define our nav links data here
const navLinks: Tab[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

// This helper function gets the ID from the href
const getSectionIdFromHref = (href: string) => href.substring(1);

// ============= MAIN VIEW (Container) =============
const App: React.FC = () => {
  const [, forceUpdate] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // --- THIS IS THE NEW LOGIC ---
  const [activeTab, setActiveTab] = useState(navLinks[0].label); // 'Home'
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  // --- END OF NEW LOGIC ---

  const model = new PortfolioModel();
  const controller = new PortfolioController(model, () => forceUpdate({}));

  // Effect for handling nav background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(controller.handleScroll(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controller]);

  // --- NEW EFFECT: Scroll-Spy Logic ---
  useEffect(() => {
    // 1. Map all our sections to their IDs
    navLinks.forEach(link => {
      const id = getSectionIdFromHref(link.href);
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current.set(id, el);
      }
    });

    // 2. The scroll listener
    const handleScrollSpy = () => {
      let currentSectionId = '';
      
      // Find which section is most visible
      for (const [id, el] of sectionRefs.current.entries()) {
        const rect = el.getBoundingClientRect();
        // We check if the top of the section is visible (or close to it)
        // The '150' is a pixel offset, you can adjust this
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSectionId = id;
          break;
        }
      }

      // If we're at the very top, default to 'Home'
      if (window.scrollY < 200) {
        currentSectionId = 'home';
      }

      // 3. Find the matching tab label and update the state
      const activeLink = navLinks.find(link => getSectionIdFromHref(link.href) === currentSectionId);
      if (activeLink && activeLink.label !== activeTab) {
        setActiveTab(activeLink.label);
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);

  }, [activeTab]); // Re-run if activeTab changes
  // --- END OF NEW EFFECT ---

  const profile = controller.getProfile();
  const projects = controller.getProjects();
  const skills = controller.getSkills();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden w-screen">
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        navLinks={navLinks}
        activeTab={activeTab}
        onTabClick={(tabLabel) => setActiveTab(tabLabel)} // Pass the setter down
      />

      {/* These IDs MUST match the hrefs in navLinks */}
      <HeroSection
        profile={profile}
        onImageUpload={(file) => controller.handleImageUpload(file)}
      />
      
      <AnimatedShowcase projects={projects} />
      
      {/* Note: We need an ID on this section for the scroll-spy to work */}
      <section id="projects"> 
        <ProjectsSection projects={projects} />
      </section>
      
      <SkillsSection skills={skills} />
      
      <ContactSection profile={profile} />
      
      <Footer name={profile.name} />
    </div>
  );
};

export default App;