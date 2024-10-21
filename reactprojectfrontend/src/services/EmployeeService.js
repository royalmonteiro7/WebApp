import axios from 'axios';

const API_URL = 'https://localhost:7079/api/Employees';

export const getEmployees = () => axios.get(API_URL);

export const getEmployee = (id) => axios.get(`${API_URL}/${id}`);

export const createEmployee = (employee) => axios.post(API_URL, employee);

export const updateEmployee = (employee) => axios.put(`${API_URL}/${employee.id}`, employee);

export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
