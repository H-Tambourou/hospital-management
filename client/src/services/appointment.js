import axios from 'axios';

const baseUrl = 'https://ht-hospital-app.herokuapp.com/api/appointments';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const config = {
    headers: { Authorization: token },
  };
  const appointment = {
    ...content,
  };
  const response = await axios.post(baseUrl, appointment, config);
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

export default { getAll, createNew, update, del, setToken };
