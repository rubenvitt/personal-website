import create from 'zustand';

type SeoProps = {
    title: string;
    description: string;
    setSeo: (title: string, description: string) => void;
};

export const useSeoHelperStore = create<SeoProps>((set) => ({
    title: 'Rubeen',
    description: 'Rubeen',
    setSeo: (title, description) => set({ title, description }),
}));
