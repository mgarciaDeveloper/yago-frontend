import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Paper, Stack, Typography, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Matriz from "./Components/Matriz/Matriz";
import variables from "./variables";
import Axios from "axios";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
export default function Root() {

    const [auth, setAuth] = useState();
    function isAuth() {
        Axios({
            method: "GET",
            withCredentials: true,
            url: `${variables.backUrl}/autenticado`,
        }).then((res) => {
            setAuth(res.data);
        });
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
                <Topbar />
                <Matriz>
                    <br />
                    <br />
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