import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../constans";


export function addCharacter(character){
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export function removeCharacter(character){
    return {
        type: REMOVE_FAVORITE,
        payload: character
    }
}