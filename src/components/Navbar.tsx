import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaRegMoon, FaRegSun, FaBars, FaTimes, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const navRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

const textVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Lebih smooth dari sebelumnya
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Menggunakan cubic bezier yang lebih smooth
    },
  },
  hover: {
    scale: 1.2,
    color: "#00BFFF",
    textShadow: "0px 4px 15px rgba(0, 191, 255, 0.7)",
    transition: {
      type: "spring",
      stiffness: 250, 
      damping: 8,   
      mass: 0.5,    
    },
  },
};

  // Split text into characters for animation
  const nameText = "Ari Hyuk";
  const nameChars = nameText.split("");

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center px-10 z-50">
      {/* Animated Name */}
         <motion.h1 
      className="text-xl font-bold dark:text-white"
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex group">
        {nameChars.map((char, index) => (
          <motion.span 
            key={`name-${index}`} 
            variants={letterVariants}
            className="inline-block transition-transform duration-200 group-hover:text-blue-500 dark:group-hover:text-blue-400"
            whileHover={{ y: -5 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.h1>

      {/* Menu & Icons Wrapper */}
      <div className="flex items-center gap-4">
        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl dark:text-gray-100" />
          ) : (
            <FaBars className="text-2xl dark:text-gray-100" />
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 transition-all duration-300"
        >
          {darkMode ? (
            <FaRegSun className="text-yellow-400 text-xl" />
          ) : (
            <FaRegMoon className="text-gray-900 dark:text-gray-100 text-xl" />
          )}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`md:flex space-x-6 flex-grow justify-end absolute md:static bg-white dark:bg-gray-900 md:w-auto w-full top-16 left-0 md:flex-row flex-col md:items-center transition-all duration-300 ease-in-out ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {["hero", "about", "portfolio", "certifity"].map((section) => (
          <div
            key={section}
            ref={(el) => {
              navRefs.current[section] = el;
            }}
            className="relative"
          >
            <Link
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              className={`cursor-pointer dark:text-gray-100 p-4 md:p-0 font-semibold relative group flex items-center ${
                activeLink === section ? "text-blue-500" : ""
              }`}
              onClick={() => {
                setActiveLink(section);
                setMenuOpen(false);
              }}
              onSetActive={() => setActiveLink(section)}
            >
              {/* Text with Rocket beside it when active */}
              <div className="flex items-center">
                <span className="hover:text-blue-500 transition-all duration-300 capitalize">
                  {section}
                </span>
                
                {/* Rocket Icon */}
                {activeLink === section && (
                  <div className="ml-1 animate-pulse">
                    <FaRocket 
                      className="text-blue-500 animate-bounce text-sm" 
                    />
                  </div>
                )}
              </div>
              
              {/* Underline with epic animation */}
              {activeLink === section && (
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-pulse"></div>
                  <div className="h-0.5 w-0 bg-blue-500 animate-expandWidth"></div>
                </div>
              )}
            </Link>
          </div>
        ))}

        <Link
          to="hire-me"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 dark:text-gray-100"
          onClick={() => {
            setActiveLink("hire-me");
            setMenuOpen(false);
          }}
          onSetActive={() => setActiveLink("hire-me")}
        >
          Hire me
        </Link>
      </div>

      {/* Custom animation keyframes */}
      <style>{`
        @keyframes expandWidth {
          0% { width: 0; transform: translateX(0); }
          50% { width: 100%; transform: translateX(0); }
          100% { width: 0; transform: translateX(100%); }
        }
        
        .animate-expandWidth {
          animation: expandWidth 2s infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </nav>
  );
}