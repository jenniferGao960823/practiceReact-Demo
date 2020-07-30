import React from 'react'

function ListItem(props) {  
return <li>{props.value}</li>
}

function List(props) {  
  const number = props.number
  return (
    <ul>{
      number.map((num)=>
        <ListItem key={num.toString()} value={num}/>
      )
    }</ul>
  )
}
export default List