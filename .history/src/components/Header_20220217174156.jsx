import React from 'react'
import PropTypes from 'prop-types'

Header.propTypes = {
    text: PropTypes.string,
}

Header.defaultProps = {
    text: 'Feedback UI',
}

function Header({ text, bgColor, textColor }) {
    return (
        <header>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

export default Header
