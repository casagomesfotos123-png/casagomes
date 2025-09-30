import { useEffect, useState } from "react";
import API from "../../service/api";

export default function Dashboard() {
  const [produtos, setProdutos] = useState([]);
  const [grupos, setGrupos] = useState([]); // 🔹 lista de grupos
  const [grupoSelecionado, setGrupoSelecionado] = useState(""); // 🔹 filtro atual

  const [form, setForm] = useState({
    Descricao: "",
    PrecoVenda: 0,
    Imagem: null,
    Grupo: "",
    Ativo: "s", // padrão ativo
    Jucelino: "n", // padrão não
  });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 🔹 agora aceita grupoSelecionado
  async function carregarProdutos(p = page, s = search, g = grupoSelecionado) {
    const { data } = await API.get(
      `/api/admin/products?page=${p}&limit=10&search=${s}&grupo=${g}`
    );
    setProdutos(data.produtos);
    setPage(data.page);
    setTotalPages(data.totalPages);
  }

  // 🔹 carregar lista de grupos
  async function carregarGrupos() {
    const { data } = await API.get("/api/admin/products/grupos");
    setGrupos(data);
  }

  useEffect(() => {
    carregarProdutos();
    carregarGrupos();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("Descricao", form.Descricao);
    fd.append("PrecoVenda", form.PrecoVenda);
    fd.append("Grupo", form.Grupo);
    fd.append("Ativo", form.Ativo);
    fd.append("Jucelino", form.Jucelino);
    if (form.Imagem) fd.append("Imagem", form.Imagem);

    if (editId) {
      await API.put(`/api/admin/products/${editId}`, fd);
    } else {
      await API.post("/api/admin/products", fd);
    }

    setForm({
      Descricao: "",
      PrecoVenda: 0,
      Imagem: null,
      Grupo: "",
      Ativo: "s",
      Jucelino: "n",
    });
    setPreview(null);
    setEditId(null);
    setShowModal(false);
    carregarProdutos(page, search, grupoSelecionado);
  }

  async function handleDeleteConfirm() {
    if (confirmDeleteId) {
      await API.delete(`/api/admin/products/${confirmDeleteId}`);
      setConfirmDeleteId(null);
      carregarProdutos(page, search, grupoSelecionado);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  function abrirModal(produto = null) {
    if (produto) {
      setEditId(produto._id);
      setForm({
        Descricao: produto.Descricao,
        PrecoVenda: produto.PrecoVenda,
        Imagem: null,
        Grupo: produto.Grupo || "",
        Ativo: produto.Ativo || "s",
        Jucelino: produto.Jucelino || "n",
      });
      setPreview(produto.Imagem || null);
    } else {
      setEditId(null);
      setForm({
        Descricao: "",
        PrecoVenda: 0,
        Imagem: null,
        Grupo: "",
        Ativo: "s",
        Jucelino: "n",
      });
      setPreview(null);
    }
    setShowModal(true);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, Imagem: file });
      setPreview(URL.createObjectURL(file));
    }
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
    carregarProdutos(1, value, grupoSelecionado);
  }

  return (
    <div className="min-h-screen text-black bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">
          📦 Dashboard de Produtos
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => abrirModal()}
            className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Novo Produto
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sair
          </button>
        </div>
      </div>

      {/* 🔎 Barra de Filtros */}
      <div className="mb-6 flex flex-wrap gap-4">
        {/* Busca */}
        <input
          type="text"
          placeholder="Buscar produto pelo nome..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-md border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        {/* 🔹 Filtro por grupo */}
        <select
          value={grupoSelecionado}
          onChange={(e) => {
            setGrupoSelecionado(e.target.value);
            carregarProdutos(1, search, e.target.value);
          }}
          className="w-full max-w-md border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todos os grupos</option>
          {grupos.map((g, i) => (
            <option key={i} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Tabela de Produtos */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="relative w-full text-left border-collapse">
          <thead>
            <tr className="sticky top-0 bg-gray-200 text-gray-700">
              <th className="px-4 py-2">Imagem</th>
              <th className="px-4 py-2">Descrição</th>
              <th className="px-4 py-2">Preço</th>
              <th className="px-4 py-2">Grupo</th>
              <th className="px-4 py-2">Ativo</th>
              <th className="px-4 py-2">Jucelino</th>
              <th className="px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr key={p._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">
                  {p.Imagem ? (
                    <img
                      src={p.Imagem}
                      alt="Produto"
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400 italic">Sem imagem</span>
                  )}
                </td>
                <td className="px-4 py-2 font-medium">{p.Descricao}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">
                  R$ {p.PrecoVenda}
                </td>
                <td className="px-4 py-2">{p.Grupo}</td>
                <td className="px-4 py-2">{p.Ativo === "s" ? "Sim" : "Não"}</td>
                <td className="px-4 py-2">{p.Jucelino === "s" ? "Sim" : "Não"}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => abrirModal(p)}
                    className="bg-yellow-400 cursor-pointer text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => setConfirmDeleteId(p._id)}
                    className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
            {produtos.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="px-4 py-4 text-center  text-gray-500"
                >
                  Nenhum produto encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Controles de Paginação */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {/* Botão Anterior */}
        <button
          disabled={page === 1}
          onClick={() => carregarProdutos(page - 1, search, grupoSelecionado)}
          className="px-3 py-1 bg-gray-300 text-[.8em] rounded disabled:opacity-50"
        >
          ←
        </button>

        {/* Primeira página sempre visível */}
        {page > 3 && (
          <>
            <button
              onClick={() => carregarProdutos(1, search, grupoSelecionado)}
              className={`px-3 py-1 rounded ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              1
            </button>
            {page > 4 && <span className="px-2">...</span>}
          </>
        )}

        {/* Páginas vizinhas */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((pNum) => pNum >= page - 2 && pNum <= page + 2)
          .map((pNum) => (
            <button
              key={pNum}
              onClick={() => carregarProdutos(pNum, search, grupoSelecionado)}
              className={`px-3 py-1 rounded text-[.9em] ${
                page === pNum
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {pNum}
            </button>
          ))}

        {/* Última página sempre visível */}
        {page < totalPages - 2 && (
          <>
            {page < totalPages - 3 && <span className="px-2">...</span>}
            <button
              onClick={() => carregarProdutos(totalPages, search, grupoSelecionado)}
              className={`px-3 py-1 rounded text-[.9em] ${
                page === totalPages
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Botão Próximo */}
        <button
          disabled={page === totalPages}
          onClick={() => carregarProdutos(page + 1, search, grupoSelecionado)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          →
        </button>
      </div>

      {/* Modal de Produto */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {editId ? "✏️ Editar Produto" : "➕ Novo Produto"}
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                placeholder="Descrição"
                value={form.Descricao}
                onChange={(e) =>
                  setForm({ ...form, Descricao: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Preço"
                value={form.PrecoVenda}
                onChange={(e) =>
                  setForm({ ...form, PrecoVenda: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
              />

              <input
                placeholder="Grupo"
                value={form.Grupo}
                onChange={(e) => setForm({ ...form, Grupo: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
              />

             {/* Checkbox Ativo */}
<label className="flex items-center gap-2 mb-4">
  <input
    type="checkbox"
    checked={form.Ativo === "s"}
    onChange={(e) =>
      setForm({ ...form, Ativo: e.target.checked ? "s" : "n" })
    }
    className="w-5 h-5 cursor-pointer"
  />
  <span>Ativo</span>
</label>

{/* Checkbox Jucelino */}
<label className="flex items-center gap-2 mb-4">
  <input
    type="checkbox"
    checked={form.Jucelino === "s"}
    onChange={(e) =>
      setForm({ ...form, Jucelino: e.target.checked ? "s" : "n" })
    }
    className="w-5 h-5 cursor-pointer"
  />
  <span>Jucelino</span>
</label>

              <input
                type="file"
                onChange={handleFileChange}
                className="w-full mb-4 text-sm text-white cursor-pointer font-medium p-[1em] rounded-2xl bg-green-500"
              />

              {preview && (
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-1">
                    Pré-visualização:
                  </p>
                  <img
                    src={preview}
                    alt="Pré-visualização"
                    className="w-32 h-32 object-cover rounded border"
                  />
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {editId ? "Salvar Alterações" : "Criar Produto"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
{confirmDeleteId && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        ⚠️ Confirmar Exclusão
      </h2>
      <p className="text-gray-600 mb-6">
        Tem certeza que deseja excluir este produto? Esta ação não poderá ser desfeita.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setConfirmDeleteId(null)}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Cancelar
        </button>
        <button
          onClick={handleDeleteConfirm}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
