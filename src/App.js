import React, { useState } from 'react'
import Header from './components/Header'
import Feedbackitem from './components/Feedbackitem'
function App() {
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <Feedbackitem />
      </div>
    </>
  )
}

export default App
