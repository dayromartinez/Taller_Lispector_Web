import { Avatar, Box, Button, IconButton, InputLabel, Rating, TextareaAutosize, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { coloresPaleta } from '../styles/coloresPaleta';
import { colors } from './NavBarDesktop';
import { commentData } from '../interfaces/commentData';
import { color } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers';
import { createComment } from '../redux/actions/commentActions';

export const useStyles = makeStyles((theme) => ({
    titulo_textArea: {
        color: coloresPaleta.gris,
        fontWeight: 'bold', 
        fontSize: '1.7rem',
        [theme.breakpoints.down("xs")]: {
            margin: '1rem 2rem',
            fontSize: '1.3rem',
        }
    },
    textArea: {
        width: '50vw', 
        borderRadius: 10, 
        margin: '1rem 0rem 0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            margin: '0rem 2rem',
            width: '85vw',
            heigth: '20rem',
            fontSize: '.9rem',
        }
    },
    container_comentarios: {
        margin: '3rem 0rem 0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            margin: '1rem 2rem',
        } 
    },
    nombre_usuario: {
        fontWeight: 'bold',
        margin: '0rem 1rem',
        fontSize: '1.3rem',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem',
            lineHeight: '3rem',
        }
    },
    info_usuario : {
        display: 'flex',
        lineHeight: '3rem',
    },
    container_info_raiting: {
        display: 'flex', 
        justifyContent: 'space-between',
        width: '50vw',
        [theme.breakpoints.down("xs")]: {
            width: '85vw',
        }
    },
    fecha_comentario: {
        color: coloresPaleta.gris,
        fontSize: '1rem',
        margin: '.5rem 0rem',
        fontStyle: 'italic',
    },
    comentario: {
        margin: '1rem 0rem',
    },
    container_comentario: {
        marginBottom: 5, 
        borderBottom: `1px solid ${coloresPaleta.gris}`, 
        width: '50vw',
        [theme.breakpoints.down("xs")]: {
            width: '85vw',
            marginTop: '1.5rem',
        }
    },
    raiting: {
        marginTop: '.8rem',
        [theme.breakpoints.down("xs")]: {
            marginTop: '.6rem',
        }
    },
    contenedor_nuevo_comentario: {
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '50vw',
        margin: '3rem 0rem 0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            margin: '1rem 0rem 0rem 0rem',
            width: '93vw',
        } 
    },
    raiting_nuevo_comentario: {
        [theme.breakpoints.down("xs")]: {
            margin: '1.2rem 0rem 0rem 0rem',
        } 
    },
    sin_comentarios: {
        color: coloresPaleta.gris,
        fontWeight: 'bold',
        margin: '3rem 6rem',
        fontSize: '1.3rem',
        [theme.breakpoints.down("xs")]: {
            margin: '3rem 1rem 2rem 3rem',
            fontSize: '.9rem',
        } 
    },
    mensaje_error: {
        color: 'rgb(239 68 68)',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '.5rem 3rem',
        [theme.breakpoints.down("xs")]: {
            margin: '.5rem 0rem 2rem 1rem',
            fontSize: '.8rem',
        } 
    },
    container_boton: {
        display: 'flex', 
        justifyContent: 'right',
        width: '50vw',
        margin: '0rem 6rem',
        [theme.breakpoints.down("xs")]: {
            width: '93vw',
            margin: '-1rem 0rem 3rem 0rem',
        } 
    }
}));

export const Commentaries = ({ comentarios, publicacion }) => {

    const classes = useStyles();
    const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
    const [raiting, setRaiting] = useState(0);
    const usuario = useSelector((state : dataState) => state.usuario);
    const dispatch = useDispatch();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    type FormData = {
        comentario: string;
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

        const comentario: commentData = {
            userId: usuario?.['uid'],
            comentario: data.comentario,
            publicacionId: publicacion?.['_id'],
            valoracion: raiting,
        }

        dispatch(createComment(comentario));
        setRaiting(0);
        setValue('comentario', '');
    }

    useEffect(() => {
        setSizeScreen(window.innerWidth);
    }, []);

    return (
        <Box>
            <Box className={classes.contenedor_nuevo_comentario}>
                <Box className={classes.titulo_textArea}>Comentarios</Box>
                <Tooltip title="¡Puntúa esta publicación!">
                    <Rating className={classes.raiting_nuevo_comentario} value={raiting} onChange={(event, newValue) => setRaiting(newValue)} />
                </Tooltip>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextareaAutosize
                    id="textarea_comentarios"
                    minRows={ sizeScreen > 600 ? 10 : 5 }
                    aria-label="minimum height"
                    placeholder={usuario?.['name'] ? ("¡Deja aquí tu comentario para esta publicación!"):("¡Inicia sesión en Taller Lispector para poder comentar y puntuar esta publicación!")}
                    className={classes.textArea}
                    disabled={!usuario?.['name']}
                    {...register('comentario', {
                        setValueAs: (value: string) => value.toLowerCase().trim(),
                        required: {
                            value: true,
                            message: 'Este campo es requerido.',
                        },
                        minLength: {
                            value: 10,
                            message: 'El comentario debe de tener un mínimo de 10 caracteres.',
                        },
                        maxLength: {
                            value: 5000,
                            message: 'El comentario debe de tener un máximo de 5000 caracteres.',
                        },
                    })}
                />
                <p id='error_formulario' className={classes.mensaje_error}>
                    {errors.comentario ? (<span className={classes.mensaje_error}>{errors.comentario.message}</span>) : null}
                </p>
                <Box className={classes.container_boton}>
                    <button className={isValid && raiting > 0 ? ("bg-teal-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer") 
                            : "bg-slate-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" }
                            type="submit" disabled={!isValid || raiting === 0}
                        >
                        Comentar    
                    </button>
                </Box>
            </form>
            {comentarios?.length > 0 ? (
                <Box className={classes.container_comentarios}>
                    {comentarios.map((comentario, index) => (
                        <Box className={classes.container_comentario}>
                            <Box className={classes.container_info_raiting} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box className={classes.info_usuario}>
                                    <IconButton sx={{ p: 0 }}>
                                        <Avatar alt={comentario?.nombreUsuario.toUpperCase()} src={comentario?.nombreUsuario} sx={{ bgcolor: `${colors[ index % 7 ]}` }} />
                                    </IconButton>
                                    <p className={classes.nombre_usuario}>{comentario?.['nombreUsuario']}</p>   
                                </Box>
                                <Rating className={classes.raiting} name="read-only" value={comentario?.valoracion} readOnly />
                            </Box>
                            <p className={classes.fecha_comentario}>{new Date(comentario?.updatedAt).toLocaleDateString('en-GB')} a las {new Date(comentario?.updatedAt).toLocaleTimeString('en-US')}</p>
                            <p className={classes.comentario}>"{comentario?.comentario}"</p>
                        </Box> 
                    ))}
                </Box>
            ) : (
                <Box className={classes.sin_comentarios}>
                    Todavía no hay comentarios. ¡Sé la primera persona en compartir tu apreciación de esta publicación!
                </Box>
            )}
        </Box>
    )
}
