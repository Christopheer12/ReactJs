import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer'

import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer'



function App() {


  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />

      </header>
    </div>
  );
}

export default App;