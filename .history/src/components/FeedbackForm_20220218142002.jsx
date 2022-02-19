import React from 'react'
import PropTypes from 'prop-types'
import Card from './UI/Card'

FeedbackForm.propTypes = {}

function FeedbackForm(props) {
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className='input-group'>
                    <input type='text' />
                </div>
                <button type='submit''></button>
            </form>
        </Card>
    )
}

export default FeedbackForm
