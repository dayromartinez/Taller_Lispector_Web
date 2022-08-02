export const URL_BASE : string = 'https://taller-lispector-backend.herokuapp.com/comments';
import { loading, success, failure, getUser } from "./userActions";
import { getPublication, getAllPublications } from "./publicationActions";

export type publicacionData = {
    userId: string,
    publicacionId: string,
    comentarioId?: string,
    comentario: string,
    valoracion: Number,
}

export const getAllCommentsByPublication = (publicationId : string) => {
    return async dispatch => {
        dispatch(loading())
        try {
            const comments = await fetch(`${URL_BASE}/getAllCommentsOfPublication/${publicationId}`)
            const data = await comments.json()
            dispatch(success({ comentarios: data, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export const getAllCommentsByUser = (userId : string) => {
    return async dispatch => {
        dispatch(loading())
        try {
            const comments = await fetch(`${URL_BASE}/getAllCommentsByUser/${userId}`)
            const data = await comments.json()
            dispatch(success({ comentarios: data, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export function createComment(datosPublicacion : publicacionData) {
    return async dispatch => {

        dispatch(loading())
        const nuevoComentario = {
            userId: datosPublicacion.userId,
            publicacionId: datosPublicacion.publicacionId,
            comentario: datosPublicacion.comentario,
            valoracion: datosPublicacion.valoracion,
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
                console.log("Se ha hecho bien la creación del comentario")
                dispatch(getUser(datosPublicacion.userId));
                dispatch(getAllPublications());
                dispatch(getPublication(datosPublicacion.publicacionId));
                dispatch(success({ comentario: data.commentCreated, redirect: ``}));
                console.log('Funcionó bien esta mondá de crear comentarios');
            } else {
                console.log('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico');
                dispatch(failure('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico'))
            }

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}

export function updateComment(userId: string, publicacionId : string, comentarioId : string, comentario : string, valoracion : Number) {
    return async dispatch => {
        dispatch(loading())
        const actualizarComentario = {
            userId: userId,
            publicacionId: publicacionId,
            comentarioId: comentarioId,
            comentario: comentario,
            valoracion: valoracion,
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
                console.log("Se ha hecho bien la actualización del comentario")
                dispatch(getUser(userId));
                dispatch(getAllPublications());
                dispatch(getPublication(publicacionId));
                dispatch(success({comentario: actualizarComentario, redirect: ``}));
                console.log('Funcionó bien esta mondá de actualizar comentarios');
            } else {
                console.log('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico');
                dispatch(failure('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico'))
            }
            
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteComment(id: string, userId : string, publicacionId : string) {
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
            if(data === "Comentario eliminado"){
                console.log("Se ha hecho bien la eliminación del comentario")
                dispatch(getUser(userId));
                dispatch(getAllPublications());
                dispatch(getPublication(publicacionId));
                dispatch(success({redirect: ``}));
                console.log('Funcionó bien esta mondá de eliminar comentarios');
            } else {
                console.log('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico');
                dispatch(failure('Algo ha salido mal revalidando el token del usuario o actualizando las publicaciones o la publicación en específico'))
            }

        } catch (error) {
            dispatch(failure())
        }
    }
}