import '../styles/index.scss';
import NextI18Next from '../config/i18next.config';
import React from 'react';
import '../components/navbar/style.scss';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }): JSX.Element {
    return <Component {...pageProps} />;
}

export default NextI18Next.appWithTranslation(MyApp);
