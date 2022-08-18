import { loading, success, failure } from "./userActions";
export const URL_BASE : string = 'https://taller-lispector-backend.herokuapp.com/cicles';
import { ciclesData } from "../../interfaces/ciclesData";


export const getAllCicles = () => {
    return async dispatch => {
        dispatch(loading())
        try {
            const cicles = await fetch(`${URL_BASE}/`)
            const data = await cicles.json()
            dispatch(success({ ciclos: data.ciclos, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export const getCicle = (id : string) => {
    return async dispatch => {
        dispatch(loading())
        try {
            const cicle = await fetch(`${URL_BASE}/getCiclo/${id}`)
            const data = await cicle.json()
            dispatch(success({ ciclo: data.ciclo, redirect: null}))
        } catch (error) {
            dispatch(failure())
        }
    }
};

export function createCicle(datosCiclo : ciclesData) {
    return async dispatch => {

        dispatch(loading())
        const nuevoCiclo = {
            "titulo": datosCiclo.titulo,
            "descripcion": datosCiclo.descripcion,
            "sesiones": [],
        }

        try {
            const response = await fetch(`${URL_BASE}/createCiclo`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevoCiclo),
                }
            )

            const data = await response.json();
            if(data['ciclo'] !== undefined){
                dispatch(getAllCicles());
                dispatch(success({ ciclo: data.ciclo, redirect: ``}));
            }else{
                dispatch(failure('No se ha podido crear el ciclo'))
            }

        } catch (error) {
            console.log(error.message);
            dispatch(failure())
        }
    }
}

export function deleteCicle(id: string) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/deleteCiclo/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const data = await response.json();
            if(data.msg === "El ciclo y sus sesiones han sido eliminados"){
                dispatch(getAllCicles());
                dispatch(success({redirect: ``}));
            } else {
                dispatch(failure('Algo ha salido mal eliminando ciclos'))
            }

        } catch (error) {
            dispatch(failure())
        }
    }
}