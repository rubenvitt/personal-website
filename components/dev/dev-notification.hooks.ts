import create, { State } from 'zustand';

type DevNotificationProps = {
    closed: boolean;
    closeNotification: () => void;
};

export const useDevNotificationStore = create<DevNotificationProps>((set) => ({
    closed: typeof window === 'undefined' ? false : localStorage?.getItem('devNotificationClosed') === 'true',
    closeNotification: () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('devNotificationClosed', 'true');
        }
        set({ closed: true });
    },
}));
