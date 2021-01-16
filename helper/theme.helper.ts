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
            console.log('first time of setting dark to ', localStorage.getItem('theme'));
            setIsDark(localStorage.getItem('theme') === 'dark');
        }
    }, [process.browser]);

    useEffect(() => {
        if (process.browser) {
            if (isDark) {
                console.log('setting theme to dark');
                localStorage.setItem('theme', 'dark');
                document.documentElement.classList.add('dark');
            } else {
                console.log('setting theme to light');
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
