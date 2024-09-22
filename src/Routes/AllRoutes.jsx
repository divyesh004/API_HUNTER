import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from "../Components/PrivateRoute";
import SingleProductPage from './SingleProductPage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/products/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
    </Routes>
  );
};

export default AllRoutes;
