import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={ItemListContainer} />
        <Route path='/category/:id' element = {ItemListContainer />} />
        <Route path='/item/:id' element = {ItemDetailContainer/>} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
