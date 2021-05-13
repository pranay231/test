import {Increment,Decrement} from '../actions/Type'
const InitialState={
    number:10
}

const Reducer=(state=InitialState,action)=>{
    switch(action.type){
        case Increment:return{
            number:state.number+1
        }
        case Decrement:return{
            number:state.number-1
        }
        default:return state; 
    }
    

}

export default Reducer;