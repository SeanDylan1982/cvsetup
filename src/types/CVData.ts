export interface ExperienceEntry {
  title: string;
  company: string;
  dates: string;
  description: string;
}

export interface EducationEntry {
  school: string;
  degree: string;
  dates: string;
}

export interface CVData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  technologies: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
}

export interface CVData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
  skills: string[];
}

export interface CVData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  photo?: string; // base64 or blob URL
}

export interface ReferenceEntry {
  name: string;
  contact: string;
  relationship: string;
}

export interface CVData {
  references: ReferenceEntry[];
}

export interface CVData {
  title?: string;        // e.g., "Marketing Manager"
  address: string;
  website?: string;
  languages: string[];
}

export interface LanguageEntry {
  language: string;
  written: string;
  verbal: string;
}

export interface SoftwareEntry {
  software: string;
  years: string;
  ability: string;
}

export interface CVData {
  languages: LanguageEntry[];
  software: SoftwareEntry[];
  address: string;
  headline: string;
  salaryExpectation: string;
  transportation: string;
  healthStatus: string;
}
