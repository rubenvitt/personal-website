import React from 'react';
import { PageHead } from '../components/page-head/page-head.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { PageFooter } from '../components/page-footer/page-footer.component';

export default function Index(): JSX.Element {
    return (
        <div>
            <PageHead />
            <PageContainer title="Test">Test</PageContainer>
            <PageFooter />
        </div>
    );
}
