import { forwardRef } from "react";
import { motion, AnimationControls } from "framer-motion";
import { Project } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";

type ProjectsGridProps = {
  controls: AnimationControls;
  containerVariants: any;
  displayedProjects: Project[];
  setSelectedProject: (project: Project) => void;
};

const ProjectsGrid = forwardRef<HTMLDivElement, ProjectsGridProps>(
  ({ controls, containerVariants, displayedProjects, setSelectedProject }, ref) => {
    return (                              
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        exit="hidden"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard 
            key={`${project.title}-${index}`}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>
    );
  }
);

ProjectsGrid.displayName = "ProjectsGrid";

export default ProjectsGrid;