import React from 'react'
import '../../App.css'

import Flashcard from './Flashcard'

class FlashcardsContainer extends React.Component {
  render(){
    return(
      <div className='flashcards-container'>
        <div className='flashcard-header'>
          <strong>Flashcards Block</strong>
        </div>
        <div className='flashcards-display'>
          <Flashcard />
          <Flashcard />
          <Flashcard />
        </div>
      </div>
    )
  }
}

export default FlashcardsContainer
