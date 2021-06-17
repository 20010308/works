
import {WORKS_TYPE} from "../type/worksType";

export function updateState(data){
    return{
        type: WORKS_TYPE,
        payload: data,
    }
}