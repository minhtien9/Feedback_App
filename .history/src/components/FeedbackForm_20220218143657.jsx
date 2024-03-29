import { useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'

FeedbackForm.propTypes = {}

function FeedbackForm(props) {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
