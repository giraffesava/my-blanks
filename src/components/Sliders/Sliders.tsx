import React from 'react'
import SliderOne from './SliderOne/SliderOne'
import SliderTwo from './SliderTwo/SliderTwo'

import './Sliders.scss'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'

const Sliders = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <Router>
      <div className="sliders-container">
        <NavLink
          to="/sliders/slider-one"
          className={
            location.pathname === '/sliders/slider-one' ? 'active' : null
          }>
          Slider 1
        </NavLink>
        <NavLink
          to="/sliders/slider-two"
          className={
            location.pathname === '/sliders/slider-one2' ? 'active' : null
          }>
          Slider 2
        </NavLink>
      </div>
      <Switch>
        <Route path="/sliders/slider-one">
          <SliderOne />
        </Route>
        <Route path="/sliders/slider-two">
          <SliderTwo />
        </Route>
      </Switch>
    </Router>
  )
}

export default Sliders
