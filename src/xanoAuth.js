import axios from 'axios';

const BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:IzeJrQwI';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, { email, password });
    localStorage.setItem('token', response.data.token); // Store the token
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'فشل في التسجيل');
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
    localStorage.setItem('token', response.data.token); // Store the token
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'فشل في تسجيل الدخول');
  }
};

export const doSignOut = async () => {
  localStorage.removeItem('token'); // Remove the token
  return Promise.resolve();
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('لم يتم العثور على رمز');

    const response = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'فشل في جلب المستخدم الحالي');
  }
};
