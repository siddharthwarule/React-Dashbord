// App.js

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/Home';
import Setting from './pages/Settings';
import Campaign from './pages/Campaigns';
import Flow from './pages/Flow';
import Integration from './pages/Integration';
import Team from './pages/Team';
import Costomer from './pages/Costomer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Home />} />
        <Route path="/Settings" element={<Setting />} />
        <Route path="/Campaigns" element={<Campaign />} />
        <Route path="/Flows" element={<Flow />} />
        <Route path="/Integrations" element={<Integration />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Customers" element={<Costomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
