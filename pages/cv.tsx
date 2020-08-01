import React from 'react';
import {PageHead} from "../components/page-head/page-head.component";
import {PageContainer} from "../components/page-container/page-container.component";
import {useTranslation} from "react-i18next";
import {CvSummary} from "../components/cv/summary.component";
import {CvSkills} from "../components/cv/skills.component";
import {CvWork} from "../components/cv/work.component";

export default function Home() {
    const {t} = useTranslation("cv")
    return (
        <div>
            <PageHead />
            <PageContainer title={t('title')}>
                <CvSummary />
                <CvSkills />
                <CvWork />
            </PageContainer>
        </div>
    )
}
