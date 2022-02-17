import React from 'react'
import './App.scss'

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'
import Sliders from '../Sliders/Sliders'
import DragAndDrop from 'components/DragAndDrop/DragAndDrop'

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sliders">Sliders</NavLink>
          <NavLink to="/drag-and-drop">Drag and Drop</NavLink>
        </div>
        <Switch>
          <Route path="/sliders">
            <Sliders />
          </Route>
          <Route path="/" exact>
            This is my own outlines
          </Route>
          <Route path="/drag-and-drop">
            <DragAndDrop />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
