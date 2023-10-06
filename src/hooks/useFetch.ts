import produtosJson from "../../dados/produtos.json";
import fornecedoresJson from "../../dados/fornecedores.json";
import fornecedorEprodutosJson from "../../dados/fornecedorEprodutos.json";
import compras from "../../dados/compras.json";

export const baseData = () => {
  return { produtosJson, fornecedoresJson, fornecedorEprodutosJson, compras };
};
