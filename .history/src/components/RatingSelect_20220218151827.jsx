import { useState } from 'react'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)
    return (
        <ul>
            <li>
                <input
                    type='radio'
                    id='num1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                />
            </li>
        </ul>
    )
}

export default RatingSelect
