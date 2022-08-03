import * as actionsUser from '../actions/userActions';
import * as actionsPublication from '../actions/publicationActions';
import * as actionsComment from '../actions/commentActions';
import * as actionsSesion from '../actions/sesionActions';
import { LOGIN, LOGOUT, LOADING, LOADED_SUCCESS, LOADED_FAILURE } from '../actions/userActions';

export type dataState = {
    loading: boolean,
    hasErrors: boolean,
    usuarios: Array<object>,
    usuario: object,
    search: Array<object>,
    publicaciones: Array<object>,
    publicacion: object,
    comentarios: Array<object>,
    comentario: object,
    sesiones: Array<object>,
    sesionesCiclo: Array<object>,
    sesion: object,
    redirect: string,
    message: string,
}

export const initialState : dataState = {

    loading: false,
    hasErrors: false,
    usuarios: [],
    usuario: {},
    search: [],
    publicaciones: [],
    publicacion: {},
    comentarios: [],
    comentario: {},
    sesiones: [],
    sesionesCiclo: [],
    sesion: {},
    redirect: "",
    message: "",

}

export default function rootReducer(state : dataState = initialState, actions) {
    switch (actions.type) {

        case LOADING:
            return { ...state, loading: true };

        case LOADED_SUCCESS:
            return { ...state, ...actions.payload, loading: false, hasErrors: false, message: "" };

        case LOADED_FAILURE:
            console.log('Action Type FAILURE: ', actions.type);
            return { ...state, message: actions.payload, loading: false, hasErrors: true }

        case LOGIN:
            const payload = actions.payload;
            return { ...state, usuario: payload, usuarios: [] };

        case LOGOUT:
            localStorage.removeItem("tokenUser");
            localStorage.setItem("logOutUser", "true");
            location.reload();
            return initialState;

        default:
            return state;
    }
}