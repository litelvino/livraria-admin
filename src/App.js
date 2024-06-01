import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Cliente from "./components/Cliente";
import Livro from "./components/Livro";
import Venda from "./components/Venda";
import Emprestimo from "./components/Emprestimo";
import Relatorio from "./components/Relatorio";

import logo from "./imgs/logo.png";
import icon_cliente from "./imgs/clientes.png";
import icon_livro from "./imgs/livros.png";
import icon_venda from "./imgs/vendas.png";
import icon_emprestimo from "./imgs/emprestimos.png";
import icon_relatorio from "./imgs/relatorios.png";
import icon_sair from "./imgs/sair.png";

import "./App.css";
import "./Grid.css";

let App = () => {
  return (
    <div className="App col-dg-12 box-main">
      <div className="box-main-nav">
        <nav className="">
          <ul id="navigation">
            <li className="nav-item-center">
              <Link to="/">
                <div className="nav-home-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </Link>
            </li>
            <li className="nav-item-center">
              <span className="box-nav-border"></span>
            </li>
            <li className="li-nav-tem-style">
              <Link to="/clientes">
                <div className="nav-item-style">
                  <img src={icon_cliente} className="App-logo" alt="logo" />
                  <p>Clientes</p>
                </div>
              </Link>
            </li>
            <li className="li-nav-tem-style">
              <Link to="/livros">
                <div className="nav-item-style">
                  <img src={icon_livro} className="App-logo" alt="logo" />
                  <p>Livros</p>
                </div>
              </Link>
            </li>
            <li className="li-nav-tem-style">
              <Link to="/vendas">
                <div className="nav-item-style">
                  <img src={icon_venda} className="App-logo" alt="logo" />
                  <p>Vendas</p>
                </div>
              </Link>
            </li>
            <li className="li-nav-tem-style">
              <Link to="/emprestimos">
                <div className="nav-item-style">
                  <img src={icon_emprestimo} className="App-logo" alt="logo" />
                  <p>Empréstimos</p>
                </div>
              </Link>
            </li>
            <li className="li-nav-tem-style">
              <Link to="/relatorios">
                <div className="nav-item-style">
                  <img src={icon_relatorio} className="App-logo" alt="logo" />
                  <p>Relatórios</p>
                </div>
              </Link>
            </li>
            <li className="li-nav-tem-style nav-item-button-sair">
              <Link to="/">
                <div className="nav-item-style">
                  <img src={icon_sair} className="App-logo" alt="logo" />
                  <p>Sair</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-circle-decoration">
          <span className="nav-circle-decoration1"></span>
          <span className="nav-circle-decoration2"></span>
        </div>
      </div>

      <div className="box-main-routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/clientes" element={<Cliente />} />
          <Route path="/livros" element={<Livro />} />
          <Route path="/vendas" element={<Venda />} />
          <Route path="/emprestimos" element={<Emprestimo />} />
          <Route path="/relatorios" element={<Relatorio />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
