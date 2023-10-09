"use client";

import React from "react";
import fornecedorEprodutos from "../../../dados/fornecedorEprodutos.json";

export const Drawer = () => {
  const fornecedor = fornecedorEprodutos
    .map((data) => data.FORNECEDOR)
    .reduce((unico: string[], item) => {
      return unico.includes(item) ? unico : [...unico, item];
    }, []);

  console.log(fornecedor);

  return (
    <ul className="menu w-72 bg-base-200 rounded-box rounded-tl-none rounded-bl-none ">
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
          {fornecedor.map((fornecedores, index) => (
            <li key={index}>
              <a
                href={fornecedores.toLocaleLowerCase().replaceAll(" ", "")}
                rel="fornecedor"
              >
                {fornecedores}
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <a>Products</a>
        <ul>
          <li>
            <a>UI Kit</a>
          </li>
          <li>
            <a>Wordpress themes</a>
          </li>
          <li>
            <a>Wordpress plugins</a>
          </li>
          <li>
            <a>Open source</a>
            <ul>
              <li>
                <a>Auth management system</a>
              </li>
              <li>
                <a>VScode theme</a>
              </li>
              <li>
                <a>Color picker app</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a>Company</a>
        <ul>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
          <li>
            <a>Privacy policy</a>
          </li>
          <li>
            <a>Press kit</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
