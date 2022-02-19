import React from 'react'
import PropTypes from 'prop-types'

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

function Button({ children, version, type, isDisabled }) {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        ></button>
    )
}

export default Button
