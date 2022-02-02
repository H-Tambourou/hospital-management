import axios from 'axios';

const baseUrl = '/api/appointments';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const appointment = {
    ...content,
  };
  const response = await axios.post(baseUrl, appointment);
  return response.data;
};

const update = async (updatedObject) => {
  const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject);
  return response.data;
};

const del = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.status;
};

export default { getAll, createNew, update, del };
