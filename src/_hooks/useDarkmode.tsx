import { useEffect, useState } from 'react';

export default function useDarkMode(){
    const [theme,setTheme] = useState<boolean>(true);

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(JSON.parse(localTheme));
            document.body.dataset.theme = localTheme;
        } else {
            setTheme(false);
            document.body.dataset.theme = 'false';
        }
    },[]);

    const toggleTheme = () => {
        const newTheme = theme ? false : true;
        setTheme(newTheme);
        window.localStorage.setItem('theme', JSON.stringify(newTheme));
        document.body.dataset.theme = JSON.stringify(newTheme);
    };
    return {theme, toggleTheme};
};