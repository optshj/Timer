import { useEffect, useState } from 'react';

export default function useDarkmode(){
    const [theme, setTheme] = useState<'light'|'dark'>('light');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        const prefersDark = window.matchMedia("(prefers-color-scheme: Dark)").matches;

        if (localTheme) {
            setTheme(localTheme as 'light' | 'dark');
            document.body.dataset.theme = localTheme;
        } else {
            setTheme(prefersDark ? 'dark' : 'light');
            document.body.dataset.theme = prefersDark ? 'dark' : 'light';
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