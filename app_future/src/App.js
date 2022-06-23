import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoExiste from './components/NoExiste/NoExiste'
import { Cart } from './components/Cart/Cart';
import { CartContext } from './components/Context/CartContext';




function App() {


  return (
    <CartContext.Provider><div>
      
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path="/estado/:estadoId" element={<ItemListContainer />}/>
          <Route path='/detalles/:id' element={<ItemDetailContainer />}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='*' element={<NoExiste/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    </CartContext.Provider>
    
  );
}

export default App;