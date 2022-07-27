import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForms from './components/FeedbackForms'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'
const App = () => {
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
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}
export default App
