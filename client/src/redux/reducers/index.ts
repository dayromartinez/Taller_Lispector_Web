import * as actions from '../actions/userActions';
import { LOGIN, LOGOUT, LOADING, LOADED_SUCCESS, LOADED_FAILURE } from '../actions/userActions';

export type dataState = {
    loading: boolean,
    hasErrors: boolean,
    usuarios: Array<object>,
    usuario: object,
    search: Array<object>,
    publicaciones: Array<object>,
    publicacion: object,
    redirect: string,
}

export const initialState : dataState = {

    loading: true,
    hasErrors: false,
    usuarios: [],
    usuario: {},
    search: [],
    publicaciones: [],
    publicacion: {},
    redirect: "",

}

export default function rootReducer(state : dataState = initialState, actions) {
    switch (actions.type) {

        case LOADING:
            return { ...state, loading: true };

        case LOADED_SUCCESS:
            return { ...state, ...actions.payload, loading: false, hasErrors: false };

        case LOADED_FAILURE:
            return { ...state, loading: false, hasErrors: true }

        case LOGIN:
            const payload = actions.payload;
            return { ...state, usuario: payload, usuarios: [] };

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}