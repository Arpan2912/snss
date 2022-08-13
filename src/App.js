import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Blogs from './pages/Blogs';
import { Switch } from "react-router";
import BlogDetail from './pages/BlogDetail';
const {innerWidth, innerHeight} = window;



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
