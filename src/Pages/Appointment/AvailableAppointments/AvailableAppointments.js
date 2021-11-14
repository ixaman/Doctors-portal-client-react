import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointments = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            space: 10
        },
        {
            id: 2,
            name: 'Cosmetic Destistry',
            time: '09.00 AM - 10.00 AM',
            space: 6
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 8
        },
        {
            id: 4,
            name: 'Pediatric Dental',
            time: '06.00 AM - 07.00 AM',
            space: 5
        },
        {
            id: 5,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 10
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 09.00 PM',
            space: 8
        },
    ]


    return (
        <Container>
            <Typography variant="h4" sx={{color: '#5fc7c7', mb: 5}}>Available Appointments on  {date.toDateString()}
            {bookingSuccess && (
                    <Alert severity="success">Booking Successful!</Alert>
                    )}
            </Typography>    
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess = {setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;