import React, { useEffect } from 'react';
import { PageHead } from '../components/page-head/page-head.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { CvSummary } from '../components/cv/summary.component';
import { CvLanguageSkills } from '../components/cv/language_skills.component';
import { CvEducation } from '../components/cv/education.component';
import { CvHumanLanguages } from '../components/cv/human_languages.component';
import { CvOtherSkills } from '../components/cv/other_skills.component';
import CvWork from '../components/cv/work.component';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { fetchCertItems, fetchSkillItems, fetchStudyItems, fetchWorkItems } from '../helper/http-helper';
import {
    calculateCertCount,
    filterHumanLanguageSkills,
    filterOtherSkills,
    filterProgrammingLanguages,
} from '../helper/skill-helper';
import { calculateLastWork, remapWorkDurationToDate } from '../helper/work-helper';
import { remapStudyDurationToDate } from '../helper/study-helper';
import { GraphQLClient } from 'graphql-request';
import { URLGraphCMS } from '../config/constants.config';
import { useSeoHelperStore } from '../helper/seo.helper';

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const graphcms = new GraphQLClient(URLGraphCMS);
        const workItems = await fetchWorkItems(graphcms).then((items) => {
            return items.sort((a, b) => ('' + b.duration.start).localeCompare(a.duration.start + ''));
        });
        const skillItems = await fetchSkillItems(graphcms).then((items) => {
            return items.sort((a, b) => a.title.localeCompare(b.title)).sort((a, b) => b.level - a.level);
        });
        const studyItems = await fetchStudyItems(graphcms);
        const certItems = await fetchCertItems(graphcms);
        return {
            props: {
                workList: workItems,
                skillList: skillItems,
                studyList: studyItems,
                certList: certItems,
            },
            revalidate: 1,
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                workList: [],
                skillList: [],
                studyList: [],
                certList: [],
            },
            revalidate: 1,
        };
    }
};

export default function Home({
    workList,
    skillList,
    studyList,
    certList,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    remapWorkDurationToDate(workList);
    remapStudyDurationToDate(studyList);

    const { setSeo } = useSeoHelperStore();

    useEffect(() => {
        setSeo(
            'Rubeen • Resumé',
            'Get to know more about Ruben Vitt (Developer from Germany) with his resumé. Learn about his work experience, education, technologies & mindset.',
        );
    });

    return (
        <div>
            <CvSummary certCount={calculateCertCount(certList)} lastWork={calculateLastWork(workList)} />
            <CvLanguageSkills languages={filterProgrammingLanguages(skillList)} />
            <CvOtherSkills skills={filterOtherSkills(skillList)} />
            <CvWork workItems={workList} />
            <CvEducation studyList={studyList} />
            <CvHumanLanguages languages={filterHumanLanguageSkills(skillList)} />
        </div>
    );
}
