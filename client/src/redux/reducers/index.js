import * as actions from '../actions/index.js';

export const initialState = {

    loading: true,
    hasErrors: false,
    questions: [],
    question: {},
    search: [],
    redirect: null,
    name: null,
    email: null,
    img: null,
    uid: null

}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        

        default:
            return state;
    }
}