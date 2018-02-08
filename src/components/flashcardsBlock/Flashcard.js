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

    let front =
      <div className='front'>
        Front
      </div>

    let back =
      <div className='back'>
        Back
      </div>

    return(
      <div className={'card' + (this.state.flipped ? 'flipped' : '')} onClick={this.handleClick}>
        <div className='content'>
          {this.state.flipped ? back : front}
        </div>
      </div>
    )
  }
}

export default Flashcard
