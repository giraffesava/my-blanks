import React, { useState } from 'react'
import FolderIcon from './FolderIcon'
import './DragAndDrop2.scss'

const DragAndDrop2: React.FC = () => {
  const [drag, setDrag] = useState(false)
  const [data, setData] = useState('')

  const onDropHandler = (e) => {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    let name = files[0].name
    if (name.length > 20) {
      name = [...name].splice(0, 20).join('') + '...'
    }
    setData(name)
  }

  const onDragStartHandler = (e) => {
    e.preventDefault()
    setDrag(true)
  }

  const onDragLeaveHandler = (e) => {
    e.preventDefault()
    setDrag(false)
  }

  return (
    <div
      className="drag-and-drop"
      onDrop={onDropHandler}
      onDragStart={(e) => onDragStartHandler(e)}
      onDragLeave={(e) => onDragLeaveHandler(e)}
      onDragOver={(e) => onDragStartHandler(e)}>
      {!data ? (
        <>
          <div className="drag-and-drop__circle">
            <div className="drag-and-drop__image">
              <FolderIcon width="24" height="24" />
            </div>
          </div>
          <p className="drag-and-drop__text">
            <p>
              Drag&Drop your file here or{' '}
              <span className="drag-and-drop__text--highlight">browse</span> to
              upload
            </p>
          </p>
        </>
      ) : (
        <>
          <div className="drag-and-drop__downloaded">
            <p>{data}</p>
            <button onClick={() => setData('')}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}

export default DragAndDrop2
