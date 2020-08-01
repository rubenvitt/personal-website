import React from 'react';
import {PageHead} from "../components/page-head/page-head.component";
import {PageContainer} from "../components/page-container/page-container.component";
import {useTranslation} from "react-i18next";
import {PortfolioList} from "../components/portfolio/portfolio.list.component";

export default function Home() {
    const {t} = useTranslation("portfolio")
    return (
        <div>
            <PageHead />
            <PageContainer title={t('title')}>
                <PortfolioList />
            </PageContainer>
        </div>
    )
}
