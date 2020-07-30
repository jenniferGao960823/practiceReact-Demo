import React,{Component} from 'react'

function UserGreeting(props) {
  return <h1>Welcome Back!</h1>
}

function GuestGreeting(props) {  
  return <h1>Nice to meet you,Please SignUp first.</h1>
}

function LogoutButton(props) {  
  return <button className="logout" onClick={props.handleLog}>Logout</button>
}

function LoginButton(props) {  
  return <button className="login" onClick={props.handleLog}>Login</button>
}

function Greeting(props) {  
  const isLogin = props.isLogin
  if(isLogin){
    return <UserGreeting />
  }else{
    return <GuestGreeting />
  }
}
class Login extends Component{  
  constructor(props){
    super(props);
    this.state={
      isLogin : true
    }
  }

  handleLog=()=>{
    this.setState(state=>({
      isLogin:!state.isLogin
    }))
  }

  render(){
    const isLogin = this.state.isLogin
    return (
      <div className="loginWraper">
        <Greeting isLogin={this.state.isLogin} />
        {isLogin
          ?<LogoutButton handleLog={this.handleLog}/>
          :<LoginButton handleLog={this.handleLog}/>
        }
      </div>
    )
  }
}

export default Login