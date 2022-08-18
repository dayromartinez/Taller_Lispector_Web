export const LOGIN : string = 'LOGIN';
export const LOGOUT : string = 'LOGOUT';
export const LOADING : string = 'LOADING';
export const LOADED_SUCCESS : string = 'LOADED_SUCCESS';
export const LOADED_FAILURE : string = 'LOADED_FAILURE';
export const URL_BASE : string = 'https://taller-lispector-backend.herokuapp.com/auth';
import { userData } from "../../interfaces/userData";


export const logout = () => ({
    type: LOGOUT
});

export const loading = () => ({ type: LOADING });

export const success = (payload) => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = (payload = "") =>  ({
    type: LOADED_FAILURE,
    payload
});

export const login = (correo : string, contrasena: string) => {
    return async dispatch => {

        dispatch(loading())
        const usuario = {
            email: correo,
            password: contrasena,
        }

        try {
            const response = await fetch(`${URL_BASE}/login`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(usuario),
                }
            )

            const fetchTokenUser = await response.json();
            if(fetchTokenUser.msg){
                dispatch(failure(fetchTokenUser.msg))
                return
            }

            localStorage.setItem('tokenUser', fetchTokenUser.token);

            const res = await fetch(`${URL_BASE}/validateToken`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'x-token': fetchTokenUser.token
                },
            })

            const data = await res.json();
            dispatch(success({usuario: data, redirect: ``}));

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
};

export const getUser = (id : string) => {
    return async dispatch => {

        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/${id}`,
                {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            )

            const fetchTokenUser = await response.json();
            if(fetchTokenUser.msg){
                console.log(fetchTokenUser.msg)
                dispatch(failure(fetchTokenUser.msg))
                return
            }

            localStorage.setItem('tokenUser', fetchTokenUser.token);

            const res = await fetch(`${URL_BASE}/validateToken`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'x-token': fetchTokenUser.token
                },
            })

            const data = await res.json();
            dispatch(success({usuario: data, redirect: ``}));

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
};

export function createUser(datosUsuario : userData) {
    return async dispatch => {

        dispatch(loading())
        const nuevoUsuario = {
            name: datosUsuario.nombre,
            email: datosUsuario.correo,
            password: datosUsuario.contrasena,
            phone: datosUsuario.celular,
        }

        try {
            const response = await fetch(`${URL_BASE}/register`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevoUsuario),
                }
            )

            const fetchTokenUser = await response.json();

            if(fetchTokenUser.msg){
                dispatch(failure(fetchTokenUser.msg))
                return
            }

            localStorage.setItem('tokenUser', fetchTokenUser.token);

            const res = await fetch(`${URL_BASE}/validateToken`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'x-token': fetchTokenUser.token
                },
            });

            const data = await res.json();
            dispatch(success({usuario: data, redirect: `/`}));

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}

export function validateToken () {
    return async (dispatch) => {

        dispatch(loading())

        try {
            const token = localStorage.getItem('tokenUser')
            const res = await fetch(`${URL_BASE}/validateToken`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'x-token': token
                },
            })

            const data = await res.json();
            dispatch(success({usuario: data, redirect: ``}));

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}

export function updateUser(id: string, correo : string, contrasena : string, nombre : string, celular : string, codigoPublicacionPostales : string){
    return async dispatch => {
        dispatch(loading())
        const actualizarUsuario = {
            id,
            nombre,
            correo,
            contrasena,
            celular,
            codigoPublicacionPostales,
            rol: "usuario"
        }
        try {
            await fetch(`${URL_BASE}/actualizarUsuario`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(actualizarUsuario)
                }
            )
            dispatch(success({usuario: actualizarUsuario, redirect: `/`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteUser(id: string) {
    return async dispatch => {
        dispatch(loading())
        try {
            await fetch(`${URL_BASE}/eliminarUsuario/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            dispatch(success({redirect: ``}));
        } catch (error) {
            dispatch(failure())
        }
    }
}