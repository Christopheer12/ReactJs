import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Count from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';
import { useState } from 'react';




function App() {
  const[count,modificaCount]= useState(0)
  const onAdd =(cant)=>{
    console.log(cant)
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        <ItemListContainer saludo={'hola react'} />
        <Item/>
       <Count inicio={1} stock={10} onAdd={onAdd}/>


      </header>
    </div>
  );
}

export default App;

