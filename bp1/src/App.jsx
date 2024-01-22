import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Bodyarea from "./components/bodyarea";

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
