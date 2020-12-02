export const isPreview = process.env.NODE_ENV === 'development' || (process.env.NEXT_PUBLIC_ENV as string) === 'preview';
