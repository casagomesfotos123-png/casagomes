import React from "react";
import ExperienceCounter from "./ExperienceCounter.jsx";
import CardNossa from "./CardNossa.jsx"
function NossaHistoria() {
  return (
    <>
      <section id="NossaHistoria" className="flex flex-row flex-wrap justify-between  md:justify-center overflow-hidden pt-12 pb-12 bg-[#E4DFD3]">
        
          <div className="text-left  text-[#584747]">
            <h2 data-aos="fade-right" data-aos-delay='250' className="text-3xl font-medium pl-[1em] pb-[1em]">Nossa história</h2>

            <p data-aos="fade-right" data-aos-delay='450' className=" md:w-[60ch] pl-[1em] md:pr-[0] pr-[1em]">
              Tudo começou em 2017 com um sonho: oferecer aos nossos clientes um
              espaço onde variedade, qualidade e preço justo andassem juntos.
              Desde o primeiro dia, buscamos reunir em um só lugar as melhores
              opções do mercado, criando uma experiência de compra completa e
              acessível Com dedicação e foco no atendimento, crescemos e nos
              tornamos referência pela diversidade do nosso mix de produtos,
              sempre atentos às tendências e às necessidades de quem confia na
              gente. Hoje, nossa missão continua a mesma: entregar praticidade,
              confiança e variedade, transformando cada compra em uma
              experiência única.
            </p>

            <div className="flex gap-5 pt-5  items-center justify-center">
              <div data-aos="fade-right" data-aos-delay='650' className="text-center">
                <ExperienceCounter numero={8} />
                <p className="text-[#584747]">Experiencia</p>
              </div>
              <div data-aos="fade-right" data-aos-delay='850' className="text-center">
                <ExperienceCounter numero={1000} />
                <p className="text-[#584747]">Cliente satisfeito</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mr-12 ml-[10%] pt-[35px]">
               <CardNossa aos="fade-down-right" src={"Leaf.png"} alt={"folha"} title={'100% Natural'} descript={'Todos os nossos produtos são livres de químicos e aditivos artificiais.'}/>

               <CardNossa aos='fade-down-left' src={"Favorite.png"} alt={"coração"} title={'Cuidado & Amor'} descript={'Cada produto é selecionado com carinho pensando no seu bem-estar.'}/>

               <CardNossa aos='fade-up-right' src={"Approval.png"} alt={"check"} title={'Qualidade Garantida'} descript={'Trabalhamos apenas com fornecedores certificados e confiáveis.'}/>
               
               <CardNossa aos='fade-up-left' src={"Shield.png"} alt={"folha"} title={'Tradição Familiar'} descript={'Uma empresa familiar comprometida com a saúde natural há anos.'}/>

         
          </div>

      </section>
    </>
  );
}

export default NossaHistoria;
