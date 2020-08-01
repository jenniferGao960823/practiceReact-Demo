import React from 'react'

function FancyBorder(props){
  return (
    <div className={props.classname}>
        {props.children}
    </div>
  )
}

function Slider(props){
  return (
    <div>
      <p>{'<Contacts />'} 和 {'<Chat />'} 之类的 React 元素本质就是对象（object），</p>
      <p>所以你可以把它们当作 props，</p>
      <p>像其他数据一样传递。</p>
      <p>这种方法可能使你想起别的库中“槽”（slot）的概念，</p>
      <p>但在 React 中没有“槽”这一概念的限制，</p>
      <p>你可以将任何东西作为 props 进行传递。</p>
    </div>
  )
}

function Chat(props){
  return (
    <div>
      This is a chatting box
    </div>
  )
}

function SplitPane(props){
  return (
    <div className="SplitPane">
      <div className="slider">
        {props.left}
      </div>
      <div className="floator">
        {props.right}
      </div>
    </div>
  )
}

export {FancyBorder,Slider,Chat,SplitPane}