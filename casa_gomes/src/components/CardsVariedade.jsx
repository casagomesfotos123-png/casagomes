
function CardNossa(props){
    return(
       <>
        <div data-aos={props.aos} data-aos-delay={props.delay}  className="flex flex-col items-center">
          <img className="w-[70px] mb-[1em]" src={props.src} alt={props.alt}/>
          <h3 className="font-medium text-[1.3em]">{props.title}</h3>
          <p className="w-[30ch]">{props.descript}</p>
        </div>
       </>
    )
}


export default CardNossa