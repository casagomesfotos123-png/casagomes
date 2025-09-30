import Navbar from '../components/Navbar'
import ContainerHero from "../components/Hero"
import NossaHistoria from '../components/NossaHistoria'
import Variedade from '../components/variedades'
import MapasCarousel from '../components/localização'
import Footer from '../components/Footer'
import OpcaoCompra from '../components/opçõescompra'


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