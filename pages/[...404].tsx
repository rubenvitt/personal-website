import React, { useEffect } from 'react';
import { NotFoundComponent } from '../components/shared/not-found.component';
import { useSeoHelperStore } from '../helper/seo.helper';

export default function Home(): JSX.Element {
    const { setSeo } = useSeoHelperStore();

    useEffect(() => {
        setSeo(
            'Rubeen • Website not found',
            'This page was not found.',
            <>
                <meta name="robots" content="noindex" />
            </>,
        );
    }, []);

    return <NotFoundComponent />;
}
