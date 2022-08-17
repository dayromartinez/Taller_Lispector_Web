import { Avatar, Box, Button, IconButton, InputLabel, Rating, TextareaAutosize, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { coloresPaleta } from '../styles/coloresPaleta';
import { colors } from './NavBarDesktop';
import { commentData } from '../interfaces/commentData';
import { color } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers';
import { createComment, updateComment } from '../redux/actions/commentActions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStyles } from '../styles/stylesComponentCommentaries';
import UpdateComment from './UpdateComment';


export const Commentaries = ({ comentarios, publicacion }) => {

    const classes = useStyles();
    const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
    const [raiting, setRaiting] = useState(0);
    const usuario = useSelector((state : dataState) => state.usuario);
    const dispatch = useDispatch();
    const [openAlert, setOpenAlert] = useState(false);
    const [updateComment, setUpdateComment] = useState({
        userId: '',
        publicacionId: '',
        idComment: '',
        comment: '',
        raiting: 0
    });
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

    const editCommentary = (userId : string, publicacionId : string, idComment : string, comment : string, raiting: number) => {
        setUpdateComment({
            userId: userId,
            publicacionId: publicacionId,
            idComment: idComment,
            comment: comment,
            raiting: raiting,
        });
        
        setOpenAlert(true);
    }

    useEffect(() => {
        setSizeScreen(window.innerWidth);
    }, []);

    return (
        <Box>
            {
                openAlert ? (
                    <UpdateComment 
                    userId={updateComment.userId} publicacionId={updateComment.publicacionId} idCommentary={updateComment.idComment} 
                    comment={updateComment.comment} raiting={updateComment.raiting} setOpen={setOpenAlert} open={openAlert}
                    />
                ):(null)
            }
            <Box className={classes.contenedor_nuevo_comentario}>
                <Box className={classes.titulo_textArea}>Comentarios</Box>
                <Tooltip title="¡Puntúa esta publicación!">
                    <Rating className={classes.raiting_nuevo_comentario} value={raiting} onChange={(event, newValue) => setRaiting(newValue)} readOnly={!usuario?.['name']}/>
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
                                    <Box>
                                        <Tooltip title="Editar Comentario">
                                            <IconButton onClick={() => editCommentary(comentario?.userId, comentario?.publicacionId, comentario?._id, comentario?.comentario, comentario?.valoracion)}>
                                                <EditIcon/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Eliminar Comentario">
                                            <IconButton>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
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
