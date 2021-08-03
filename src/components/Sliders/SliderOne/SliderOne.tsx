import React, { useState } from 'react'
import './Sliders.scss'
import { pictureArray } from '../assets/pictures/pictureArray'
import BtnSlider from './BtnSlider'
import { v4 as uuidv4 } from 'uuid'

const SliderOne = () => {
  const [sliderIndex, setSliderIndex] = useState(1)

  const nextSlide = () => {
    if (sliderIndex === pictureArray.length) {
      setSliderIndex(1)
    } else {
      setSliderIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (sliderIndex === 1) {
      setSliderIndex(pictureArray.length)
    } else if (sliderIndex !== 1) {
      setSliderIndex((prev) => prev - 1)
    }
  }

  const moveDot = (index) => {
    setSliderIndex(index)
  }
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        {pictureArray.map((picture, index) => (
          <div
            key={uuidv4()}
            className={
              sliderIndex === index + 1 ? 'slide active-anim' : 'slide'
            }>
            <img src={picture} />
          </div>
        ))}
        <BtnSlider onClick={prevSlide} direction="prev" />
        <BtnSlider onClick={nextSlide} direction="next" />
        <div className="container-dots">
          {Array.from({ length: pictureArray.length }).map((_, index) => (
            <div
              key={uuidv4()}
              className={sliderIndex === index + 1 ? 'dot active' : 'dot'}
              onClick={() => moveDot(index + 1)}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SliderOne
