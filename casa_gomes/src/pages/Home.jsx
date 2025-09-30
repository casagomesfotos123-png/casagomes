import Navbar from '../components/Navbar'
import ContainerHero from "../components/Hero"
import NossaHistoria from '../components/NossaHistoria'
import Variedade from '../components/Variedades'
import MapasCarousel from '../components/Localizacao'
import Footer from '../components/Footer'
import OpcaoCompra from '../components/Opcoescompra'


export default function Home(){
    return(
<>
<div className='relative max-w-[100%] w-[100%]'>

     <Navbar/>
     <ContainerHero/>
     <NossaHistoria/>
     <Variedade/>
     <OpcaoCompra/>
     <MapasCarousel/>
     <Footer/>

</div>
</>
    )
}