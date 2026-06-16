import './App.css'; // imports css file for our App component
import { useState } from 'react'; // imports the useState React hook
import cards from './data.js' // imports cards array from data.js
import Card from './Card'; // imports Card component 

const App = () => {

  // define state variables and setter methods here:
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // sets currentIndex default value of 0

  // define functions here:

  const nextCard = () => { 
    setCurrentIndex(Math.floor(Math.random() * cards.length)); // sets current index to random number generator value upon clicking next button
    setIsFlipped(false); // sets the isFlipped setter back to false upon clicking next button
  }

  return (
    <div>
      <h1>Hello World in 11</h1>
      <p>How good at you at recognizing "Hello World!" in different programming languages? Test your knowledge here!</p>
      <p>Number of cards: 11</p>

      <Card 
      question={cards[currentIndex].question} // props question takes in value from cards arrray
      answer={cards[currentIndex].answer} // props answer takes in value from cards array
      isFlipped={isFlipped} // isFlipped props literally takes in itself as a value
      setIsFlipped={setIsFlipped} // setIsFlipped props literally takes in itself as a value
      />

      <button onClick={nextCard}>Next Card</button>





    </div>
  )

}

export default App;