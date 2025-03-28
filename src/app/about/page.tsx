import AboutContent from "./components/about-content";
import AboutImage from "./components/about-image";

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <section className="w-full lg:w-1/2">
            <AboutImage />
          </section>
          <section className="w-full lg:w-1/2">
            <AboutContent />
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;