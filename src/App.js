import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= "Hola, Bienvenido"/>
    </div>
  );
}

export default App;
