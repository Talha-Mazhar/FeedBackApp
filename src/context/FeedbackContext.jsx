import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const [feedback, setfeedback] = useState([])

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    )
    //?_sort=id&_order=desc this is sorting query params
    const data = await response.json()
    setfeedback(data)
    setLoading(false)
  }

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
        isLoading,
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
