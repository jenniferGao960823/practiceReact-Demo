import React,{Component} from 'react'
import TemperatureInput from './TemperatureInput'

class Calculate extends Component{
  constructor(props){
    super(props);
    this.state={
      temperature:'',
      scale:'c'
    }
    this.handleChangeCelsius = this.handleChangeCelsius.bind(this)
    this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this)
  }
  handleChangeCelsius(temperature){
    this.setState({
      scale:'c',
      temperature:temperature
    })
  }
  handleChangeFahrenheit(temperature){
    this.setState({
      scale:'f',
      temperature:temperature
    })
  }
  render(){
    const temperature = this.state.temperature
    const scale = this.state.scale
    const celsius = scale === 'f'?tryConvert(temperature,toCelsius):temperature
    const fahrenheit = scale === 'c'?tryConvert(temperature,toFahrenheit):temperature
    return (
      <div>
        <TemperatureInput 
          scale={scale}
          temperature={celsius}
          onTemperatureChange={this.handleChangeCelsius}
        />
        <TemperatureInput 
          scale={scale}
          temperature={fahrenheit}
          onTemperatureChange={this.handleChangeFahrenheit}
        />

        <BoillingVerdict 
          celsius={parseFloat(celsius)}
        />
      </div>
    )
  }
}

export default Calculate

function BoillingVerdict(props){
  if(props.celsius >= 100){
    return <p>The water would boil</p>
  }else{
    return <p>The water would not boil</p>
  }
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature,convert){
  const input = parseFloat(temperature)
  if(Number.isNaN(input)){
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000;     //取整output
  return rounded.toString()
}