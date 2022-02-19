import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)

        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'aplication/json' },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
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
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
