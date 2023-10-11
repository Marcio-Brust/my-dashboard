import fornecedorEprodutos from "../../../dados/fornecedorEprodutos.json";

export default function fornecedores() {
  const fornecedor = fornecedorEprodutos
    .map((data) => data.FORNECEDOR)
    .reduce((unico: string[], item) => {
      return unico.includes(item) ? unico : [...unico, item];
    }, []);

  return (
    <main className="grid my-0 mx-auto">
      <h1 className="text-center font-bold my-24 text-xl">Fornecedores</h1>

      <table className="table">
        <thead>
          <tr>
            <th>FORNECEDORES</th>
            <th>Produtos</th>
          </tr>
        </thead>
        <tbody>
          {fornecedor.map((fornecedores, index) => (
            <tr key={index}>
              <td>{fornecedores}</td>
              <td>
                <a
                  href={`fornecedores/${fornecedores
                    .toLowerCase()
                    .replaceAll(" ", "")
                    .replaceAll("-", "")
                    .replaceAll(".", " ")}`}
                  className="btn btn-link"
                >
                  Produtos
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
