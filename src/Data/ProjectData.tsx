// File: data/projectsData.tsx
import { FaReact,   FaFigma, FaHtml5, FaCss3,  } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import uiUxImages from "../assets/image.png";
import designApp from "../assets/portofolio/growthub.jpeg";
import taskApps from "../assets/portofolio/mobile-apps.jpeg";
import IscLanding from "../assets/portofolio/isc-landing.png";
import mpbileApps from "../assets/portofolio/mobile-apps.jpeg";
import { Project } from "../hooks/useProjects";

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and skills built with React and styled with Tailwind CSS, featuring smooth animations with Framer Motion.",
    image: uiUxImages,
    link: "potfolio",
    github: "https://github.com/username/portfolio",
    featured: true,
    technologies: [
      <FaReact key="react" className="text-blue-500" />,
      <SiTailwindcss key="tailwind" className="text-blue-400" />,
      <SiTypescript key="typescript" className="text-blue-600" />,
    ],
    category: "web",
  },
  {
    title: "E-Learning App Design",
    description: "A comprehensive UI/UX design for an e-learning platform with user-friendly interface, interactive elements, and responsive layouts created in Figma.",
    image: designApp,
    link: "https://www.figma.com/proto/oPnMEhhuXxCnb7UfSd56mt/App-Growthub?node-id=8-10&starting-point-node-id=8%3A10&t=NK2LfH2bQCsw6MC4-1",
    featured: true,
    technologies: [<FaFigma key="figma" style={{ color: "#F24E1E" }} />],
    category: "design",
  },
  {
    title: "ISC Landing Page",
    description: "A modern landing page for ISC with responsive design, smooth animations, and optimized performance for all devices and browsers.",
    image: IscLanding,
    link: "https://isc-landing-page.vercel.app/",
    github: "https://github.com/username/isc-landing",
    technologies: [
      <FaHtml5 key="html" className="text-red-500" />,
      <SiJavascript key="js" className="text-yellow-500" />,
      <SiTailwindcss key="tailwind" className="text-blue-500" />,
    ],
    category: "web",
  },
  {
    title: "Task Management App",
    description: "A productivity app with task categorization, deadline reminders, and progress tracking to help users efficiently manage their daily tasks and projects.",
    image: taskApps,
    link: "task-app.vercel.app",
    github: "https://github.com/username/task-app",
    technologies: [
      <FaReact key="react" className="text-blue-500" />,
      <FaCss3 key="css" className="text-blue-400" />,
      <SiJavascript key="js" className="text-yellow-500" />,
    ],
    category: "web",
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard that aggregates data from multiple social media platforms, providing visual insights and performance metrics in real-time.",
    image: "-",
    link: "#",
    github: "https://github.com/username/social-dashboard",
    technologies: [
      <FaReact key="react" className="text-blue-500" />,
      <SiTailwindcss key="tailwind" className="text-blue-400" />,
      <SiTypescript key="typescript" className="text-blue-600" />,
    ],
    category: "design",
  },
  {
    title: "E-Commerce Mobile App",
    description: "A native mobile shopping application with product filtering, secure payment integration, and personalized recommendations.",
    image: mpbileApps,
    link: "#",
    technologies: [
      <FaReact key="react" className="text-blue-500" />,
      <SiTypescript key="typescript" className="text-blue-600" />,
    ],
    category: "backend",
  },
];