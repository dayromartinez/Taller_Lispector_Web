import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { NavBar2 } from '../components/NavBar2'
import { getAllUsers, login } from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirect = useSelector((state) => state.redirect);
    const usuarios = useSelector((state) => state.usuarios);
    const [state, setState] = useState({
        correo: "",
        contrasena: "",
    });

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let usuario : object = {};
        usuario = usuarios.find((usuario) => {
            if(usuario.correo.toLowerCase() === state.correo.toLowerCase().trim() && usuario.contrasena === state.contrasena.trim()){
                return usuario;
            }
        });

        if(usuario){
            dispatch(login(usuario.id, usuario.nombre, usuario.correo, usuario.celular, usuario.rol, usuario.codigoPublicacionPostales));
            setState({
                correo: "",
                contrasena: "",
            })
            navigate('/');
            alert("Bienvenido nuevamente!");
        }else{
            alert("Usuario o contraseña incorrectos");
            setState({
                correo: "",
                contrasena: "",
            })
        }
    }

    useEffect(() => {
        if (redirect) {
            navigate(redirect);
        }
        dispatch(getAllUsers());
    }, [dispatch, redirect])

    return (
        <div className='bg-slate-300' >
            <NavBar2 />
            <div className="w-full max-w-sm mx-auto py-10 pt-36 pb-48">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                    <h5 className='text-2xl my-3 mb-8'>Iniciar Sesión</h5>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="username">
                        Correo Electrónico
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="correo@email.com" value={state.correo} onChange={onChange} name="correo" required autoComplete='false'/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                        Contraseña
                    </label>
                    <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="contrasena" type="password" placeholder="******************" value={state.contrasena} onChange={onChange}/>
                    </div>
                    <div className="items-center">
                    <button className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
