import '../styles/index.scss';
import React from 'react';
import '../components/navbar/style.scss';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
