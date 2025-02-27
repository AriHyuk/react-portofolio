// File: components/NoResultsFound.tsx
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animation";

type NoResultsFoundProps = {
  resetFilters: () => void;
};

const NoResultsFound = ({ resetFilters }: NoResultsFoundProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <svg className="w-20 h-20 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-1">No projects found</h3>
      <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onClick={resetFilters}
      >
        Reset filters
      </button>
    </motion.div>
  );
};

export default NoResultsFound;