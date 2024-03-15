import React from 'react';
import './App.css';

import {  Route,Routes } from 'react-router-dom'
import Create from './components/create';
import Productpage from './components/Productpage';
import Productupdate from './components/productupdate';
import Orderpage from './components/orders/OrderPage';
import UpdateStatus from './components/orders/UpdateStatus';
import Header from './components/Pages/header';
import Calendar from './components/Pages/Calender';

function App() {
  return (
<>
<Routes>
<Route path='/' element={<Header/>}/>
 <Route path='/create' element={<Create/>}/>
  <Route path='/product' element={<Productpage/>}/>
  <Route path='/Update' element={<Productupdate/>}/>
  <Route path='/order' element={<Orderpage/>}/>
  <Route path='/updateStatus' element={<UpdateStatus/>}/>
  <Route path='/calender' element={<Calendar/>}/>




</Routes>
</>
  );
}

export default App;