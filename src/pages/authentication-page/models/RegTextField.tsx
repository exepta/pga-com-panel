import {Box, TextField, useTheme} from "@mui/material";

type Props = {
    id: string,
    name: string,
    type?: string,
    onChange?: (value: string) => void,
}

const RegTextField = ({id, name, type, onChange}: Props) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: '100%',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            borderRadius: '8px'
        }}>
            <TextField id={id} label={name} fullWidth variant="outlined" type={type}
                       sx={{
                           '& .MuiOutlinedInput-root': {
                               '& fieldset': {
                                   borderColor: theme.colors.placeholder,
                                   borderWidth: '2px',
                               },
                               '&:hover fieldset': {
                                   borderColor: theme.colors.accent,
                               },
                               '&.Mui-focused fieldset': {
                                   borderColor: theme.colors.accent,
                               },
                               '& input': {
                                   color: theme.colors.primary,
                               },
                           },

                           '& .MuiInputLabel-root': {
                               color: theme.colors.placeholder,
                           },
                           '& .MuiInputLabel-root.Mui-focused': {
                               color: theme.colors.accent,
                           },
                       }}
                       onChange={event => onChange && onChange(event.target.value)}
            />
        </Box>
    );
}

export default RegTextField;