// src/data/defaultCVData.ts
import type { CVData } from '../types/CVData';

const defaultCVData: CVData = {
  photo: '',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '123-456-7890',
  summary: 'Experienced software engineer with a passion for frontend development and UI design.',
  experience: [
    {
      company: 'Tech Corp',
      title: 'Frontend Developer',
      dates: 'Jan 2020 – Present',
      description: 'Led frontend team, built scalable UI components, and improved performance by 30%.',
    },
    {
      company: 'Web Solutions',
      title: 'Junior Developer',
      dates: 'Jun 2018 – Dec 2019',
      description: 'Worked on client websites and internal tools using React and Tailwind CSS.',
    },
  ],
  education: [
    {
      school: 'University of Example',
      degree: 'B.Sc. in Computer Science',
      dates: '2014 – 2018',
    },
  ],
  projects: [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      technologies: 'React, TypeScript, Tailwind CSS',
    }
  ],
  certifications: [
    {
      name: 'Certified React Developer',
      issuer: 'React Academy',
      date: '2021',
    },
  ],
  skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma'],
  references: [
    {
      name: 'Jane Smith',
      relationship: 'Former Manager',
      contact: '123-456-7890',
    },
  ]
};
  
export default defaultCVData;
