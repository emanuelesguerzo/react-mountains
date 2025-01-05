import { useState, useEffect } from "react";
import Dolomites from "./data/dolomites";

console.log(Dolomites)

function App() {

  const [currIndex, setCurrIndex] = useState(0);
  const { image, title, text } = Dolomites[currIndex];

  const handleNext = () => {
    setCurrIndex(prevIndex => (prevIndex + 1) % Dolomites.length);
  }

  const handlePrevious = () => {
    setCurrIndex((prevIndex) => 
      prevIndex === 0 ? Dolomites.length - 1 : prevIndex - 1
    )
  }

  const handleThumbClick = (index) => {
    setCurrIndex(index);
  }

  return (
    <>
      <header>
        <h1>React Mountains Carousel</h1>
      </header>

      <div className="carousel">

        <button
          onClick={handlePrevious}
        >
          Prev
        </button>

        <div>
          <img src={image} alt={title} />

        </div>

        <button
          onClick={handleNext}
        >
          Next
        </button>

      </div>

      <ul>
        {Dolomites.map((currImage, index) => (

          <li
            key={index}
            onClick={() => handleThumbClick(index)}
          >
            <img
              src={currImage.image} 
              alt={currImage.title} 
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
