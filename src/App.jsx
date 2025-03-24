import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import TopRated from './Pages/TopRated';
import Navbar from './components/Nav/Navbar';
import Popup from './components/Popup/Popup';
import KidsWear from "./Pages/KidsWear";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <Router>
      {/* Passe handleOrderPopup à Navbar */}
      <Navbar handleOrderPopup={handleOrderPopup} />
      
      <Routes>
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/kids-wear" element={<KidsWear />} />
      </Routes>

      {/* Affichage du Popup */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </Router>
  );
}

export default App;
