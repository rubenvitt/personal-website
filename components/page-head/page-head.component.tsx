import Head from 'next/head';
import React, { useEffect } from 'react';
import { useSeoHelperStore } from '../../helper/seo.helper';

export const PageHead = (): JSX.Element => {
    const { title, description } = useSeoHelperStore();

    useEffect(() => {
        if (process.browser) {
            document.documentElement.lang = 'en';
        }
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={'description'} content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
};
