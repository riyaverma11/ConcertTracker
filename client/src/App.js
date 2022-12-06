import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Add from "./pages/Add";
import Concerts from "./pages/Concerts";
import Update from "./pages/Update";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Concerts/>}/>
        <Route path ="/add" element={<Add/>}/>
        <Route path ="/update/:concertID" element={<Update/>}/>
        <Route path ="/login" element={<Login/>}/>                          
        <Route path ="/signup" element={<SignUp/>}/>                          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
