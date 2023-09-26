import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiZalo } from "react-icons/si";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <div id="page" class="site">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <div class="zalo-fix">
            <a
              class="click--zalo"
              href="https://zalo.me/0367559981"
              target="_blank"
            >
              <SiZalo/>
            </a>
          </div>
          <div class="phone-fixed">
            <a href="tel:0938049434" class="hotline-mobi" rel="nofollow">
              <div class="website-alo-phone">
                <div class="quydinh-tip quydinh-tip-2">0938.049.434</div>
                <div class="animated infinite zoomIn website-alo-ph-circle"></div>
                <div class="animated infinite pulse website-alo-ph-circle-fill"></div>
                <div class="animated infinite tada website-alo-ph-img-circle">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
              </div>
            </a>
          </div>
          <a href="#page" class="gotop" style={{ right: "15px" }}>
            <i class="fa fa-chevron-up"></i>
          </a>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
