import React from 'react'
function Timer(props){

    return(
      <div>
        <h1>This is A clock</h1>
        <h2>It is {props.data.toLocaleTimeString()}</h2>
      </div>
    );
  
}



export default Timer