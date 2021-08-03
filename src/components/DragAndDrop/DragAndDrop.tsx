import React, { useState } from 'react'
import './DragAndDrop.scss'

const DragAndDrop: React.FC = () => {
  const [cardList, setCardList] = useState([
    { id: 1, order: 1, text: 'Card 1' },
    { id: 2, order: 2, text: 'Card 2' },
    { id: 3, order: 3, text: 'Card 3' },
    { id: 4, order: 4, text: 'Card 4' },
  ])
  const [currentCard, setCurrentCard] = useState(null)

  const dragStartHandler = (card: any): void => {
    setCurrentCard(card)
  }

  const dragEndHandler = (e): void => {
    e.target.style.background = 'white'
  }

  const dragOverHandler = (e): void => {
    e.preventDefault()
    e.target.style.background = 'lightgray'
  }

  const dropHandler = (e, card: any): void => {
    e.preventDefault()
    setCardList((prevCard) =>
      prevCard.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order }
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order }
        }
        return c
      }),
    )
    e.target.style.background = 'white'
  }

  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="app">
      {cardList.sort(sortCard).map((card) => {
        return (
          <div
            onDragStart={() => dragStartHandler(card)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card)}
            draggable="true"
            className="card"
            key={card.id}>
            {card.text}
          </div>
        )
      })}
    </div>
  )
}

export default DragAndDrop
