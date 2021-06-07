import React from "react"

class Counter extends React.Component {
  render () {
    return (
    <div className="button">
      <button className="moins" onClick={this.props.moins}>-</button>
      <h2>{this.props.value}</h2>
      <button className="plus" onClick={this.props.plus}>+</button>
  </div>
    )
  }
} 

export default Counter