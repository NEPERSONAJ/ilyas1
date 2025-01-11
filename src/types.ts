export interface Project {
  id: number;
  title: string;
  type: string;
  area: number;
  year: number;
  region: string;
  description: string;
  weight: number;
  images: ProjectImage[];
  details: ProjectDetails;
}

export interface ProjectImage {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
}

export interface ProjectDetails {
  solution: string;
  features: string[];
  video?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}