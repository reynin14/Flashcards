import React from 'react'
import '../../App.css'

import Flashcard from './Flashcard'

import coffee from '../../images/coffee.png'

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

      let correctAnswerChoice = `question.option${question.answers}`

      return (
        <Flashcard key={question.id} question={question.question} answer={eval(correctAnswerChoice)} />
      )

    })

    return(
      <div className='flashcards-container'>
        <div className='flashcard-header'>
          <strong>Flashcards Block</strong>
        </div>
        <div className='flashcards-display'>
          {flashcards}
          <Flashcard question={'This is an example with overflow'} answer={`Coffee trees are pruned short to conserve their energy and aid in harvesting, but can grow to more than 30 feet (9 meters) high. Each tree is covered with green, waxy leaves growing opposite each other in pairs. Coffee cherries grow along the branches. Because it grows in a continuous cycle, it’s not unusual to see flowers, green fruit and ripe fruit simultaneously on a single tree.`}/>
          <Flashcard question={'This is an example with an image'} answer={<img src={coffee} />}/>
        </div>
      </div>
    )
  }
}

export default FlashcardsContainer
