import axios from 'axios';

// const API_URL = '/api/appointments'; 
const API_URL = 'http://localhost:5000/api/appointments';

const getAppointments = async () => {
  return await axios.get(API_URL);
};

const addAppointment = async (appointmentData) => {
  return await axios.post(API_URL, appointmentData);
};

const deleteAppointment = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export default { getAppointments, addAppointment, deleteAppointment };
