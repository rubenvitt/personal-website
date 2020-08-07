import Head from 'next/head';
import React from 'react';

export const PageHead = (): JSX.Element => {
    return (
        <Head>
            <title>Rubeen</title>
            <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
