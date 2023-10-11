"use client";

import React from "react";
import fornecedorEprodutos from "../../../dados/fornecedorEprodutos.json";

export const Drawer = () => {
  return (
    <ul className="menu w-72 bg-base-200 rounded-box rounded-tl-none rounded-bl-none h-screen">
      <li>
        <a>Visão geral de compras</a>
        <ul className="before:bg-transparent">
          <li>
            <a>Gastos com fornecedores</a>
          </li>
          <li>
            <a>Compras</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Fornecedores e produtos</a>
        <ul className="text-xs before:bg-transparent">
          <li>
            <a href="/dadosfornecedores">Dados dos fornecedores</a>
          </li>
          <li>
            <a href="/fornecedores">Fornecedores</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
