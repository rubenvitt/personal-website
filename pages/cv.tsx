import React from 'react';
import { PageHead } from '../components/page-head/page-head.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { CvSummary } from '../components/cv/summary.component';
import { CvLanguageSkills } from '../components/cv/language_skills.component';
import { CvEducation } from '../components/cv/education.component';
import { CvHumanLanguages } from '../components/cv/human_languages.component';
import { CvOtherSkills } from '../components/cv/other_skills.component';
import { PageFooter } from '../components/page-footer/page-footer.component';
import CvWork from '../components/cv/work.component';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { fetchSkillItems, fetchWorkItems } from '../helper/http-helper';
import {
    calculateCertCount,
    filterHumanLanguageSkills,
    filterOtherSkills,
    filterProgrammingLanguages,
} from '../helper/skill-helper';
import { calculateLastWork, remapWorkDurationToDate } from '../helper/work-helper';

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const workItems = await fetchWorkItems();
        const skillItems = await fetchSkillItems();
        return {
            props: {
                workList: workItems,
                skillList: skillItems,
            },
            revalidate: 1,
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                workList: [],
                skillList: [],
            },
            revalidate: 1,
        };
    }
};

export default function Home({ workList, skillList }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    remapWorkDurationToDate(workList);
    return (
        <div>
            <PageHead />
            <PageContainer>
                <CvSummary certCount={calculateCertCount(skillList)} lastWork={calculateLastWork(workList)} />
                <CvLanguageSkills languages={filterProgrammingLanguages(skillList)} />
                <CvOtherSkills skills={filterOtherSkills(skillList)} />
                <CvWork workItems={workList} />
                <CvEducation />
                <CvHumanLanguages languages={filterHumanLanguageSkills(skillList)} />
            </PageContainer>
            <PageFooter />
        </div>
    );
}
