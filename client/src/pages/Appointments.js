import React from 'react';
// import Feed from '../components/Feed';
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import img1 from '../assets/illustration2.png';

const Appointment = function Appointment() {
  const data = [
    {
      Name: 'Leslie Alexander',
      Email: 'leslie.alexander@example.com',
      Number: 8732883393,
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Shuri Shoom',
      Email: 'shuri.shoom@example.com',
      Number: 783472773,
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Teresa Holland',
      Email: 'teresa.holland@example.com',
      Number: 9743846768,
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Rol Xord',
      Email: 'rol.xord@example.com',
      Number: 6268966495,
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Charley Sage',
      Email: 'charley.sage@example.com',
      Number: 5843949424,
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Meek Rugnoor',
      Email: 'meek.rugnoor@example.com',
      Number: 3498483465,
      Date: '10/20/2020',
      Visit: '9:15am',
    },
  ];

  const handleCheckIn = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="appointment section">
      <h1 style={{ padding: '2rem', textAlign: 'center' }}>Appointments</h1>
      <img src={img1} style={{ width: '100%' }} alt="" />
      <div style={{display:'flex', justifyContent:'flex-start', margin:"10px", padding:"10px"}}>
        <Button variant="contained"> Add an apppoint</Button>
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
            {data.map((appointment, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {appointment.Name}
                </TableCell>
                <TableCell scope="row">{appointment.Email}</TableCell>
                <TableCell>{appointment.Number}</TableCell>
                <TableCell scope="row">{appointment.Date}</TableCell>
                <TableCell scope="row">
                  <Button
                    color="primary"
                    onClick={() => handleCheckIn(index)}
                    onKeyPress={() => handleCheckIn(index)}
                  >
                    Check in
                  </Button>
                </TableCell>
                <TableCell scope="row">
                  <DeleteIcon
                    color="primary"
                    onClick={() => handleDelete(index)}
                    onKeyPress={() => handleDelete(index)}
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
