import ProjectsHeader from "./components/project-header";
import ProjectCards from "./components/projects-card";

const Projects = () => {
  return ( 
    <div className="h-screen flex flex-col pt-28">
      <div className="h-1/3">
      <ProjectsHeader/>
      </div>
     <div className="h-2/3 border border-green-400 flex-col">
      <div className="flex">
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
      </div>
      <div className="flex">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
     </div>
    </div>
   );
}
 
export default Projects;