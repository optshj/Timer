import Script from "next/script";

const THEME_MODE_KEY = 'theme';

function setDarkmode() {
    const themeModeKey = '[THEMEMODEKEY]';
    const localTheme = window.localStorage.getItem(themeModeKey);

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMq = mql.matches;

    let theme = 'light'
    if (localTheme) 
        theme = localTheme;
    else 
        theme = prefersDarkFromMq ? 'dark' : 'light';
    document.documentElement.style.setProperty(
        'background-color',
        theme === 'light' ? '#FFFFFF' : '#2F2F2F');
    document.documentElement.style.setProperty(
        'color',
        theme === 'light' ? '#000000' : '#e5e5e5');
};

export default function DarkmodeScript(){
    const stringifyFn = String(setDarkmode)
    .replace('[THEMEMODEKEY]', THEME_MODE_KEY) 
    
    const fnToRunOnClient = `(${stringifyFn})()`;
    return <Script dangerouslySetInnerHTML={{ __html: fnToRunOnClient }} />;
}