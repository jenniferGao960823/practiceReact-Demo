import React from 'react'
import Timer from './timer'
import Toggle from './toggle'
import Login from './Login'
import List from './List'
import Form from './Form'
import NewForm from './NewForm'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      status:true,
      data:new Date()
    }
    //为了在回调中使用‘this’，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this)
  }
  
  tick(){
    this.clock = setInterval(()=>{
      this.setState({
        data:new Date()
      })
    },1000)
  }

  destoryTick(){
    clearInterval(this.clock)
  }

  componentDidMount(){
    this.tick()
  }

  componentWillUnmount(){
    this.destoryTick()
  }
  
  handleClick=()=>{
    this.setState(state=>({
      status:!state.status
    }))
    if(this.state.status){
      this.destoryTick()
    }else{
      this.tick()
    }
  }

  render(){
    const numbers = [1,2,3,4,5];
    return(
      <div>
        <Login />
        <Timer 
        data={this.state.data}
        />
        <NewForm />
        <Toggle 
        status={this.state.status}
        handleClick={this.handleClick}/>
        <List number={numbers} />
        <div style={{height:'200px'}}></div>
        <Form name='jimmy'/>
      </div>
    );
  }
  
}

export default App