import {createTheme} from "@mui/material";

/* Module for handling @mui color theming`s */
declare module '@mui/material/styles' {
    interface Theme {
        backgrounds: {
            primary: string;
            secondary: string;
            secondaryHovered: string;
            overBox: string;
            hovered: string;
            primaryHovered: string;
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
            secondary?: string;
            secondaryHovered?: string;
            overBox?: string;
            hovered?: string;
            primaryHovered?: string;
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
        secondary: '#26282d',
        secondaryHovered: '#2b2d33',
        overBox: '#1c1e21',
        hovered: '#464953',
        primaryHovered: 'rgba(70,73,83,0.5)'
    },
    colors: {
        primary: '#e4e4e4',
        accent: '#7066c4',
        placeholder: '#808080',
    },
    divider: {
        color: '#878994',
    }
});