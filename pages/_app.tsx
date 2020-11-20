import '../styles/index.scss';
import '../styles/tailwind/tailwind.base.styles.scss';
import '../styles/tailwind/tailwind.components.styles.scss';
import '../styles/tailwind/tailwind.utility.styles.scss';
import React from 'react';
import '../components/navbar/style.scss';
import '../styles/markdown.styles.scss';
import { GithubNotification } from '../components/github-notification/github-notification.component';
import { PageFooter } from '../components/page-footer/page-footer.component';
import { PageHead } from '../components/page-head/page-head.component';
import { Container } from '../components/main/landing-page.component';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }): JSX.Element {
    return (
        <>
            <PageHead />
            <Container>
                <Component {...pageProps} />
            </Container>
            <GithubNotification />
            <PageFooter />
        </>
    );
}

export default MyApp;
