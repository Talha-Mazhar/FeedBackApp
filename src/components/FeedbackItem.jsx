import { FaTimes, FaEdit } from 'react-icons/fa'
import React from 'react'
// import { useState } from 'react'
import Card from './shared/Card'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({ item }) {
  const { DeleteFeedback, editFeedback } = useContext(FeedbackContext)
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae perferendis quidem impedit! Culpa, delectus necessitatibus hic architecto ea, aliquid optio ipsum assumenda nesciunt inventore distinctio a corporis, ipsam quis?')
  // const handleClick = () =>{
  //     setRating((prev) => {
  //         return prev +1
  //     })
  // }
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => DeleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
