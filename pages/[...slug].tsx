import React, { useEffect } from 'react';
import { NotFoundComponent } from '../components/shared/not-found.component';
import { useSeoHelperStore } from '../helper/seo.helper';

export default function Home(): JSX.Element {
    const { setTitle } = useSeoHelperStore();

    useEffect(() => {
        setTitle('Rubeen • Website not found');
    });

    return <NotFoundComponent />;
}
