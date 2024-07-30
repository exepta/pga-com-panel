import {Box, useTheme} from "@mui/material";

type Props = {
    extended: boolean,
}

const Header = ( { extended } :Props ) => {
    const theme = useTheme();
    const width :string = extended ? '250' : '65';
    return(
        <Box sx={{
            position: 'fixed',
            transform: 'translateX(' + width + 'px)',
            width: 'calc(100% - (' + width + 'px - 8px))',
            height: '50px',
            transition: '.5s all',
            backgroundColor: theme.backgrounds.secondary,
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            paddingLeft: '28px',
            paddingRight: '20px'
        }}>

        </Box>
    )
}

export default Header