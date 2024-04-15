import './App.css'

import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import InputHandler from './components/InputHandler'

function App() {

  return (
    <>
    <h1>Practicing Material UI with React</h1>
      <Router>
        <Routes>
          <Route 
            path='/input_handler'
            element={<InputHandler />}
          >
          </Route>
        </Routes>
      </Router>
      <div>
        For Input Handler follow this path: <a href="http://localhost:5173/input_handler">Input Handler</a>
      </div>
    </>
  )
}

export default App
