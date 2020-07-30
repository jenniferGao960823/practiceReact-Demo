import React from 'react'

function Toggle(props){

  return (
    <div>
      <button style={props.status?{color:'red'}:{color:'green'}} onClick={props.handleClick}>
        {!props.status?'ON':'OFF'}
      </button>
    </div>
  )
}

export default Toggle;