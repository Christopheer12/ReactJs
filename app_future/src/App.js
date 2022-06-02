
import NavBar from './components/Navbar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/itemListContainer/ItemListContainer' 


function App() {
  return (
    <div className="App">
 <NavBar/>
 
      <header className="App-header">
       <ItemListContainer/>

        <p>
          primer desafio, aprendiendo a usar
        </p>
        
      </header>
    </div>
  );
}

export default App;
