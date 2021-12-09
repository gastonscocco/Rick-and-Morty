import { SEARCH_TARGET, SELECTED_PAGE } from "../../constans"


const initialState = {
    page: 1,
}

export default function generalReducer(state=initialState, {type,payload}){
    switch(type){
        case SELECTED_PAGE:
            return {
                ...state,
                page: payload
            }
        case SEARCH_TARGET:
            return {
                ...state,
                page: 1
            }
        default: 
            return {...state}
    }
}