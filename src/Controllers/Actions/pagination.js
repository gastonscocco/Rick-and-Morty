
import { SELECTED_PAGE,  } from '../../constans';

export function selectPag(page){
    return {
        type: SELECTED_PAGE,
        payload: page
    }
}