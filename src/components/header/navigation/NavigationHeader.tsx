import {Box, Theme, useTheme} from "@mui/material";
import React from "react";
import {NavigateNext} from "@mui/icons-material";

type Props = {
    link: string,
}

const NavigationHeader = ({ link } :Props) => {
    const theme = useTheme();

    return(
        <Box sx={{
            color: theme.colors.decent,
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center'
        }}>
            {formatLink(link, theme)}
        </Box>
    )
}

function formatLink(link: string, theme: Theme) {
    const parts = link.split('/');

    const formattedParts = parts.map(part =>
        part.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
    );

    return formattedParts.map((part:string, index:number) => (
        <React.Fragment key={index}>
            {(formattedParts.length -1) > index
                ? <span style={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center'}}>
                    {part} <NavigateNext sx={{color: theme.colors.accent}}/>
            </span>
                : <span style={{fontSize: '12px', color: theme.colors.primary}}>{part}</span>}
        </React.Fragment>
    ))
}

export default NavigationHeader