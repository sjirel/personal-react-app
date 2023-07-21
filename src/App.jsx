import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Header";
import Maincontent from "./Maincontent";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.body.classList.remove("loading");
    window.scrollTo(0, 0);
    console.log("my my");
  }, []);

  return (
    <div id="page">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
