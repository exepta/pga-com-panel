import {Box, Button, Typography, useTheme} from "@mui/material";
import backgroundImage from "../../assets/images/auth-background.jpeg";
import {GitHub, Google, Send} from "@mui/icons-material";
import {useState} from "react";
import useAuth from "../../hooks/useAuth.ts";
import RegisterInnerPage from "./RegisterInnerPage.tsx";
import RegTextField from "./models/RegTextField.tsx";

const AuthenticationPage = () => {
    const theme = useTheme();

    const { login } = useAuth();
    
    const [user_data, setUserData] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [triggerRegister, setTriggerRegister] = useState<boolean>(false);

    const handleLogin = async () => {
        try {
            await login(user_data, password);
            setUserData("");
            setPassword("");
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    return (
        <Box sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(to bottom right, ' + theme.backgrounds.gradientAccent + ')',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        }}>

            <Box sx={{
                position: 'absolute',
                width: '60%',
                minWidth: '350px',
                height: '75%',
                minHeight: '275px',
                backgroundColor: theme.backgrounds.secondary,
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                transition: '.8s all',
                zIndex: triggerRegister ? '0' : '10',
                opacity: triggerRegister ? '0' : '1',
                transform: triggerRegister ? 'translateY(-300px)' : 'translateY(0)',
                overflow: 'hidden'
            }}>
                {/* Left Side (Register) */}
                <Box sx={{
                    zIndex: '10',
                    position: 'absolute',
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexFlow: 'column',
                    gap: '10px',
                }}>

                    <Typography variant="h1"
                                sx={{
                                    color: theme.colors.primary,
                                    fontSize: '2rem',
                                    fontWeight: '700'
                                }}>
                        Sign Up
                    </Typography>

                    <Box sx={{
                        width: '65%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography variant="subtitle1"
                                    sx={{
                                        color: theme.colors.primary,
                                        fontSize: '1rem',
                                        textAlign: 'block',
                                        padding: '0 20px'
                                    }}>
                            You're new? Come join us and support our community! Are you good at coaching?
                            Then indicate it when you register and we'll see what happens!
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '65%',
                        height: '220px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0 10px'
                    }}>

                        <Button variant="outlined"
                                sx={{
                                    justifyContent: 'center',
                                    width: '300px',
                                    gap: '25px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    border: '2px solid ' + theme.colors.accent,
                                    backgroundColor: theme.colors.accentTransparency,
                                    color: theme.colors.primary,
                                    ':hover': {
                                        border: '2px solid ' + theme.colors.accentHovered,
                                        backgroundColor: theme.colors.accentHovered,
                                        boxShadow: '0 0 10px ' + theme.colors.accentHovered,
                                    }
                                }} onClick={() => setTriggerRegister(true)}>
                            Register
                        </Button>

                    </Box>

                </Box>


                <Box sx={{
                    position: 'relative',
                    width: '50%',
                    height: '100%',
                    backgroundImage: 'url(' + backgroundImage + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    opacity: '0.5',
                }}>
                    <Box sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: theme.backgrounds.overlayAuth,
                    }}>

                    </Box>
                </Box>

                {/* Right Side (LOGIN) */}
                <Box sx={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                    padding: '0 60px',
                    gap: '10px'
                }}>

                    <Typography variant="h1"
                                sx={{
                                    color: theme.colors.primary,
                                    fontSize: '2rem',
                                    fontWeight: '700'
                                }}>
                        Sign In
                    </Typography>
                    <RegTextField id="email-login-input" name="E-Mail"
                                  onChange={value => setUserData(value)} />

                    <RegTextField id="password-login-input" name="Password" type="password"
                                  onChange={value => setPassword(value)} />

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'right',
                    }}>
                        <Button variant="contained" endIcon={<Send />}
                                sx={{
                                    width: '150px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    backgroundColor: theme.colors.accent,
                                    ':hover': {
                                        backgroundColor: theme.colors.accentHovered,
                                    }
                                }}
                                onClick={() => handleLogin()}
                        >
                            Send
                        </Button>
                    </Box>

                    <Box sx={{
                        width: '100%',
                        height: '30px',
                        display: 'flex',
                        marginTop: '80px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant="subtitle1"
                                    sx={{
                                        color: theme.colors.placeholder,
                                        fontSize: '0.8rem'
                                    }}>
                            or connect with Social Media
                        </Typography>
                    </Box>


                    <Button fullWidth variant="contained" startIcon={<Google />}
                            sx={{
                                justifyContent: 'center',
                                gap: '25px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                backgroundColor: theme.social.google,
                                ':hover': {
                                    backgroundColor: theme.social.googleHovered,
                                }
                            }}>
                        Google
                    </Button>

                    <Button fullWidth variant="contained" startIcon={<GitHub />}
                            sx={{
                                justifyContent: 'center',
                                gap: '25px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                backgroundColor: theme.social.github,
                                ':hover': {
                                    backgroundColor: theme.social.githubHovered,
                                }
                    }}>
                        GitHub
                    </Button>

                </Box>
            </Box>

            <RegisterInnerPage triggered={triggerRegister}
                               setTriggered={setTriggerRegister}
            />

        </Box>
    )
}

export default AuthenticationPage;