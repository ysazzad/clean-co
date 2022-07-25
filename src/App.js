import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Service from './pages/Service'
import {
  Routes,
  Route,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './authentication/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminRoute from './authentication/AdminRoute';
function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<PrivateRoute>
            <About></About>
          </PrivateRoute>}></Route>
          <Route path='/service' element={<PrivateRoute>
            <Service></Service>
          </PrivateRoute>}></Route>
          <Route path='/dashboard' element={<AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>

      </Navbar>


    </div>
  );
}

export default App;
