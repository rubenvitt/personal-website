import '../styles/index.css'
import NextI18Next from "../config/i18next.config";
import React from "react";

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default NextI18Next.appWithTranslation(MyApp)
