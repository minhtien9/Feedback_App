import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './UI/Card'

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

function FeedbackItem({ item }) {
    const handleClick = () => {}
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={handleClick} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
