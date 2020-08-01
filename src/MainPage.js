import React,{Component} from 'react'
import './main.css'
import {FancyBorder,Slider,Chat,SplitPane} from './common'

class MainPage extends Component{

  render(){
    return (
      <div className="mainPage">
        <FancyBorder classname="contentBox">
          <h1 className="Dialog-title">
            Welcome
          </h1>
          <p className="Dialog-message">
            Thank you for visiting out spacecraft!
          </p>
        </FancyBorder>
        <SplitPane
          left={
            <Slider />
          }
          right={
            <Chat />
          }
        />
      </div>
    )
  }
}

export default MainPage