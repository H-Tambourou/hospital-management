import axios from 'axios';

const baseUrl1 = '/api/login';
const baseUrl2 = '/api/users';

const login = async (credentials) => {
  const response = await axios.post(baseUrl1, credentials);
  return response.data;
};

const signUp = async (credentials) => {
  const user = {
    ...credentials,
  };
  const response = await axios.post(baseUrl2, user);
  return response.data;
};

export default { login, signUp };
