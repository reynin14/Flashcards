import React from 'react'
import '../../App.css'

import Flashcard from './Flashcard'

class FlashcardsContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      questions: []
    }

  }

  componentDidMount(){
    fetch('https://qriusity.com/v1/questions?page=2&limit=3')
      .then(res => res.json())
      .then(json =>
          this.setState({
            questions: json
          })
        )
  }

  render(){

    let flashcards = this.state.questions.map((question) => {
      let correctAnswerChoice = 'option' + `${question.answers}`
      {debugger}

      //need to fix interpolation and rid of quotation marks

      return(
        <Flashcard question={question.question} answer={question.correctAnswerChoice}/>
      )
    })

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
