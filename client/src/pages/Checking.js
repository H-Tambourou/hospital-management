import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import img1 from '../assets/illustration3.png';
import { deleteAppointment } from '../reducers/appointmentReducer';

const Checking = function Checking() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
  };

  return (
    <div className="checkIn section">
      <h1 style={{ padding: '2rem', textAlign: 'center' }}>Checked in </h1>
      <center>
        <img className="checking-Illustration " src={img1} alt="" style={{ width: '100%' }} />
      </center>
      <Paper elevation={1} className="tableWrapper">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments
              .filter((appointment) => appointment.status === true)
              .map((appointment) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableRow key={appointment.id}>
                  <TableCell component="th" scope="row">
                    {appointment.name}
                  </TableCell>
                  <TableCell scope="row">{appointment.email}</TableCell>
                  <TableCell scope="row">{appointment.number}</TableCell>
                  <TableCell scope="row">{new Date(appointment.date).toLocaleString()}</TableCell>
                  <TableCell scope="row">
                    <DeleteIcon
                      style={{ cursor: 'pointer' }}
                      color="primary"
                      role="button"
                      onClick={() => handleDelete(appointment.id)}
                      onKeyPress={() => handleDelete(appointment.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
export default Checking;
