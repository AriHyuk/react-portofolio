import { Link } from "react-scroll";
import { motion } from "framer-motion";
import profileImage from "../assets/profile_ari.png";

export default function HeroSection() {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Staggered text animation for the heading
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Profile image animation
  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.4
      }
    },
    hover: {
    scale: 1.05,
    rotate: 2,
    boxShadow: "0px 0px 30px rgba(59,130,246,0.6)", // efek glow biru
    transition: { duration: 0.3 }
  }
  };

  // Background shape animations
  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 0.8,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.2 + (custom * 0.1)
      }
    })
  };

  // Social icons animation

  // Button animations
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        delay: 0.8 + (custom * 0.1)
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 }
    }
  };

  // Split text into characters for animation
  const headingText = "Full-Stack";
  const headingChars = headingText.split("");
  
  const subHeadingText = "Web Developer";
  const subHeadingChars = subHeadingText.split("");

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-32 min-h-screen overflow-hidden"
    >
      {/* Background animated shapes */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20 filter blur-3xl"
        variants={shapeVariants}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-purple-100 dark:bg-purple-900 dark:bg-opacity-20 filter blur-3xl"
        variants={shapeVariants}
        custom={1}
        initial="hidden"
        animate="visible"
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-10 filter blur-3xl"
        variants={shapeVariants}
        custom={2}
        initial="hidden"
        animate="visible"
      />

      {/* Left Section - Text */}
      <div className="md:w-1/2 text-center md:text-left z-10">
        <motion.p 
          className="text-gray-500 dark:text-gray-400 mb-2 text-lg font-medium"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Hello, I'm Ari <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-500">&lt;/&gt;</code>
        </motion.p>

        {/* Animated heading with letter-by-letter animation */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap">
            {headingChars.map((char, index) => (
              <motion.span 
                key={`heading-${index}`} 
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="text-blue-600 dark:text-blue-400 flex flex-wrap mt-2">
            {subHeadingChars.map((char, index) => (
              <motion.span 
                key={`subheading-${index}`} 
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p 
          className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Saya adalah seorang Full-Stack Web Developer yang sedang menempuh
          pendidikan di Universitas Pamulang. Spesialisasi saya mencakup React, Node.js, dan desain UI/UX.
        </motion.p>
        

        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.div
            variants={buttonVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium shadow-lg flex items-center justify-center"
            >
              View My Work
            </Link>
          </motion.div>
          
          <motion.div
            variants={buttonVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
          </motion.div>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <motion.div
        className="md:w-1/2 mt-20 md:mt-0 flex justify-center md:justify-end z-10"
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full opacity-20 dark:opacity-40"
            variants={shapeVariants}
            custom={3}
            initial="hidden"
            animate="visible"
          />
          <motion.div 
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 dark:opacity-40"
            variants={shapeVariants}
            custom={4}
            initial="hidden"
            animate="visible"
          />
          
          {/* Profile container with image */}
          <motion.div 
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-bl-[40px] rounded-tr-[40px] flex items-end justify-center overflow-hidden shadow-2xl"
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.img
              src={profileImage}
              alt="Ari Profile"
              className="absolute top-10 w-full h-auto object-cover"
              whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59,130,246,0.8)",
              transition: { duration: 0.3 },
              }}
            />
            
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}