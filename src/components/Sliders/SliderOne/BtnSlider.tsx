import React from 'react'
import rightArrow from './../assets/right-arrow.svg'
import leftArrow from './../assets/left-arrow.svg'
import './Sliders.scss'

interface Props {
  direction: 'next' | 'prev'
  onClick: () => void
}

const BtnSlider: React.FC<Props> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  )
}

export default BtnSlider
