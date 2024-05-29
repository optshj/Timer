import Script from "next/script";
import themes from "../_styles/theme";

const COLOR_MODE_KEY = 'theme';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-theme';

function setColorsByTheme() {
    const modeProperties = '[MODEPROPERTIES]';
    const colorModeKey = '[COLORMODEKEY]';
    const colorModeCssProp = '[COLORMODECSSPROP]';

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMq = mql.matches;
    
    const localTheme = localStorage.getItem(colorModeKey);

    let theme = 'light'; 

    if (localTheme) {
        theme = localTheme;
    } else {
        theme = prefersDarkFromMq ? 'dark' : 'light';
    }

    const root = document.documentElement;

    root.style.setProperty(colorModeCssProp, theme);

    Object.entries(modeProperties).forEach(([name, colorByTheme]) => {
        const cssVarName = `--${name}`;
        // @ts-ignore
        root.style.setProperty(cssVarName, colorByTheme[theme]);
    });
    }
export default function DarkModeScript() {
    const stringifyFn = String(setColorsByTheme)
    .replace('"[MODEPROPERTIES]"', JSON.stringify(themes.themeProperties))
    .replace('[COLORMODEKEY]', COLOR_MODE_KEY) 
    .replace('[COLORMODECSSPROP]', INITIAL_COLOR_MODE_CSS_PROP);

    const fnToRunOnClient = `(${stringifyFn})()`;

    return <Script dangerouslySetInnerHTML={{ __html: fnToRunOnClient }} />;
};