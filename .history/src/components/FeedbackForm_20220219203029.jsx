import { useContext, useEffect, useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')

    const { addFeedback, feedbackEdit, updateFeedback } =
        useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = ({ target: { value } }) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (value.trim().length < 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = { text, rating }

            if (feedbackEdit.edit === true) {
                updateFeedback((feedbackEdit.item.id, newFeedback))
            } else {
                addFeedback(newFeedback)
            }

            setBtnDisabled(true)
            setRating(10)
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>

                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
