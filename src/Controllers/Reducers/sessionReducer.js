
import { GET_CHARACTER, RESTORE_SEARCH, SEARCH_TARGET, USER_JOINED, USER_LOGOUT } from "../../constans"


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
        case SEARCH_TARGET:
            let newList= state.characters.originalList?.filter(item=>item.name.toLowerCase().includes(payload.name.toLowerCase()))
            return {
                ...state,
                characters: {
                        ...state.characters,
                        filteredList: newList
                    }
            }
        case RESTORE_SEARCH:
            return {
                ...state,
                characters: {
                        ...state.characters,
                        filteredList: state.characters.originalList
                    }
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
