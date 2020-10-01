import React from 'react';
import { PageHead } from '../components/page-head/page-head.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { CvSummary } from '../components/cv/summary.component';
import { CvSkills } from '../components/cv/skills.component';
import { CvWork } from '../components/cv/work.component';
import { CvEducation } from '../components/cv/education.component';
import { CvHumanLanguages } from '../components/cv/human_languages.component';

export default function Home(): JSX.Element {
    return (
        <div>
            <PageHead />
            <PageContainer>
                <CvSummary />
                <CvSkills />
                <CvWork />
                <CvEducation />
                <CvHumanLanguages />
                <div className="pb-20 lg:pb-28" />
            </PageContainer>
        </div>
    );
}
