import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Favoris from "./pages/Favoris";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coups-de-coeur" element={<Favoris />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;