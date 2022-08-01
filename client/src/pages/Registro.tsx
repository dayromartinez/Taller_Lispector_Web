import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clarice from '../images/Clarice1.jpg';
import "../images/Clarice1.jpg";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { dataState } from '../redux/reducers'
import { usuarioData, createUser } from '../redux/actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/** recaptcha */
import ReCAPTCHA from 'react-google-recaptcha'
import { PublicLayout } from '../layouts/PublicLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { Alert, Snackbar } from '@mui/material';



const REGEX_EMAIL = /^[a-zA-Z0-9.ñ!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const isEmail = (value: string) =>
    REGEX_EMAIL.test(value) || 'Formato de correo inválido. Ejemplo: correo@email.com'

const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)\-\+\;\~\,\}\{\[\]\^\>\<\/\=$-$_])[A-Za-z\d$@$!%*?&#.$($)\/\=\<\>\^\[\]\{\}\,\~\+\-\;$-$_]{6,20}$/
const isPassword = (value: string) => 
    REGEX_PASSWORD.test(value) || 'La contraseña debe tener entre 8 y 20 caracteres, una mayúscula, una minúscula, un número y un caracter especial al inicio o al final de la contraseña.'

const REGEX_CELLPHONE = /^[0-9]{10,10}$/
const isCellphone = (value: string) =>
    REGEX_CELLPHONE.test(value) || 'Solo se admiten números.'

const REGEX_NAME = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{10,22}$/
const isName = (value: string) =>
    REGEX_NAME.test(value) || 'Formato de nombre inválido. Ejemplo: Clarice Lispector'

export const Registro = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirect = useSelector((state : dataState) => state.redirect);
    const usuario = useSelector((state : dataState) => state.usuario);
    const message = useSelector((state : dataState) => state.message);
    const [isNotRobot, setIsNotRobot] = useState<boolean>(false);
    const [siteKey, setSiteKey] = useState<string>("");
    const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {

        setOpen(false);
    };

    /** References */
    const captcha = useRef(null)

    type FormData = {
        nombres: string;
        celular: string;
        correo: string;
        contrasena: string;
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
        let nuevoUsuario: usuarioData = {
            nombre: data.nombres,
            correo: data.correo,
            contrasena: data.contrasena,
            celular: data.celular,
        }
        dispatch(createUser(nuevoUsuario))
        localStorage.setItem('login', 'true')
    }

    const onChangeRecapcha = () => {
        if (captcha.current.getValue()) {
            setIsNotRobot(true)
        } else {
            setIsNotRobot(false)
        }
    }

    useEffect(() => {

        setSizeScreen(window.innerWidth);

        if(window.location.hostname === "localhost"){
            setSiteKey("6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI")
            localStorage.setItem("siteKey", "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI")
        }else{
            setSiteKey("6Lf4xtgfAAAAAOkhl3q07oVouG44z4fYR5NbWh0R")
            localStorage.setItem("siteKey", "6Lf4xtgfAAAAAOkhl3q07oVouG44z4fYR5NbWh0R")
        }

        if( message !== '' ){
            setOpen(true);
            setValue('nombres', '');
            setValue('celular', '');
            setValue('correo', '');
            setValue('contrasena', '');
            setValue('nombres', '');
            //captcha.current.reset();
        }

        if (redirect) {
            navigate(redirect);
        }

    }, [dispatch, redirect, usuario, message])

    return (
        <AuthLayout>
            <div className='bg-gray-100 pt-24'>
                <div className="flex w-full mx-auto">
                    {sizeScreen > 900 ? (
                        <img className='w-full' src={clarice} height="20%"/>
                    ) : (null)}
                    <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'right'}} autoHideDuration={4000} onClose={handleClose} >
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Ya hay una cuenta registrada con este correo. Inténtelo de nuevo
                        </Alert>
                    </Snackbar>
                    <form className="bg-white shadow-md max-w-md mx-auto rounded px-8 pt-16" onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='text-2xl my-3 mb-5 font-bold mt-22 text-center'>Registrarse</h5>
                        <p className='text-sm mb-5 italic'>Regístrate en Taller Lispector para acceder a nuestras publicaciones y matenerte al tanto de nuestros ciclos, sesiones y eventos.</p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="nombre">
                                Nombres <span className='text-red-500'>*</span>
                            </label>
                            <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Clarice Lispector"
                            {...register('nombres', {
                                setValueAs: (value: string) => value,
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido.',
                                },
                                minLength: {
                                    value: 5,
                                    message: 'Debe de tener un mínimo de 11 caracteres.',
                                },
                                validate: {
                                    isName,
                                },
                            })}
                            />
                            <label className="block text-gray-700 text-sm font-bold mt-2 text-left" htmlFor="nombres">
                                {errors.nombres ? (<span className="text-red-500 text-xs">{errors.nombres.message}</span>) : null}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="celular">
                                Celular
                            </label>
                            <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="celular" type="text" placeholder="3123158165" 
                            {...register('celular', {
                                setValueAs: (value: string) => value.trim(),
                                minLength: {
                                    value: 10,
                                    message: 'Debe de tener un mínimo de 10 números.',
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Debe de tener un máximo de 10 números.',
                                },
                                validate: {
                                    isCellphone,
                                },
                            })}
                            />
                            <label className="block text-gray-700 text-sm font-bold mt-2 text-left" htmlFor="celular">
                                {errors.celular ? (<span className="text-red-500 text-xs">{errors.celular.message}</span>) : null}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="correo">
                                Correo Electrónico <span className='text-red-500'>*</span>
                            </label>
                            <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="correo@email.com" 
                            {...register('correo', {
                                setValueAs: (value: string) => value.toLowerCase().trim(),
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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                                Contraseña <span className='text-red-500'>*</span>
                            </label>
                            <input autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********" 
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
                        <div className="items-center pt-4 pb-4 flex flex-col">
                            <ReCAPTCHA
                                className="mb-8"
                                ref={captcha}
                                sitekey={siteKey || localStorage.getItem("siteKey")}
                                onChange={onChangeRecapcha}
                            />
                            <button className={isValid && isNotRobot ? ("bg-teal-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer") 
                            : "bg-slate-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" } type="submit" disabled={!isValid || !isNotRobot} >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    )
}
