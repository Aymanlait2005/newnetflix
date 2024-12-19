import './App.css';
import Home from './netflix/Home';
import Navbar from './netflix/Navbar';
import { Affiche } from './projet/Affiche';
import Ajouter from './projet/Ajouter';
import Recherch from './projet/Recherch';
import { Store } from './projet/Store';
import Update from './projet/Update';
function App() {
  return (
    <div className="App">
      
      
      
      {/* <Store>
        <Ajouter/>
        <Affiche/>
        <Recherch/>
        <Update/>
      </Store> */}
      <Navbar/>
      <Home/>
    </div>
  );
}
export default App;