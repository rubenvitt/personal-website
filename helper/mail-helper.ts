const encoded = 'bWFpbHRvOmNvbnRhY3RAcnViZWVuLm9uZQ==';

export const calculateMail = (): string => {
    return atob(encoded);
};
