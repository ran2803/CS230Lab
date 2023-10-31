import logo from './logo.svg';
import './App.css';
import './components/navbar';
import './components/cards';
import NavBar from './components/navbar';


function App() {
  return (
  <>
    <div className="App">
      <NavBar/>
      <h1>CS 230L</h1>
        <h2>Section - 002</h2>
        <p>WVU ID: 800367486</p>
        <p>Hi I am Robert Needham</p>
    </div>
    <div>
      <div className="Cards">
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
    </div>
  </>
  );
}

export default App;
