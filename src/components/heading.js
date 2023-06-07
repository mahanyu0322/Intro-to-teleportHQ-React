import React from 'react'

import PropTypes from 'prop-types'

import './heading.css'

const Heading = (props) => {
  return (
    <div className="heading-container">
      <img alt="image" src="/logo.svg" className="heading-image" />
      <h1 className="heading-text Heading">{props.heading1}</h1>
      <span className="heading-text1 Subheading">{props.text}</span>
    </div>
  )
}

Heading.defaultProps = {
  heading1: 'Heading',
  text: 'Let’s walk through this tutorial together to get you ready for building your next projects',
}

Heading.propTypes = {
  heading1: PropTypes.string,
  text: PropTypes.string,
}

export default Heading
