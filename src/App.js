import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
    
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
    </div>
  );
}

export default App;
