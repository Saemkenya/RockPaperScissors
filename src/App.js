import React, { Component, Fragment } from 'react'
import './App.css'
import Game from './Game'
import SignIn from './components/sign_in'
import CryptoJS from 'crypto-js'

class App extends Component {
  state = {
    token: null,
    email: '',
    password: '',

    response: null,
    salute: null,
    name: null,
    accRole: null,
    admRole: null,
    gdnRole: null,
    libRole: null,
    mngRole: null,
    tutRole: null
  }
  handleTokenChange = token => {
    this.setState({
      token: token
    })
  }
  componentDidMount () {
    console.log('Application mounted, make ajax calls now!')
  }

  handleSignIn = event => {
    event.preventDefault()
    var creditString = `${this.state.email}:${this.state.password}`
    var credentials = CryptoJS.enc.Utf8.parse(creditString) // WordArray object
    var base64 = CryptoJS.enc.Base64.stringify(credentials)
    this.getUser(base64)
  }

  handlePasswordUpdate = password => {
    this.setState({
      password: password
    })
  }

  handleEmailUpdate = email => {
    this.setState({
      email: email
    })
  }

  render () {
    return (
      <Fragment>
        {this.state.token ? (
          <Game names={this.state.salute + '  ' + this.state.name} email={this.state.email} />
        ) : (
          <SignIn
            onSignIn={this.handleSignIn}
            onToken={this.handleTokenChange}
            onEmailUpdate={this.handleEmailUpdate}
            onPasswordUpdate={this.handlePasswordUpdate}
          />
        )}
      </Fragment>
    )
  }

  getUser = basicBase64 => {
    let myheaders = {
      Authorization: `Basic ${basicBase64}`,
      'Content-Type': 'application/json'
    }
    console.log(myheaders)

    fetch('http://localhost:18700/auth', {
      method: 'POST',
      body: JSON.stringify(''),
      headers: myheaders
    })
      .then(
        function (response) {
          return response.body.getReader().read()
        },
        function (error) {
          console.log(error.message)
        }
      )
      // .then(data => data.map(item => console.log(item)))
      .then(data => new TextDecoder('utf-8').decode(data.value))
      .then(newString => this.saveUserData(newString))
  }
  saveUserData = data => {
    let newData = data.slice(1, -1)
    let items = newData.replace('"roles":{', '')
    let items1 = items.replace('"user":[', '')
    let items2 = items1.replace('"ress_token":', '')
    let items3 = items2.replace(']', '')
    let items4 = items3.replace('}', '')
    let itemsArray = items4.split(',')
    this.updateState(itemsArray)
  }
  updateState = items => {
    console.log(items)
    this.setState({
      response: items[0].slice(1),
      email: items[1].slice(1, -1),
      salute: items[2].slice(1, -1),
      name: items[3].slice(1, -1),
      accRole: items[4].slice(1),
      admRole: items[5].slice(1),
      gdnRole: items[6].slice(1),
      libRole: items[7].slice(1),
      mngRole: items[8].slice(1),
      tutRole: items[9].slice(1),
      token: items[10].slice(1, -1)
    })
    this.handleTokenChange(items[10])
    console.log(this.state)
  }
}

export default App
