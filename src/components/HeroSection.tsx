import React from 'react';
import { ArrowUpRight, Upload } from 'lucide-react';
import type { ProfileData } from '../data/portfolioData';

const HeroSection: React.FC<{
  profile: ProfileData;
  onImageUpload: (file: File) => void;
}> = ({ profile, onImageUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20">
              {profile.imageUrl ? (
                <img 
                  src={profile.imageUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold">
                  {profile.name.charAt(0)}
                </div>
              )}
            </div>
            
            <label className="absolute bottom-0 right-0 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-lg">
              <Upload size={18} />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400">
            Available for Opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-purple-400">Full Stack</span> & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blockchain</span>
          <br />Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          {profile.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition font-medium">
            <span>View My Work</span>
            <ArrowUpRight size={20} />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-white/20 px-8 py-4 rounded-full hover:bg-white/5 transition font-medium">
            <span>Download Resume</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/10 rounded-lg blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-500/10 rounded-lg blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;