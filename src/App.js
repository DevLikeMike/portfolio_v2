import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Component Imports
import Header from "./components/navigation/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Landing />
          <About />
          <Projects />
          <hr style={{ width: "95%", margin: "0 auto 1rem" }} />
          <Contact />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
