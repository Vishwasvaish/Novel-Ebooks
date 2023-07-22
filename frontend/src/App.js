import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AddEbook from './components/Book';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route element={ <Home /> } path="home" />
            <Route element={ <Login /> } path="Login" />
            <Route element={ <Signup /> } path="Signup" />
            <Route element={ <AddEbook /> } path="addebook" />
            <Route element={ <Footer /> } path="Footer" />
          </Routes>
       </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
