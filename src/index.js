import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PositioningMultipleElements from './views/positioning-multiple-elements'
import TheEnd from './views/the-end'
import BuildingLayoutsNavbar from './views/building-layouts-navbar'
import PositioningElements from './views/positioning-elements'
import SelectingElements from './views/selecting-elements'
import GettingStarted from './views/getting-started'
import AddingElements from './views/adding-elements'
import PreviewPublish from './views/preview-publish'
import BuildingLayoutsCardAlignment from './views/building-layouts-card-alignment'
import ComponentProps from './views/component-props'
import StylingElements from './views/styling-elements'
import DesignTokens from './views/design-tokens'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={PositioningMultipleElements}
          exact
          path="/positioning-multiple-elements"
        />
        <Route component={TheEnd} exact path="/the-end" />
        <Route
          component={BuildingLayoutsNavbar}
          exact
          path="/building-layouts-navbar"
        />
        <Route
          component={PositioningElements}
          exact
          path="/positioning-elements"
        />
        <Route component={SelectingElements} exact path="/selecting-elements" />
        <Route component={GettingStarted} exact path="/" />
        <Route component={AddingElements} exact path="/adding-elements" />
        <Route component={PreviewPublish} exact path="/preview-publish" />
        <Route
          component={BuildingLayoutsCardAlignment}
          exact
          path="/building-layouts-card-alignment"
        />
        <Route component={ComponentProps} exact path="/component-props" />
        <Route component={StylingElements} exact path="/styling-elements" />
        <Route component={DesignTokens} exact path="/design-tokens" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
