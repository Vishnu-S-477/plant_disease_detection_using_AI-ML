import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Detect from './Components/Detect';
import History from './Components/History';
import Profile from './Components/Profile';
import Header from './Components/Header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Header/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Detect" element={<Detect/>} />
        <Route path="/History" element={<History/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
