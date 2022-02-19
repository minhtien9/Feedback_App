import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './UI/Card'

FeedbackForm.propTypes = {}

function FeedbackForm(props) {
    const [text, setText] = useState('')
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className='input-group'>
                    <input
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <button type='submit'>Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
