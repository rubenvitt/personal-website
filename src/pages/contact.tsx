import React from 'react';
import { PageHead } from '../components/page-head/page-head.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { ContactComponent } from '../components/contact/contact.component';

export default function Home(): JSX.Element {
    return (
        <div>
            <PageHead />
            <PageContainer title={''}>
                <ContactComponent />
            </PageContainer>
        </div>
    );
}
