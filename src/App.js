import React from "react";
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }  

  decrementCount = () => {
    this.setState ({count:this.setState -1})
  }

  incrementCount = () => {
    this.setState ({count:this.setState +1}) 
  }
  
  render() {
    return (
      <div className="Counter">
        <h1>"Counter"</h1>
        <h2>{this.state.count}</h2>
        <button className="plus" onClick={this.incrementCount}>plus</button>
        <button className="minus" onClick={this.decrementCount}>minus</button>
      </div>
    )
  }
} 

export default App;
