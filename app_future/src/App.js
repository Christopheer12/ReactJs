import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer'
import Count from './components/Count/Count';
import ItemDetailContainer from'./components/containers/ItemDetailContainer/ItemDetailContainer' 
import { useState } from 'react';


function App() {
  const [count, modificaCount] = useState(0)
  const onAdd = (cant) => {
    console.log(cant)
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar />
        <ItemListContainer/>
        <Count inicio={1} stock={10} onAdd={onAdd} />
        <ItemDetailContainer/>

      </header>
    </div>
  );
}

export default App;