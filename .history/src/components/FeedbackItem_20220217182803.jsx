import Card from './UI/Card'

FeedbackItem.propTypes = {}

function FeedbackItem({ item }) {
    return (
        <Card>
            <div className='card'>
                <div className='num-display'>{item.rating}</div>
                <div className='text-display'>{item.text}</div>
            </div>
        </Card>
    )
}

export default FeedbackItem
