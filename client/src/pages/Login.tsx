import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Login = () => {
    
  return (
    <div className='bg-amber-500' >
        <Navbar />
        <div className="w-full max-w-xs mx-auto py-10 pt-7">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h5 className='text-2xl my-3 mb-8'>Iniciar Sesión</h5>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="username">
                    Correo Electrónico
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="correo@email.com" />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                    Contraseña
                </label>
                <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                </div>
                <div className="items-center">
                <button className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Iniciar Sesión
                </button>
                <p className='pt-5'>¿No tienes una cuenta?   <Link to='/registrarse' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Regístrate
                </Link>
                </p>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}
