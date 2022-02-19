import React, { useState } from 'react'
import PropTypes from 'prop-types'

FeedbackItem.propTypes = {}

function FeedbackItem(props) {
    const [rating, setRating] = useState('')
    const [text, setText] = useState('')
    return (
        <div>
            <div className='card'>
                <div className='num-display'></div>
                <div className='text-display'></div>
            </div>
        </div>
    )
}

export default FeedbackItem
