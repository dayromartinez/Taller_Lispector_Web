import React from 'react'
import { Navbar } from '../../components/Navbar'
import imagenClarice from '../../images/Clarice1.jpg';
import './inicio.css'

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
        </div>
    )
}
