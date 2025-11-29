import React, { useEffect, useRef } from 'react';
import type { Project } from '../data/portfolioData';

const AnimatedShowcase: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;
    
    let animationId: number;
    let position1 = 0;
    let position2 = 0;

    const animate = () => {
      if (scroll1) {
        position1 -= 0.5;
        if (Math.abs(position1) >= scroll1.scrollWidth / 2) {
          position1 = 0;
        }
        scroll1.style.transform = `translateX(${position1}px)`;
      }

      if (scroll2) {
        position2 += 0.5;
        if (position2 >= 0) {
          position2 = -(scroll2.scrollWidth / 2);
        }
        scroll2.style.transform = `translateX(${position2}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const topProjects = [...projects, ...projects];
  const bottomProjects = [...projects.slice().reverse(), ...projects.slice().reverse()];

  return (
    <div className="py-20 overflow-hidden">
      <div className="text-center mb-16 px-6">
        <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Showcase</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Project Highlights</h2>
      </div>

      {/* Top Row - Moving Left */}
      <div className="mb-8 overflow-hidden">
        <div ref={scrollRef1} className="flex gap-6" style={{ width: 'fit-content' }}>
          {topProjects.map((project, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 w-[400px] h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl transform rotate-12 shadow-xl"></div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4 text-black">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Moving Right */}
      <div className="overflow-hidden">
        <div ref={scrollRef2} className="flex gap-6" style={{ width: 'fit-content' }}>
          {bottomProjects.map((project, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 w-[400px] h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl transform -rotate-12 shadow-xl"></div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4 text-black">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedShowcase;