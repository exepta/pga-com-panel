import {Box, Button, Typography, useTheme} from "@mui/material";
import {Clear, Input, NavigateBefore, NavigateNext} from "@mui/icons-material";
import PrivacyEntryPage from "./register-entries/PrivacyEntryPage.tsx";
import {useState} from "react";
import BirthdaySocialPage from "./register-entries/BirthdaySocialPage.tsx";

type Props = {
    triggered: boolean,
    setTriggered: (triggered: boolean) => void,
}

const RegisterInnerPage = ({triggered, setTriggered}: Props) => {
    const theme = useTheme();

    const [nextIndex, setNextIndex] = useState<number>(1);

    const switchTitle = () => {
        let title: string = "";
        switch (nextIndex) {
            case 1: {
                title = "Privacy Information";
                break;
            }
            case 2: {
                title = "Birthday & Social";
                break;
            }
            case 3: {
                title = "Avatar / Banner & Cosmetic";
                break;
            }
            case 4: {
                title = "About You!";
                break;
            }
            case 5: {
                title = "Welcome to PGA";
                break;
            }
        }
        return title;
    }

    return (
        <Box sx={{
            position: 'absolute',
            width: '60%',
            minWidth: '350px',
            height: '75%',
            minHeight: '275px',
            backgroundColor: theme.backgrounds.secondary,
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            overflow: 'hidden',
            padding: '10px 20px',
            transition: '.8s all',
            zIndex: triggered ? '10' : '0',
            opacity: triggered ? '1' : '0',
            transform: triggered ? 'translateY(0)' : 'translateY(300px)',
        }}>
            {/* Header */}
            <Box sx={{
                width: '100%',
                height: '50px',
                //borderBottom: '1px solid ' + theme.colors.placeholder,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                backgroundColor: 'transparent',
                display: 'flex'
            }}>
                {/* Back Section */}
                <Box sx={{
                    width: '20%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    padding: '0 10px'
                }}>
                    {/* Button for back */}
                    <Box sx={{
                        width: '75px',
                        height: '35px',
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: '20px',
                        padding: '0 5px',
                        paddingRight:' 15px',
                        alignItems: 'center',
                        transition: '.3s all',
                        cursor: 'pointer',
                        ':hover': {
                            backgroundColor: theme.colors.accent,
                        }
                    }} onClick={() => {
                        if(nextIndex !== 1) { setNextIndex(nextIndex-1); } else { setTriggered(false); }
                    }}>
                        <NavigateBefore sx={{
                            color: theme.colors.primary,
                            fontSize: '1.75rem'
                        }}/>
                        <Typography sx={{
                            fontSize: '0.9rem',
                            color: theme.colors.primary
                        }}>
                            Back
                        </Typography>
                    </Box>
                </Box>

                {/* Info Section */}
                <Box sx={{
                    width: '60%',
                    height: '100%',
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant="h4" sx={{
                        color: theme.colors.primary,
                        fontSize: '1.1rem',
                        fontWeight: 'bold'
                    }}>
                        {switchTitle()}
                    </Typography>
                </Box>

                {/* Next Section */}
                <Box sx={{
                    width: '20%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    padding: '0 10px'
                }}>
                    {/* Button for next */}
                    <Box sx={{
                        width: '75px',
                        height: '35px',
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: '20px',
                        padding: '0 5px',
                        paddingLeft:' 10px',
                        alignItems: 'center',
                        transition: '.3s all',
                        cursor: 'pointer',
                        ':hover': {
                            backgroundColor: theme.colors.accent,
                        }
                    }} onClick={() => { setNextIndex(nextIndex+1); }}>
                        <Typography sx={{
                            fontSize: '0.9rem',
                            color: theme.colors.primary
                        }}>
                            Next
                        </Typography>
                        <NavigateNext sx={{
                            color: theme.colors.primary,
                            fontSize: '1.75rem'
                        }}/>
                    </Box>
                </Box>
            </Box>

            {/* Content */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: 'calc(100% - 95px)',
                padding: '10px 20px'
            }}>
                {/* Content Box Privacy Information */}
                <PrivacyEntryPage index={nextIndex} />
                {/* Content Box Ignorable Information */}
                <BirthdaySocialPage index={nextIndex} />
            </Box>

            {/* Footer */}
            <Box sx={{
                width: '100%',
                height: '55px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                padding: '0 15px'
            }}>
                <Button variant="contained" endIcon={<Clear />}
                        sx={{
                            width: '125px',
                            height: '30px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            fontSize: '12px',
                            backgroundColor: theme.colors.danger,
                            ':hover': {
                                backgroundColor: theme.colors.dangerHovered,
                            }
                        }} onClick={() => setTriggered(false)}>
                    Abort
                </Button>

                <Button variant="contained" endIcon={<Input />}
                        sx={{
                            width: '125px',
                            height: '30px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            fontSize: '12px',
                            backgroundColor: theme.colors.accent,
                            ':hover': {
                                backgroundColor: theme.colors.accentHovered,
                            }
                        }}>
                    Send
                </Button>
            </Box>
        </Box>
    )
}

export default RegisterInnerPage