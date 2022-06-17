import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoExiste from './components/NoExiste/NoExiste'


function App() {


  return (
    <div>
      
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/detalles' element={<ItemDetailContainer />}/>
          <Route path='*' element={<NoExiste/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;