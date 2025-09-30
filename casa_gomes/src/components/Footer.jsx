function Footer() {
  return (
    <>
      <footer className="flex flex-row flex-wrap  gap-3 items-center justify-between bg-[#815331] pt-[1em] pb-[1.5em] pl-[10px] pr-[10px]">
        <div className=" md:pl-8">
          <div className="">
            <img className="w-[80px]" src="logo.png" alt="logo casa gomes" />
            <p className="md:w-[45ch] text-[.8em] text-left">
              Produtos naturais e orgânicos para uma vida mais saudável.
              Conectando você com o melhor da natureza.
            </p>
          </div>
         </div>
         <div>
          <p className="text-[.8em]">
            © 2024 Casa Gomes. Todos os direitos reservados. Desenvolvido pela{" "}
            <a href="">TechLink</a>
          </p>
         </div>
         <div className="md:pr-8">
          <p className="text-[#f0a400] font-medium">Links rápidos</p>
          <ul className="text-left">
            <li>
              <a href="">Home</a>
            </li> 
            <li>
              <a href="">Produto</a>
            </li>
            <li>
              <a href="">Nossa história</a>
            </li>

            <li>
              <a href="">Contato</a>
            </li>
          </ul>
         </div>
      </footer>
    </>
  );
}

export default Footer;
