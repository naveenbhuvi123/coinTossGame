import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    }
    if (tossResult === 1) {
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  render() {
    const {coinImage, headCount, totalCount, tailCount} = this.state

    return (
      <div className="coinTossGame">
        <div className="coinToss-card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="toss-info">Heads (or) Tails</p>
          <img src={coinImage} className="coin-img" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails:{tailCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
