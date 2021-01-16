import Head from 'next/head';
import React from 'react';
import { useSeoHelperStore } from '../../helper/seo.helper';

export const PageHead = (): JSX.Element => {
    const { title } = useSeoHelperStore();

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
