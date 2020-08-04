import Head from 'next/head';
import React from 'react';
import { useTranslation } from '../../config/i18next.config';

export const PageHead = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <Head>
            <title>{t('website_title')}</title>
            <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
