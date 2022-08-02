import { loading, success, failure, getUser } from "./userActions";
export const URL_BASE : string = 'https://taller-lispector-backend.herokuapp.com/sesions';

export type sesionData = {
    titulo: string,
    descripcion: string,
    fecha: string,
    hora: string,
    direccionSesion: string,
    gestores: string,
    ciclo: string,
    imagenSesion: string
}

export const getAllSesions = () => {
    return async dispatch => {
        dispatch(loading())
        try {
            const sesions = await fetch(`${URL_BASE}/`)
            const data = await sesions.json()
            dispatch(success({ sesiones: data, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export const getSesionesCiclo = (ciclo : string) => {
    return async dispatch => {
        dispatch(loading())
        try {
            const sesions = await fetch(`${URL_BASE}/ciclo/${ciclo}`)
            const data = await sesions.json()
            dispatch(success({ sesionesCiclo: data, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export const getSesion = (id : string) => {
    return async dispatch => {
        dispatch(loading())
        try {
            const sesion = await fetch(`${URL_BASE}/getSesion/${id}`)
            const data = await sesion.json()
            dispatch(success({ sesion: data, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export function createSesion(datosSesion : sesionData) {
    return async dispatch => {

        dispatch(loading())
        const nuevaSesion = {
            titulo: datosSesion.titulo,
            descripcion: datosSesion.descripcion,
            fecha: datosSesion.fecha,
            hora: datosSesion.hora,
            direccionSesion: datosSesion.direccionSesion,
            gestores: datosSesion.gestores,
            ciclo: datosSesion.ciclo,
            imagenSesion: ""
        }

        try {
            const response = await fetch(`${URL_BASE}/createSesion`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevaSesion),
                }
            )

            const data = await response.json();
            if(data['sesion'] !== undefined){
                dispatch(getAllSesions());
                dispatch(getSesionesCiclo(datosSesion.ciclo));
                dispatch(success({ sesion: data, redirect: ``}));
            }else{
                console.log('No se ha podido crear la sesión');
                dispatch(failure('No se ha podido crear la sesión'))
            }

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}

export function updateSesion(id: string, titulo : string, descripcion : string, fecha : string, hora : string, direccionSesion : string, gestores : string, ciclo : string, imagenSesion : string) {
    return async dispatch => {
        dispatch(loading())
        const actualizarSesion = {
            _id: id,
            titulo: titulo, 
            descripcion: descripcion,
            fecha: fecha,
            hora: hora,
            direccionSesion: direccionSesion,
            gestores: gestores,
            ciclo: ciclo,
            imagenSesion: imagenSesion
        }
        try {
            const response = await fetch(`${URL_BASE}/updateSesion`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(actualizarSesion),
                }
            )

            const data = await response.json();
            if(data['sesionActualizada'] !== undefined){
                dispatch(getAllSesions());
                dispatch(getSesionesCiclo(ciclo));
                dispatch(success({ sesion: data, redirect: ``}));
            }else{
                console.log('No se ha podido actualizar la sesión');
                dispatch(failure('No se ha podido actualizar la sesión'))
            }

        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteSesion(id: string) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/deleteSesion/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const data = await response.json();
            if(data === "La sesión ha sido eliminada"){
                console.log("Se ha hecho bien la eliminación de la sesión")
                dispatch(getAllSesions());
                dispatch(success({redirect: ``}));
                console.log('Funcionó bien esta mondá de eliminar sesiones');
            } else {
                dispatch(failure('Algo ha salido mal eliminando la sesión'))
            }

        } catch (error) {
            dispatch(failure())
        }
    }
}

