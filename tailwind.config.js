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
            colors: {
                github: '#333',
                linkedin: '#0077b5',
                fastmail: '#243959',
                xing: '#026466',
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
};
