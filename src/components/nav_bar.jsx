import React from 'react'

const NavBar = props => {
  const { life, compChoice, choice, outCome, onGetBadge, onStyle, onFormat } = props
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <p className='navbar-brand' href='#'>
          Rock Paper Scissors
          <span style={onStyle} className={onGetBadge}>
            {onFormat}
          </span>
          <span className='badge badge-pill m-3 badge-secondary'> Remaining Lives : {life}</span>
          <span className='badge badge-pill badge-secondary'> Computer Chose : {compChoice}</span>
          <span className='badge badge-pill badge-secondary m-3'> You Chose : {choice}</span>
          <span className='badge badge-pill badge-secondary m-3'> {outCome}</span>
          <button onClick={props.onRestart} className='btn btn-primary m-2'>
            Restart Game
          </button>
        </p>
      </nav>
    </div>
  )
}

export default NavBar
