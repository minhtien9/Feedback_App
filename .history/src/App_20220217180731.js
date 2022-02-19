import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'

function App() {
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <FeedbackList />{' '}
            </div>
        </div>
    )
}

export default App
