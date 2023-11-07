import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';
import Card from './components/card';
import Placeholder from './components/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter> 
        <NavBar /> 
        <Routes> 
          <Route path="/" element={<Home />}></Route> 
          <Route path="/card" element={<Card />}></Route> 
          <Route path="/contact" element={<Placeholder />}></Route> 
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
