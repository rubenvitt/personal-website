import React from 'react';
import { PageHead } from '../components/page-head/page-head.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { PortfolioList } from '../components/portfolio/portfolio.list.component';

export default function Home(): JSX.Element {
    return (
        <div>
            <PageHead />
            <PageContainer title={'Portfolio'}>
                <PortfolioList />
            </PageContainer>
        </div>
    );
}
