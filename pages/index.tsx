import React, {useState} from 'react';
import {PageHead} from "../components/page-head/page-head.component";
import {PageContainer} from "../components/page-container/page-container.component";
import {useTranslation} from "react-i18next";

export default () => {
    const {t} = useTranslation('home_page')
    return (
        <div>
            <PageHead />
            <PageContainer title={t('title')}>
                Test
            </PageContainer>
        </div>
    )
}
