const ni18Next = require('next-i18next').default

const NextI18Next = new ni18Next({
    defaultLanguage: 'en',
    otherLanguages: ['de'],
    localePath: 'public/locales'
});

if (process.env.NODE_ENV !== 'production') {
    const { applyClientHMR } = require('i18next-hmr');
    applyClientHMR(NextI18Next.i18n);
}

module.exports = NextI18Next
