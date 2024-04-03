import axios from "axios";
axios.defaults.withCredentials = true;

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const MODULES_API = `${API_BASE}/api/modules`;

export const updateModule = async (module: any) => {
  const response = await axios.put(`${MODULES_API}/${module._id}`, module, { withCredentials: true });
  return response.data;
}

export const deleteModule = async (moduleId: any) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`, { withCredentials: true });
  return response.data;
}

export const createModule = async (courseId: any, module: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module, { withCredentials: true });
  return response.data
}

export const findModulesForCourse = async (courseId: any) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`, { withCredentials: true });
  return response.data;
}