import SkillsCard from "./SkillsCard";
import { dataForSkills } from "../data";

const Skills = () => {
  return (
    <section className="w-full h-screen max-sm:h-auto flex justify-center items-center">
      <div className="h-auto flex flex-wrap gap-4">
        {dataForSkills.map((item, index) => {
          return (
            <SkillsCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
