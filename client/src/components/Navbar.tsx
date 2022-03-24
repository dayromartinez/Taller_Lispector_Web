import React from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_taller_lispector.png'

export const Navbar: FC = () => {
    
    return (
        <div>
            <nav>
                <img src={logo} width={150} />
                <Link to='/'>
                    <span className='text-1xl'>Inicio</span>
                </Link>
                <Link to='/sesiones'>
                    <span>Sesiones</span>
                </Link>
                <Link to='/publicaciones'>
                    <span>Publicaciones</span>
                </Link>
            </nav>
        </div>
    )
}