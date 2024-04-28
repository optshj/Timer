import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
    color: {
        icon_color:"#000",
        hover_color:"#c7c7c7",
        font: "#808080",
        font_animation:"#000",
        background: "#fdfdfd",
    },
};

const darkTheme: DefaultTheme = {
    ...lightTheme,
    color: {
        ...lightTheme.color,
        icon_color:"#fff",
        hover_color:"#606060",
        font: "#808080",
        font_animation:"#fff",
        background: "#2b2b2b",
    },
};

const themes: DefaultTheme = {
    lightTheme,
    darkTheme,
};

export type ThemeTypes = typeof themes;

export default themes;