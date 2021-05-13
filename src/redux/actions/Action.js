import {Increment,Decrement,Incrementf,Decrementf} from './Type';

export const Addcount=()=>{
    return{
        type:Increment
    }
}

export const Subcount=()=>{
    return{
        type:Decrement
    }
}
export const Addcountf=()=>{
    return{
        type:Incrementf
    }
}

export const Subcountf=()=>{
    return{
        type:Decrementf
    }
}