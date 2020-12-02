import create from "zustand";

type GithubNotificationStore = {
    closed: boolean;
    closeNotification: () => void;
}

export const useGithubNotificationStore = create<GithubNotificationStore>(set => ({
    closed: typeof window === 'undefined' ? false : localStorage.getItem('githubNotificationClosed') === 'true',
    closeNotification: () => {
        if (typeof window === 'undefined') {
        } else {
            localStorage.setItem('githubNotificationClosed', 'true');
        }
        set({closed: true});
    }
}));