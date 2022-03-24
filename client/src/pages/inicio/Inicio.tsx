import React from 'react'
import { Navbar } from '../../components/Navbar'
import imagenClarice from '../../images/Clarice1.jpg';
import './inicio.css'

export const InicioPage = () => {

    return (
        <div>
            <Navbar />
            <img src={imagenClarice} className="imgClarice"/>
            <h5 className='text-3xl'>«Nací dura, heróica, solitaria y de pié». Agua Viva (1975)</h5>
        </div>
    )
}
