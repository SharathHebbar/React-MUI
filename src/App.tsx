import './App.css'

import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import InputHandler from './components/InputHandler'
import DataDisplay from './components/DataDisplay'

function App() {

  return (
    <>
    <h1>Practicing Material UI with React</h1>
    <div>
        For Input Handler follow this path: <a href="/input_handler">Input Handler</a><br /><br />
        For Display Element follow this path: <a href="/display_element">Display Element</a><br /><br />
    </div>
    <hr />
    <Router>
      <Routes>
        <Route 
          path='/input_handler'
          element={<InputHandler />}
        >
        </Route>
        <Route 
          path='/display_element'
          element={<DataDisplay />}
        >
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
