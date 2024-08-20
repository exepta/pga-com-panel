import {Box, useTheme} from "@mui/material";
import ToolIcon from "./tool-icon/ToolIcon.tsx";
import {Logout, NotificationsNone, Settings} from "@mui/icons-material";
import NavigationHeader from "./navigation/NavigationHeader.tsx";
import useAuth from "../../hooks/useAuth.ts";

type Props = {
    extended: boolean,
}

const Header = ( { extended } :Props ) => {
    const theme = useTheme();
    const { logout } = useAuth();
    const width :string = extended ? '250' : '65';
    return(
        <Box sx={{
            position: 'fixed',
            right: '0',
            width: 'calc(100% - ' + width + 'px)',
            height: '50px',
            transition: '.5s all',
            backgroundColor: theme.backgrounds.secondary,
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            paddingLeft: '28px',
            paddingRight: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
        }}>
            <Box sx={{
                width: '45%',
                minWidth: '150px',
                height: '100%',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                flexFlow: 'row',
                padding: '0 10px'
            }}>
                <NavigationHeader link="league-of-legends/user/stats" />
            </Box>
            {/* Interaction */}
            <Box sx={{
                width: '50%',
                height: '100%',
                display: 'flex',
            }}>
                {/* Search area TODO: make this later... */}
                <Box sx={{
                    width: 'calc(100% - 150px)',
                    minWidth: '150px',
                    height: '100%',
                }}>

                </Box>

                {/* Tool area */}
                <Box sx={{
                    width: '150px',
                    minWidth: '150px',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0 10px'
                }}>

                    <ToolIcon badgeAble
                              badgeCount={12}
                              icon={
                                  <NotificationsNone sx={{
                                      color: theme.colors.primary,
                                      fontSize: '20px',
                                  }}/>
                              }/>

                    <ToolIcon icon={
                        <Settings sx={{
                            color: theme.colors.primary,
                            fontSize: '20px',
                        }}/>
                    }/>

                    <ToolIcon icon={
                        <Logout sx={{
                            color: theme.colors.primary,
                            fontSize: '20px',
                        }}/>
                    } onClick={() => logout()}/>{/* ToDo: Create a dialog for handle logout question. */}

                </Box>

            </Box>
        </Box>
    )
}

export default Header