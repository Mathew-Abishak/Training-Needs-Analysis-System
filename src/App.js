import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Admin from './Component/Admin';
import User from './Component/User';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Auth from './Component/Auth';
import Assessment from './Component/Assessment';
import Services from './Component/Services';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';
import Nomatch from './Component/Nomatch';

function App() {
  return (
    <div className="App">
    <Auth>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/users' element={<User/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/assessment' element={<Assessment/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </Auth>
    </div>
  );
}

export default App;
