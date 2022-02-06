import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import appointmentService from '../services/appointment';
import { createAppointment } from '../reducers/appointmentReducer';

const Form = function Form({ setHideForm, hideForm }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    appointmentService.setToken(user.currentUser.token);
    const newAppointment = {
      name,
      email,
      number,
      date,
    };
    console.log(newAppointment);
    try {
      await dispatch(createAppointment(newAppointment));
      setName('');
      setEmail('');
      setNumber('');
      setDate('');
    } catch (execption) {
      console.log(execption);
    }
  };
  const handleCancel = () => {
    setHideForm(!hideForm);
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5">Make an appointment </Typography>
      <div style={{ margin: '5px' }}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="Name"
          type="text"
          required
        />
      </div>
      <div style={{ margin: '5px' }}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          label="Email"
          type="text"
          required
        />
      </div>
      <div style={{ margin: '5px' }}>
        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          name="number"
          label="Number"
          type="number"
          required
        />
      </div>
      <div style={{ margin: '5px' }}>
        <TextField
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
          type="datetime-local"
          required
        />
      </div>
      <Button type="submit">Submit</Button>
      <Button color="error" onClick={handleCancel}>
        Cancel
      </Button>
    </form>
  );
};
Form.propTypes = {
  setHideForm: PropTypes.func.isRequired,
  hideForm: PropTypes.bool.isRequired,
};
export default Form;
