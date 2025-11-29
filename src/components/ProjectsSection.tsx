import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import type{ Project } from '../data/portfolioData';

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-lg">Detailed view of my work</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <span className="text-sm text-gray-400">{project.category}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-400 transition">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-white/5 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-sm bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition">
                  <span>View Project</span>
                  <ArrowUpRight size={14} />
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition">
                  <Github size={16} />
                  <span>Code</span>
                </button>
              </div>
            </div>

            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;