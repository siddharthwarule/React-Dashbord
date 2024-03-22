
import './App.css';


import Setting from './pages/Settings';
import Campaign from './pages/Campaigns';
import Flow from './pages/Flow';
import Integration from './pages/Integration';
import Team from './pages/Team';
import Costomer from './pages/Costomer';

import Home from './pages/Home';
import { Routes ,Route ,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/Dashboard' element={<Home/>}> </Route>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/Settings' element={<Setting/>}> </Route>
      <Route path='/Campaigns' element={<Campaign/>}> </Route>
      <Route path='/Flows' element={<Flow/>}> </Route>
      <Route path='/Integrations' element={<Integration/>}> </Route>
      <Route path='/Team' element={<Team/>}> </Route>
      <Route path='/Customers' element={<Costomer/>}> </Route>
     </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App;
