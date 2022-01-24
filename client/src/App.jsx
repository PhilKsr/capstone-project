import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import NewTrip from "./pages/NewTrip";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>HOME should be displayed</h1>} />
        <Route path='roadtrip' element={<NewTrip />} />
        <Route
          path='collections'
          element={<h1>COLLECTIONS should be displayed</h1>}
        />
        <Route
          path='discover'
          element={<h1>DISCOVER should be displayed</h1>}
        />
        <Route path='profile' element={<h1>PROFILE should be displayed</h1>} />
      </Routes>
    </div>
  );
}

export default App;
