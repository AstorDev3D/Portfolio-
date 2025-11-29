import { LucideIcon } from "lucide-react";

export interface ExperienceItem {
  id: number;
  title: string;
  role: string;
  institution: string;
  period: string;
  description: string[];
  type: 'chemistry' | 'creative';
}

export interface ProjectItem {
  id: number;
  title: string;
  period: string;
  description: string;
  tags: string[];
  type: 'chemistry' | 'creative';
  link?: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  colorClass: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  type: 'ai' | 'chemistry' | 'leadership';
}