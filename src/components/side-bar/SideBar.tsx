import {Grid, useTheme} from "@mui/material";

type Props = {
    state: boolean;
}

const SideBar = ({ state } :Props) => {
    const theme = useTheme();

    return(
        state &&
        <Grid container sx={{
            width: "250px",
            height: 'calc(100vh - 60px)',
            backgroundColor: theme.backgrounds.primary,
            boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)'
        }}>

        </Grid>
    )
}

export default SideBar;