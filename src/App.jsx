import './App.css'; // imports css file for our App component
import { useState } from 'react'; // imports the useState React hook
import cards from './data.js' // imports cards array from data.js
import Card from './Card'; // imports Card component 

const App = () => {

  // define state variables and setter methods here:
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // sets currentIndex default value of 0

  const [userGuess, setUserGuess] = useState('');
  const [checkAnswer, setCheckAnswer] = useState("");

  // define functions here:

  const nextCard = () => { 
    // checks if index is within bounds in order to apply appropriate index for next card button
    if (currentIndex != cards.length - 1) {
      setCurrentIndex(currentIndex + 1) // increases index by 1 when user clicks on next button 
    }
    else {
      setCurrentIndex(currentIndex);
    }
  
    setIsFlipped(false); // sets the isFlipped setter back to false upon clicking next button

    setCheckAnswer('');
  }



      // checks whether userGuess matches the current card's answer
  const onSubmit = () => {
      if (userGuess === cards[currentIndex].answer) {
        setCheckAnswer("correct");
      }
      else {
        setCheckAnswer("incorrect");
      }

    }
  
  const prevCard = () => {
    // checks if index is within bounds in order to apply appropriate index for previous card button
    if (currentIndex != 0)  {// decrements index by 1 when user clicks on previous button but first checks if index isn't less than 0
      setCurrentIndex(currentIndex - 1);
    }
    else {
      setCurrentIndex(currentIndex);
    }
    
    setIsFlipped(false); // sets the isFlipped setter back to false upon clicking next button
    setCheckAnswer('');


  }

  return (
    <div className="App" >
      <h1>Hello World in 11 🚀</h1>
      <h4>How good at you at recognizing "Hello World!" in different programming languages? Test your knowledge here!</h4>
      <p>Number of cards: 11</p>

      <Card 
      question={cards[currentIndex].question} // props question takes in value from cards arrray
      answer={cards[currentIndex].answer} // props answer takes in value from cards array
      isFlipped={isFlipped} // isFlipped props literally takes in itself as a value
      setIsFlipped={setIsFlipped} // setIsFlipped props literally takes in itself as a value
      />


    <div className="input-container">
      <div className="submit-button">
        <button onClick={onSubmit}>Check answer:</button>
      </div>
      
      <div className="answer-field">
        <input className = {checkAnswer} value={userGuess}  type="text" onChange = {(e) => {setUserGuess(e.target.value)}}></input>
      </div>
  </div>



      <button className = {currentIndex === cards.length - 1 ? "disabled" : ""}  onClick={nextCard}>Next Card</button>
      <button className = {currentIndex === 0 ? "disabled" : ""} onClick={prevCard} >Previous Card</button>





    </div>
  )

}

export default App;