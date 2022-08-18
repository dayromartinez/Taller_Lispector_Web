export const URL_BASE : string = 'https://taller-lispector-backend.herokuapp.com/comments';
import { loading, success, failure, getUser } from "./userActions";
import { getPublication, getAllPublications } from "./publicationActions";
import { commentData } from "../../interfaces/commentData";


export function createComment(datosComentario : commentData) {
    return async dispatch => {

        dispatch(loading())
        const nuevoComentario = {
            userId: datosComentario.userId,
            publicacionId: datosComentario.contenidoId,
            comentario: datosComentario.comentario,
            valoracion: datosComentario.valoracion,
        }

        try {
            const response = await fetch(`${URL_BASE}/createComment`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevoComentario),
                }
            )

            const data = await response.json();
            if(data['commentCreated'] !== undefined){
                dispatch(getPublication(datosComentario.publicacionId));
                dispatch(success({ comentario: data.commentCreated, redirect: ``}));
            } else {
                dispatch(failure('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico'))
            }

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}

export function updateComment(datosComentario : commentData) {
    return async dispatch => {
        dispatch(loading())
        const actualizarComentario = {
            userId: datosComentario.userId,
            publicacionId: datosComentario.contenidoId,
            comentarioId: datosComentario.comentarioId,
            comentario: datosComentario.comentario,
            valoracion: datosComentario.valoracion,
        }
        try {
            const response = await fetch(`${URL_BASE}/updateComment`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(actualizarComentario),
                }
            )

            const data = await response.json();
            if(data['commentUpdated'] !== undefined){
                dispatch(getPublication(datosComentario.publicacionId));
                dispatch(success({comentario: actualizarComentario, redirect: ``}));
            } else {
                dispatch(failure('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico'))
            }
            
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteComment(id: string, publicacionId: string) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/deleteComment/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const data = await response.json();
            if(data?.['msg'] !== "El comentario no existe"){
                dispatch(getPublication(publicacionId));
                dispatch(success({redirect: ``}));
            } else {
                dispatch(failure('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico'))
            }

        } catch (error) {
            console.log(error);
            dispatch(failure())
        }
    }
}