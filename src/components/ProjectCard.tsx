import { motion } from "framer-motion";
import { Project } from "../hooks/useProjects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { itemVariants, buttonVariants } from "../utils/animation";

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick: () => void;
};

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  if (!project) return null; // Pastikan project ada sebelum render

  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative flex flex-col h-full"
      variants={itemVariants}
      onClick={onClick}
    >
      {/* Badge Featured */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full shadow-md">
            Featured
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-lg" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-white text-lg" />
              </a>
            )}
          </div>
        </div>

        {/* Image */}
        <img
          src={project.image || "/placeholder.jpg"} // Tambahkan placeholder jika tidak ada gambar
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400 tracking-wider mb-2">
          {project.category || "Uncategorized"}
        </span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title || "Untitled Project"}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
          {project.description || "No description available."}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xl transition-transform hover:scale-125">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <motion.button
          className="w-full py-2 text-center font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;