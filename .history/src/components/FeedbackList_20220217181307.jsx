import React from 'react'
import PropTypes from 'prop-types'

FeedbackList.propTypes = {}

function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <div>{item.rating}</div>
            ))}
        </div>
    )
}

export default FeedbackList
