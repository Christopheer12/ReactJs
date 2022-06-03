import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer saludo={'hola react'} />

        <p>
          primer desafio, aprendiendo a usar
        </p>

      </header>
    </div>
  );
}

export default App;

