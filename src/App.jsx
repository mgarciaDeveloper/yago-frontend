import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import Matriz from "./Components/Matriz/matriz";
import "./App.css";
import { Pie } from "@antv/g2plot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          style={{ width: "100%" }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            style={{ width: "95%" }}
          >
            <Matriz>
              <BrowserRouter>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/home" exact element={<Home />} />
                  <Route path="/books" exact element={<Books />} />
                  <Route path="/pie" exact element={<Pie/>} />
                  <Route path="/movies" exact element={<Movies />} />
                </Routes>
              </BrowserRouter>
            </Matriz>
          </Stack>
        </Stack>
      </header>
    </div>
  );
}  

export default App;
