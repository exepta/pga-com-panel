import {Box, useTheme} from "@mui/material";

type Props = {
    index: number,
}

const BirthdaySocialPage = ({index}: Props) => {
    const theme = useTheme();

    const active = index === 2;

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

        </Box>
    )
}

export default BirthdaySocialPage