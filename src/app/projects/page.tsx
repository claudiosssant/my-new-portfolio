import ProjectsHeader from "./components/project-header";
import ProjectCards from "./components/projects-card";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="h-1/4 pb-24">
        <ProjectsHeader />
      </div>
      <div className="h-3/4 flex flex-col p-32">
        <ProjectCards />
      </div>
    </div>
  );
};

export default Projects;
