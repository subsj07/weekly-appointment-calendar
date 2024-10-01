import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
  const response = await axios.get('http://localhost:5000/api/appointments/');
  console.log("response",response)
  return response.data;
});

export const addAppointment = createAsyncThunk('appointments/addAppointment', async (appointment) => {
  const response = await axios.post('http://localhost:5000/api/appointments/', appointment);
  return response.data;
});



export const deleteAppointment = createAsyncThunk('appointments/deleteAppointment', async (id) => {
  await axios.delete(`http://localhost:5000/api/appointments/${id}`);
  return id;
});

export const updateAppointment = createAsyncThunk('appointments/updateAppointment', async (appointment) => {
  const response = await axios.put(`/api/appointments/${appointment._id}`, appointment);
  return response.data;
});

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: { appointments: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.appointments = action.payload;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.appointments.push(action.payload);
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.appointments = state.appointments.filter(app => app._id !== action.payload);
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        const index = state.appointments.findIndex(app => app._id === action.payload._id);
        state.appointments[index] = action.payload; 
      });
  },
});

export default appointmentSlice.reducer;
