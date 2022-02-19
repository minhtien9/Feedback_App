import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import Spinner from './UI/Spinner'

function FeedbackList({ handeDelete }) {
    const { feedback, isLoading } = useContext(FeedbackContext)
    if (!isLoading && (!feedback || feedback.length === 0))
        return <p>No Feedback Yet</p>

    return isLoading ? (
        <Spinner />
    ) : (
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
