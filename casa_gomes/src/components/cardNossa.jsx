
function CardNossa(props){
    return(
       <>
        <div data-aos={props.aos} data-aos-delay={props.delay} className="flex flex-col justify-center  items-center bg-white rounded-2xl shadow-2xl p-2">
          <img className="w-[50px]" src={props.src} alt={props.alt}/>
          <h3 className="text-black font-medium text-[.8em]">{props.title}</h3>
          <p className="md:w-[25ch] text-[#815a5a] text-[.8em]">{props.descript}</p>
        </div>
       </>
    )
}


export default CardNossa