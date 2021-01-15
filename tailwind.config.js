const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    experimental: {},
    theme: {
        extend: {
            typography: {
                default: {
                    css: {
                        img: {
                            'border-radius': '.25em',
                            'max-height': '100vh',
                            'margin-right': 'auto',
                            'margin-left': 'auto',
                        },
                    },
                },
            },
            colors: {
                github: '#333',
                linkedin: '#0077b5',
                fastmail: '#243959',
                xing: '#026466',
                ...colors,
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
    variants: {
        backgroundColor: ['responsive', 'dark', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'dark', 'hover', 'focus', 'group-hover'],
    },
    darkMode: 'class',
};
