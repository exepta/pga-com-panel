import {Box, Typography, useTheme} from "@mui/material";
import {DateCalendar} from "@mui/x-date-pickers";
import dayjs from 'dayjs';

type Props = {
    index: number,
}

const BirthdaySocialPage = ({index}: Props) => {
    const theme = useTheme();

    const active = index === 2;
    const maxDate = dayjs("2014-12-31");
    const minDate = dayjs("1940-01-01");
    const defaultDate = dayjs("2000-01-01");

    return (
        <Box sx={{
            zIndex: active ? '10' : '0',
            position: 'absolute',
            opacity: active ? '1' : '0',
            transition: '.6s all',
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Birthday section */}
            <Box sx={{
                width: '40%',
                height: '90%',
                minWidth: '150px',
                background: theme.backgrounds.secondaryHovered,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant="h3" sx={{
                    color: theme.colors.primary,
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                }}>
                    Birth Day
                </Typography>
                <DateCalendar defaultValue={defaultDate} minDate={minDate} maxDate={maxDate} sx={{
                    '& .MuiPickersDay-root': {
                        color: theme.colors.primary, // Change day text color
                        borderRadius: '10px',
                        '&.Mui-selected, .Mui-focused': {
                            backgroundColor: theme.colors.accent, // Change selected & focused day background color
                            ':hover': {
                                backgroundColor: theme.colors.accentHovered, // Change hover day background color
                            },
                        },
                        ':hover': {
                            backgroundColor: theme.colors.accentHovered, // Change hover day background color
                        },
                        '&.MuiPickersDay-today': {
                            borderColor: theme.colors.placeholder, // Highlight today with a red border
                            border: '1px solid',
                            borderRadius: '10px'
                        },
                    },

                    '& .MuiDayCalendar-weekDayLabel': {
                        color: theme.colors.placeholder,
                    },


                    '& .MuiPickersCalendarHeader-root': {
                        backgroundColor: theme.colors.accent, // Change calendar header background color
                        color: theme.colors.primary,
                        borderRadius: '10px',
                        '& .MuiPickersCalendarHeader-switchViewButton': {
                            color: theme.colors.primary,
                            borderRadius: '2px',
                            ':hover':{
                                background: theme.colors.accentHovered,
                            }
                        },
                    },

                    '& .MuiPickersYear-root': {
                        color: theme.colors.primary, // Change color for the year when viewing year selection
                    },
                    '& .MuiPickersYear-yearButton': {
                        borderRadius: '10px',
                        '&.Mui-selected, .Mui-focused': {
                            backgroundColor: theme.colors.accent, // Change selected & focused day background color
                            ':hover': {
                                backgroundColor: theme.colors.accentHovered, // Change hover day background color
                            },
                        },
                        ':hover': {
                            backgroundColor: theme.colors.accentHovered, // Change hover day background color
                        },
                    },

                    '& .MuiIconButton-root': {
                        color: theme.colors.primary, // Color for the arrow buttons
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: theme.colors.accentHovered, // Hover effect for arrows
                        },
                    },

                    '& .MuiTypography-root': {
                        fontFamily: 'Jost, sans-serif', // Custom font for all text
                    },
                }}/>
            </Box>

            {/* Social section */}
            <Box sx={{
                width: '55%',
                height: '90%',
                minWidth: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

            </Box>
        </Box>
    )
}

export default BirthdaySocialPage