import React, { Component } from 'react'

export default class Main extends Component {
  render () {
    return (
      <div>
        You have lives remaining
        <div>Try Charms: {this.props.scores.tryCharms}</div>
        <div>Gold Coins {this.props.scores.goldCoins}</div>
        <div>Jade Stones {this.props.scores.jadeStones}</div>
      </div>
    )
  }

  // }
  // render () {
  //   const { children, onIncrement, counter, onDelete } = this.props
  //   return (
  //     <div>
  //       {children}
  // <span style={this.styles} className={this.getBadgeClasses()}>
  //   {this.formatCount()}
  // </span>
  //       <button className='btn btn-secondary' onClick={() => onIncrement(counter)}>
  //         Increament
  //       </button>
  //       <button className='btn btn-danger m-2 btn-sm' onClick={() => onDelete(counter.id)}>
  //         Delete
  //       </button>
  //     </div>
  //   )
  // }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount () {
    const { value: count } = this.props.counter
    return count === 0 ? 'Zero' : count
  }
}
