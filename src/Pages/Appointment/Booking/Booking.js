import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';
 

const Booking = ({booking,date, setBookingSuccess}) => {

    const [openBooking, setopenBooking] = React.useState(false);
    const handleBookingOpen = () => setopenBooking(true);
    const handleBookingClose = () => setopenBooking(false);

    const {name, time, space} = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py: 5}} >
                    <Typography sx={{color: '#5fc7c7', fontWeight: 600}} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} sx={{backgroundColor: '#5fc7c7'}} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess  = {setBookingSuccess}
            >
            </BookingModal>
        </>
    );
};

export default Booking;