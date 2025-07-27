import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import PatientsPage from './pages/PatientsPage';
import BillingPage from './pages/BillingPage';
import AnalyticsPage from './pages/AnalyticsPage';
import LogoutPage from './pages/LogoutPage';
import './App.css';

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/" element={<PrivateRoute><MainLayout /></PrivateRoute>}>
            <Route path="patients" element={<PatientsPage />} />
            <Route path="billing" element={<BillingPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route index element={<Navigate to="/patients" />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
