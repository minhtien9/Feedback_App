import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIcon from './components/AboutIcon'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutPage from './pages/AboutPage'

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>

                        <Route path='/about' element={<AboutPage />}></Route>
                    </Routes>
                    <AboutIcon />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App
