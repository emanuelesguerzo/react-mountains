import { useState, useEffect } from "react";
import Dolomites from "./data/dolomites";

function App() {

  const [currIndex, setCurrIndex] = useState(0);
  const { image, title, text } = Dolomites[currIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % Dolomites.length)
    }, 5000)
    return () => clearInterval(interval);
  }, []);

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
        <h1>Benvenuto nelle Dolomiti!</h1>
      </header>

      {/* Image Info */}
      <div className="image-info">
        <div className="image-title">{title}</div>
        <div className="image-text">{text}</div>
      </div>
      
      {/* Carousel */}
      <div className="carousel">

        {/* Prev Button */}
        <div
          className="btn"
          onClick={handlePrevious}
        >
          <i className="fa-solid fa-angles-left"></i>
        </div>

        {/* Main Image */}
        <div className="main-image">
          <img 
            src={image} 
            alt={title} 
          />
        </div>

        {/* Next Button */}
        <div
          className="btn"
          onClick={handleNext}
        >
          <i className="fa-solid fa-angles-right"></i>
        </div>

      </div>

      {/* Thumbnails */}
      <ul className="thumbs-container">
        {Dolomites.map((currImage, index) => (

          <li
            className="thumbnails"
            key={index}
            onClick={() => handleThumbClick(index)}
          >
            <img
              className={index === currIndex ? "active" : ""}
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
