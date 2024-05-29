import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
    color: {
        header_font: "#a0a0a0",
        input_focus: "#ff6d6d",
        input_unfocus:"#ff8c8c",
        button_enable: "#ff6d6d",
        button_disable: "#bfbfbf",
        
        error: "#ff5a5a",

        text:"#222222",
        icon:"#111111",
        hover:"#c7c7c7",
        active:"#979797",

        font_animation:"#121212",
        background: "#fefefe",
        bright_background: "#ececec",
        shadow: "rgba(0,0,0,0.05)",

        button_background: "#262626",
        button_text: "#fdfdfd",
    },
    position:{
        modal_button:"40px"
    },
    size:{
        header_height:"75px",
        modal_width_small:"300px",
    },
};

const darkTheme: DefaultTheme = {
    ...lightTheme,
    color: {
        ...lightTheme.color,

        input_focus: "#ff7f7f",
        input_unfocus:"#ff8c8c",
        button_enable: "#ff7f7f",
        button_disable: "#575757",
        
        text:"#dddddd",
        icon:"#eeeeee",
        hover:"#606060",
        active:"#c4c4c4",

        font_animation:"#fdfdfd",
        background: "#2b2b2b",
        bright_background: "#444444",
        shadow: "rgba(255,255,255,0.05)",

        button_background: "#f6f6f6",
        button_text:"#121212",
    },
};
const themeProperties = {
    'header-color': {
        light: lightTheme.color.header_font,
        dark: darkTheme.color.header_font,
    },
    'input-focus': {
        light: lightTheme.color.input_focus,
        dark: darkTheme.color.input_focus,
    },
    'input-unfocus': {
        light: lightTheme.color.input_unfocus,
        dark: darkTheme.color.input_unfocus,
    },
    'button-enable': {
        light: lightTheme.color.button_enable,
        dark: darkTheme.color.button_enable,
    },
    'button_disable': {
        light: lightTheme.color.button_disable,
        dark: darkTheme.color.button_disable,
    },
    'error': {
        light: lightTheme.color.error,
        dark: darkTheme.color.error,
    },
    'text': {
        light: lightTheme.color.text,
        dark: darkTheme.color.text,
    },
    'icon': {
        light: lightTheme.color.icon,
        dark: darkTheme.color.icon,
    },
    'hover': {
        light: lightTheme.color.hover,
        dark: darkTheme.color.hover,
    },
    'active': {
        light: lightTheme.color.active,
        dark: darkTheme.color.active,
    },
    'font-animation': {
        light: lightTheme.color.font_animation,
        dark: darkTheme.color.font_animation,
    },
    'background': {
        light: lightTheme.color.background,
        dark: darkTheme.color.background,
    },
    'bright-background': {
        light: lightTheme.color.bright_background,
        dark: darkTheme.color.bright_background,
    },
    'shadow': {
        light: lightTheme.color.shadow,
        dark: darkTheme.color.shadow,
    },
    'button-background': {
        light: lightTheme.color.button_background,
        dark: darkTheme.color.button_background,
    },
    'button-text': {
        light: lightTheme.color.button_text,
        dark: darkTheme.color.button_text,
    },
};

const themes: DefaultTheme = {
    lightTheme,
    darkTheme,
    themeProperties
};

export type ThemeTypes = typeof themes;

export default themes;