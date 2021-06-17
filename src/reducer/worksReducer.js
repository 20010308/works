import {WORKS_TYPE} from "../type/worksType";

const initialState = {
    open: false,
};

export const worksReducer = (state = initialState, action) => {
    if (action.type === WORKS_TYPE) {
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};