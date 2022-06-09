import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/books" exact element={<Books />} />
            <Route path="/movies" exact element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
