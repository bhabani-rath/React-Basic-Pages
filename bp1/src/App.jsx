import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Bodyarea from "./components/Bodyarea";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navigation />
      <Bodyarea />
    </>
  );
}

export default App;
