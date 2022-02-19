import React from 'react'
import PropTypes from 'prop-types'

Button.propTypes = {}

function Button({ children, version, type, isDisabled }) {
    return <button type={type} disabled={isDisabled} className={btn}></button>
}

export default Button
