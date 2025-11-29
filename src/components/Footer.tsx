import React from 'react';

const Footer: React.FC<{ name: string }> = ({ name }) => (
  <footer className="border-t border-white/10 py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
      <p>© 2025 {name}. All rights reserved.</p>
      <p>Built with React, TypeScript & Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;