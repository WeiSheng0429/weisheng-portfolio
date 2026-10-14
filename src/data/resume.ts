/**
 * Single source of truth for the portfolio.
 * Every section reads from here, and every fact comes from
 * WeiSheng_Resume_Update_13Oct2026.docx. Update the resume, then update this file.
 */

export const profile = {
  name: "Wong Wei Sheng",
  shortName: "Wei Sheng",
  title: "Junior Software Engineer",
  headline: "Computer Science graduate building web and mobile apps",
  summary:
    "Computer Science graduate with experience developing web and mobile applications through university projects using React, TypeScript, JavaScript, Node.js, and Express.js. Familiar with frontend development, backend API integration, and application testing.",
  about: [
    "I'm a Computer Science graduate from the University of London, studying at the Singapore Institute of Management. My university projects cover a React and TypeScript web app with a Node.js and Express REST API, and a React Native mobile app that uses live government data.",
    "I like solving technical problems and building practical software that improves the user experience. I'm looking for a Junior Software Engineer role where I can keep learning while contributing to real-world projects.",
  ],
  location: "Singapore",
  citizenship: "Singapore Permanent Resident",
  email: "w.weisheng0429@gmail.com",
  github: "https://github.com/WeiSheng0429",
  linkedin: "https://www.linkedin.com/in/wong-wei-sheng-1835b11a3/",
  resume: "/WeiSheng_Resume.pdf",
} as const;

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "HTML", "CSS"],
  },
  {
    title: "Backend and API",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "Jest", "Vercel"],
  },
] as const;

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "NextTrack",
    subtitle: "Session-based music recommendation web app",
    description:
      "A web app that suggests songs based on the current listening session, with no account and no stored listening history.",
    highlights: [
      "Built the frontend with React and TypeScript.",
      "Built a backend REST API with Node.js and Express.js.",
    ],
    tech: ["React", "TypeScript", "HTML", "CSS", "Node.js", "Express.js"],
    github: "https://github.com/WeiSheng0429/CM3070_NextTrack",
    featured: true,
  },
  {
    title: "SGCharge",
    subtitle: "EV charging station finder mobile app",
    description:
      "A cross-platform mobile app that helps electric vehicle users in Singapore find and explore nearby charging stations in real time.",
    highlights: [
      "Integrated the LTA DataMall EV Charging Points API with device geolocation for location-based charger discovery, details, and connector compatibility.",
      "Built a mobile interface with interactive search, a station detail view, and a simulated wallet system.",
    ],
    tech: [
      "React Native",
      "Expo",
      "JavaScript",
      "REST APIs",
      "LTA DataMall API",
      "Geolocation",
    ],
    github: "https://github.com/WeiSheng0429/cm3050_SGCharge",
    featured: true,
  },
  {
    title: "Personal Portfolio Website Project",
    subtitle: "First portfolio site",
    description:
      "A simple personal portfolio site with responsive pages, a clean layout, and a focus on usability. This React version builds on it.",
    highlights: [
      "Deployed on Vercel, with version control managed through GitHub.",
    ],
    tech: ["HTML", "JavaScript", "CSS", "Vercel"],
    github: "https://github.com/WeiSheng0429/WS-Website",
    featured: false,
  },
];

export interface Role {
  role: string;
  company: string;
  period: string;
  points: string[];
}

/** Newest first. */
export const experience: Role[] = [
  {
    role: "Event Assistant",
    company: "Hean Lee Radio Service Pte Ltd",
    period: "July 2024 – August 2024",
    points: [
      "Promoted products to customers during events.",
      "Answered customer enquiries and assisted with product promotion.",
    ],
  },
  {
    role: "IT Engineering Intern",
    company: "Fonda Global Engineering Pte Ltd",
    period: "June 2020 – August 2020",
    points: [
      "Monitored CCTV cameras within HDB car parks.",
      "Assisted the engineer in troubleshooting the CCTV system.",
      "Assisted government agencies in case investigations.",
    ],
  },
  {
    role: "Event Assistant",
    company: "Fotorex Holding Sdn Bhd",
    period: "July 2019 – August 2019",
    points: [
      "Set up promotional booths and product displays.",
      "Handed out product samples, brochures, and flyers.",
      "Helped customers find suitable products.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Singapore Institute of Management (University of London)",
    period: "October 2023 – October 2026",
  },
  {
    degree: "Diploma in Information Technology",
    school: "INTI International University",
    period: "April 2019 – June 2021",
  },
] as const;

export const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
] as const;
