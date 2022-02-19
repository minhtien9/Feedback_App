import React from 'react'
import PropTypes from 'prop-types'

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

Card.defaultProps = {
    reverse: false,
}

function Card({ children, reverse }) {
    return (
        <div
            className='card'
            style={{
                backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
                color: reverse ? '#fff' : '#000',
            }}
        >
            {children}
        </div>
    )
}

export default Card
