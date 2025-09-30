import { Link } from "react-router-dom";

export default function OpcaoCompra() {
  return (
    <>
      <section className="bg-[#E4DFD3] flex flex-col justify-center items-center pb-5 overflow-hidden">
        <h2 data-aos='fade-up' className="text-[#5f756b] text-4xl font-medium md:w-[30ch] mt-5 mb-5">
          Três opções de compra para uma{" "}
          <span className="text-[#12A764]">rotina prática e leve</span>
        </h2>

        <div className="flex flex-row flex-wrap gap-16 justify-center items-center">
          <div data-aos='fade-up' data-aos-delay='250' className="flex flex-col gap-3 justify-center items-center bg-white text-black w-[230px] shadow-2xl rounded-2xl p-4">
            <span className="w-[60px] h-[60px] bg-orange-400/50 flex justify-center rounded-[100%]">
              <svg
                fill="#db8000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="30px"
                height="60px"
                viewBox="0 0 30.667 30.667"
                xml:space="preserve"
                stroke="#db8000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <h3 className="font-medium text-[.9em]">pedidos no whatsApp</h3>
            <p className="text-[.8em]">
              Fale diretamente com nossas lojas e faça seu pedido via WhatsApp
            </p>
            <a
              className="bg-green-600 px-2.5 py-2 text-[.8em] rounded-[10px] text-white"
              href="https://wa.me/21993702096"
            >
              Loja vila Emil
            </a>
            <a
              className="bg-green-600 px-2.5 py-2 text-[.8em] rounded-[10px] text-white"
              href="https://wa.me/21996269425"
            >
              Loja Jucelino
            </a>
          </div>
          <div data-aos='fade-up' data-aos-delay='450' className="flex flex-col gap-3 justify-center items-center bg-white text-black w-[230px] h-[290px] shadow-2xl rounded-2xl p-4">
            <span className="w-[60px] h-[60px] bg-orange-400/50 flex justify-center rounded-[100%]">
              <svg
                width="30px"
                height="64px"
                viewBox="0 0 24 24"
                fill="#db8000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#fc9403"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            <h3 className="font-medium text-[.9em]">catálogo de produtos</h3>
            <p className="text-[.8em]">
              Consulte nossa lista completa de produtos e preços sempre
              atualizados
            </p>
            <Link
              className="bg-green-600 px-2.5 py-2 text-[.8em] rounded-[10px] text-white"
              to="/produtos"
            >
              Catálogo
            </Link>
          </div>
          <div data-aos='fade-up' data-aos-delay='650' className="flex flex-col gap-3 justify-center items-center bg-white text-black w-[230px] h-[290px] shadow-2xl rounded-2xl p-4">
            <span className="w-[60px] h-[60px] bg-orange-400/50 flex justify-center rounded-[100%]">
              <svg
                fill="#db8000"
                width="30px"
                height="60px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#db8000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zm-5.584 12.85 2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 0 1 .23 14.541H0a9.598 9.598 0 0 0 8.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02z"></path>
                </g>
              </svg>
            </span>
            <h3 className="font-medium text-[.9em]">Pedidos iFood</h3>
            <p className="text-[.8em]">
              Faça seu pedido online com entrega rápida e segura direto na sua
              casa
            </p>
            <a
              className="bg-green-600 px-2.5 py-2 text-[.8em] rounded-[10px] text-white"
              href="https://www.ifood.com.br/delivery/mesquita-rj/casa-gomes---produtos-naturais-vila-emil/9e8f5fbf-acb4-4ea1-ac76-bfdf397e1e03"
            >
              iFood Vila Emil
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
