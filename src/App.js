import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route ,Routes ,Link } from 'react-router-dom';
import Login from "./Pages/Login"
import BookList from './Pages/BookList';
import BooksNav from './components/BooksNav';


function App() {
return (
  <BrowserRouter>
    <h1>Book favorites</h1>

<BooksNav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Book" element={<BookList />} />
    <Route path='*'element={<h1>não tenho essa pagina</h1>} />
  </Routes>
    </BrowserRouter>
  );
}


export default App;
