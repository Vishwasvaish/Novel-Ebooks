import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import EventHandling from "./components/EventHandling";
import StateMangement from "./components/StateMangement";
import Todo from "./components/Todo";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={ <Home /> } path="home" />
          <Route element={ <Login /> } path="login" />
          <Route element={ <Signup /> } path="signup" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;