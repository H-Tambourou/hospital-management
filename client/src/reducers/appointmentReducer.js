import appointmentService from '../services/appointment';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'INIT_APPOINTMENT': {
      return action.data;
    }
    case 'NEW_APPOINTMENT': {
      const newObj = action.data;
      return state.concat(newObj);
    }
    case 'STATUS': {
      const { id } = action.data;
      const appointmentToUpdate = state.find((appointment) => appointment.id === id);
      const appointmentCheckedin = {
        ...appointmentToUpdate,
        status: true,
      };
      return state.map((appointment) =>
        appointment.id !== id ? appointment : appointmentCheckedin
      );
    }
    case 'DELETE_APPOINTMENT': {
      const { id } = action.data;
      return state.filter((appointment) => appointment.id !== id);
    }
    default:
      return state;
  }
};

// Actions creators
export const initializeAppointments = () => async (dispatch) => {
  const appointments = await appointmentService.getAll();
  dispatch({
    type: 'INIT_APPOINTMENT',
    data: appointments,
  });
};

export const createAppointment = (content) => async (dispatch) => {
  const newAppoitment = await appointmentService.createNew(content);
  dispatch({
    type: 'NEW_APPOINTMENT',
    data: newAppoitment,
  });
};

export const updateStatus = (appointment) => async (dispatch) => {
  const updatedAppointment = await appointmentService.update({ ...appointment, status: true });
  dispatch({
    type: 'STATUS',
    data: updatedAppointment,
  });
};

export const deleteAppointment = (id) => async (dispatch) => {
  await appointmentService.del(id);
  dispatch({
    type: 'DELETE_APPOINTMENT',
    data: id,
  });
};

export default reducer;
