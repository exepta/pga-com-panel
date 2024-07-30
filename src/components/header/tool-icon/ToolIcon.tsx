import {Badge, Box, useTheme} from "@mui/material";
import React from "react";

type Props = {
    icon: React.ReactNode,
    badgeAble?: boolean,
    badgeCount?: number,
}

const ToolIcon = ({ icon, badgeAble, badgeCount } :Props) => {
    const theme = useTheme();
    if(badgeCount !== undefined && badgeCount < 0) {
        badgeCount = 0;
    }

    return(
        <Box sx={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '.3s all',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: theme.backgrounds.hovered
            }
        }}>
            {badgeAble
                ? <Badge badgeContent={badgeCount}
                         max={99}
                         sx={{
                             '& .MuiBadge-badge': {
                                 color: theme.colors.primary,
                                 backgroundColor: theme.colors.accent,
                                 fontSize: '11px'
                             }
                         }}
                >
                    {icon}
                </Badge>
                : icon}
        </Box>
    )
}

export default ToolIcon