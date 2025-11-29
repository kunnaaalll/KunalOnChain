import React from 'react';
import type { Skill } from '../data/portfolioData';

const SkillsSection: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <section id="skills" className="py-20 px-6 bg-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What I Do Best</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-black border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {/* This renders the icon component passed from your data model */}
              <skill.icon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
            <p className="text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;