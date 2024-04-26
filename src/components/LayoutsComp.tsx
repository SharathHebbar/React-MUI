import BoxSx from "./components/Layout_components/BoxComp"
import SimpleContainer from "./components/Layout_components/ContainerComp"
import AutoGridNoWrap from "./components/Layout_components/Gridv1"
import NestedGridColumns from "./components/Layout_components/Gridv2"
import DividerStack from "./components/Layout_components/Stack"
import { TitlebarImageList, QuiltedImageList } from "./components/Layout_components/ImageList"

function Layout(){
    return(
        <>
        <h2>Layout Component</h2>
        <hr />
        <BoxSx /><br />
        For more info: <a href="https://mui.com/material-ui/react-box/">Box</a>
        <hr />
        <SimpleContainer />
        <br />
        For more info: <a href="https://mui.com/material-ui/react-container/">Container</a>
        <hr />
        <AutoGridNoWrap />
        <br />
        For more info: <a href="https://mui.com/material-ui/react-grid/">Grid</a>
        <hr />
        <NestedGridColumns />
        <br />
        For more info: <a href="https://mui.com/material-ui/react-grid2/">Gridv2</a>
        <hr />
        <DividerStack />
        <br />
        For more info: <a href="https://mui.com/material-ui/react-stack/">Stack</a>
        <hr />
        <QuiltedImageList />
        <br />
        <TitlebarImageList /><br />
        For more info: <a href="https://mui.com/material-ui/react-image-list/">Image List</a>
        <hr />
        
        </>
    )
}

export default Layout