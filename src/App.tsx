import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Article from './components/Article/Article';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path = "articles/:id" element ={<Article/>}/>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
