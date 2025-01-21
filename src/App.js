// App.js

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/admin/dashboard';
import Setting from './pages/admin/settings';
import Profile from './pages/admin/adminProfile';
import Themes from './pages/admin/themes';
import CustomerCard from './pages/admin/customer_card';
import Costomer from './pages/admin/customer_details';

import Login from './components/admin_auth/login_component/Login';
import Signup from './components/admin_auth/signup_component/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Home />} />
        <Route path="/Settings" element={<Setting />} />  
        <Route path="/My Profile" element={<Profile />} />
        <Route path="/Themes" element={<Themes />} />
        <Route path="/Customers Card" element={<CustomerCard />} />
        <Route path="/Customers" element={<Costomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
