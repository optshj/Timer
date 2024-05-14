import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
    color: {
        header_font: "#a0a0a0",
        input_focus_color: "#ff6d6d",
        error_color: "#ff5a5a",

        text_color:"#000",
        icon_color:"#000",
        hover_color:"#c7c7c7",
        active_color:"#979797",
        font_animation:"#000",
        background: "#fdfdfd",
        shadow: "rgba(0,0,0,0.05)",

        button_background: "#262626",
        button_text: "#fff",
    },
    position:{
        modal_button:"60px"
    }
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
        shadow: "rgba(255,255,255,0.05)",

        button_background: "#f6f6f6",
        button_text:"#000",
    },
    position:{
        ...lightTheme.position,
    }
};

const themes: DefaultTheme = {
    lightTheme,
    darkTheme,
};

export type ThemeTypes = typeof themes;

export default themes;