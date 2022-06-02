
import NavvBar from './components/navbar/NavvBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/itemListContainer/ItemListContainer' 


function App() {
  return (
    <div className="App">
 <NavvBar/>
 
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
