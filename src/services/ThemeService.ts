import {createTheme} from "@mui/material";

/* Module for handling @mui color theming`s */
declare module '@mui/material/styles' {
    interface Theme {
        backgrounds: {
            primary: string;
            secondary: string;
            secondaryTransparency: string;
            secondaryHovered: string;
            reg_glassy: string;
            overBox: string;
            hovered: string;
            primaryHovered: string;
            gradientAccent: string;
            overlayAuth: string;
        }
        colors: {
            primary: string;
            accent: string;
            accentHovered: string;
            accentTransparency: string;
            placeholder: string;
            decent: string;
            danger: string;
            dangerHovered: string;
            success: string;
            successHovered: string;
            warning: string;
            warningHovered: string;
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
            secondaryTransparency?: string;
            secondaryHovered?: string;
            reg_glassy?: string;
            overBox?: string;
            hovered?: string;
            primaryHovered?: string;
            gradientAccent?: string;
            overlayAuth?: string;
        }
        colors?: {
            primary?: string;
            accent?: string;
            accentHovered?: string;
            accentTransparency?: string;
            placeholder?: string;
            decent?: string;
            danger?: string;
            dangerHovered?: string;
            success?: string;
            successHovered?: string;
            warning?: string;
            warningHovered?: string;
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
        secondaryTransparency: 'rgba(38,40,45,0.5)',
        secondaryHovered: '#2b2d33',
        reg_glassy: 'rgba(38,40,45,0.65)',
        overBox: '#1c1e21',
        hovered: '#464953',
        primaryHovered: 'rgba(70,73,83,0.5)',
        gradientAccent: '#7066c4, #b75b9f, #BE3369FF',
        overlayAuth: 'rgba(167,75,192, 0.3)',
    },
    social: {
        google: '#BB417B',
        googleHovered: '#af3b72',
        github: '#393946',
        githubHovered: '#2f2f3a',
    },
    colors: {
        primary: '#e4e4e4',
        accent: '#7066c4',
        accentHovered: '#5f57a9',
        accentTransparency: 'rgba(95,87,169,0.2)',
        placeholder: '#808080',
        decent: '#6c6c6c',
        danger: '#d73e56',
        dangerHovered: '#c23333',
        success: '#4ccb97',
        successHovered: '#43ab7f',
        warning: '#e1b43e',
        warningHovered: '#c29d39',
    },
    divider: {
        color: '#878994',
    }
});