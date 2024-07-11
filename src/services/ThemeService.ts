import {createTheme} from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        backgrounds: {
            primary: string;
            hovered: string;
        }
        colors: {
            primary: string;
            accent: string;
            placeholder: string;
        }
        divider: {
            color: string
        }
    }

    interface ThemeOptions {
        backgrounds?: {
            primary?: string;
            hovered?: string;
        }
        colors?: {
            primary?: string;
            accent?: string;
            placeholder?: string
        }
        divider?: {
            color?: string
        }
    }
}

export const theme = createTheme({
    backgrounds: {
        primary: '#3e414b',
        hovered: '#434650',
    },
    colors: {
        primary: '#e4e4e4',
        accent: '#b75dbd',
        placeholder: '#949494',
    },
    divider: {
        color: '#878994',
    }
});