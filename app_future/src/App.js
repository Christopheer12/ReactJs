import logo from './logo.svg';
import NavvBar from './components/navvBar'
import './App.css';

function App() {
  return (
    <div className="App">
 <NavvBar/>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          primer desafio, aprendiendo a usar
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
