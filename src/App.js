import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route ,Routes ,Link } from 'react-router-dom';
import Login from "./Pages/Login"

function App() {
return (
  <BrowserRouter>
    <h1>Book favorites</h1>
<nav>
  <ul>
    <li>
<Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/Login'>Login</Link>
    </li>
  </ul>
</nav>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path='*'element={<h1>não tenho essa pagina</h1>} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;
