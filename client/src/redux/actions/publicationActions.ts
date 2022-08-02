export const LOADING : string = 'LOADING';
export const LOADED_SUCCESS : string = 'LOADED_SUCCESS';
export const LOADED_FAILURE : string = 'LOADED_FAILURE';
export const URL_BASE : string = 'https://taller-lispector-backend.herokuapp.com/publications';
import { getUser } from "./userActions";

export type publicacionData = {
    nombre: string, 
    descripcion: string,
    numeroPaginas: string, 
    anoLanzamiento: string,
    autores: Array<string>,
    urlDocumento: string,
    generos: Array<string>,
    comentarios: Array<Object>,
    codigosPublicacion: Array<Object>,
}

export const loading = () => ({ type: LOADING });

export const success = (payload) => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = (payload = "") =>  ({
    type: LOADED_FAILURE,
    payload
});

export const getAllPublications = () => {
    return async dispatch => {
        dispatch(loading())
        try {
            const publications = await fetch(`${URL_BASE}/getAll`)
            const data = await publications.json()
            dispatch(success({ publicaciones: data, redirect: null}))
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
            dispatch(success({ publicacion: data, redirect: null}))
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
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params),
                }
            )

            const data = await response.json();
            if(data === "La reserva del código de la publicación ha sido realizada con éxito"){
                console.log("Se ha hecho bien la reserva del código y el if funciona bien")
                dispatch(getUser(idUsuario));
                dispatch(success({}));
                console.log('Funcionó bien esta mondá de reservar códigos de publicación');
            } else {
                console.log('Algo ha salido mal revalidando el token del usuario y no sé más');
                dispatch(failure('Algo ha salido mal revalidando el token del usuario y no sé más'))
            }

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}