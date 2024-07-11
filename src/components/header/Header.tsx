import {Avatar, Badge, Box, Grid, TextField, useTheme} from "@mui/material";
import { NotificationsNone, Settings } from '@mui/icons-material';

import placeholderAVATAR from "../../assets/images/gantar.jpg";

const Header = () => {
    const theme = useTheme();
    return (
        <>
            <Grid container sx={{
                width: '100%',
                height: '60px',
                backgroundColor: theme.backgrounds.primary,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
            }}>
                {/* Left */}
                <Grid item lg={3} md={2.5} xs={1}>

                </Grid>

                {/* Middle */}
                <Grid item lg={6} md={7} xs={9} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{width: '75%', height: '40px'}}>
                    <TextField id="input-search-global"
                               label="Search"
                               autoComplete="off"
                               variant="outlined"
                               color="primary"
                               fullWidth
                               sx={{
                                   '& .MuiOutlinedInput-root': {
                                       height: '40px',
                                       padding: '0 16px',
                                       '& fieldset': {
                                           borderColor: theme.colors.placeholder,
                                           borderRadius: '20px',
                                       },
                                       '&:hover fieldset': {
                                           borderColor: theme.colors.accent,
                                       },
                                       '&.Mui-focused fieldset': {
                                           borderColor: theme.colors.accent,
                                       },
                                       '& .MuiInputBase-input': {
                                           height: '100%',
                                           color: theme.colors.primary,
                                       },
                                   },
                                   '& .MuiInputLabel-root': {
                                       transition: '.3s all',
                                       padding: '0 20px',
                                       top: '50%',
                                       transform: 'translate(0, -50%)',
                                       color: theme.colors.placeholder,
                                   },
                                   '& .MuiInputLabel-root.Mui-focused': {
                                       color: theme.colors.accent,
                                   },
                                   '& .MuiInputLabel-shrink': {
                                       top: '0',
                                       transform: 'translate(0, -50%) scale(0.75)',
                                   },
                               }}
                    />
                    </Box>
                </Grid>

                {/* Right */}
                <Grid item lg={3} md={2.5} xs={2} sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    flexDirection: 'row-reverse',
                    gap: '10px',
                    padding: '0 16px'
                }}>
                    <Avatar src={placeholderAVATAR} alt="Exepta" sx={{
                        backgroundColor: 'orange',
                        cursor: 'pointer',
                        width: '50px',
                        height: '50px',
                        border: '2px solid ' + theme.colors.primary
                    }} />

                    {/* Settings */}
                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: '.3s all',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                            backgroundColor: theme.backgrounds.hovered
                        }
                    }}>
                        <Settings sx={{color: theme.colors.primary, fontSize: '26px'}} />
                    </Box>

                    {/* Notification */}
                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: '.3s all',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                            backgroundColor: theme.backgrounds.hovered
                        }
                    }}>

                        <Badge
                            badgeContent={2}
                            max={99}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: theme.colors.accent,
                                    color: theme.colors.primary,
                                }
                                }}>
                        <NotificationsNone sx={{color: theme.colors.primary, fontSize: '26px'}} />
                        </Badge>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Header;