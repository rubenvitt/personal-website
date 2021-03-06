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
            typography: (theme) => ({
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
                dark: {
                    css: {
                        img: {
                            'border-radius': '.25em',
                            'max-height': '100vh',
                            'margin-right': 'auto',
                            'margin-left': 'auto',
                        },
                        h2: {
                            color: colors.gray['200'],
                        },
                    },
                },
            }),
            colors: {
                github: '#333',
                linkedin: '#0077b5',
                fastmail: '#243959',
                xing: '#026466',
                ...colors,
            },
        },
    },
    purge: false,
    plugins: [require('@tailwindcss/typography')],
    variants: {
        backgroundColor: ['responsive', 'dark', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'dark', 'hover', 'focus', 'group-hover'],
        backgroundOpacity: ['responsive', 'dark', 'hover', 'focus', 'group-hover'],
        typography: ['responsive', 'dark'],
        display: ['responsive', 'dark'],
    },
    darkMode: 'class',
};
