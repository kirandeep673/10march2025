import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
// import "./public/assets/css/styles.css";

const App = () => {
  return (
    <>
    <Router>
      <div>
      <Header />
          {/* <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav> */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <hr />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
