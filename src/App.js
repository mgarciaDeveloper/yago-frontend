import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./Components/Topbar/Topbar";
import Books from "./Pages/Books";
import Movies from './Pages/Movies'
import Home from "./Pages/Home";
import Matriz from "./Components/Matriz/Matriz";
import Login from "./Pages/Login";
import Root from "./Root";
import Axios from "axios";

import variables from "./variables";

import "./App.css";
function App() {
  //criar uma variável de estado para verificar se o usuário está logado.
  // ela tem um valor default de false
  //se o user estiver logado, o backend envia uma mensagem 'true', e aquela vaiável de estado será setada para 'true'
  // se o user não estiver logado, a variável de estado continua false

  //agora eu preciso verificar se esta pessoa que está tentando acessar o meu site já fez login
  // se ela já fez login, em seu PC há um cookie de login salvo
  // e este cookie fica em cópia salvo no banco de dados
  // basta eu verificar se em sua sessão há esse cookie, e se ele confere com o mesmo do DB
  //vou forçar um get para cada user que tentar acessar meu site
  // no backend, há uma route '/autenticado' que faz esse trabalho para mim: 
  //ele invoca a função nativa do passport 'isAuthenticaded()' que faz essa verificação
  //basta então eu acessar essa route!!!

  const [isAuth, setisAuth] = useState();
  function verficarSessao() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: `${variables.backUrl}/autenticado`, //esperar a resposta. o back vai responder true ou false
    }).then(
      (res) => {
        setisAuth(res.data)
        // olha que sacada! Se o user tiver sessão, o back envia true! Se não, false
      }
    )
  }

  useEffect(() => { verficarSessao(); },
    [])


  return (<BrowserRouter>
    <div className="App">
      <header className="App-header">
        {isAuth && <Topbar />}
        <Matriz>
          {/*V --- A essência da aplicação está aqui!! --- V */}
          {isAuth
            ?  <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/books" exact element={<Books />} />
              <Route path="/movies" exact element={<Movies />} />
            </Routes>
            : <Login />
          }
          {/*^ --- A essência da aplicação está aqui!! --- ^ */}
          {/* OU SEJA: Se o user não estiver logado, ele vai direto para o login
          Se estiver logado, vulgo, possui sessão, ele pode navegar pelas rotas do sistema  */}
        </Matriz>
      </header>
    </div>
  </BrowserRouter>

  );
}

export default App;
