import './App.css';
import Card from './Components/Cards/Card';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
