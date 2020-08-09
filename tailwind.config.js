// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                xing: '#006567',
                linkedin: '#0077B5',
                github: '#181717',
                tutanota: '#840010',
                calendly: '#00a0ff',
            },
        },
    },
    plugins: [require('@tailwindcss/ui')],
};
