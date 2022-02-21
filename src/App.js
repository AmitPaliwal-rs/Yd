import React from 'react';
import './App.css';
import DashBoard from './DashBoard';
import LoginPage from './LoginPage';
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";
import PersonData from './PersonData';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' exact element={<LoginPage />} />
        <Route path='/dashboard' exact element={<DashBoard />} />
        <Route path='/dashboard/persondata' exact element={<PersonData/>} />
        <Route path='/dashboard/persondata/cart-boy' exact element={<PersonData staff="cart-boy" />} />
        <Route path='/dashboard/persondata/delivery-boy' exact element={<PersonData staff="delivery-boy" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;