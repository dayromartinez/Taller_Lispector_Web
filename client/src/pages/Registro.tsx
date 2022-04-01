import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import clarice from '../images/Clarice1.jpg';
import "../images/Clarice1.jpg";
export const Registro = () => {

  return (
    <div className='bg-gray-100 h-4/5'>
        <Navbar />
        <div className="flex w-full mx-auto">
            <img className='w-full' src={clarice} height="20%"/>
            <form className="bg-white shadow-md max-w-md mx-auto rounded px-8 pt-6">
                <h5 className='text-2xl my-3 mb-5 font-bold mt-22'>Registrarse</h5>
                <p className='text-sm mb-5 italic'>Regístrate en Taller Lispector para acceder a nuestras publicaciones y matenerte al tanto de nuestros ciclos, sesiones y eventos.</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="nombre">
                        Nombres <span className='text-red-500'>*</span>
                    </label>
                    <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Tu nombre" required={true}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="celular">
                        Celular
                    </label>
                    <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="celular" type="text" placeholder="3123158165" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="username">
                        Correo Electrónico <span className='text-red-500'>*</span>
                    </label>
                    <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="correo@email.com" required={true} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                        Contraseña <span className='text-red-500'>*</span>
                    </label>
                    <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required={true}/>
                </div>
                <div className="items-center pt-8">
                    <button className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}
