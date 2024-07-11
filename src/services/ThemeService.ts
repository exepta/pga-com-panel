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
        accent: '#4849a2',
    },
    divider: {
        color: '#878994',
    },
    palette: {
        primary: {
            main: '#4849a2'
        }
    }
});