// import { v4 as uuidv4 } from 'uuid'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'

import Card from './components/shared/Card'

// import React, { useState } from 'react'
import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
// import feedbackdata from './data/FeedBackData'
import FeedBackList from './components/FeedBackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForms from './components/FeedbackForms'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'
// import Post from './components/Post'
// import Card from './components/shared/Card'
const App = () => {
  // const [feedback, setfeedback] = useState(feedbackdata)

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4()
  //   setfeedback([newFeedback, ...feedback])
  // }

  // const DeleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     setfeedback(feedback.filter((item) => item.id !== id))
  //   }
  // }
  return (
    <FeedbackProvider>
      <Router>
        <Header
          text='FeedBaclk UI'
          bgColor='rgba(0,0,0,0.4)'
          textColor='#ff6a95'
        />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForms />
                  <FeedbackStats />
                  <FeedBackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
            {/* <Route path='/post/:id' element={<Post />} /> */}
            {/* <Route path='/post' element={<Post />} /> */}
            {/* <Route path='/post/*' element={<Post />} /> */}
          </Routes>
          {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}
export default App
