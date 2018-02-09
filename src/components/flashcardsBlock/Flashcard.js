import React from 'react'
import '../../App.css'

class Flashcard extends React.Component{
  state = {
    flipped: false
  }

  handleClick = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render(){

    let side = this.state.flipped ? 'Back' : 'Front'

    return (
      <div className={'card' + (this.state.flipped ? 'flipped' : '')}>
        <div className='content' onClick={this.handleClick}>
          <div className={side}>
            {side}
          </div>
        </div>
      </div>
    )
  }
}
export default Flashcard
