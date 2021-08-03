import { pictureArray } from './../assets/pictures/pictureArray'
import './SliderTwo.scss'
import React, { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const SliderTwo: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const sliderRef = useRef(null)
  useEffect(() => {
    changePosition(currentPosition)
  }, [currentPosition])

  const changePosition = (currentPosition) => {
    if (
      currentPosition <= -(pictureArray.length * sliderRef.current.clientWidth)
    ) {
      setCurrentPosition(0)
    } else if (currentPosition > 0) {
      setCurrentPosition(
        -((pictureArray.length - 1) * sliderRef.current.clientWidth),
      )
    }

    sliderRef.current.childNodes.forEach(
      (picture) =>
        (picture.style = `transform: translatex(${currentPosition}px)`),
    )
  }

  const goLeftHandler = () => {
    setCurrentPosition((prev) => prev + sliderRef.current.clientWidth)
    changePosition(currentPosition)
  }

  const goRightHandler = () => {
    setCurrentPosition((prev) => prev - sliderRef.current.clientWidth)
    changePosition(currentPosition)
  }

  return (
    <div className="app">
      <div className="slider">
        <div ref={sliderRef} className="pictures">
          {pictureArray.map((item) => (
            <img src={item} alt="images"></img>
          ))}
        </div>
        <button className="leftBtn" onClick={goLeftHandler}>
          {'<'}
        </button>
        <button className="rightBtn" onClick={goRightHandler}>
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default SliderTwo
