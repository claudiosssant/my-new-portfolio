import ProjectsHeader from "./components/project-header";
import ProjectCards from "./components/projects-card";

const Projects = () => {
  return ( 
    <div className="h-screen flex flex-col pt-28">
      <div className="h-1/4">
      <ProjectsHeader/>
      </div>
     <div className="h-3/4 gap-2 flex-col">
      <div className="flex gap-8 h-1/2">
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
      </div>
     </div>
    </div>
   );
}
 
export default Projects;