import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import ReactDOM from 'react-dom/client'
// Sections
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
// Pages
import Home from './components/pages/Home';
import ArticleIndex from './components/pages/articles/index';
import ArticleAdd from './components/pages/articles/Add';
// Styles
import './assets/css/General.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticleIndex />} />
        <Route path="/articles/add" element={<ArticleAdd />} />

      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
)
