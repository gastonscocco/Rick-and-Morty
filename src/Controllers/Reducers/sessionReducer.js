

const initialState = {
    //esta es la estructura final del store, por ahora queda así para que no rompa todo
    originalList: [],
    filteredList: [],
    favList: [],
    //status: {},
}

export default function sessionReducer(state=initialState, {type,payload}){
    switch(type){
        
        default: 
        return {...state}
    }
}