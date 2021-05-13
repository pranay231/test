import {Incrementf,Decrementf} from '../actions/Type'
const InitialState={
    count:5
}

const Reducer2=(state=InitialState,action)=>{
    switch(action.type){
        case Incrementf : return{
            count:state.count+5
        }
        case Decrementf : return{
            count:state.count-5
        }
        default: return state

    }

}
export default Reducer2;