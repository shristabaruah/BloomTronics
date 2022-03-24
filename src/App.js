import "./App.css";
import {Navbar , Footer} from "./components/index" ;
import { Home } from "../src/pages/Homepage/home"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    
    </div>
  );
}

export default App;
