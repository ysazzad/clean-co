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

function App() {
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>

      </Navbar>


    </div>
  );
}

export default App;
