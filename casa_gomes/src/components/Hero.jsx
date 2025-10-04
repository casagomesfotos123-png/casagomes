import React from "react";
import './Hero.css'
import { Link } from "react-router-dom";


function ContainerHero(){
    return(
    <><section id='Hero' className="overflow-hidden container-hero h-[100vh] relative flex flex-col items-center justify-center">
    <div className="">
        <h1 data-aos="fade" data-aos-delay='250' className="text-[35px] md:text-[50px] md:w-[35ch] font-semibold m-1">Tudo o que você precisa para viver com <span className="text-orange-600">saúde e 
bem-estar</span></h1>
        <h2 data-aos="fade" data-aos-delay='450' className="text-[15px]  md:text-2xl font-semibold">Saúde e bem-estar em cada produto</h2>
        <p data-aos="fade" data-aos-delay='650' className="font-semibold text-[12px] text-[#d1d1d1] mb-[1em] mt-[.5em]">produtos naturais & nordestino</p>
    </div>

    <div data-aos="fade" data-aos-delay='850' className="btns-hero flex flex-row flex-wrap justify-center items-center gap-10 mt-2">
          <Link to="/produtos" className="flex flex-row justify-center items-center gap-2 bg-gradient-to-bl from-[#478947] to-[#2C622C] px-[14px] py-[10px] rounded-[7px] transition-all duration-100 ease-in hover:bg-[#0e7233] hover:scale-[1.1]  "><img  src="carrinhoCompra.png" alt="produtos" className="w-[25px]"/><p className="text-[1em] font-medium">Produtos</p></Link>

          <a href="https://wa.me/5521996568665" className="flex flex-row justify-center items-center transition-all duration-150 ease-in bg-[#16A34A] hover:bg-[#0e7233] hover:scale-[1.1] px-[10px] py-[8px] rounded-[7px] "><img src="WhatsApp.png" alt="whatsApp" className="w-[35px]"/><p className="text-[1em] font-medium">Falar no whatsApp</p></a>
    </div>
    </section>
  </>
  )
}




export default ContainerHero