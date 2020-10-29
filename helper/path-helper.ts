export const addLeadingSlash: (url?: string) => string = (url = '') => {
    return url.startsWith('/') ? url : `/${url}`;
};
