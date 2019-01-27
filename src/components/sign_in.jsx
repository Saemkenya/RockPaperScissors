import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'

class SignIn extends Component {
  styles = {
    fontSize: 20,
    fontWeight: 'bold',
    height: 150,
    width: 150
  }

  static propTypes = {
    onToken: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onEmailUpdate: PropTypes.func.isRequired,
    onPasswordUpdate: PropTypes.func.isRequired
  }
  render () {
    const { onSignIn, onEmailUpdate, onPasswordUpdate } = this.props
    return (
      <Fragment>
        <div className='wrapper fadeInDown'>
          <div id='formContent'>
            {/* <!-- Tabs Titles --> */}

            {/* <!-- Icon --> */}
            <div className='fadeIn first'>
              <img className='card-img-top' style={this.styles} src={require('./static/logo.gif')} alt='ROCK' />
            </div>
            <form>
              <input
                // value={this.state.email}
                onChange={event => onEmailUpdate(event.target.value)}
                type='text'
                id='email'
                className='fadeIn second'
                name='email'
                placeholder='Email'
              />
              <input
                // value={this.state.password}
                // onChange={event => this.setState({ password: event.target.value })}
                onChange={event => onPasswordUpdate(event.target.value)}
                type='password'
                id='password'
                className='fadeIn third'
                name='login'
                placeholder='Password'
              />
              <input onClick={onSignIn} type='submit' className='fadeIn fourth' value='Log In' />
            </form>

            {/* <!-- Remind Passowrd --> */}
            <div id='formFooter'>
              <a className='underlineHover' href={0}>
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SignIn
