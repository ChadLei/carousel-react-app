// Purpose:
// - displays content of array every few seconds
// - learn how to use states & props
// - learn how to use intervals and function calls

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      arr: [0,1,2,3],
      current_index: 0,
      delay: 5,
      seconds: 5,
      interval: ''
    };
  }

  // Function is called as soon as component is mounted
  componentDidMount = () => {
    this.setState({interval: setInterval(this.timer, 1000)});
  }

  // Keeps track of when to move onto the next element in array
  timer = () => {
    if (this.state.seconds == 0) {
      this.nextElement()
      this.setState({seconds: 5})
    }
    else {
      this.setState({seconds: this.state.seconds - 1})
    }
  }

  // Function for next button that allows you to skip to the next element
  nextElement = event => {
    // event.preventDefault();
    var curr_index = this.state.current_index
    if (curr_index + 1 >= this.state.arr.length) {
      curr_index = -1;
    }
    this.setState({current_index: curr_index + 1})
  }

  // Function for prev button that allows you to go back to previous element
  prevElement = event => {
    event.preventDefault();
    var curr_index = this.state.current_index
    if (curr_index - 1 <= -1) {
      curr_index = this.state.arr.length;
    }
    this.setState({current_index: curr_index - 1})
  }

  render(){
    return (
      <div>
        <Carousel
          delay={this.state.delay}
          seconds={this.state.seconds}
          nextElement={this.nextElement}
          prevElement={this.prevElement}
          arr={this.state.arr}
          current_index={this.state.current_index}/>
      </div>
    );
  }

}

export default App;
