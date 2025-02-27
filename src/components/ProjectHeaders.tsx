import { motion } from "framer-motion";

const ProjectHeader = () => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-block relative mb-2">
        <span className="absolute -inset-1 -skew-y-3 bg-blue-100 dark:bg-blue-900 opacity-30 rounded-lg"></span>
        <h1 className="relative text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h1>
      </div>
      <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-300 mt-4">
        A showcase of my work across web development, design, and mobile applications.
        Each project represents unique challenges and creative solutions.
      </p>
    </motion.div>
  );
};

export default ProjectHeader;