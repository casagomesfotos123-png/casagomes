import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function MapasCarousel() {
  return (
    <section
      id="contato"
      className="flex flex-row flex-wrap justify-around items-start pt-[2.5em] text-[#6d3c1a] bg-[#F9F6F1] "
    >
      <div className="flex flex-col items-baseline text-left gap-4 pl-[10px] pr-[10px]">
        <h3 data-aos='fade-right'  className="text-[28px] font-medium">Informações para contato</h3>

        <div data-aos='fade-right' className="flex flex-row justify-center items-start gap-5">
          <span className="bg-[#F4C557] p-[4px] rounded-[100%]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
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
                  opacity="0.5"
                  d="M18 8L18.9487 8.31623C19.9387 8.64624 20.4337 8.81124 20.7169 9.20407C21 9.5969 21 10.1187 21 11.1623V16.829C21 18.1199 21 18.7653 20.6603 19.18C20.5449 19.3208 20.4048 19.4394 20.247 19.5301C19.7821 19.797 19.1455 19.6909 17.8721 19.4787C16.6157 19.2693 15.9875 19.1646 15.3648 19.2167C15.1463 19.235 14.9292 19.2676 14.715 19.3144C14.1046 19.4477 13.5299 19.735 12.3806 20.3097C10.8809 21.0596 10.131 21.4345 9.33284 21.5501C9.09242 21.5849 8.8498 21.6021 8.60688 21.6016C7.80035 21.6001 7.01186 21.3373 5.43488 20.8116L5.05132 20.6838C4.06129 20.3538 3.56627 20.1888 3.28314 19.7959C3 19.4031 3 18.8813 3 17.8377V12.908C3 11.2491 3 10.4197 3.48841 9.97358C3.57388 9.89552 3.66809 9.82762 3.76917 9.77122C4.34681 9.44894 5.13369 9.71123 6.70746 10.2358"
                  stroke="#674325"
                  stroke-width="1.5"
                ></path>{" "}
                <path
                  d="M6 7.70031C6 4.55211 8.68629 2 12 2C15.3137 2 18 4.55211 18 7.70031C18 10.8238 16.085 14.4687 13.0972 15.7721C12.4007 16.076 11.5993 16.076 10.9028 15.7721C7.91499 14.4687 6 10.8238 6 7.70031Z"
                  stroke="#674325"
                  stroke-width="1.5"
                ></path>{" "}
                <circle
                  cx="12"
                  cy="8"
                  r="2"
                  stroke="#674325"
                  stroke-width="1.5"
                ></circle>{" "}
              </g>
            </svg>
          </span>

          <div >
            <h4 className="font-medium text-[1.3em]">Endereço</h4>
            <p className="text-[#994e19] text-[.8em]">
              <span className="font-medium text-[#6d3c1a] ">Vila Emil: </span>
              Rua Ambrosio 318 b, Vila Emil, Mesquita.
            </p>
            <p className="text-[#994e19] text-[.8em]">
              <span className="font-medium text-[#6d3c1a] ">Juscelino: </span>{" "}
              Rua Marcial 247, Juscelino, Mesquita.
            </p>
          </div>
        </div>

        <div data-aos='fade-right' data-aos-delay='250' className="flex flex-row justify-center items-start gap-5">
          <span className="bg-[#F4C557] p-[4px] rounded-[100%]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
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
                  d="M15.75 4C15.75 3.58579 15.4142 3.25 15 3.25C14.5858 3.25 14.25 3.58579 14.25 4L14.25 5.052C14.2499 5.95048 14.2499 6.6997 14.3299 7.29448C14.4143 7.92227 14.6 8.48907 15.0554 8.94454C15.5109 9.40001 16.0777 9.58568 16.7055 9.67009C17.1662 9.73202 17.7195 9.74597 18.363 9.7491L17.5315 10.4143C17.208 10.6731 17.1556 11.1451 17.4143 11.4685C17.6731 11.792 18.145 11.8444 18.4685 11.5857L20.9685 9.58565C21.1464 9.44332 21.25 9.22784 21.25 9C21.25 8.77216 21.1464 8.55668 20.9685 8.41435L18.4685 6.41435C18.145 6.15559 17.6731 6.20803 17.4143 6.53148C17.1556 6.85493 17.208 7.32689 17.5315 7.58565L18.3605 8.24888C17.7356 8.24561 17.2729 8.23287 16.9054 8.18346C16.4439 8.12142 16.2464 8.0142 16.1161 7.88388C15.9858 7.75357 15.8786 7.55607 15.8165 7.09461C15.7516 6.61157 15.75 5.96401 15.75 5V4Z"
                  fill="#674325"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6925 4.95067C9.52266 2.85455 6.68752 2.72683 5.00745 4.4069C4.10879 5.30556 3.3103 6.50048 3.25706 7.90468C3.17818 9.98561 3.71556 13.4408 7.13735 16.8626C10.5591 20.2844 14.0144 20.8218 16.0953 20.7429C17.4995 20.6897 18.6944 19.8912 19.5931 18.9925C21.2731 17.3125 21.1454 14.4773 19.0493 13.3075L17.8864 12.6585C16.5176 11.8946 14.7905 12.2201 13.6585 13.3384C13.6381 13.3533 13.5231 13.4323 13.3221 13.4421C13.0656 13.4545 12.4729 13.3633 11.5548 12.4452C10.6364 11.5267 10.5454 10.9339 10.5579 10.6776C10.5677 10.4768 10.6467 10.3619 10.6616 10.3415C11.7799 9.2095 12.1054 7.48242 11.3415 6.1136L10.6925 4.95067ZM6.06811 5.46756C7.17394 4.36173 8.78363 4.60832 9.38265 5.68167L10.0317 6.8446C10.4354 7.56801 10.2977 8.58415 9.58435 9.29747C9.51471 9.36712 9.09846 9.81276 9.0597 10.6043C9.02003 11.4146 9.38395 12.3956 10.4942 13.5058C11.604 14.6157 12.5847 14.9797 13.395 14.9403C14.1864 14.9018 14.6322 14.4858 14.7023 14.4158C15.4156 13.7025 16.432 13.5646 17.1554 13.9683L18.3183 14.6173C19.3916 15.2163 19.6382 16.826 18.5324 17.9319C17.7571 18.7072 16.9013 19.2113 16.0385 19.244C14.3031 19.3098 11.2774 18.8813 8.19801 15.802C5.11864 12.7226 4.6902 9.69684 4.75599 7.9615C4.7887 7.09872 5.29276 6.24291 6.06811 5.46756Z"
                  fill="#674325"
                ></path>{" "}
              </g>
            </svg>
          </span>
          <div>
            <h4 className="text-[1.2em] font-medium">Telefone</h4>
            <p className="text-[#994e19] text-[.8em]"><span className="font-medium text-[#6e3812]">Vila Emil: </span>21993702096</p>
            <p className="text-[#994e19] text-[.8em]"><span className="font-medium text-[#6e3812]">Juscelino: </span>21996269425</p>
            <p className="text-[#994e19] text-[.8em]"><span className="font-medium text-[#6e3812]">(sac):</span> 21996568665</p>
            <p className="text-[#994e19] text-[.8em]">
              WhatsApp disponível para pedidos e informações
            </p>
          </div>
        </div>

        <div data-aos='fade-right' data-aos-delay='450' className="flex flex-row justify-center items-start gap-5">
          <span className="bg-[#F4C557] p-[4px] rounded-[100%]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                  fill="#674325"
                ></path>{" "}
              </g>
            </svg>
          </span>
          <div>
            <h4 className="text-[1.2em] font-medium">Email</h4>
            <p className="text-[#994e19] text-[.8em]">casagomesnaturais@gmail.com</p>
          </div>
        </div>

        <div data-aos='fade-right' data-aos-delay='650' className="flex flex-row justify-center items-start gap-5">
          <span className="bg-[#F4C557] p-[4px] rounded-[100%]">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
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
                  d="M12 7V12L9.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#674325"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>

          <div>
            <h4 className="text-[1.2em] font-medium">
              Horário de funcionamento
            </h4>
            <p className="text-[#994e19] text-[.8em]">
              <span className="text-[#643615] font-medium">
                Segunda a Sexta:{" "}
              </span>
              09h às 20h
            </p>
            <p className="text-[#994e19] text-[.8em]">
              <span className="text-[#643615] font-medium">Sábado: </span>09h às
              19h
            </p>
            <p className="text-[#994e19] text-[.8em]">
              <span className="text-[#643615] font-medium">Domingo: </span>09h
              às 13h
            </p>
            <p className="text-[#994e19] text-[.8em]">
              <span className="text-[#643615] font-medium">Feriados: </span>09h
              às 13h
            </p>
          </div>
        </div>
        <div data-aos='fade-right' data-aos-delay='850' className="flex flex-col justify-center items-start gap-5 pb-[1em]">
          <h4 className="text-[1.2em] font-medium">Redes sociais</h4>
          <div className="flex flex-row gap-8 items-center">
            <span className="bg-[#F4C557] p-[4px] rounded-[100%]">
              <a href="https://www.instagram.com/casagomesnaturais_e_nordestino/">
                <svg
                  fill="#674325"
                  width="40px"
                  height="40px"
                  viewBox="-7 0 32 32"
                  version="1.1"
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
                    <title>instagram</title>{" "}
                    <path d="M14.48 11.28c0 0.48-0.4 0.84-0.84 0.84-0.48 0-0.84-0.4-0.84-0.84 0-0.48 0.4-0.84 0.84-0.84 0.44-0.040 0.84 0.36 0.84 0.84zM17.76 11.64v8.72c0 2.48-2.040 4.52-4.52 4.52h-8.72c-2.48 0-4.52-2.040-4.52-4.52v-8.72c0-2.48 2.040-4.52 4.52-4.52h8.72c2.52 0 4.52 2.040 4.52 4.52zM16.080 11.64c0-1.56-1.28-2.84-2.84-2.84h-8.72c-1.56 0-2.84 1.28-2.84 2.84v8.72c0 1.56 1.28 2.84 2.84 2.84h8.72c1.6 0 2.88-1.28 2.88-2.84l-0.040-8.72zM13.52 16c0-2.56-2.080-4.64-4.64-4.64s-4.64 2.080-4.64 4.64 2.080 4.64 4.64 4.64 4.64-2.080 4.64-4.64zM11.84 16c0 1.64-1.32 2.96-2.96 2.96s-2.96-1.32-2.96-2.96 1.32-2.96 2.96-2.96 2.96 1.32 2.96 2.96z"></path>{" "}
                  </g>
                </svg>
              </a>
            </span>
            <span className="bg-[#F4C557] p-[10px] rounded-[100%]">
              <a href="https://www.facebook.com/CasaGomesProdutosNaturaiseNordestinosLtda?locale=pt_BR">
                <svg
                  fill="#674325"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  width="30px"
                  height="30px"
                  viewBox="0 0 14.906 32"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z"></path>
                  </g>
                </svg>
              </a>
            </span>
            <span className="bg-[#F4C557] p-[10px] rounded-[100%]">
              <a href="https://www.ifood.com.br/delivery/mesquita-rj/casa-gomes---produtos-naturais-vila-emil/9e8f5fbf-acb4-4ea1-ac76-bfdf397e1e03">
                <svg fill="#674325" width="30px" height="30px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#674325"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zm-5.584 12.85 2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 0 1 .23 14.541H0a9.598 9.598 0 0 0 8.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02z"></path></g></svg>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div data-aos='fade-left' data-aos-delay='250' className="pt-5 pb-[15px] w-[300px] md:w-[500px] flex flex-col  md:justify-center md:items-start">
        <h3 className="text-2xl font-medium mb-3">Localização</h3>
        <Swiper
          className="md:w-[100%] w-[80%] max-w-[400px] md:max-w-[600px] h-[250px] md:h-[300px]"
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {/* Localização 1 */}
          <SwiperSlide>
            <div className="w-full h-full">
              <h2 className="text-center font-bold mb-2 text-[#994e19]">
                Unidade Vila Emil
              </h2>
              <iframe
                className="shadow-2xl w-full h-full"
                title="Unidade Mesquite"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4177969843768!2d-43.425480624767445!3d-22.786977833600023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9966be46076b17%3A0x3529eecdaff9d9d8!2sR.%20Ambr%C3%B3sio%2C%20318b%20-%20Vila%20Emil%2C%20Mesquita%20-%20RJ%2C%2026580-250%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1758419522455!5m2!1spt-BR!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </SwiperSlide>

          {/* Localização 2 */}
          <SwiperSlide>
            <div className="w-full h-full">
              <h2 className="text-center font-bold mb-2">Unidade Juscelino</h2>
              <iframe
                className="shadow-2xl w-full h-full"
                title="Unidade Jucelino"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.859958207233!2d-43.43373332476784!3d-22.77057783301713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9966f1796ca33b%3A0xc8b337a72d2ddf96!2sR.%20Marcial%2C%20247%20-%20Juscelino%2C%20Nova%20Igua%C3%A7u%20-%20RJ%2C%2026550-800%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1758419838426!5m2!1spt-BR!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
