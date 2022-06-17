import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/' element={<ItemDetailContainer />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;