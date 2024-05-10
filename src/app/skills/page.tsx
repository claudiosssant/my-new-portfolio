import SkillText from "./components/skill-texts";
import SkillCarousel from "./components/skill-carousel";

const Skills = () => {
  return (
    <div className="h-screen flex flex-col pt-28">
      <div className="pb-16">
        <SkillText />
      </div>
      <div>
        {
          <SkillCarousel />
        }
      </div>
    </div>
  );
};

export default Skills;
