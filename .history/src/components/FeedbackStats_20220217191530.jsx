import React from 'react'
import PropTypes from 'prop-types'

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

function FeedbackStats({ feedback }) {
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length}</h4>
        </div>
    )
}

export default FeedbackStats
