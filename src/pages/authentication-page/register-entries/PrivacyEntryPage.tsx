import {Box, Typography, useTheme} from "@mui/material";
import RegTextField from "../models/RegTextField.tsx";

type Props = {
    index: number,
}

const PrivacyEntryPage = ({index}: Props) => {
    const theme = useTheme();

    const active = index === 1;

    return (
        <Box sx={{
            zIndex: active ? '10' : '0',
            position: 'absolute',
            opacity: active ? '1' : '0',
            transition: '.6s all',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                position: 'relative',
                width: '60%',
                height: '100%',
                minWidth: '175px',
                display: 'flex',
                paddingTop: '40px',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
            }}>
                <Box sx={{
                    width: '100%',
                    padding: '20px',
                    backgroundColor: theme.backgrounds.secondaryHovered,
                    boxShadow: '0 0 10px ' + theme.backgrounds.secondaryHovered,
                    borderRadius: '8px',
                }}>
                    {/* First Name */}
                    <RegTextField id="first-name-input-id" name="First Name" />
                    {/* Last Name */}
                    <RegTextField id="last-name-input-id" name="Last Name" />
                    {/* Email */}
                    <RegTextField id="email-input-id" name="E-Mail" />
                </Box>
                {/* Terms */}
                <Box sx={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '0',
                    width: '100%',
                    height: 'auto',
                    padding: '10px 30px',
                }}>
                    <Typography sx={{
                        fontSize: '1.1rem',
                        color: theme.colors.accent,
                    }}>
                        Important Information!
                    </Typography>
                    <Typography sx={{
                        fontSize: '0.9rem',
                        color: theme.colors.placeholder
                    }}>
                        Please make sure that your details are correct!
                        This is important if you win a Tournament or if we have questions about you.
                        As a coach, it is particularly important because otherwise you will not receive any money!
                        If you provide incorrect information, you are not entitled to a final payment or prize money if you have taken part in a Tournament.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default PrivacyEntryPage