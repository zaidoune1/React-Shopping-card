import NavBar from "./compounents/NavBar"
import Home from "./compounents/Home";
import { Routes, Route } from 'react-router-dom';
import About from "./compounents/About";
import Cards from "./compounents/Cards";

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/cards" element={<Cards/>}></Route>            
      </Routes>
    </div>
  )
}

export default App
