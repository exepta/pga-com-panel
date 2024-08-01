import {Box, Button, TextField, Typography, useTheme} from "@mui/material";
import backgroundImage from "../../assets/images/auth-background.jpeg";
import {Google, Instagram, Send, X} from "@mui/icons-material";

const AuthenticationPage = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(to bottom right, ' + theme.backgrounds.gradientAccent + ')',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        }}>

            <Box sx={{
                width: '60%',
                minWidth: '350px',
                height: '75%',
                minHeight: '275px',
                backgroundColor: theme.backgrounds.secondary,
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                overflow: 'hidden'
            }}>
                <Box sx={{
                    width: '50%',
                    height: '100%',
                    backgroundImage: 'url(' + backgroundImage + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    opacity: '0.5',
                }}>

                </Box>

                <Box sx={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                    padding: '0 60px',
                    gap: '20px'
                }}>

                    <Typography variant="h1"
                                sx={{
                                    color: theme.colors.primary,
                                    fontSize: '28px'
                                }}>
                        Sign In
                    </Typography>

                    <TextField id="email-input-login" label="Email Address" fullWidth variant="standard">

                    </TextField>

                    <TextField type="password" id="password-input-login" label="Password" fullWidth variant="standard">

                    </TextField>

                    <Button fullWidth  variant="contained" endIcon={<Send />}
                            sx={{
                                justifyContent: 'space-between',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                backgroundColor: theme.colors.accent,
                                ':hover': {
                                    backgroundColor: theme.colors.accentHovered,
                                }
                            }}>
                        Send
                    </Button>

                    <Box sx={{
                        width: '100%',
                        height: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant="subtitle1"
                                    sx={{
                                        color: theme.colors.placeholder,
                                        fontSize: '11px'
                                    }}>
                            or connect with Social Media
                        </Typography>
                    </Box>

                    <Button fullWidth variant="contained" startIcon={<X />}
                            sx={{
                                justifyContent: 'center',
                                gap: '25px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                backgroundColor: theme.colors.accent,
                                ':hover': {
                                    backgroundColor: theme.colors.accentHovered,
                                }
                    }}>
                        formerly Twitter
                    </Button>

                    <Button fullWidth variant="contained" startIcon={<Instagram />}
                            sx={{
                                justifyContent: 'center',
                                gap: '25px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                backgroundColor: theme.colors.accent,
                                ':hover': {
                                        backgroundColor: theme.colors.accentHovered,
                                }
                    }}>
                        Instagram
                    </Button>

                    <Button fullWidth variant="contained" startIcon={<Google />}
                            sx={{
                                justifyContent: 'center',
                                gap: '25px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                backgroundColor: theme.colors.accent,
                                ':hover': {
                                    backgroundColor: theme.colors.accentHovered,
                                }
                            }}>
                        Google
                    </Button>

                </Box>
            </Box>

        </Box>
    )
}

export default AuthenticationPage;