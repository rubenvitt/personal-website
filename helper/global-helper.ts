export const isPreview = process.env.NODE_ENV === 'development' || (process.env.NODE_ENV as string) === 'preview';
