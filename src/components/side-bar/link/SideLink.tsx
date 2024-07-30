import {Box, Typography, useTheme} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";

type Props = {
    link: string,
    title: string,
    icon: React.ReactNode,
    showTitle: boolean,
}

const SideLink = ({ link, icon, title, showTitle } :Props) => {
    const theme = useTheme();
    return(
        <NavLink to={link}>
        <Box sx={{
            width: '100%',
            height: '35px',
            padding: '0 5px',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            borderLeft: '2px solid transparent',
            display: 'flex',
            flexFlow: 'row',
            cursor: 'pointer',
            transition: '.3s all',
            ':hover': {
                borderLeft: '2px solid ' + theme.colors.accent,
                backgroundColor: theme.backgrounds.secondaryHovered
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
                            }}>
                    {showTitle ? title : ''}
                </Typography>
            </Box>
        </Box>
        </NavLink>
    )
}

export default SideLink