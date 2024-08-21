import {Box, TextField, Typography, useTheme} from "@mui/material";

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
                width: '60%',
                height: '100%',
                minWidth: '175px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}>
                {/* First Name */}
                <Typography sx={{
                    fontSize: '13px',
                    color: theme.colors.accent
                }}>
                    First Name
                </Typography>
                <TextField id="first-name-input-reg" label="First Name" fullWidth variant="standard"
                           sx={{
                               '& .MuiInput-root': {
                                   color: theme.colors.primary,
                                   fontSize: '14px'
                               },
                               '& .MuiInputLabel-root': {
                                   color: theme.colors.placeholder,
                                   fontSize: '12px'
                               },
                               '& .MuiInputLabel-root.Mui-focused': {
                                   color: theme.colors.accent,
                               },
                               '& .MuiInput-underline:before': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover:before': {
                                   borderBottomColor: theme.colors.accent,
                               },
                               '& .MuiInput-underline:after': {
                                   borderBottomColor: theme.colors.accent,
                               },
                           }} />
                {/* Last Name */}
                <Typography sx={{
                    fontSize: '13px',
                    color: theme.colors.accent
                }}>
                    Last Name
                </Typography>
                <TextField id="last-name-input-reg" label="Last Name" fullWidth variant="standard"
                           sx={{
                               '& .MuiInput-root': {
                                   color: theme.colors.primary,
                                   fontSize: '14px'
                               },
                               '& .MuiInputLabel-root': {
                                   color: theme.colors.placeholder,
                                   fontSize: '12px'
                               },
                               '& .MuiInputLabel-root.Mui-focused': {
                                   color: theme.colors.accent,
                               },
                               '& .MuiInput-underline:before': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover:before': {
                                   borderBottomColor: theme.colors.accent,
                               },
                               '& .MuiInput-underline:after': {
                                   borderBottomColor: theme.colors.accent,
                               },
                           }} />
                {/* Username */}
                <Typography sx={{
                    fontSize: '13px',
                    color: theme.colors.accent
                }}>
                    Username
                </Typography>
                <TextField id="username-input-reg" label="Username" fullWidth variant="standard"
                           sx={{
                               '& .MuiInput-root': {
                                   color: theme.colors.primary,
                                   fontSize: '14px'
                               },
                               '& .MuiInputLabel-root': {
                                   color: theme.colors.placeholder,
                                   fontSize: '12px'
                               },
                               '& .MuiInputLabel-root.Mui-focused': {
                                   color: theme.colors.accent,
                               },
                               '& .MuiInput-underline:before': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover:before': {
                                   borderBottomColor: theme.colors.accent,
                               },
                               '& .MuiInput-underline:after': {
                                   borderBottomColor: theme.colors.accent,
                               },
                           }} />
                {/* Email */}
                <Typography sx={{
                    fontSize: '13px',
                    color: theme.colors.accent
                }}>
                    Email Address
                </Typography>
                <TextField id="email-input-reg" label="Email" fullWidth variant="standard"
                           sx={{
                               '& .MuiInput-root': {
                                   color: theme.colors.primary,
                                   fontSize: '14px'
                               },
                               '& .MuiInputLabel-root': {
                                   color: theme.colors.placeholder,
                                   fontSize: '12px'
                               },
                               '& .MuiInputLabel-root.Mui-focused': {
                                   color: theme.colors.accent,
                               },
                               '& .MuiInput-underline:before': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover:before': {
                                   borderBottomColor: theme.colors.accent,
                               },
                               '& .MuiInput-underline:after': {
                                   borderBottomColor: theme.colors.accent,
                               },
                           }} />
                {/* Password */}
                <Typography sx={{
                    fontSize: '13px',
                    color: theme.colors.accent
                }}>
                    Your Secure Password
                </Typography>
                <TextField id="password-input-reg" label="Password" fullWidth variant="standard" type="password"
                           sx={{
                               '& .MuiInput-root': {
                                   color: theme.colors.primary,
                                   fontSize: '14px'
                               },
                               '& .MuiInputLabel-root': {
                                   color: theme.colors.placeholder,
                                   fontSize: '12px'
                               },
                               '& .MuiInputLabel-root.Mui-focused': {
                                   color: theme.colors.accent,
                               },
                               '& .MuiInput-underline:before': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover': {
                                   borderBottomColor: theme.colors.placeholder,
                               },
                               '& .MuiInput-underline:hover:before': {
                                   borderBottomColor: theme.colors.accent,
                               },
                               '& .MuiInput-underline:after': {
                                   borderBottomColor: theme.colors.accent,
                               },
                           }} />
            </Box>
        </Box>
    )
}

export default PrivacyEntryPage