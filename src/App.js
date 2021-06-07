import React from "react";
import './App.css';

import Counter from './components/Counter';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      count2: 0
    }
  }  

  decrementCount = () => {
    if (this.state.count !== 0 ) {
    this.setState ({count:this.state.count -1})
    }
  }

  incrementCount = () => {
    this.setState ({count:this.state.count +1}) 
  }
  
  render() {
    return (
      <div className="principal">
        <div className="counter">
          <h1>Counter</h1>
      </div>
        <div className="button">
          <Counter value={this.state.count} moins={this.decrementCount} plus={this.incrementCount} />
          <Counter value={this.state.count} moins={this.decrementCount} plus={this.incrementCount} /> 
        </div>
      </div>
    )
  }
} 

export default App;
