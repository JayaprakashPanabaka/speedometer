// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickApplyBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <div className="main-container">
          <h1>Speed is {speed}mph</h1>
          <p className="para">Min limit is 0mph, Max limit is 200mph</p>
          <div className="btn-container">
            <button
              type="button"
              onClick={this.onClickAccelerateButton}
              className="accelerate"
            >
              Accelerate
            </button>
            <button
              type="button"
              onClick={this.onClickApplyBrakeButton}
              className="brakes"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
