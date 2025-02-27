import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { projectsData } from "../Data/ProjectData";
import { Project } from "../hooks/useProjects";
import ProjectHeader from "../components/ProjectHeaders";
import ProjectFilters from "../components/ProjectFilter";
import ProjectsGrid from "../components/ProjectGrid";
import ProjectModal from "../components/ProjectModal";
import NoResultsFound from "../components/NoResultFound";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "design" | "backend">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const filteredProjects = projectsData
    .filter(project => activeFilter === "all" || project.category === activeFilter)
    .filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  useEffect(() => {
    console.log("Filtered Projects:", filteredProjects);
    console.log("Displayed Projects:", displayedProjects);
  }, [filteredProjects, displayedProjects]);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <ProjectHeader />
        <ProjectFilters 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <ProjectsGrid
              ref={ref}
              controls={controls}
              displayedProjects={displayedProjects}
              setSelectedProject={setSelectedProject} containerVariants={undefined}            />
          ) : (
            <NoResultsFound 
              resetFilters={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
            />
          )}
        </AnimatePresence>
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-blue-600 shadow-md transition-all duration-300"
            >
              {showAll ? "Show Less" : `View All (${filteredProjects.length})`}
            </motion.button>
          </div>
        )}
        <ProjectModal 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject} 
        />
      </div>
    </div>
  );
}