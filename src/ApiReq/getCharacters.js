
import axios from 'axios';
import {BASIC_URL} from '../constans';
import { charFormater } from '../Tools/charFormater';

async function getNextPage(URL){
    const response = await axios.get(`${URL}`)
    return response.data.info.next ? [...response.data.results , ...await getNextPage(response.data.info.next)] 
    : [...response.data.results] 
}

export async function getCharacters() {
    try{
        let list=[];
        const response = await axios.get(`${BASIC_URL}`);
            if(!response.data.info.next){
                list = [...response.data.results];
            }
            if(response.data.info.next){
                list = [...response.data.results, ...await getNextPage(response.data.info.next)];
            }
        return list.map(item => charFormater(item));
    }catch(e){
        console.log(e);
    }
}