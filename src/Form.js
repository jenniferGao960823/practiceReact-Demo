import React,{Component} from 'react'

class Form extends Component{
  constructor(props) {
    super(props);
    this.state={
      name:'',
      info:'',
      hobby:[]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  changeInput(event){
    this.setState({name:event.target.value})
  }

  handleSubmit(event){
    console.log('this.state',this.state);
    event.preventDefault();
  }

  changeTextarea(event){
    this.setState({info:event.target.value})
  }

  changeSelect(event){
    let arr = this.state.hobby
    let flag = true
    arr.map(item=>{
      if(item === event.target.value){
        flag = false
      }
      return false
    })
    if(flag){
      this.setState({hobby:[...arr,event.target.value]})
    }else{
      this.setState({hobby:[...arr]})
    }
  }

  handleChange(event){
    const target = event.target
    const value = target.value
    const name = target.name
    if(name === 'hobby'){
      let arr = this.state.hobby
      let flag = true
      arr.map(item=>{
        if(item === value){
          flag = false
        }
        return false
      })
      if(flag){
        this.setState({[name]:[...arr,value]})
      }else{
        this.setState({[name]:[...arr]})
      }
    }else{
      this.setState({
        [name]:value
      })
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            名字：
            <input name="name" value={this.state.name} onChange={this.handleChange}/>
          </label>
          <div style={{height:'15px'}}></div>
          <label>
            爱好：
            <select name="hobby" multiple={true} value={this.state.hobby} onChange={this.handleChange}>
              <option value="basketball">篮球</option>
              <option value="football">足球</option>
              <option value="baseball">网球</option>
              <option value="table tennis">乒乓球</option>
            </select>
          </label>
          <div style={{height:'15px'}}></div>
          <label>
            个人信息：
          <textarea name="info" value={this.state.info} onChange={this.handleChange} />
          </label>
          <div style={{height:'15px'}}></div>
          <button>submit</button>
        </form>
      </div>
    )
  }

}

export default Form