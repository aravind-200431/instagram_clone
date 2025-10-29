import React from 'react'
import Sidebar from './Components/sidebar.jsx'
import Feed from './Components/feed.jsx'
import Suggestion from './Components/suggestion.jsx'

function App() {
  return (
    <div className="d-flex vh-100">
      <div className="w-20"><Sidebar/></div>
      <div className='w-50 '><Feed/></div>
      <div className="w-30"><Suggestion/></div>
    </div>
  )
}

export default App
