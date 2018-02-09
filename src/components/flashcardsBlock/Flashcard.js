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

    let show = this.state.flipped ? this.props.answer : this.props.question

    return (
      <div className={'card' + (this.state.flipped ? 'flipped' : '')}>
        <div className='content' onClick={this.handleClick}>
          <div className={side}>
            <div className='content-style'>
              {show}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Flashcard
