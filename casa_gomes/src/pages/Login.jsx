import { useState } from "react";
import API from "../../service/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false); // 👁️ novo state

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await API.post("/api/auth/login", { email, senha });
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setErro("Usuário ou senha inválidos");
    }
  }

  return (
    <div className="flex justify-center pt-[15%] w-[100vw] min-h-[100vh] bg-white text-black">
      <div>
        <h1 className="text-3xl font-medium mb-[20px]">Login Dashboard</h1>
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <form className="border-1 rounded-2xl p-5" onSubmit={handleLogin}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="border px-3 py-2 rounded w-full"
          />
          <br />

          {/* Campo senha com toggle */}
          <div className="relative mt-[2em]">
            <input
              type={mostrarSenha ? "text" : "password"} // alterna entre text/password
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="border px-3 py-2 rounded w-full"
            />
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-500"
            >
              {mostrarSenha ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <br />
          <button
            className="bg-blue-500 py-2 px-5 mt-[2em] cursor-pointer text-white rounded-2xl"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
