import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Navigation from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './component/aboutus';

function App() {
  return (
   <div  style={{
    marginTop: "70px",
    height: "calc(99vh - 70px)",
    overflow: "auto"
  }}>

     <Navigation />
    
  <Home/>
   </div>
       
     
  );
}

export default App;
