import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Favourites from './Components/Favourites';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
