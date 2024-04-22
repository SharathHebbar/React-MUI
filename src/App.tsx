import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import InputHandler from './components/InputHandler'
import DataDisplay from './components/DataDisplay'
import Surfaces from './components/Surfaces'
import Feedback from './components/Feedback'
import Navigation from "./components/Navigation"
import Layout from './components/LayoutsComp'

function App() {

  return (
    <>
    <h1>Practicing Material UI with React</h1>
    <div>
        For Input Handler follow this path: <a href="/input_handler">Input Handler</a><br /><br />
        For Display Element follow this path: <a href="/display_element">Display Element</a><br /><br />
        For Feedback Element follow this path: <a href="/feedback">Feedback</a><br /><br />
        For Surface Element follow this path: <a href="/surfaces">Surface</a><br /><br />
        For Navigation Element follow this path: <a href="/navigation">Navigation</a><br /><br />
        For Layouts Element follow this path: <a href="/layout">Layout</a><br /><br />
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
        <Route 
          path='/surfaces'
          element={<Surfaces />}
        >
        </Route>
        <Route 
          path='/feedback'
          element={<Feedback />}
        >
        </Route>
        <Route 
          path='/feedback'
          element={<Feedback />}
        >
        </Route>
        <Route 
          path='/navigation'
          element={<Navigation />}
        >
        </Route>
        <Route 
          path='/layout'
          element={<Layout />}
        >
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
