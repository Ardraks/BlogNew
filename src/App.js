import Topbar from "./components/Topbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";
import {  BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return(
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register method='POST'/>}></Route> 
      <Route path='/' element={<Topbar/>}></Route>
      <Route path='/homepage' element={<Homepage/>}></Route>
       
      
      <Route path='/settings' element={<Settings/>}></Route> 
      <Route path='/single' element={<Single/>}></Route>  
      <Route path='/write' element={<Write/>}></Route> 

      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
