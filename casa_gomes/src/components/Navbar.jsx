import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [btnMenu, setBtnMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  // carregar carrinho do localStorage quando abrir
  useEffect(() => {
    if (showCart) {
      const saved = JSON.parse(localStorage.getItem("carrinho")) || [];
      setCarrinho(saved);
    }
  }, [showCart]);

  useEffect(() => {
  // sempre que abrir ou alterar carrinho
  const syncCarrinho = () => {
    const saved = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(saved);
  };

  // carregar inicial
  syncCarrinho();

  // evento de mudança no localStorage (quando mudar em outra aba ou dentro do app)
  window.addEventListener("storage", syncCarrinho);

  return () => {
    window.removeEventListener("storage", syncCarrinho);
  };
}, []);

 // gerar link do WhatsApp com os itens
function gerarLinkWhatsApp() {
  if (carrinho.length === 0) return "#";

  // pega loja escolhida do localStorage
  const lojaSelecionada = localStorage.getItem("lojaSelecionada") || "emil";

  // define número da loja de acordo com a escolha
  const numeroLoja =
    lojaSelecionada === "jucelino"
      ? "5521996269425" // 👈 WhatsApp da Jucelino
      : "5521993702096"; // 👈 WhatsApp da Vila Emil

  let mensagem = "Olá, quero finalizar minha compra:\n\n";
  carrinho.forEach((item) => {
    mensagem += `• ${item.quantidade}x ${item.Descricao}`;
  });

  return `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
}

  return (
    <>
      <nav data-aos='fade' data-aos-delay='' className="fixed top-0 left-0 flex flex-row flex-wrap  w-[100vw] max-w-[100%] justify-between md:pl-[25px] md:pr-[25px] pl-[10px] pr-[20px] items-center pt-[5px] pb-[5px] 
  bg-transparent/30 backdrop-blur-md shadow-sm z-[1000000]">
        <Link to="/#hero">
          <img
            src="logo.png"
            className="w-[50px] md:block md:w-[100px]"
            alt="logo casa gomes"
          />
        </Link>

        {/* Links desktop */}
        <ul className="hidden nav_link md:flex flex-row gap-4">
          <li><Link className="link" to="/#Hero">Home</Link></li>
          <li><Link className="link" to="/produtos">Produto</Link></li>
          <li><a className="link" href="#NossaHistoria">Nossa história</a></li>
          <li><Link className="link" to="/#contato">Contato</Link></li>
        </ul>

        {/* Botão mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 cursor-pointer"
          onClick={() => setBtnMenu(!btnMenu)}
          aria-label="Menu"
          aria-expanded={btnMenu}
        >
          <span
            className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${
              btnMenu ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transition duration-300 ${
              btnMenu ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${
              btnMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Menu mobile */}
        <ul
          className={`list-none absolute top-full left-0 w-full md:hidden transition-transform duration-300 ease-in-out origin-top 
          bg-[#362424] ${btnMenu ? "scale-y-100 bg" : "scale-y-0"}`}
        >
          <li className="p-2"><Link className="p-2" to="/#Hero">Home</Link></li>
          <li className="p-2"><Link className="p-2" to="/produtos">Produto</Link></li>
          <li className="p-2"><a className="p-2" href="#NossaHistoria">Nossa história</a></li>
          <li className="p-2"><Link className="p-2" to="/#contato">Contato</Link></li>
        </ul>

        {/* Links sociais */}
        <ul className="links_social flex flex-row md:gap-3 ">
          <li>
            {/* Botão toggle carrinho */}
           <div className="relative">
  <button onClick={() => setShowCart(!showCart)}>
    <img
      src="carrinhoCompra.png"
      alt="carrinho de compra"
      className="link w-[25px] md:w-[30px] cursor-pointer"
    />
  </button>

  {carrinho.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {carrinho.length}
    </span>
  )}
</div>
          </li>
          <li>
            <a href="#" className="hidden">
              <img src="Instagram.png" alt="instagram" className="link w-[30px]" />
            </a>
          </li>
          <li>
            <a href="#" className="hidden">
              <img src="Facebook.png" alt="facebook" className="link w-[30px]" />
            </a>
          </li>
        </ul>
      </nav>
{/* Drawer do Carrinho */}
<div
  className={`fixed top-[6.5%] md:top-[66px] right-0 min-h-[100vh] w-[80vw] bg-white text-black shadow-xl p-6 transform transition-transform duration-300 z-[9000] ${
    showCart ? "translate-x-0" : "translate-x-full"
  }`}
>
  <h2 className="text-2xl  font-medium mb-6 border-b pb-3 flex items-center gap-2">
     Meu Carrinho
  </h2>

  <p className="text-red-600 font-medium">entrega a combinar no fechamento da compra</p>

  {carrinho.length === 0 ? (
    <p className="text-gray-500 text-center mt-10">Seu carrinho está vazio </p>
  ) : (
   <ul className="space-y-5">
  {carrinho.map((item) => (
    <li
      key={item._id + item.unidade} // 👈 importante: unidade também diferencia
      className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 shadow-sm"
    >
      <img
        src={item.Imagem}
        alt={item.Descricao}
        className="w-14 h-14 object-cover rounded-lg border"
      />
      <div className="flex-1">
        <p className="font-semibold text-gray-800 text-sm line-clamp-2">
          {item.Descricao}
        </p>

        {/* 👇 mostra quantidade + unidade */}
        <p className="mt-2 text-sm text-gray-600">
          Quantidade:{" "}
          <span className="font-semibold">
            {item.quantidade} {item.unidade}
          </span>
        </p>
      </div>

      {/* botão remover */}
      <button
        onClick={() => {
          const novoCarrinho = carrinho.filter(
            (p) => !(p._id === item._id && p.unidade === item.unidade) // 👈 remove pelo par id+unidade
          );
          localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
          setCarrinho(novoCarrinho);
        }}
        className="text-red-500 hover:text-red-700 text-lg"
        title="Remover"
      >
        ✖
      </button>
    </li>
  ))}
</ul>
  )}

  {/* Botão finalizar */}
  {carrinho.length > 0 && (
    <a
      href={gerarLinkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-8 bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
    >
      Finalizar no WhatsApp
    </a>
  )}
</div>


     


    </>
  );
}
