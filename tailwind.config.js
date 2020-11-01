module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    experimental: {
        darkModeVariant: true,
    },
    theme: {
        extend: {
            typography: {
                default: {
                    css: {
                        img: {
                            'border-radius': '.25em',
                            'max-height': '100vh',
                            'margin-right': 'auto',
                            'margin-left': 'auto'
                        }
                    }
                }
            },
            colors: {
                github: '#333',
                linkedin: '#0077b5',
                fastmail: '#243959',
                xing: '#026466',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },

};
