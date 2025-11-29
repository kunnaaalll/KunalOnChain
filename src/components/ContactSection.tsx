import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { ProfileData } from '../data/portfolioData';

const ContactSection: React.FC<{ profile: ProfileData }> = ({ profile }) => (
  <section id="contact" className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
      <p className="text-xl text-gray-400 mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <a href={`mailto:${profile.email}`} className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
          <Mail size={20} />
          <span>Email Me</span>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white/5 transition">
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white/5 transition">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;