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

    // Add feedback

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'aplication/json' },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    // Delete feedback

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE',
            })
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Update feedback

    const updateFeedback = async (id, upItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(upItem),
        })
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
