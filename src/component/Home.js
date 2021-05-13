import React from 'react';

const Home=(props)=>{
 const {namee,age}=props;
    return(
        <div>
            <h1>My name is {namee} and age is{age}</h1>
            <i className="fa fa-book"></i>
        </div> 
    )
}
export default Home;