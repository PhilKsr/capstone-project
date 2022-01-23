import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Roadtrip from "./pages/RoadtripMap";
import Collection from "./pages/Collection";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>HOME should be displayed</h1>} />
        <Route path='roadtrip' element={<Roadtrip />} />
        <Route path='collections' element={<Collection />} />
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
