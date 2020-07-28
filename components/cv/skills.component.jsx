import {Direction, skillList, SkillType} from "./skill-items.list";
import {DefaultSkillElement, SkillElement} from "./skill.component";
import React from "react";
import {SlideOver} from "../shared/slideover.component";

export const CvSkills = () => {
    const skills = skillList(null);
    return <div className="px-2 py-2">
        <h2 className="text-xl leading-6 font-medium text-gray-900">
            I speak following languages
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                skills.filter(x => x.type === SkillType.ProgrammingLanguage).slice(0, 5)
                    .map((skill, i) => <SkillElement skill={skill} listIndex={i}/>)
            }
            <DefaultSkillElement skills={skills.length}/>
        </div>
        <SlideOver />
    </div>


}
