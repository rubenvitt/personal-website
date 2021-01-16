import create from 'zustand';

type SeoProps = {
    title: string;
    setTitle: (title: string) => void;
};

export const useSeoHelperStore = create<SeoProps>((set) => ({
    title: 'Rubeen',
    setTitle: (title) => set({ title }),
}));
