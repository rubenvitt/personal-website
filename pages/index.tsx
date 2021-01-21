import React, { useEffect } from 'react';
import { MainLandingPage } from '../components/main/landing-page.component';
import { useSeoHelperStore } from '../helper/seo.helper';

export default function Index(): JSX.Element {
    const { setSeo } = useSeoHelperStore();

    useEffect(() => {
        setSeo(
            'Rubeen • Ruben Vitt (FullStack Developer)',
            'Check out the personal website of Ruben Vitt (Rubeen) - a FullStack developer from Germany.',
        );
    }, []);

    return (
        <>
            <MainLandingPage />
        </>
    );
}
