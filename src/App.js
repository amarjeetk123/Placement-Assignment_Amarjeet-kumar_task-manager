
import './App.css';
import Homepage from './component/homePage';
import Login from './component/login';
import Register from './component/register';
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const SERVER_URL = "https://reqres.in";

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar setRemoveBox={setRemoveBox} setSearchInput={setSearchInput} searchInput={searchInput}  removebox={removebox} /> */}
    <Routes>
 
      <Route path='/' element={ <Login /> } />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
