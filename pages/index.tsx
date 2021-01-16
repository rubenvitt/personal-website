import React, { useEffect } from 'react';
import { MainLandingPage } from '../components/main/landing-page.component';
import { useSeoHelperStore } from '../helper/seo.helper';

export default function Index(): JSX.Element {
    const { setTitle } = useSeoHelperStore();

    useEffect(() => {
        setTitle('Rubeen • Ruben Vitt (FullStack Developer)');
    });

    return (
        <>
            <MainLandingPage />
        </>
    );
}
