import create from 'zustand';

type SeoProps = {
    title: string;
    description: string;
    additionalHeader?: JSX.Element;
    setSeo: (title: string, description: string, additionalHeader?: JSX.Element) => void;
};

export const useSeoHelperStore = create<SeoProps>((set) => ({
    title: 'Rubeen',
    description: 'Rubeen',
    setSeo: (title, description, additionalHeader) => set({ title, description, additionalHeader }),
}));
