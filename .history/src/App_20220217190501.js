import Header from './components/Header'

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

import { useState } from 'react'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <FeedbackList
                    feedback={feedback}
                    handeDelete={deleteFeedback}
                />
            </div>
        </div>
    )
}

export default App
