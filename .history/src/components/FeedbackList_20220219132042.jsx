import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}

function FeedbackList({ feedback, handeDelete }) {
    if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handeDelete={handeDelete}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
