import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <FeedbackProvider>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handeDelete={deleteFeedback}
                />
            </div>
        </FeedbackProvider>
    )
}

export default App
