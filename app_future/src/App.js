import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Count from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer saludo={'hola react'} />
        <Count/>


      </header>
    </div>
  );
}

export default App;

