export const URL_BASE : string = 'https://taller-lispector-backend.herokuapp.com/publications';
import { loading, success, failure, getUser } from "./userActions";
import { publicacionData } from "../../interfaces/publicacionData";

export const getAllPublications = () => {
    return async dispatch => {
        dispatch(loading())
        try {
            const publications = await fetch(`${URL_BASE}/getAll`)
            const data = await publications.json()
            dispatch(success({ publicaciones: data.publicaciones, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export const getPublication = (id : string) => {
    return async dispatch => {
        dispatch(loading())
        try {
            const publication = await fetch(`${URL_BASE}/${id}`)
            const data = await publication.json()
            dispatch(success({ publicacion: data.publicacion, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export function createPublication(datosPublicacion : publicacionData) {
    return async dispatch => {

        dispatch(loading())
        const nuevaPublicacion = {
            nombre: datosPublicacion.nombre, 
            descripcion: datosPublicacion.descripcion,
            numeroPaginas: datosPublicacion.numeroPaginas, 
            anoLanzamiento: datosPublicacion.anoLanzamiento,
            autores: datosPublicacion.autores,
            urlDocumento: datosPublicacion.urlDocumento,
            generos: datosPublicacion.generos,
            comentarios: [],
            codigosPublicacion: [],
        }

        try {
            const response = await fetch(`${URL_BASE}/createPublication`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevaPublicacion),
                }
            )

            const data = await response.json();
            dispatch(success({ publicacion: data, redirect: `/`}));

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}

export function updatePublicacion(id: string, nombre : string, descripcion : string, numeroPaginas : string, anoLanzamiento : string, autores : Array<string>, urlDocumento : string, generos : Array<string>, comentarios : Array<Object>, codigosPublicacion : Array<Object>) {
    return async dispatch => {
        dispatch(loading())
        const actualizarPublicacion = {
            _id: id,
            nombre: nombre, 
            descripcion: descripcion,
            numeroPaginas: numeroPaginas, 
            anoLanzamiento: anoLanzamiento,
            autores: autores,
            urlDocumento: urlDocumento,
            generos: generos,
            comentarios: comentarios,
            codigosPublicacion: codigosPublicacion,
        }
        try {
            await fetch(`${URL_BASE}/updatePublication`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(actualizarPublicacion),
                }
            )
            dispatch(success({publicacion: actualizarPublicacion, redirect: `/`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function reserveCodePublication(idPublicacion : string, idUsuario : string, nombre : string, codigoPublicacion : string) {
    return async dispatch => {

        dispatch(loading())
        const params = {
            _id: idPublicacion, 
            uid: idUsuario,
            nombre: nombre,
            codigoPublicacion: codigoPublicacion,
        }

        try {
            const response = await fetch(`${URL_BASE}/reserveCodePublication`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params),
                }
            )

            const data = await response.json();
            if(data?.['msg'] === "La reserva del código de la publicación ha sido realizada con éxito"){
                localStorage.setItem('reservaPublicacion','ok');
                dispatch(getUser(idUsuario));
                dispatch(success({}));
            } else {
                console.log(data?.['msg'])
                dispatch(failure(data?.['msg']))
            }
        } catch (error) {
            console.log(error);
            dispatch(failure())
        }
    }
}