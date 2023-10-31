import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Cards from './components/cards';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>CS 230L</h1>
        <h2>Section - 002</h2>
        <p>WVU ID: 800367486</p>
        <p>Hi I am Robert Needham</p>
      <Cards/><Cards/><Cards/>
    </div>
  );
}

export default App;
