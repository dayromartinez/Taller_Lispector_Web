import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles404.css'

export const NotFound = () => {
    return (
        <div className="container-page">
            <div className="container-content">
                <h2 className='t404'>404</h2>
                <h1 className="title-page">¡Esta página no existe!</h1>
                <p className="description-page">Lo sentimos, pero la página que estás buscando no fué encontrada.</p>
                <div className="container-btn">
                    <Link to='/'>
                        <button className="btn-goback">Volver al Inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
