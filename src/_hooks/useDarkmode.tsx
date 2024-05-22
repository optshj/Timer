'use client';
import { useEffect, useState } from 'react';

export default function useDarkMode(){
    const [theme, setTheme] = useState<'light'|'dark'>('dark');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme as 'light' | 'dark');
            document.body.dataset.theme = localTheme;
        } else {
            setTheme('light');
            document.body.dataset.theme = 'light';
        }
    },[]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.body.dataset.theme = newTheme;
    };
    return {theme, toggleTheme};
};