import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthProvider';
import { PatientProvider } from './context/PatientProvider';
import { HospitalProvider } from './context/HospitalProvider';

ReactDOM.render(
  <React.StrictMode>
    <PatientProvider>
      <HospitalProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HospitalProvider>
    </PatientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
