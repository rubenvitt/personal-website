import '../styles/index.scss';
import '../styles/tailwind/tailwind.base.styles.scss';
import '../styles/tailwind/tailwind.components.styles.scss';
import '../styles/tailwind/tailwind.utility.styles.scss';
import React from 'react';
import '../components/navbar/style.scss';
import { GithubNotification } from '../components/github-notification/github-notification.component';
import { PageFooter } from '../components/page-footer/page-footer.component';
import { PageHead } from '../components/page-head/page-head.component';
import { Container } from '../components/main/landing-page.component';
import { isPreview } from '../helper/global-helper';
import { DevNotification } from '../components/dev/dev-notification.component';

function MyApp({ Component, pageProps }): JSX.Element {
    console.log('Hey, are you in dev-mode ? ', isPreview);
    console.log('publicENV ? ', process.env.NEXT_PUBLIC_ENV);
    console.log('env ? ', process.env.ENV);

    return (
        <div>
            <style jsx global>{`
                body: {
                    margin: 0;
                }
            `}</style>
            <PageHead />
            <Container>
                <Component {...pageProps} />
            </Container>
            <GithubNotification />
            {isPreview && <DevNotification />}
            <PageFooter />
        </div>
    );
}

export default MyApp;
