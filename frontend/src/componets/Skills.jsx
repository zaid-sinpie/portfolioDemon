import { forwardRef } from "react";

import SkillsCard from "./SkillsCard";
import { dataForSkills } from "../data";

const Skills = forwardRef(function ({ id },ref) {
  return (
    <section ref={ref}
      id={id}
      className="w-full h-screen max-2xl:h-auto max-sm:h-auto flex flex-col text-start justify-center items-center py-8"
    >
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
});

export default Skills;
