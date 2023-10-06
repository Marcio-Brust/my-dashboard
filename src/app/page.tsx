"use client";
import { baseData } from "@/hooks/useFetch";
import React from "react";

export default function Home() {
  const { compras } = baseData();

  return (
    <div>
      {compras.map((item) => (
        <><p>{item["Valor Compra"].replace(",", ".")}</p><p>{item.Fornecedor}</p></>
      ))}
    </div>
  );
}
