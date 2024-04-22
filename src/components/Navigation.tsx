import FixedBottomNavigation from "./components/Navigation_components/BottomNavComp"
// import { RouterBreadcrumbs, CollapsedBreadcrumbs, IconBreadcrumbs } from "./components/Navigation_components/BreadCrumbs"
import { CollapsedBreadcrumbs, IconBreadcrumbs } from "./components/Navigation_components/BreadCrumbs"
import { SwipeableEdgeDrawer, MiniDrawer } from "./components/Navigation_components/DrawerComp"
import CustomizedMenus from "./components/Navigation_components/MenuComp"
import { TablePaginationDemo, PaginationRanges } from "./components/Navigation_components/Pagination"
import OpenIconSpeedDial from "./components/Navigation_components/Speeddial"
import { HorizontalNonLinearStepper, CustomizedSteppers } from "./components/Navigation_components/Stepper"
import { IconPositionTabs, ScrollableTabsButtonAuto } from "./components/Navigation_components/Tabs"

function Navigation(){
    return(
        <>
        <h2>Navigation Component</h2>
        <hr />
        <FixedBottomNavigation /><br /><br />
        For more info: <a href="https://mui.com/material-ui/react-bottom-navigation/">Bottom Navigation</a>
        <hr />
        {/* <RouterBreadcrumbs /><br /><br /> */}
        <CollapsedBreadcrumbs /><br /><br />
        <IconBreadcrumbs />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-breadcrumbs/">Breadcrumb</a>
        <hr />
        <SwipeableEdgeDrawer /><br /><br />
        <MiniDrawer />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-drawer/">Drawer</a>
        <hr />
        <CustomizedMenus />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-menu/">Menu</a>
        <hr />
        <TablePaginationDemo /><br /><br />
        <PaginationRanges />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-pagination/">Pagination</a>
        <hr />
        <OpenIconSpeedDial />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-speed-dial/">Speeddial</a>
        <hr />
        <CustomizedSteppers /> <br /><br />
        <HorizontalNonLinearStepper />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-stepper/">Stepper</a>
        <hr />
        <IconPositionTabs /><br /><br />
        <ScrollableTabsButtonAuto />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-tabs/">Tabs</a>
        </>
    )
}

export default Navigation