import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { NavBar2 } from '../components/NavBar2'
import { getAllUsers, login } from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { dataState } from '../redux/reducers'

/** recaptcha */
import ReCAPTCHA from 'react-google-recaptcha'

/* Claves de sitio de google de PRUEBA:
Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe

Claves de sitio PROPIAS:
Site key: 6Lf4xtgfAAAAAOkhl3q07oVouG44z4fYR5NbWh0R
Secret key: 6Lf4xtgfAAAAAMCow1vg1kWalpDFf4yzcEps3xEw
*/

const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const isEmail = (value: string) =>
    REGEX_EMAIL.test(value) || 'Formato de correo inválido. Ejemplo: correo@email.com'

const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)\-\+\;\~\,\}\{\[\]\^\>\<\/\=$-$_])[A-Za-z\d$@$!%*?&#.$($)\/\=\<\>\^\[\]\{\}\,\~\+\-\;$-$_]{6,20}$/
const isPassword = (value: string) => 
    REGEX_PASSWORD.test(value) || 'La contraseña debe tener entre 8 y 20 caracteres, una mayúscula, una minúscula, un número y un caracter especial al inicio o al final de la contraseña.'

export const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirect = useSelector((state : dataState) => state.redirect);
    const usuarios = useSelector((state : dataState) => state.usuarios);
    const [isNotRobot, setIsNotRobot] = useState<boolean>(false);
    const [siteKey, setSiteKey] = useState<string>("");

    /** References */
    const captcha = useRef(null)

    type FormData = {
        correo: string;
        contrasena: string;
    }

    type usuarioData = {
        id?: string, 
        nombre?: string, 
        correo?: string,
        contrasena?: string, 
        celular?: string, 
        rol?: string, 
        codigoPublicacionPostales?: string
    }

    const {
        handleSubmit,
        register,
        control,
        setValue,
        getValues,
        formState: { errors, isValid },
        } = useForm<FormData>({
        mode: 'onChange',
        reValidateMode: 'onChange',
    })

    const onSubmit = async (data: FormData) => {
        if (!isNotRobot) {
            setIsNotRobot(false)
            return false
        }

        setIsNotRobot(true)
        let correoInput : string = data.correo;
        let contrasenaInput : string = data.contrasena;

        let usuario = usuarios.find((usuario : object) => {
            if(usuario["correo"].toLowerCase() === correoInput.toLowerCase().trim() && usuario["contrasena"] === contrasenaInput.trim()){
                return usuario;
            }
        });

        if(usuario){
            dispatch(login(usuario["id"], usuario["nombre"], usuario["correo"], usuario["celular"], usuario["rol"], usuario["codigoPublicacionPostales"]));
            navigate('/');
            alert("Bienvenido nuevamente!");
        }else{
            alert("Usuario o contraseña incorrectos");
        }
    }

    const onChangeRecapcha = () => {
        if (captcha.current.getValue()) {
            setIsNotRobot(true)
        } else {
            setIsNotRobot(false)
        }
    }

    useEffect(() => {
        console.log('Isvalid: ', isValid);
        if(window.location.hostname === "localhost"){
            setSiteKey("6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI")
            localStorage.setItem("siteKey", "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI")
        }else{
            setSiteKey("6Lf4xtgfAAAAAOkhl3q07oVouG44z4fYR5NbWh0R")
            localStorage.setItem("siteKey", "6Lf4xtgfAAAAAOkhl3q07oVouG44z4fYR5NbWh0R")
        }

        if (redirect) {
            navigate(redirect);
        }
        dispatch(getAllUsers());

    }, [dispatch, redirect, window.location.hostname])

    return (
        <div className='bg-slate-300' >
            <NavBar2 />
            <div className="w-full max-w-sm mx-auto py-10 pt-36 pb-48">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className='text-2xl my-3 mb-8 text-center font-semibold'>Iniciar Sesión</h5>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="username">
                            Correo Electrónico
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="correo@email.com" autoComplete='off'
                        {...register('correo', {
                            setValueAs: (value: string) => value.toUpperCase().trim(),
                            required: {
                                value: true,
                                message: 'Este campo es requerido.',
                            },
                            minLength: {
                                value: 5,
                                message: 'Debe de tener un mínimo de 5 caracteres.',
                            },
                            validate: {
                                isEmail,
                            },
                        })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mt-2 text-left" htmlFor="correo">
                            {errors.correo ? (<span className="text-red-500 text-xs">{errors.correo.message}</span>) : null}
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                            Contraseña
                        </label>
                        <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="***********"
                        {...register('contrasena', {
                            setValueAs: (value: string) => value.trim(),
                            required: {
                                value: true,
                                message: 'Este campo es requerido.',
                            },
                            minLength: {
                                value: 8,
                                message: 'Debe de tener un mínimo de 8 caracteres.',
                            },
                            validate: {
                                isPassword,
                            },
                        })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mt-2 text-left" htmlFor="contrasena">
                            {errors.contrasena ? (<span className="text-red-500 text-xs">{errors.contrasena.message}</span>) : ""}
                        </label>    
                    </div>
                    <div className="items-center flex flex-col">
                        <ReCAPTCHA
                            className="mb-8"
                            ref={captcha}
                            sitekey={siteKey || localStorage.getItem("siteKey")}
                            onChange={onChangeRecapcha}
                        />
                        <button className={isValid && isNotRobot ? ("bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer") 
                        : "bg-slate-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" } type="submit" disabled={!isValid || !isNotRobot}>
                            Iniciar Sesión
                        </button>
                        <p className='pt-5'>¿No tienes una cuenta?   <Link to='/registrarse' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            ¡Regístrate!
                        </Link>
                        </p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
