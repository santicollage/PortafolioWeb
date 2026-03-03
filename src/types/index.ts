export interface PersonalData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  bio: string;
  bioExtended: string;
  location: string;
  available: boolean;
  availabilityText: string;
  photo: string;
  cv: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  url: string;
  repo: string;
  featured: boolean;
  category: string;
  year: number;
  challenges: string;
  results: string;
}

export interface ExperienceItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  longDescription: string;
  technologies: string[];
  achievements: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  timeEstimate: string;
  highlight: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
