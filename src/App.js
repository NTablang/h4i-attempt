import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import BannerTop from "./components/BannerTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import ErrorPage from "./pages/ErrorPage";
import Students from "./pages/Students";
import Nonprofits from "./pages/Nonprofits";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar.js'
import React from "react";


function App() {
  return (
    <>

    <Router>
      <BannerTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/students" element={<Students />} />
        <Route path="/nonprofits" element={<Nonprofits />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
