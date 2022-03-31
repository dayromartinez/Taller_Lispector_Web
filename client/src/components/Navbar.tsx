import React from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_taller_lispector.png'

export const Navbar: FC = () => {
    
    return (
        <div>
            <nav className='flex justify-between bg-red-500'>
                <img src={logo} width={150} className='py-2 px-2' />
                <div className='pt-6'>
                    <Link to='/'>
                        <span className='px-3 py-3 hover:underline'>Inicio</span>
                    </Link>
                    <Link to='/sesiones'>
                        <span className='px-3 py-3 hover:underline'>Sesiones</span>
                    </Link>
                    <Link to='/publicaciones'>
                        <span className='px-3 py-3 hover:underline'>Publicaciones</span>
                    </Link>
                    <Link to='/inicio_sesion'>
                        <span className='px-3 py-3 hover:underline'>Iniciar Sesión</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}