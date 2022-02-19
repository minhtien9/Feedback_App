import { useContext, useEffect, useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

FeedbackForm.propTypes = {}

function FeedbackForm() {
    const { addFeedback, feedbackEdit } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        setBtnDisabled(false)
        setText()
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = { text, rating }

            addFeedback(newFeedback)
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
