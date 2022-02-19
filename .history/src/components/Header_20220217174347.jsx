import React from 'react'
import PropTypes from 'prop-types'

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

function Header({ text, bgColor, textColor }) {
    const headerStyles = { background: bgColor, color: textColor }
    return (
        <header>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

export default Header
