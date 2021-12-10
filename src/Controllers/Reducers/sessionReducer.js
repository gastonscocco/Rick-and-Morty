
import { ADD_FAVORITE, GET_CHARACTER, REMOVE_FAVORITE, RESTORE_SEARCH, SEARCH_TARGET, USER_JOINED, USER_LOGOUT } from "../../constans"


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
            let result={};
            let newList=[];

            if(payload.name)newList = state.characters.originalList?.filter(item=>item.name.toLowerCase().includes(payload.name.toLowerCase()));
            if(!payload.name)newList = state.characters.originalList;

            if(payload.orderBy==='None'){
                
                result={
                    ...state,
                    characters: {
                            ...state.characters,
                            filteredList: newList
                        }
                }
            }
            if(payload.orderBy!=='None'){
                switch (payload.orderBy) {
                    case 'Name':
                        newList = state.characters.originalList?.filter(item=>item.name.toLowerCase().includes(payload.name.toLowerCase()));
                        newList.sort((a,b)=>{
                            if(a.name>b.name)return 1;
                            if(a.name<b.name)return -1;
                            return 0
                        })
                        result={
                            ...state,
                            characters: {
                                    ...state.characters,
                                    filteredList: newList
                                }
                        }
                        break;

                    case 'Episodes':
                        newList = state.characters.originalList?.filter(item=>item.name.toLowerCase().includes(payload.name.toLowerCase()));
                        newList.sort((a,b)=>{
                            if(a.episodes<b.episodes)return 1;
                            if(a.episodes>b.episodes)return -1;
                            return 0
                        })
                        result={
                            ...state,
                            characters: {
                                    ...state.characters,
                                    filteredList: newList
                                }
                        }
                        break;

                    case 'Status':
                        newList = state.characters.originalList?.filter(item=>item.name.toLowerCase().includes(payload.name.toLowerCase()));
                        newList.sort((a,b)=>{
                            if(a.status>b.status)return 1;
                            if(a.status<b.status)return -1;
                            return 0
                        })
                        result={
                            ...state,
                            characters: {
                                    ...state.characters,
                                    filteredList: newList
                                }
                        }
                        break;
                    
                    case 'Species':
                        newList = state.characters.originalList?.filter(item=>item.name.toLowerCase().includes(payload.name.toLowerCase()));
                        newList.sort((a,b)=>{
                            if(a.species>b.species)return 1;
                            if(a.species<b.species)return -1;
                            return 0
                        })
                        result={
                            ...state,
                            characters: {
                                    ...state.characters,
                                    filteredList: newList
                                }
                        }
                        break;

                    default:
                        break;
                }
            }
            return result;
        
        case RESTORE_SEARCH:
            return {
                ...state,
                characters: {
                        ...state.characters,
                        filteredList: state.characters.originalList
                    }
            }
        
        case ADD_FAVORITE:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    favList: [...state.characters.favList, payload]
                }
            }

        case REMOVE_FAVORITE:
            let newFavList=state.characters.favList?.filter(elem=>elem.id!==payload.id)
            return {
                ...state,
                characters:{
                    ...state.characters,
                    favList: newFavList
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
