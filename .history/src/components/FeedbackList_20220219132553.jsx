import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ handeDelete }) {
    const { feedback } = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                            handeDelete={handeDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
