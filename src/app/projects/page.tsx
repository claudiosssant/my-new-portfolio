import ProjectsHeader from "./components/project-header";
import ProjectCards from "./components/projects-card";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="h-1/4 pb-24">
        <ProjectsHeader />
      </div>
      <div className="h-3/4 flex-col">
        <div className="grid grid-cols-2 px-64 sm:grid-cols-2 gap-4">
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
        </div>
      </div>
    </div>
  );
};

export default Projects;
