import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Roadtrip from "./pages/RoadtripMap";
import Collection from "./pages/Collection";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import PackingList from "./pages/PackingList";
import Loading from "./pages/Loading";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/roadtrip' element={<Roadtrip />} />
        <Route path='/roadtrip/:id' element={<Roadtrip />} />
        <Route path='/collections' element={<Collection />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/packing-list' element={<PackingList />} />
      </Routes>
    </div>
  );
}

export default App;
