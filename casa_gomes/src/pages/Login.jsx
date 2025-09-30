import { useState } from "react";
import API from "../../service/api";
export default function Login() {
  const [email, setEmail] = useState("admin@admin.com");
  const [senha, setSenha] = useState("admin123");
  const [erro, setErro] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await API.post("/api/auth/login", { email, senha });
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setErro(err, "Usuário ou senha inválidos");
    }
  }

  return (
         <div className="flex justify-center pt-[15%] w-[100vw] min-h-[100vh] bg-white text-black">
        <div >
      <h1 className="text-3xl font-medium mb-[20px]" >Login Dashboard</h1>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <form className=" border-1 rounded-2xl p-5"  onSubmit={handleLogin}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <br />
        <input 
          className="mt-[2em]"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <button className="bg-blue-500 py-2 px-5 mt-[2em] cursor-pointer text-white rounded-2xl" type="submit">Entrar</button>
      </form>
    </div>
         </div>
  );
}
