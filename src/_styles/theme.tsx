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

        active_font:"#121212",
        background: "#fefefe",
        bright_background: "#ececec",
        shadow: "rgba(0,0,0,0.05)",

        button_background: "#262626",
        button_text: "#fdfdfd",
        icon_background: "#f0c401",
        icon_text:'#fbf2ba'
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

        active_font:"#fdfdfd",
        background: "#2b2b2b",
        bright_background: "#444444",
        shadow: "rgba(255,255,255,0.05)",

        button_background: "#f6f6f6",
        button_text:"#121212",
        icon_background: "#2c2836",
        icon_text:'#736e85'
    },
};
const themeProperties = {
    'text': {
        light:lightTheme.color.text,
        dark:darkTheme.color.text,
    },
    'background': {
        light:lightTheme.color.background,
        dark:darkTheme.color.background,
    },
    'button_background': {
        light:lightTheme.color.button_background,
        dark:darkTheme.color.button_background,
    },
    'button_text': {
        light:lightTheme.color.button_text,
        dark:darkTheme.color.button_text,
    },
    'input_focus': {
        light:lightTheme.color.input_focus,
        dark:darkTheme.color.input_focus,
    },
    'input_unfocus': {
        light:lightTheme.color.input_unfocus,
        dark:darkTheme.color.input_unfocus,
    },
    'hover': {
        light:lightTheme.color.hover,
        dark:darkTheme.color.hover,
    },
    'active': {
        light:lightTheme.color.active,
        dark:darkTheme.color.active,
    },
    'active_font': {
        light:lightTheme.color.active_font,
        dark:darkTheme.color.active_font,
    },
    'icon': {
        light:lightTheme.color.icon,
        dark:darkTheme.color.icon,
    },
    'error': {
        light:lightTheme.color.error,
        dark:darkTheme.color.error,
    },
    'shadow': {
        light:lightTheme.color.shadow,
        dark:darkTheme.color.shadow,
    },
    'header_font': {
        light:lightTheme.color.header_font,
        dark:darkTheme.color.header_font,
    },
    'button_enable': {
        light:lightTheme.color.button_enable,
        dark:darkTheme.color.button_enable,
    },
    'button_disable': {
        light:lightTheme.color.button_disable,
        dark:darkTheme.color.button_disable,
    },
    'bright_background': {
        light:lightTheme.color.bright_background,
        dark:darkTheme.color.bright_background,
    },
    'icon_background': {
        light:lightTheme.color.icon_background,
        dark:darkTheme.color.icon_background,
    },
    'icon_text': {
        light:lightTheme.color.icon_text,
        dark:darkTheme.color.icon_text,
    },
}

const themes: DefaultTheme = {
    lightTheme,
    darkTheme,
    themeProperties
};

export type ThemeTypes = typeof themes;

export default themes;