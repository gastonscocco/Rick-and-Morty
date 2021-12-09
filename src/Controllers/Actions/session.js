
import { getCharacters } from '../../ApiReq/getCharacters';
import {GET_CHARACTER, USER_JOINED, USER_LOGOUT, } from '../../constans';



export function getAllCharacters(){
    return async function(dispatch){
        const result = await getCharacters()
        return dispatch({
            type: GET_CHARACTER,
            payload: result
        });
    };
}

export function Joined(){
    return {
        type: USER_JOINED
    }
}

export function Logout(){
    return {
        type: USER_LOGOUT
    }
}