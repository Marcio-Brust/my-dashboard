import { Drawer } from "@/components/drawer/Drawer";
import fornecedoreProdutos from "../../../dados/fornecedorEprodutos.json";

export default function solucaobrasildiagnostica() {
  return (
    <div>
      <h1 className="text-center mt-12 max-lg:text-lg">
        SOLUCAO BRASIL DIAGNOSTICA
      </h1>
      <table className="table max-lg:ml-2 ml-12 mt-28">
        <thead>
          <tr>
            <th>Produto</th>
            <th className="max-lg:hidden">Código</th>
            <th className="max-lg:hidden">Setor</th>
          </tr>
        </thead>
        {fornecedoreProdutos
          .filter(
            (fornecedor) =>
              fornecedor.FORNECEDOR === "SOLUCAO BRASIL DIAGNOSTICA"
          )
          .map((produto) => (
            <tbody>
              <tr>
                <td className="max-lg:text-xs">{produto.PRODUTO}</td>
                <td className="max-lg:hidden">{produto.CODIGO}</td>
                <td className="max-lg:hidden">{produto.Setor}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
