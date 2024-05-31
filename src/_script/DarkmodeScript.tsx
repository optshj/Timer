import Script from "next/script";
import themes from "../_styles/theme";

const COLOR_MODE_KEY = 'theme';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

function setColorsByTheme() {
    const modeProperties = '[MODEPROPERTIES]';
    const themeKey = '[THEMEMODEKEY]';
    const themeCssProp = '[THEMEMODECSSPROP]';

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMq = mql.matches;
    
    const localTheme = localStorage.getItem(themeKey);

    let theme = 'dark';

    if (localTheme) {
        theme = localTheme;
    } else {
        theme = prefersDarkFromMq ? 'dark' : 'light';
    }

    const root = document.documentElement;

    root.style.setProperty(themeCssProp, theme);
    Object.entries(modeProperties).forEach(([name, colorByTheme]) => {
        const cssVarName = `--${name}`;
        // @ts-ignore
        root.style.setProperty(cssVarName, colorByTheme[theme]);
    });
}
export default function DarkmodeScript() {
    const stringifyFn = String(setColorsByTheme)
        .replace('"[MODEPROPERTIES]"', JSON.stringify(themes.themeProperties))
        .replace('[THEMEMODEKEY]', COLOR_MODE_KEY) 
        .replace('[THEMEMODECSSPROP]', INITIAL_COLOR_MODE_CSS_PROP);
    const fnToRunOnClient = `(${stringifyFn})()`;
    return <Script dangerouslySetInnerHTML={{ __html: fnToRunOnClient }} />;
};