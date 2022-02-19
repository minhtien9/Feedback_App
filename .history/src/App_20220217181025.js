import Header from './components/Header'

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

import { useState } from 'react'

function App() {
    const [] = useState(FeedbackData)
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <FeedbackList />
            </div>
        </div>
    )
}

export default App
