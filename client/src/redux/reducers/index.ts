import * as actions from '../actions/userActions';

export const initialState = {

    loading: true,
    hasErrors: false,
    usuarios: [],
    usuario: {},
    search: [],
    publicaciones: [],
    publicacion: {},
    redirect: null,

}

export default function rootReducer(state = initialState, actions) {

    switch (actions.type) {

        case actions.LOADING:
            return { ...state, loading: true };

        case actions.LOADED_SUCCESS:
            return { ...state, ...actions.payload, loading: false, hasErrors: false };

        case actions.LOADED_FAILURE:
            return { ...state, loading: false, hasErrors: true }

        case actions.LOGIN:
            const payload = actions.payload;
            return { ...state, usuario: payload };

        case actions.LOGOUT:
            return initialState;

        default:
            return state;
    }
}