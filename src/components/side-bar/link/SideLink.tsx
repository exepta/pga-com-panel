import {Box, Typography, useTheme} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";

type Props = {
    link: string,
    title: string,
    icon: React.ReactNode,
    currentView: boolean,
}

const SideLink = ({ link, icon, title, currentView } :Props) => {
    const theme = useTheme();
    return(
        <NavLink to={link}>
        <Box sx={{
            width: currentView ? '100%' : '35px',
            height: '35px',
            padding: '0 5px',
            paddingLeft: currentView ? '5px' : '7px',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            borderTopLeftRadius: currentView ? '0' : '5px',
            borderBottomLeftRadius: currentView ? '0' : '5px',
            borderLeft: '2px solid transparent',
            display: 'flex',
            flexFlow: 'row',
            cursor: 'pointer',
            transition: '.3s all',
            ':hover': {
                borderLeft: currentView ? '2px solid ' + theme.colors.accent : '2px solid transparent',
                backgroundColor: currentView ? theme.backgrounds.secondaryHovered : theme.colors.accent
            }
        }}>
            <Box sx={{
                width: '35px',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {icon}
            </Box>

            <Box sx={{
                width: 'calc(100% - 35px)',
                height: '100%',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                paddingLeft: '10px',
                paddingTop: '3px'
            }}>
                <Typography variant="h6"
                            sx={{
                                fontSize: '13px',
                                color: theme.colors.primary,
                                textWrap: 'nowrap',
                                overflow: 'hidden'
                            }}>
                    {title}
                </Typography>
            </Box>
        </Box>
        </NavLink>
    )
}

export default SideLink