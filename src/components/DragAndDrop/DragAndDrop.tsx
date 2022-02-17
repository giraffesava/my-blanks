import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'

import './DragAndDrop.scss'
import DragAndDrop1 from './DragAndDrop1/DragAndDrop1'
import DragAndDrop2 from './DragAndDrop2/DragAndDrop2'

const DragAndDrop = () => {
  const location = useLocation()

  return (
    <Router>
      <div className="sliders-container">
        <NavLink
          to="/drag-and-drop/1"
          className={
            location.pathname === '/drag-and-drop/1'
              ? 'sliders-container--active'
              : null
          }>
          Drag And Drop 1
        </NavLink>
        <NavLink
          to="/drag-and-drop/2"
          className={
            location.pathname === '/drag-and-drop/2'
              ? 'sliders-container--active'
              : null
          }>
          Drag And Drop 2
        </NavLink>
      </div>
      <Switch>
        <Route path="/drag-and-drop/1">
          <DragAndDrop1 />
        </Route>
        <Route path="/drag-and-drop/2">
          <DragAndDrop2 />
        </Route>
      </Switch>
    </Router>
  )
}

export default DragAndDrop
