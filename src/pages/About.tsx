import { motion, useAnimation, useInView } from "framer-motion";
import { FaIcons } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import profile from "../assets/about-profile.jpeg";
import Carousel from "../components/Carousel";




export default function About() {
  const [selectedTab, setSelectedTab] = useState("skills");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: { scale: 1.03, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" },
    tap: { scale: 0.98 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: { scale: 1.03, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 0.6,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.3 + (custom * 0.15)
      }
    })
  };

  const tabVariants = {
    inactive: { opacity: 0.6, y: 5 },
    active: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const experienceData = [
    {
      period: "2020 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Lead development of responsive web applications using React, Next.js, and Tailwind CSS. Implemented state management with Redux and improved site performance by 40%."
    },
    {
      period: "2018 - 2020",
      role: "UI/UX Designer",
      company: "Creative Solutions",
      description: "Designed user interfaces for mobile and web applications. Created wireframes, prototypes, and conducted user testing to improve user experience."
    }
  ];

  const servicesData = [
    {
      title: "Web Development",
      icon: "💻",
      desc: "Custom websites built with the latest technologies including React, Next.js, and Tailwind CSS."
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      desc: "Intuitive and user-friendly interfaces designed with Figma and Adobe XD."
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background animated shapes */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20 filter blur-3xl"
        variants={shapeVariants}
        custom={0}
        initial="hidden"
        animate={controls}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-purple-100 dark:bg-purple-900 dark:bg-opacity-20 filter blur-3xl"
        variants={shapeVariants}
        custom={1}
        initial="hidden"
        animate={controls}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-10 filter blur-3xl"
        variants={shapeVariants}
        custom={2}
        initial="hidden"
        animate={controls}
      />

      <motion.div 
        className="max-w-6xl mx-auto w-full z-10"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          className="flex items-center justify-center mb-12"
          variants={itemVariants}
        >
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center relative z-10">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h1>
            <div className="absolute -bottom-3 left-0 right-0 h-3 bg-blue-200 dark:bg-blue-700 opacity-40 rounded-full transform skew-x-12"></div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.div 
            className="w-full lg:w-1/3 order-2 lg:order-1"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-full transform transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-sm opacity-70"></div>
                <motion.img 
                  src={profile} 
                  alt="John Doe" 
                  className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-white dark:border-gray-800"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">Ari Awaludin</h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-center">Full Stack Developer</p>
              
              <div className="flex justify-center space-x-4 mb-6">
                {/* Social Media Icons */}
                {['github', 'linkedin', 'twitter', 'dribbble'].map((platform, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`fa fa-${platform}`}></i>
                  </motion.a>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">ariawl0209@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Serang, Indonesia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <i className="fa fa-phone"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">+62 858 9370 7918</span>
                </div>
              </div>
              
              <motion.button 
                className="w-full mt-8 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open('/cv_ari_awaludin.pdf', '_blank')}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-2/3 order-1 lg:order-2 space-y-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate Full Stack Developer with over 5 years of experience in creating modern web applications. I specialize in JavaScript frameworks like React and Next.js, and I'm committed to building accessible and user-friendly websites.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 py-2 px-4 rounded-lg text-center text-gray-700 dark:text-gray-200 font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: '#EEF2FF', color: '#4F46E5' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-700 mb-8">
                {['skills', 'experience', 'services'].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`pb-4 px-2 capitalize font-medium relative ${
                      selectedTab === tab 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                    variants={tabVariants}
                    animate={selectedTab === tab ? "active" : "inactive"}
                  >
                    {tab}
                    {selectedTab === tab && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                        layoutId="tabIndicator"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {selectedTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Carousel />
                </motion.div>
              )}
              
              {selectedTab === "experience" && (
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {experienceData.map((exp, index) => (
                    <motion.div 
                      key={index}
                      className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-200 dark:before:bg-blue-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 } 
                      }}
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 transform -translate-x-1/2"></div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.period}</span>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-1">{exp.role}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              {selectedTab === "services" && (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {servicesData.map((service, index) => (
                    <motion.div 
                      key={index}
                      className="p-6 border border-gray-100 dark:border-gray-700 rounded-xl"
                      whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: index * 0.1 } 
                      }}
                    >
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}