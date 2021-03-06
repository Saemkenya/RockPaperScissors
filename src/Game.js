import React, { Component, Fragment } from 'react'
import './App.css'
import NavBar from './components/nav_bar'
import Main from './components/index'

class Game extends Component {
  state = {
    tryCharms: 0,
    goldCoins: 0,
    jadeStones: 0,
    lives: 10,
    choice: 'No Choice',
    compChoice: 'No Choice',
    outCome: 'Start Playing!',
    choices: [{ id: 1, value: 'ROCK' }, { id: 2, value: 'PAPER' }, { id: 3, value: 'SCISSORS' }]
  }

  constructor (props) {
    super(props)
    this.rock = 'ROCK'
    this.paper = 'PAPER'
    this.scissors = 'SCISSORS'
  }

  componentDidMount () {
    console.log('Application mounted, make ajax calls now!')
  }

  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  }
  randCompChoice = () => {
    let rand = Math.random()
    if (rand <= 0.3) {
      return this.rock
    }
    if (rand <= 0.6 && rand > 0.3) {
      return this.paper
    }
    if (rand >= 0.6) {
      return this.scissors
    }
  }
  hasLife = () => {
    if (this.state.lives <= 0) {
      this.gameOver()
    }
  }
  handleRockChoice = () => {
    this.hasLife()
    let currentState = this.state
    currentState.choice = this.rock
    currentState.compChoice = this.randCompChoice()
    this.setState({ currentState })
    this.handlePlay(this.state.compChoice, this.state.choice)
  }

  handlePaperChoice = () => {
    this.hasLife()
    let currentState = this.state
    currentState.choice = this.paper
    currentState.compChoice = this.randCompChoice()
    this.setState({ currentState })
    this.handlePlay(this.state.compChoice, this.state.choice)
  }

  handleScissorsChoice = () => {
    this.hasLife()
    let currentState = this.state
    currentState.choice = this.scissors
    currentState.compChoice = this.randCompChoice()
    this.setState({ currentState })
    this.handlePlay(this.state.compChoice, this.state.choice)
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.props.scores.lives.value <= 3 ? 'warning' : 'primary'
    return classes
  }
  formatCount () {
    const { value: count } = this.props.scores.lives
    return count === 0 ? 'Zero' : count
  }

  render () {
    return (
      <Fragment>
        <NavBar
          email={this.props.email}
          names={this.props.names}
          life={this.state.lives}
          choice={this.state.choice}
          compChoice={this.state.compChoice}
          outCome={this.state.outCome}
          onGetBadge={this.state.getBadgeClasses}
          onStyles={this.styles}
          onFormat={this.props.formatCount}
          onRestart={this.restartGame}
        />
        <main className='container'>
          <Main
            scores={this.state}
            onPaperChoice={this.handlePaperChoice}
            onScissorsChoice={this.handleScissorsChoice}
            onRockChoice={this.handleRockChoice}
            onIncrement={this.state.handleIncrement}
          />
        </main>
      </Fragment>
    )
  }
  updateLives = () => {
    let currState = this.state
    currState.lives--
    this.setState({ currState })
  }
  win = () => {
    this.hasLife()
    this.updateLives()
    let currState = this.state
    currState.goldCoins++
    currState.outCome = 'You won!'
    this.setState({ currState })
  }
  draw = () => {
    this.hasLife()
    this.updateLives()
    let currState = this.state
    currState.tryCharms++
    currState.outCome = "It's a draw!"
    this.setState({ currState })
  }
  lose = () => {
    this.hasLife()
    this.updateLives()
    let currState = this.state
    currState.outCome = 'You loose!'
    this.setState({ currState })
  }
  restartGame = () => {
    let gameState = this.state
    gameState.lives = 10
    gameState.tryCharms = 0
    gameState.goldCoins = 0
    gameState.choice = 'No Choice'
    gameState.compChoice = 'No Choice'
    gameState.outCome = 'Game Restarted!'
    this.setState({ gameState })
  }
  retryGame = () => {
    let newState = this.state
    if (this.state.goldCoins > 5) {
      newState.jadeStones++
      newState.goldCoins = 0
      newState.tryCharms = 0
      newState.lives = 10
      newState.outCome = 'Keep playing'
      this.setState({ newState })
      alert('You grow victorius, You get one Jade Stone')
      return
    }

    if (this.state.tryCharms > 0) {
      alert(`You have ${this.state.tryCharms} charm(s), redeam for extra lives?`)
      newState.lives = this.state.tryCharms
      newState.tryCharms = 0
      this.setState({ newState })
      return
    }
    if (this.state.goldCoins === 5) {
      alert(`You got exactly ${this.state.goldCoins} gold coins, It's a draw.`)
      return
    }
    if (this.state.jadeStones > 0) {
      alert(`You got only ${this.state.goldCoins} gold coins, You won ${this.state.jadeStones} jade stones.`)
      return
    }
    alert(`You got only ${this.state.goldCoins} gold coins, You lost the game`)
  }
  gameOver = () => {
    this.retryGame()
    let currState = this.state
    currState.outCome = 'Game Over!'
    currState.choice = 'No Choice'
    currState.compChoice = 'No Choice'
    this.setState({ currState })
  }
  handlePlay = (compChoice, choice) => {
    if (this.state.lives <= 0) {
      this.gameOver()
      return
    }
    if (compChoice === this.rock) {
      switch (choice) {
        case this.rock: {
          this.draw()
          break
        }
        case this.paper: {
          this.win()
          break
        }
        case this.scissors: {
          this.lose()
          break
        }
        default: {
          console.log('Invalid choice')
          break
        }
      }
    }
    if (compChoice === this.paper) {
      switch (choice) {
        case this.rock: {
          this.lose()
          break
        }
        case this.paper: {
          this.draw()
          break
        }
        case this.scissors: {
          this.win()
          break
        }
        default: {
          console.log('Invalid choice')
          break
        }
      }
    }
    if (compChoice === this.scissors) {
      switch (choice) {
        case this.rock: {
          this.win()
          break
        }
        case this.paper: {
          this.lose()
          break
        }
        case this.scissors: {
          this.draw()
          break
        }
        default: {
          console.log('Invalid choice')
          break
        }
      }
    }
  }
}

export default Game
