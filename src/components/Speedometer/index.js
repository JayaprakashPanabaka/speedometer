// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  render() {
    const {speed} = this.state

    // onAccelerate = () => {
    //   this.setState(prevState => ({speed: prevState.speed + 10}))
    // }
    // onBrake = () => {
    //   this.setState(prevState => ({speed: prevState.speed - 10}))
    // }

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          //   style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12) "
        />
        <div className="main-container">
          <h1>Speed is {speed}mph</h1>
          <p className="para">Min limit is 0mph, Max limit is 200mph</p>
          <div className="btn-container">
            <button onClick={this.onAccelerate} className="accelerate">
              Accelerate
            </button>
            <button onClick={this.onBrake} className="brakes">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
