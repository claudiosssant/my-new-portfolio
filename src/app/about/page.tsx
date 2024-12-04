import AboutContent from "./components/about-content";
import AboutImage from "./components/about-image";

const About = () => {
  return ( 
    <main className="flex justify-between h-screen">
      <AboutImage />
      <AboutContent />
    </main>
   );
}
 
export default About;