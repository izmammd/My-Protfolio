import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Experience from "./Component/Pages/Experience";
import Projects from "./Component/Pages/Project";
import Contact from "./Component/Pages/Contact";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-5"
        style={{
          background: "linear-gradient(to right, #0f172a, #1e3a8a)", backdropFilter: "blur(12px)"
        }}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />

      </div >
    </>
    // <BrowserRouter>
    //   <div className="app-bg">
    //     <Navbar />

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/experience" element={<Experience />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>


  );
}

export default App;