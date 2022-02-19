import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {}, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(
            `http://localhost:5000/feedback?_sort=id&_order=desc`
        )
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id, upItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...upItem } : item
            )
        )
    }

    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true })
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
