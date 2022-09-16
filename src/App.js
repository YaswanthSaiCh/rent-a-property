import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Favourites from './Components/Favourites';
import AddProperty from './Components/AddProperty';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/add-a-property' element={<AddProperty />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
