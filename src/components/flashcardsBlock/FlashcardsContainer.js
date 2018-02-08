import React from 'react'
import '../../App.css'

import Flashcard from './Flashcard'

class FlashcardsContainer extends React.Component {
  render(){
    return(
      <div className='Flashcards-Container'>
        <div className='Flashcard-Header'>
          Flashcards Block
        </div>
        <Flashcard />
      </div>
    )
  }
}

export default FlashcardsContainer
