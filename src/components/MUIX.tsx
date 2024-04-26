import CommonlyUsedComponents from "./components/MUIX_components/DatenTime"
import ChartsOverviewDemo from "./components/MUIX_components/Chart"
import BasicRichTreeView from "./components/MUIX_components/Trees"

function MUIX(){
    return(
        <>
        <h2>Utils Component</h2>
        <hr />
        {/* <CommonlyUsedComponents /> */}
        <br />
        For more info: <a href="https://mui.com/x/react-date-pickers/">DateTime</a>
        <hr />
        {/* <ChartsOverviewDemo /> */}
        <br />
        For more info: <a href="https://mui.com/x/react-charts/">Charts</a>
        <hr />
        <BasicRichTreeView />
        <br />
        For more info: <a href="https://mui.com/x/react-tree-view/">TreeView</a>
        <hr />
        </>
    )
}

export default MUIX