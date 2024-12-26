import AboutContent from "./components/about-content";
import AboutImage from "./components/about-image";

const About = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch h-screen p-4 lg:p-8">
      <section className="w-full lg:w-1/2 flex justify-center items-center lg:pr-4">
        <AboutImage />
      </section>

      <section className="w-full lg:w-1/2 flex items-center justify-center lg:pl-4">
        <AboutContent />
      </section>
    </main>
  );
};

export default About;
