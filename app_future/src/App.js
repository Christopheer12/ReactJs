import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer' 

  function App() {
  return (
  <div className="App">
    <NavBar />

    <header className="App-header">
      <ItemListContainer verde="batman"/>

      <p>
        primer desafio, aprendiendo a usar
      </p>

            </header>
    </div>
  );
}

export default App;

