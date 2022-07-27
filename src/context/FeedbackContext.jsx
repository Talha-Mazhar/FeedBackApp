import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      text: 'This is FeedBack item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is FeedBack item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is FeedBack item 3',
      rating: 7,
    },
  ])

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setfeedback([newFeedback, ...feedback])
  }

  const DeleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setfeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const updateFeedback = (id, updItem) => {
    setfeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    })
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        DeleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext
