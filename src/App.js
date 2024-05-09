import React, { useEffect, useState } from 'react';

import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useMatch } from "react-router-dom";
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import NewsAndUpdates from './pages/NewsAndUpdate';
// import NewsAndUpdateDetail from './pages/NewsAndUpdateDetail';
import { seo } from './utils';


function App() {
  const [showFlash, setShowFlash] = useState(true);

  // const match = useMatch();
  // console.log("macth", match);
  useEffect(() => {
    seo();
    setTimeout(() => {
      setShowFlash(false)
    }, 3000)
  });

  return (
    <div className="App">
      {showFlash &&
        <div class="center-page loading">
          <img src="/assets/img/splash.jpeg" alt="logo" className='spalsh-image-width' />
        </div>
      }
      {!showFlash && <Header></Header>}
      {!showFlash && <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path={`/about`} element={<AboutUs />} />
        <Route path="/news" element={<NewsAndUpdates />} />
        <Route path="/blog/:uuid" element={<BlogDetail />} />
        <Route path="/news/:uuid" element={<BlogDetail />} />
        <Route path="/service/:service" element={<Service />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
      </Routes>}
      {!showFlash && <Footer></Footer>}
    </div>
  );
}

export default App;
