import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Appointments = ({date}) => {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `https://guarded-beach-67594.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
    fetch(url, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date, user.email, token]);

  return (
    <div>
      <h2>You have currently {appointments.length} appointments</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Appointments Table">
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell align="right"><Button variant="contained">Action</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
