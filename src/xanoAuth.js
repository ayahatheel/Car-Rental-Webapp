import axios from 'axios';

const BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:IzeJrQwI';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const doSignOut = async () => {
  // Handle sign out logic, e.g., clearing tokens or session data
  return Promise.resolve();
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
