import Head from 'next/head';
import React, { useEffect } from 'react';
import { useSeoHelperStore } from '../../helper/seo.helper';

export const PageHead = (): JSX.Element => {
    const { title, description, additionalHeader } = useSeoHelperStore();

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
                <link rel="apple-touch-icon" sizes="57x57" href="/assets/icon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/assets/icon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/icon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/assets/icon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/assets/icon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/icon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/icon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/icon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/icon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/icon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/icon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon/favicon-16x16.png" />
                <link rel="manifest" href="/assets/icon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                {additionalHeader}
            </Head>
        </>
    );
};
