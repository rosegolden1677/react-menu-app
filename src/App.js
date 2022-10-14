import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
