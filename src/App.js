import React from 'react';
import './App.css';
// import Pagination from './component/Pagination'
import {useSelector,useDispatch} from 'react-redux';
import {Addcount,Subcount,Addcountf,Subcountf} from './redux/actions/Action'


function App() {
  const dispatch=useDispatch();
  const number = useSelector(state=>state.number1.number)
  const count = useSelector(state=>state.count1.count)
  
  return (
    <div className="App">
     
      <h1>number:{number}</h1>
      <button onClick={()=>dispatch(Addcount())}>plus</button>
      <button onClick={()=>dispatch(Subcount())}>min</button>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(Addcountf())}>plus</button>
      <button onClick={()=>dispatch(Subcountf())}>min</button>


     
    </div>
  );
}

export default App;
