import React from 'react';
import {PageHead} from "../components/page-head/page-head.component";
import {PageContainer} from "../components/page-container/page-container.component";

export default function Home() {
    return (
        <div>
            <PageHead />
            <PageContainer>
                Test-Page
            </PageContainer>
        </div>
    )
}