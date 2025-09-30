import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../../service/api";
import "./Produtos.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [grupoSelecionado, setGrupoSelecionado] = useState("");
  const [jucelino, setJucelino] = useState(""); // 🔹 filtro de localidade
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // modal de adicionar ao carrinho
  const [showModal, setShowModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [unidade, setUnidade] = useState("unidade");

  // 🔹 Carregar produtos
  async function carregarProdutos(p = page, s = search, g = grupoSelecionado, j = jucelino) {
    try {
      const { data } = await API.get(
        `/api/products?page=${p}&limit=12&search=${s}&grupo=${g}&jucelino=${j}`
      );
      setProdutos(data.produtos);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  }

  // 🔹 Carregar lista de categorias
  async function carregarGrupos() {
    try {
      const { data } = await API.get("/api/products/grupos");
      setGrupos(data);
    } catch (err) {
      console.error("Erro ao carregar grupos:", err);
    }
  }

  useEffect(() => {
    carregarProdutos();
    carregarGrupos();
  }, []);

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
    carregarProdutos(1, value, grupoSelecionado, jucelino);
  }

  // abrir modal de adicionar
  function abrirModal(produto) {
    setProdutoSelecionado(produto);
    setQuantidade(1);
    setUnidade("unidade");
    setShowModal(true);
  }

  // confirmar adicionar
  function confirmarAdicionar() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const existente = carrinho.find(
      (item) =>
        item._id === produtoSelecionado._id && item.unidade === unidade
    );

    if (existente) {
      existente.quantidade += quantidade;
    } else {
      carrinho.push({
        _id: produtoSelecionado._id,
        Descricao: produtoSelecionado.Descricao,
        Imagem: produtoSelecionado.Imagem,
        PrecoVenda: produtoSelecionado.PrecoVenda,
        quantidade,
        unidade,
      });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    setShowModal(false);
  }

  return (
    <>
      <div className="relative max-w-[100%]">
        <Navbar />
        <header className="relative flex flex-col items-center justify-center hero_produtos w-[100%] h-[50vh] text-white">
          <div className="z-10 flex flex-col justify-center items-center font-medium text-center mt-[30px]">
            <h1 className="text-[30px] md:text-[80px] font-bold drop-shadow-lg">
              Nossos produtos
            </h1>
            <p className="text-center text-[.9em] md:w-[70ch] mt-4 md:text-lg drop-shadow">
              Descubra nossa seleção cuidadosa de produtos naturais e orgânicos,
              escolhidos especialmente para promover seu bem-estar e saúde.
            </p>
          </div>
        </header>

        <div className="bg-white text-black">
          {/* 🔎 Barra de busca + filtros */}
          <div className="max-w-6xl pt-[20px] px-6 flex  flex-col items-center mx-auto md:flex-row gap-4">
            {/* Busca */}
            <div>
              <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={handleSearch}
              className="flex-1 border px-4 py-2 w-[250px] rounded-lg shadow-sm cursor-pointer text-[.8em] text-gray-600"
            />
            </div>

            {/* Filtro de categorias */}
            <select
              value={grupoSelecionado}
              onChange={(e) => {
                setGrupoSelecionado(e.target.value);
                carregarProdutos(1, search, e.target.value, jucelino);
              }}
              className="border px-4 rounded-lg shadow-sm text-[.8em] w-[250px] py-[8px] text-gray-600 cursor-pointer"
            >
              <option value="">Todas as categorias</option>
              {grupos.map((g, i) => (
                <option key={i} value={g}>
                  {g}
                </option>
              ))}
            </select>
{/* Botão de Localidade (apenas Jucelino como toggle) */}
<div className="flex gap-2">
 <button
  onClick={() => {
    const novaLoja = jucelino === "s" ? "emil" : "jucelino"; // alterna
    setJucelino(jucelino === "s" ? "" : "s"); // "" mostra tudo (emil), "s" = só Jucelino
    localStorage.setItem("lojaSelecionada", novaLoja); // salva no localStorage
    carregarProdutos(1, search, grupoSelecionado, jucelino === "s" ? "" : "s");
  }}
  className={`px-3 py-2 rounded-lg text-[.8em] cursor-pointer ${
    jucelino === "s"
      ? "bg-green-600 text-white"
      : "bg-gray-200 hover:bg-gray-300"
  }`}
>
  Jucelino
</button>
</div>
          </div>

          {/* Lista de Produtos */}
          {/* Lista de Produtos */}
<section className="max-w-6xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center min-h=[100vh]">
  {produtos.map((p) => (
    <div
      key={p._id}
      className={`bg-white rounded-xl w-[320px] md:w-[350px] shadow-md overflow-hidden hover:shadow-lg transition flex flex-row ${
        p.Ativo === "n" ? "opacity-60" : ""
      }`}
    >
      {/* Imagem */}
      {p.Imagem ? (
        <img
          src={p.Imagem}
          alt={p.Descricao}
          className="h-[100px] w-[100px] object-cover"
        />
      ) : (
        <div className="h-[100px] w-[100px] flex items-center justify-center bg-gray-200 text-gray-500 italic">
          Sem imagem
        </div>
      )}

      {/* Infos */}
      <div className="p-4 flex flex-col text-left flex-1 justify-between">
        <h2 className="text-[1em] font-semibold text-gray-800 mb-2 line-clamp-2">
          {p.Descricao}
        </h2>
        <p className="text-green-600 font-medium text-[1em] mb-4">
          R$ {p.PrecoVenda.toFixed(2)}
        </p>

        {p.Ativo === "n" ? (
          <span className="text-red-500 font-semibold">Indisponível</span>
        ) : (
          <button
            onClick={() => abrirModal(p)}
            className="bg-green-600 text-white text-[.9em] py-2 px-2 rounded-lg hover:bg-green-700 transition"
          >
            Adicionar ao Carrinho
          </button>
        )}
      </div>
    </div>
  ))}

  {produtos.length === 0 && (
    <p className="col-span-full text-center text-gray-500 text-lg">
      Nenhum produto encontrado.
    </p>
  )}
</section>
          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pb-12">
              <button
                disabled={page === 1}
                onClick={() => carregarProdutos(page - 1, search, grupoSelecionado, jucelino)}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
              >
                ←
              </button>

              {page > 3 && (
                <>
                  <button
                    onClick={() => carregarProdutos(1, search, grupoSelecionado, jucelino)}
                    className={`px-3 py-1 rounded ${
                      page === 1
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    1
                  </button>
                  {page > 4 && <span className="px-2">...</span>}
                </>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((pNum) => pNum >= page - 2 && pNum <= page + 2)
                .map((pNum) => (
                  <button
                    key={pNum}
                    onClick={() => carregarProdutos(pNum, search, grupoSelecionado, jucelino)}
                    className={`px-3 py-1 rounded ${
                      page === pNum
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {pNum}
                  </button>
                ))}

              {page < totalPages - 2 && (
                <>
                  {page < totalPages - 3 && <span className="px-2">...</span>}
                  <button
                    onClick={() => carregarProdutos(totalPages, search, grupoSelecionado, jucelino)}
                    className={`px-3 py-1 rounded ${
                      page === totalPages
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                disabled={page === totalPages}
                onClick={() => carregarProdutos(page + 1, search, grupoSelecionado, jucelino)}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de quantidade + unidade */}
      {showModal && produtoSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[3000]">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Adicionar ao Carrinho</h2>
            <div className="flex items-center gap-4">
              <img
                src={produtoSelecionado.Imagem}
                alt={produtoSelecionado.Descricao}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{produtoSelecionado.Descricao}</p>
                <p className="text-green-600 font-bold">
                  R$ {produtoSelecionado.PrecoVenda.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Quantidade */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Quantidade:
              </label>
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={quantidade}
                onChange={(e) => setQuantidade(parseFloat(e.target.value))}
                className="w-24 border rounded px-2 py-1"
              />
            </div>

            {/* Unidade */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Unidade:</label>
              <div className="flex gap-2">
                {["unidade", "g", "kg"].map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUnidade(u)}
                    className={`px-3 py-1 rounded-lg border transition ${
                      unidade === u
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 border-gray-300"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>

            {/* Ações */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarAdicionar}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
