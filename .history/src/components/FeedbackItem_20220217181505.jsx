FeedbackItem.propTypes = {}

function FeedbackItem({ item }) {
    return (
        <div>
            <div className='card'>
                <div className='num-display'>{rating}</div>
                <div className='text-display'>{text}</div>
            </div>
        </div>
    )
}

export default FeedbackItem
