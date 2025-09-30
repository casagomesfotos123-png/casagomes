import CardsVariedade from "./CardsVariedade"
import "./Variedades.css";

function Variedade() {
  return (
    <>
      <section className="container_variedade flex flex-col justify-center items-center relativo z-0 pb-[5em] overflow-hidden">
        <h2 data-aos='fade-down' className="text-2xl md:text-4xl font-medium md:w-[35ch] p-[1em]">
          A maior <span className="text-[#803f3f]">variedade </span>e <span className="text-[#FB4300]">qualidade</span> reunida para
          você.
        </h2>

        <div className="flex flex-row justify-center  flex-wrap gap-20 mb-[3em]">
            <CardsVariedade aos='fade-up' delay='250' src="Flour.png" alt='agranel' title="Produtos a granel" descript="Temperos, grãos, farinhas, castanhas, chás e diversos outros produtos naturais que garantem uma alimentação saudável e equilibrada." />
            <CardsVariedade aos='fade-up' delay='450' src="Leafmaior.png" alt='agranel' title="Produtos naturais" descript="Catálogo completo com produtos diet, light, integrais, orgânicos, funcionais, sem glúten, sem lactose, veganos e vegetarianos, refrigerados, congelados e apícolas." />
            <CardsVariedade aos='fade-up' delay='650' src="Whey.png" alt='agranel' title="Nutrição esportiva" descript="É praticante de atividade física? Aqui na Bio Mundo você encontra todos os suplementos esportivos para melhorar a performance, emagrecimento ou hipertrofia." />
        </div>

        <a data-aos='fade-up' data-aos-delay='750' href="/produtos" className="flex flex-row justify-center items-center gap-2 bg-gradient-to-bl from-[#478947] to-[#2C622C] px-[14px] py-[10px] rounded-[7px] transition-all duration-100 ease-in hover:bg-[#0e7233] hover:scale-[1.1]  "><img  src="carrinhoCompra.png" alt="produtos" className="w-[25px]"/><p className="text-[1em] font-medium">Produtos</p></a>
      </section>
    </>
  );
}

export default Variedade;
