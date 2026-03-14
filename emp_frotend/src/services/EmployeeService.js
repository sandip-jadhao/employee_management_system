import axios from "axios";
const url="http://localhost:8080/ems";

export const getEmployee = () =>axios.get(url);

export const deleteEmployee = (id) =>axios.delete(`${url}/${id}`);

export const addEmployee = (employee)=> axios.post(url,employee);

export const updateEmployee = (id, employee) => axios.put(`${url}/${id}`, employee);