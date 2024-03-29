import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

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

        const data = await response.json()
        setFeedback(feedback.map((item) => (item.id === id ? data : item)))

        setFeedbackEdit({ item: {}, edit: false })
    }

    // Set item to be update

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
