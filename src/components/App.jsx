import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'

const App = () => (
  <div>
  <Header />
  <Nav />
    <div className='container'>
      <Switch>
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route component={About} />
      </Switch>
    </div>
  </div>
)

export default App
