import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import Summary from './components/Summary';
import './App.css';
import AppointmentForm from './components/AppointmentForm';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Appointment Scheduler</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/appoinmentForm" element={<AppointmentForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
