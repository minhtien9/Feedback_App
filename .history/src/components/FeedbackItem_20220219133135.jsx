import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './UI/Card'

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

function FeedbackItem({ item, handleDelete }) {
    const {}
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
