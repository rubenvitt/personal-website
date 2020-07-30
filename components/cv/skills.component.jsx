import {Direction, skillList, SkillType} from "./skill-items.list";
import {DefaultSkillElement, SkillElement} from "./skill.component";
import React, {useState} from "react";
import {SlideOver} from "../shared/slideover.component";
import {SlideListElement} from "../shared/slidelist.component";

export const CvSkills = () => {
    const [slideOverState, setSlideOverState] = useState(false);
    const toggleSlideOverState = () => {
        setSlideOverState(!slideOverState);
    };

    const skills = skillList(null);
    return <div className="px-2 py-2">
        <h2 className="text-xl leading-6 font-medium text-gray-900">
            I speak following languages
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                skills.filter(x => x.type === SkillType.ProgrammingLanguage).slice(0, 5)
                    .map((skill, i) => <SkillElement skill={skill} key={i} listIndex={i}/>)
            }
            <DefaultSkillElement skills={skills} buttonHandler={toggleSlideOverState}/>
        </div>
        <SlideOver setSlideOverState={setSlideOverState} slideOverState={slideOverState}
                   contentFunction={slideOverContent} skillList={skills} />
    </div>
}

const slideOverContent = (skillList) => {

    return <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {
            skillList.map(skill => {
                return <SlideListElement key={skill.url} skill={skill} />
            })
        }
    </ul>
}
