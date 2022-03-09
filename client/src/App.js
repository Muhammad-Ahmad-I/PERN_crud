import React from 'react';
import AddPagesGig from './components/pages/AddPagesGig';
import Header from './components/Header/header';
import AllGigs from './components/pages/AllGigs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllGigs />} />
        <Route path="/add" element={<AddPagesGig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
