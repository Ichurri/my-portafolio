export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  title: string;
  logo: string;
  level?: number; // 1-5, donde 5 es el nivel más alto de competencia
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: Skill[];
}