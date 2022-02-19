import React from 'react'
import PropTypes from 'prop-types'

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

function FeedbackStats({ feedback }) {
    let average =
        feedback.reduce((acc, cur) => {
            return acc + cur.rating
        }, 0) / feedback.length
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: </h4>
        </div>
    )
}

export default FeedbackStats
