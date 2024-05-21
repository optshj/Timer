import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
    color: {
        header_font: "#a0a0a0",
        input_focus: "#ff6d6d",
        input_unfocus:"#ff8c8c",
        button_enable: "#ff6d6d",
        button_disable: "#bfbfbf",
        
        error: "#ff5a5a",

        text:"#000",
        icon:"#000",
        hover:"#c7c7c7",
        active:"#979797",
        font_animation:"#000",
        background: "#fdfdfd",
        shadow: "rgba(0,0,0,0.05)",

        button_background: "#262626",
        button_text: "#fff",
    },
    position:{
        modal_button:"40px"
    },
    size:{
        header_height:"65px",
    },
};

const darkTheme: DefaultTheme = {
    ...lightTheme,
    color: {
        ...lightTheme.color,

        button_disable: "#575757",
        
        text:"#eee",
        icon:"#eee",
        hover:"#606060",
        active:"#c4c4c4",
        font_animation:"#fff",
        background: "#2b2b2b",
        shadow: "rgba(255,255,255,0.05)",

        button_background: "#f6f6f6",
        button_text:"#000",
    },
};

const themes: DefaultTheme = {
    lightTheme,
    darkTheme,
};

export type ThemeTypes = typeof themes;

export default themes;