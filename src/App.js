import React, { useEffect } from 'react';

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
  // const match = useMatch();
  // console.log("macth", match);
  useEffect(() => {
    seo();
  });

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path={`/about`} element={<AboutUs />} />
        <Route path="/news" element={<NewsAndUpdates />} />
        <Route path="/blog-detail/:uuid" element={<BlogDetail />} />
        <Route path="/news-detail`/:uuid" element={<BlogDetail />} />
        <Route path="/service/:service" element={<Service />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
