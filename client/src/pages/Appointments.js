import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Feed from '../components/Feed';
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import img1 from '../assets/illustration2.png';
import Form from '../components/Form';
import { deleteAppointment, updateStatus } from '../reducers/appointmentReducer';

const Appointment = function Appointment() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);
  const [hideForm, setHideForm] = useState(true);

  const handleCheckIn = (object) => {
    dispatch(updateStatus(object));
  };
  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
  };

  return (
    <div className="appointment section">
      <h1 style={{ padding: '2rem', textAlign: 'center' }}>Appointments</h1>
      <center>
        <img className="appointment-Illustration" src={img1} style={{ width: '100%' }} alt="" />
      </center>

      <div style={{ margin: '5px' }}>
        {hideForm ? (
          <Button
            variant="contained"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              margin: '10px',
              padding: '10px',
            }}
            onClick={() => setHideForm(!hideForm)}
          >
            Add an apppointment
          </Button>
        ) : (
          <Form setHideForm={setHideForm} hideForm={hideForm} />
        )}
      </div>
      <Paper elevation={3} className="tableWrapper">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Check in</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments
              .filter((appointment) => appointment.status === false)
              .map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell component="th" scope="row">
                    {appointment.name}
                  </TableCell>
                  <TableCell scope="row">{appointment.email}</TableCell>
                  <TableCell>{appointment.number}</TableCell>
                  <TableCell scope="row">{new Date(appointment.date).toLocaleString()}</TableCell>
                  <TableCell scope="row">
                    <Button
                      color="primary"
                      onClick={() => handleCheckIn(appointment)}
                      onKeyPress={() => handleCheckIn(appointment)}
                    >
                      Check in
                    </Button>
                  </TableCell>
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
export default Appointment;
