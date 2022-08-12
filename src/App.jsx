import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import Matriz from "./Components/Matriz/Matriz";
import "./App.css";
import { Pie } from "@antv/g2plot";
import Login from "./Pages/Login";
import Topbar from "./Components/topbar/Topbar";
import Axios  from "axios";
import variables from "./variables";

function App() {
  const [auth,setAuth]= useState(false);
  function isAuth(){
    Axios({
      method: "GET",
      withCredentials: true,
      url: `${variables.back}/auth`, //esperar a resposta. o back vai responder true ou false
    }).then(
      (res) => {
        alert(res.data)
        setAuth(res.data)
        // Se o user tiver sessão, o back envia true! Se não, false
      }
    )
  }

  useEffect(() => {
    //função para ser executada toda vez que se abrir o meu sistema 
    isAuth();
    alert('teste');
}, [/* dependências */])

  return <BrowserRouter> {/* Toda função/botão de direcionamento de rotas deve estar, obrigatóriamente, dentro
deste elemento, ou seja, 'daqui pra baixo'.*/}
    <div className="App">
        <header className="App-header">
            
            <Matriz>
                {auth ? <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/home" exact element={<Home />} />
                    <Route path="/books" exact element={<Books />} />
                    <Route path="/movies" exact element={<Movies />} />
                    <Route path="/login" exact element={<Login />} />
                </Routes> : <Login />}
            </Matriz>
        </header>
    </div>
</BrowserRouter>
}  

export default App;
