import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Header";
import Maincontent from "./Maincontent";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="page">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
