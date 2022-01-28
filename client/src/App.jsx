import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Roadtrip from "./pages/RoadtripMap";
import Collection from "./pages/Collection";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<h2>Hi!</h2>} />
        <Route path='/roadtrip' element={<Roadtrip />} />
        <Route path='/roadtrip/:id' element={<Roadtrip />} />
        <Route path='/collections' element={<Collection />} />
        <Route path='discover' element={<Discover />} />
        <Route path='profile' element={<h1>PROFILE should be displayed</h1>} />
      </Routes>
    </div>
  );
}

export default App;
