import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import Services from "./components/Services";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <main>
      <Header show={show} setShow={setShow} />
      <Hero show={show} />
      <ChooseUs />

      <Articles />
      <Footer />
    </main>
  );
}

export default App;
