import React from 'react';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import img1 from '../assets/illustration3.png';

const Checking = function Checking() {
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
  ];
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="checkIn section">
      <h1 style={{ padding: '2rem', textAlign: 'center' }}>Checked in </h1>
      <img src={img1} alt="" style={{ width: '100%' }} />
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
            {data.map((appointment, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {appointment.Name}
                </TableCell>
                <TableCell scope="row">{appointment.Email}</TableCell>
                <TableCell scope="row">{appointment.Number}</TableCell>
                <TableCell scope="row">{appointment.Date}</TableCell>
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
export default Checking;
