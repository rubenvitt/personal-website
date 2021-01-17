import Head from 'next/head';
import React from 'react';
import { useSeoHelperStore } from '../../helper/seo.helper';

export const PageHead = (): JSX.Element => {
    const { title, description } = useSeoHelperStore();

    return (
        <Head>
            <title>{title}</title>
            <meta name={'description'} content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
