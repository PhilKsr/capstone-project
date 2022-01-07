import { useEffect, useState } from "react";
import "./App.css";

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
    </div>
  );
}

export default App;
