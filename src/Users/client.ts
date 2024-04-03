import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;
axios.defaults.withCredentials = true;

export interface User { _id: string; username: string; password: string; role: string;
firstName: string, lastName: string };

export const signup = async (user: any) => {
  const response = await axios.post(`${USERS_API}/signup`, user, { withCredentials: true });
  return response.data;
};

export const signin = async (credentials: User) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials, { withCredentials: true });
  return response.data;
};

export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`, { withCredentials: true });
  return response.data;
};


export const profile = async () => {
  const response = await axios.post(`${USERS_API}/profile`, { withCredentials: true });
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user, { withCredentials: true });
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${USERS_API}`, { withCredentials: true });
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user, { withCredentials: true });
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await axios.delete(
    `${USERS_API}/${user._id}`, { withCredentials: true });
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`, { withCredentials: true });
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`, { withCredentials: true });
  return response.data;
};
