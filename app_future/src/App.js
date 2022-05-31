import logo from './logo.svg';
import NavvBar from './components/navbar/NavvBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/itemListContainer/ItemListContainer' 
import './App.css';

function App() {
  return (
    <div className="App">
 <NavvBar/>
 
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
       <CartWidget/>
       <ItemListContainer/>

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
