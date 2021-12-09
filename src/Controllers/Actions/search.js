import { RESTORE_SEARCH, SEARCH_TARGET } from "../../constans";


export function searchCharacter(target){
    return {
        type: SEARCH_TARGET,
        payload: target
    }
}

export function restoreSearch(){
    return {
        type: RESTORE_SEARCH
    }
}