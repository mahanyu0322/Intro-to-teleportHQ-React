import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import './component-props.css'

const ComponentProps = (props) => {
  return (
    <div className="component-props-container">
      <Helmet>
        <title>Component-Props - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Component-Props - Intro to teleportHQ"
        />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d9c2f1cf-3f47-49f9-ba20-7e372e6f9693/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <div className="component-props-container1">
        <div className="component-props-container2">
          <Heading
            text="You can overwrite texts, links and image sources for any component"
            heading1="Component Props"
          ></Heading>
          <div className="component-props-ul">
            <ListItem text='Right click on the card below (make sure you select both the image and the text group) and click "Make Component"'></ListItem>
            <Tip text="You can create and see your components in the Components folder (Ctrl/Cmd + 2)"></Tip>
            <ListItem text="Click on your component and duplicate it"></ListItem>
            <Tip text="To duplicate a component, you can also hit Ctrl/Cmd + D"></Tip>
            <ListItem text="In the right panel you will see the props that you can overwrite (they are created automatically)"></ListItem>
            <ListItem text="Now you can set different images and text on the two components"></ListItem>
            <ListItem text="To edit the component's structure double click on any component instance"></ListItem>
            <ListItem text="Manage the component's props from the Props panel in the top-right part of the canvas while in component edit mode"></ListItem>
          </div>
          <h2 className="component-props-text Subheading">Give it a try</h2>
          <div className="component-props-container3">
            <div className="component-props-container4">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="component-props-image"
              />
              <div className="component-props-container5">
                <h1>Title</h1>
                <span>Description</span>
              </div>
            </div>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default ComponentProps
