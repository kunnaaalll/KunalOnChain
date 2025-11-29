

// We import the icons here, as they are part of the *data*
import { Code, Palette, Zap } from 'lucide-react';


export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  gradient: string;
  technologies?: string[];
  image?: string;
}

export interface Skill {
  icon: any; 
  title: string;
  desc: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  description: string;
  imageUrl: string | null;
  email: string;
  github: string;
  linkedin: string;
}

export class PortfolioModel {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Smart Dashboard',
      description: 'Your gateway to web3 innovation starts here',
      category: 'Web3 • DeFi',
      gradient: 'from-purple-600 to-pink-600',
      technologies: ['React', 'Solidity', 'Web3.js']
    },
    {
      id: 2,
      title: 'Blockchain Explorer',
      description: 'Discover the power of decentralization',
      category: 'Blockchain • Analytics',
      gradient: 'from-blue-600 to-cyan-600',
      technologies: ['TypeScript', 'Node.js', 'GraphQL']
    },
    {
      id: 3,
      title: 'NFT Marketplace',
      description: 'Secure Web3 solutions for modern applications',
      category: 'NFT • Trading',
      gradient: 'from-violet-600 to-purple-600',
      technologies: ['Next.js', 'IPFS', 'Smart Contracts']
    },
    {
      id: 4,
      title: 'DeFi Platform',
      description: 'Crafting the future of decentralized finance',
      category: 'DeFi • Finance',
      gradient: 'from-pink-600 to-rose-600',
      technologies: ['React', 'Ethers.js', 'Hardhat']
    },
    {
      id: 5,
      title: 'DAO Governance',
      description: 'Decentralized decision making platform',
      category: 'DAO • Governance',
      gradient: 'from-cyan-600 to-blue-600',
      technologies: ['Solidity', 'React', 'IPFS']
    },
    {
      id: 6,
      title: 'Token Launchpad',
      description: 'Launch and manage your crypto tokens',
      category: 'Token • Launch',
      gradient: 'from-rose-600 to-pink-600',
      technologies: ['Smart Contracts', 'Web3', 'Next.js']
    }
  ];

  private skills: Skill[] = [
    { icon: Code, title: 'Smart Contracts', desc: 'Solidity, Web3.js, Ethers.js' },
    { icon: Palette, title: 'Frontend Design', desc: 'React, TypeScript, Tailwind CSS' },
    { icon: Zap, title: 'Performance', desc: 'Optimization & Best Practices' }
  ];

  private profileData: ProfileData = {
    name: 'Kunal Parmar', 
    tagline: 'Full Stack & Blockchain Developer',
    description: 'Building innovative solutions with modern technologies, creating seamless experiences and interactive elements to engage users.',
    imageUrl: null,
    email: 'kparmar2911@gmail.com',
    github: 'https://github.com/kunnaaalll',
    linkedin: 'https://linkedin.com/in/kunnaaalll'
  };

  getProjects(): Project[] {
    return this.projects;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getProfile(): ProfileData {
    return this.profileData;
  }

  updateProfileImage(imageUrl: string): void {
    this.profileData.imageUrl = imageUrl;
  }
}


export class PortfolioController {
  private model: PortfolioModel;
  private updateView: () => void;

  constructor(model: PortfolioModel, updateView: () => void) {
    this.model = model;
    this.updateView = updateView;
  }

  getProjects(): Project[] {
    return this.model.getProjects();
  }

  getSkills(): Skill[] {
    return this.model.getSkills();
  }

  getProfile(): ProfileData {
    return this.model.getProfile();
  }

  handleImageUpload(file: File): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.model.updateProfileImage(reader.result as string);
      this.updateView();
    };
    reader.readAsDataURL(file);
  }

  handleScroll(scrollY: number): boolean {
    return scrollY > 50;
  }
}