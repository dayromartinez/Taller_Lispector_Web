import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import imagenClarice from '../../images/Clarice1.jpg';
import './inicio.css'
import { NuestrasPublicaciones } from '../../components/NuestrasPublicaciones'


export const InicioPage = () => {
    return (
        <div>
            <Navbar />
            <div className='contenedor_frase_lispector'>
                <img src={imagenClarice} className="imgClarice"/>
                <div className='nombre_frase_lispector'>
                    <h5 className='text-2xl my-7 mr-2 italic'>«Nací dura, heróica, solitaria y de pié».</h5>
                    <h5 className='libro_frase'>Agua Viva (1975)</h5>
                </div>
            </div>
            <h3 className='text-3xl font-bold' id='nombre_clarice_lispector'>Clarice Lispector</h3>
            <div className='bg-red-500 my-10 py-7 w-full'>
                <h2 className='text-3xl font-bold'>Quiénes somos?</h2>
                <h2 className='text-3xl font-bold'>Qué hacemos?</h2>
            </div>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-bold mx-10'>Hemos estado en:</h2>
                <div className='mx-10'>
                    (Acá va el carrusel de imgs)
                </div>
            </div>
            <div className='bg-red-500 my-6 py-5 w-full'>
                <h1 className='text-3xl font-bold'>Frase Lispector</h1>
            </div>
            <div>
                <NuestrasPublicaciones />
                <div className='flex justify-between mt-10'>
                    <div className='mx-10'>Espacio de CARRUSEL</div>
                    <h1 className='text-2xl font-bold mx-10'>Frase Lispector</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
