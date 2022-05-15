export const LOGIN : string = 'LOGIN';
export const LOGOUT : string = 'LOGOUT';
export const LOADING : string = 'LOADING';
export const LOADED_SUCCESS : string = 'LOADED_SUCCESS';
export const LOADED_FAILURE : string = 'LOADED_FAILURE';
const URL_BASE : string = 'http://localhost:8080';

export type usuarioData = {
    nombre: string, 
    correo: string,
    contrasena: string, 
    celular: string,
}

export const logout = () => ({
    type: LOGOUT
});

export const loading = () => ({ type: LOADING });

export const success = (payload) => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE })

//Acciones autenticacion
export const login = (id : string, nombre : string, correo : string, celular: string, rol: string, codigoPublicacionPostales: string) => ({ 
    type: LOGIN, payload: {id, nombre, correo, celular, rol, codigoPublicacionPostales} 
});

// Con Fetch
export const getAllUsers = () => {
    return async dispatch => {
        dispatch(loading())
        try {
            const auth = await fetch(`${URL_BASE}/getAllUsers`,{
                method: 'GET',
                mode: 'cors',
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                },
            })
            const data = await auth.json()
            dispatch(success({ usuarios: data, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export function createUser(datosUsuario : usuarioData) {
    return async dispatch => {
        dispatch(loading())
        const nuevoUsuario = {
            id: "",
            nombre: datosUsuario.nombre,
            correo: datosUsuario.correo,
            contrasena: datosUsuario.contrasena,
            celular: datosUsuario.celular,
            codigoPublicacionPostales: "",
            rol: "usuario",
        }
        console.log("Nuevo usuario: ", nuevoUsuario)
        try {
            await fetch(`${URL_BASE}/crearUsuario`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: JSON.stringify(nuevoUsuario),
                }
            )
            dispatch(success({usuario: nuevoUsuario, redirect: `/`}));
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
            dispatch(success({redirect: `/`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}