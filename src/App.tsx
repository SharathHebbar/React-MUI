import './App.css'

import { useState } from 'react'

import {Button_demo, BasicButtonGroup} from "./components/Button_demo"
import ComboBox from './components/AutoComplete'
import TextBox from './components/TextBox'
import {Checkboxes, CheckboxLabels, IconCheckboxes} from './components/Checkboxall'
import FloatingActionButtonExtendedSize from './components/Floating'
import CustomizedRadios from './components/Radio_button'
import HoverRating from './components/Ratings'
import { MultipleSelect, MultipleSelectChip, DialogSelect } from './components/Select_box'
import { MusicPlayerSlider, CustomizedSlider } from './components/Sliders'
import CustomizedSwitches from './components/Switches'
import TransferList from './components/TransferLists'
import ToggleButtonNotEmpty from './components/ToggleList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Practicing Material UI with React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
      <div>
        <hr />
        <BasicButtonGroup /><br /><br />
        For more info: <a href="https://mui.com/material-ui/react-button-group/">Button Group</a>
        <br /><br />
        <center>
          <Button_demo/>
        </center>
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-button/">Button</a>
        <center>
          <ComboBox />
        </center>
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-autocomplete/">Autocomplete</a> 
        <hr/>
        <TextBox /><br /><br />
        For more info: <a href="https://mui.com/material-ui/react-text-field/">Text Field</a>
        <hr />
        <IconCheckboxes /><br /><br />
        <Checkboxes /><br /><br />
        <center>
          <CheckboxLabels />
        </center>
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-checkbox/">Checkbox</a>
        <hr />
        <FloatingActionButtonExtendedSize /><br /><br />
        For more info: <a href="https://mui.com/material-ui/react-floating-action-button/">Floating Action Button</a>
        <hr />
        <CustomizedRadios />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-radio-button/">Radio Button</a>
        <hr />
        <center>
          <HoverRating />
        </center>
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-rating/">Rating</a>
        <hr />
        <MultipleSelect />
        <br /><br />
        <MultipleSelectChip />
        <br /><br />
        <DialogSelect />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-select/">Select Box</a>
        <hr />
        {/* <MusicPlayerSlider /> */}
        <br /><br />
        <center><CustomizedSlider /></center>
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-slider/">Slider</a>
        <hr />
        <center><CustomizedSwitches /></center>
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-switch/">Switches</a>
        <hr />
        <TransferList />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-transfer-list/">Transfer List</a>
        <hr />
        <center><ToggleButtonNotEmpty /></center>
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-toggle-button/">Toggle</a>
      </div>
    </>
  )
}

export default App
