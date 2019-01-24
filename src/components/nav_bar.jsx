import React from 'react'

const NavBar = props => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <p className='navbar-brand' href='#'>
          Rock Paper Scissors
          <span style={props.onStyle} className={props.onGetBadge}>
            {props.onFormat}
          </span>
          <span className='badge badge-pill m-3 badge-secondary'> Remaining Lives : {props.life}</span>
          <span className='badge badge-pill badge-secondary'> Computer Chose : {props.compChoice}</span>
          <span className='badge badge-pill badge-secondary m-3'> You Chose : {props.choice}</span>
          <span className='badge badge-pill badge-secondary m-3'> {props.outCome}</span>
          <button onClick={props.onRestart} className='btn btn-primary m-2'>
            Restart Game
          </button>
        </p>
      </nav>
    </div>
  )
}

export default NavBar
