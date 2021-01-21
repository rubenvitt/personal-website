import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

export const useDarkMode: () => [boolean, () => void] = () => {
    const systemPrefersDark = useMediaQuery(
        {
            query: '(prefers-color-scheme: dark)',
        },
        undefined,
        (prefersDark) => {
            setIsDark(prefersDark);
        },
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
        if (process.browser) {
            const localTheme = localStorage.getItem('theme');

            setIsDark(localTheme ? localTheme === 'dark' : systemPrefersDark);
        }
    }, [process.browser]);

    useEffect(() => {
        if (process.browser) {
            if (isDark) {
                localStorage.setItem('theme', 'dark');
                document.documentElement.classList.add('dark');
            } else {
                localStorage.setItem('theme', 'light');
                document.documentElement.classList.remove('dark');
            }
        }
    }, [isDark]);

    const toggleIsDark = () => {
        setIsDark(!isDark);
    };

    return [isDark, toggleIsDark];
};
