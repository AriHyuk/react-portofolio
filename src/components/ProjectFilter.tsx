import { motion } from "framer-motion";

type FilterButtonType = {
  id: "all" | "web" | "design" | "backend";
  label: string;
};

type ProjectFiltersProps = {
  activeFilter: "all" | "web" | "design" | "backend";
  setActiveFilter: (filter: "all" | "web" | "design" | "backend") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const ProjectFilters = ({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
}: ProjectFiltersProps) => {
  const filterButtons: FilterButtonType[] = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "design", label: "Design" },
    { id: "backend", label: "Back End" },
  ];

  return (
    <motion.div
      className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {filterButtons.map((button) => (
          <motion.button
            key={button.id}
            onClick={() => setActiveFilter(button.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === button.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button.label}
          </motion.button>
        ))}
      </div>

      {/* Search box */}
      <div className="relative w-full md:w-72">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-gray-200"
        />
        <svg
          className="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default ProjectFilters;