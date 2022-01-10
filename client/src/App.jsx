import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [myHeadline, setMyHeadline] = useState("");

  useEffect(() => {
    fetchMyHeadline();
  }, []);

  const fetchMyHeadline = async () => {
    const res = await fetch("http://localhost:4000/api");
    const data = await res.json();
    setMyHeadline(data.message);
  };

  return (
    <div className='App'>
      <h1>Message from Server: {myHeadline}</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>HOME should be displayed</h1>} />
        <Route path='new' element={<h1>NEW should be displayed</h1>} />
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
