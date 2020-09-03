import React, {Component} from 'react'

const Carousel = props => {
    return (
      <div>
        <h1>{props.arr[props.current_index]}</h1>
        <button onClick={props.nextElement}>Next</button>
        <button onClick={props.prevElement}>Prev</button>
        <h3>Timer</h3>
        <div>{props.seconds}</div>
      </div>
    )
}

export default Carousel
