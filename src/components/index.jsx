import React, { Component } from 'react'

class Main extends Component {
  styles = {
    fontSize: 20,
    fontWeight: 'bold',
    height: 200
  }
  btnStyles = {
    fontSize: 20,
    fontWeight: 'bold',
    width: 80,
    height: 80
  }
  render () {
    return (
      <div className='m-5'>
        <main role='main'>
          <div className='album py-5 bg-light'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='card mb-4 shadow-sm'>
                    <div className='card-body'>
                      <img className='card-img-top' style={this.styles} src={require('./static/rock.gif')} alt='ROCK' />
                      <h4 className='card-text'>MAWE.</h4>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='btn-group'>
                          <button
                            onClick={this.props.onRockChoice}
                            type='button'
                            className='btn btn-sm btn-outline-secondary'
                          >
                            Choose Rock
                          </button>
                        </div>
                        <small className='text-muted'>... wins against scissors</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='card mb-4 shadow-sm'>
                    <div className='card-body'>
                      <img
                        className='card-img-top'
                        style={this.styles}
                        src={require('./static/paper1.gif')}
                        alt='ROCK'
                      />
                      <h4 className='card-text'>KARATASI</h4>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='btn-group'>
                          <button
                            onClick={this.props.onPaperChoice}
                            type='button'
                            className='btn btn-sm btn-outline-secondary'
                          >
                            Choose paper
                          </button>
                        </div>
                        <small className='text-muted'>... wins against rock.</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='card mb-4 shadow-sm'>
                    <div className='card-body'>
                      <img
                        className='card-img-top'
                        style={this.styles}
                        src={require('./static/scissors.gif')}
                        alt='ROCK'
                      />
                      <h4 className='card-text'>MAKASI</h4>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='btn-group'>
                          <button
                            onClick={this.props.onScissorsChoice}
                            type='button'
                            className='btn btn-sm btn-outline-secondary'
                          >
                            Choose Scissors
                          </button>
                        </div>
                        <small className='text-muted'>... wins against paper</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='jumbotron text-center'>
            <div className='container'>
              <h2>
                <a href={0} className='btn btn-secondary my-2 m-4'>
                  <img
                    className='card-img-top'
                    style={this.btnStyles}
                    src={require('./static/tryCharm.png')}
                    alt='ROCK'
                  />
                  Try Charms : {this.props.scores.tryCharms}
                </a>
                <a href={0} className='btn btn-warning my-2 m-4'>
                  <img
                    className='card-img-top'
                    style={this.btnStyles}
                    src={require('./static/goldcoin.png')}
                    alt='ROCK'
                  />
                  Gold Coins : {this.props.scores.goldCoins}
                </a>
                <a href={0} className='btn btn-primary my-2 m-4'>
                  <img
                    className='card-img-top'
                    style={this.btnStyles}
                    src={require('./static/jadestone.png')}
                    alt='ROCK'
                  />
                  Jade Stones : {this.props.scores.jadeStones}
                </a>
              </h2>

              <h4 className='lead text-muted'>
                Standard Rock Paper Scissors rules apply, rock crushes scissors, scissors cuts paper while paper covers
                rock.
              </h4>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Main
