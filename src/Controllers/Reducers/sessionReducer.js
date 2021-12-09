
import { GET_CHARACTER, USER_JOINED, USER_LOGOUT } from "../../constans"


const initialState = {
    characters:{
            originalList: [],
            filteredList: [],
            favList: [],
    },
    userState: false,
}

export default function sessionReducer(state=initialState, {type,payload}){
    switch(type){
        case GET_CHARACTER:
            return {
                ...state,
                characters: {
                        ...state.characters,
                        originalList: payload
                    }
            }
        case USER_JOINED:
            return {
                ...state,
                userState: true
            }
        case USER_LOGOUT:
            return {
                ...state,
                userState: false
            }
        
        case 'persist/REHYDRATE':
            if(payload){
                return {
                    ...state,
                    characters: payload.sessionReducer.characters || state.characters,
                    userState: payload.sessionReducer.userState || state.userState
                }
            }
            return {
                ...state
            }
            
        default: 
            return {...state}
    }
}
