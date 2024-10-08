import {Avatar, Box, Typography, useTheme} from "@mui/material";
import { Menu, Dashboard, Casino }from '@mui/icons-material/';
import placeholderAvatar from '../../assets/images/gantar.jpg';
import SideLink from "./link/SideLink.tsx";
import {useState} from "react";
import useAuth from "../../hooks/useAuth.ts";

type Props = {
    externalOpenState: (open: boolean) => void,
}

const SideBar = ( { externalOpenState } :Props ) => {
    const theme = useTheme();
    const { user } = useAuth();

    const[open, setOpen] = useState(true);

    const toggleState = () => {
        setOpen(!open);
        externalOpenState(!open);
    }

    return(
        <Box sx={{
            width: open ? '250px' : '65px',
            transition: '.5s all',
            height: '100vh',
            backgroundColor: theme.backgrounds.secondary,
            position: 'absolute',
        }}>
            {/* Side close/open btn and Logo(Icon) + Title */}
            <Box sx={{
                width: '100%',
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '20px',
                paddingRight: '10px',
            }}>
                <Typography variant="h1"
                            sx={{
/*                                display: open ? 'block' : 'none',*/
                                transform: open ? 'translateX(0)' : 'translateX(-500px)',
                                textWrap: 'nowrap',
                                fontSize: '15px',
                                fontWeight: 'bold',
                                transition: '1s all',
                                color: theme.colors.primary,
                                cursor: 'default',
                                overflow: 'hidden'
                            }}>
                    <span style={{color: theme.colors.accent}}>P</span>heanix
                    <span style={{color: theme.colors.accent}}> G</span>aming
                    <span style={{color: theme.colors.accent}}> A</span>rea
                </Typography>

                <Menu sx={{
                    color: theme.colors.primary,
                    cursor: 'pointer',
                    transform: open ? 'translateX(0)' : 'translateX(-13px)',
                    transition: '.5s all',
                }} onClick={toggleState} />
            </Box>

            {/* User Section Side */}
            <Box sx={{
                width: '100%',
                height: '80px',
                padding: '0 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: theme.backgrounds.overBox
            }}>
                <Avatar src={placeholderAvatar}
                        sx={{
                            width: open ? '60px' : '48px',
                            height: open ? '60px' : '48px',
                            cursor: 'pointer',
                            transition: '.5s all'
                        }}/>
                <Box sx={{
                    width: '150px',
                    height: '60px',
                    transition: '.5s all',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    flexFlow: 'column',
                    overflow: 'hidden'
                }}>
                    <Typography variant="subtitle1"
                                sx={{
                                    fontSize: '14px',
                                    color: theme.colors.primary,
                                    textWrap: 'nowrap',
                                }}>
                        {user === null ? 'Placeholder' : user.username.charAt(0).toUpperCase() +  user.username.slice(1).toLowerCase()}
                    </Typography>

                    <Typography variant="subtitle2"
                                sx={{
                                    fontSize: '11px',
                                    color: theme.colors.accent,
                                    textWrap: 'nowrap',
                                }}>
                        Administrator
                    </Typography>
                </Box>
            </Box>

            {/* Navigation Section Side */}
            <Box sx={{
                width: '100%',
                height: 'calc(100vh - 180px)',
                overflowX: 'hidden',
                overflowY: 'auto',
                transition: '.5s all',
                padding: '10px',
                paddingLeft: open ? '10px' : '13px',
                display: 'flex',
                flexFlow: 'column',
                gap: '5px'
            }}>
                {/* Dashboard Link */}
                <SideLink link="/"
                          title="Dashboard"
                          icon={
                              <Dashboard sx={{
                                  color: theme.colors.primary,
                                  fontSize: '18px',
                              }}/>
                          } currentView={open} />

                {/* League of Legends Link */}
                <SideLink link="league-of-legends"
                          title="League of Legends"
                          icon={
                              <Casino sx={{
                                  color: theme.colors.primary,
                                  fontSize: '18px'
                              }}/>
                          } currentView={open}/>

            </Box>

            {/* Info Section Side */}
            <Box sx={{
                width: '100%',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.backgrounds.overBox,
                borderTop: '1px solid ' + theme.backgrounds.secondaryHovered
            }}>
                <Typography variant="h4" sx={{
                    fontSize: '11px',
                    color: theme.colors.primary
                }} >
                    {open ? 'Version -' : ''} 1.0.0
                </Typography>
            </Box>
        </Box>
    )
}

export default SideBar