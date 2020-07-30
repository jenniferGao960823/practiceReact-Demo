import React,{Component} from 'react'

class NewForm extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.input = React.createRef()
    this.fileInput = React.createRef()
  }

  handleSubmit(event){
    alert('this is formData--'+this.input.current.value)
    console.log(`Selected file= ${this.fileInput.current.files[0].name}`);
    event.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input defaultValue='like:amy' type="text" ref={this.input} />
        </label>
        <label>
          上传文件：
          <input type="file" ref={this.fileInput} />
        </label>
        <button>submit</button>

      </form>
    )
  }
}

export default NewForm