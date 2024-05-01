import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
    color: {
        header_font: "#a0a0a0",
        
        text_color:"#000",
        icon_color:"#000",
        hover_color:"#c7c7c7",
        active_color:"#979797",
        font_animation:"#000",
        background: "#fdfdfd",
    },
};

const darkTheme: DefaultTheme = {
    ...lightTheme,
    color: {
        ...lightTheme.color,
        text_color:"#eee",
        icon_color:"#fff",
        hover_color:"#606060",
        active_color:"#c4c4c4",
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