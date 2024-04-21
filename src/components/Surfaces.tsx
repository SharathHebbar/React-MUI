import ControlledAccordions from "./components/Surface_components/AccordianComp"
import { ResponsiveAppBar, SearchAppBar } from "./components/Surface_components/AppBar"
import OutlinedCard from "./components/Surface_components/CardComponent"
import Elevation from "./components/Surface_components/PaperComp"

function Surfaces(){
    return(
        <>
        <h2>Surfaces Component</h2>
        <hr />
        <ControlledAccordions />
        <br />
        For more info: <a href="https://mui.com/material-ui/react-accordion/">Accordian</a>
        <hr />
        <ResponsiveAppBar /><br /><br />
        <SearchAppBar /><br /><br />
        For more info: <a href="https://mui.com/material-ui/react-app-bar/">AppBar</a>
        <hr />
        <OutlinedCard /><br /><br />
        For more info: <a href="https://mui.com/material-ui/react-card/">Card</a>
        <hr />
        <Elevation /><br /><br />
        For more info: <a href="https://mui.com/material-ui/react-paper/">Paper</a>
        </>
    )
}

export default Surfaces