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
            gradientAccent: string;
        }
        colors: {
            primary: string;
            accent: string;
            accentHovered: string;
            placeholder: string;
            decent: string;
        }
        social: {
            google: string;
            googleHovered: string;
            github: string;
            githubHovered: string;
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
            gradientAccent?: string;
        }
        colors?: {
            primary?: string;
            accent?: string;
            accentHovered?: string;
            placeholder?: string;
            decent?: string;
        }
        social?: {
            google?: string;
            googleHovered?: string;
            github?: string;
            githubHovered?: string;
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
        primaryHovered: 'rgba(70,73,83,0.5)',
        gradientAccent: '#7066c4, #b75b9f, #BE3369FF',
    },
    social: {
        google: '#d73e56',
        googleHovered: '#ad2c41',
        github: '#393946',
        githubHovered: '#2f2f3a',
    },
    colors: {
        primary: '#e4e4e4',
        accent: '#7066c4',
        accentHovered: '#5f57a9',
        placeholder: '#808080',
        decent: '#6c6c6c',
    },
    divider: {
        color: '#878994',
    }
});