import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Input from './components/Editor/InputDetail'
import Header from './components/Main/Header'

const App = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path = "/" component = {Header}/>
            <Route path = "/input" component = {Input}/>
        </Routes>
    </Router>

    </>
  )
}

export default App