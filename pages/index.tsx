import React from 'react';
import { MainLandingPage } from '../components/main/landing-page.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { PageHead } from '../components/page-head/page-head.component';
import {PageFooter} from "../components/page-footer/page-footer.component";

export default function Index(): JSX.Element {
    return (
        <div>
            <PageHead />
            <MainLandingPage />
            <PageFooter />
        </div>
    );
}
