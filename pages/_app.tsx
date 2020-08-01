import '../styles/index.scss'
import NextI18Next from "../config/i18next.config";
import React from "react";
import '../components/navbar/style.scss'

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default NextI18Next.appWithTranslation(MyApp)
