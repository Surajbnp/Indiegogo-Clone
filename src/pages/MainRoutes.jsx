import React from "react";
import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage';
import AudioPage from './AudioPage';
import Login from './Login';
import Signup from './Signup';
import SinglePage from './SinglePage';
import {PaymentPage} from './PaymentPage';
import RequireAuth from '../components/RequireAuth'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/audio" element={<AudioPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/audio/:id" element={<SinglePage />} />
      <Route path="/audio/:id/payment" element={
        <RequireAuth>
         <PaymentPage />
        </RequireAuth>
      } />
    </Routes>
  )
};

export default MainRoutes;
