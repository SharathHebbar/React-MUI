
import {
    BackgroundLetterAvatars,
    IconAvatars,
    CustomSurplusAvatars
} from "./components/DataDisplay_components/Avatars_demo"

import {
    BadgeAvatars,
    BadgeMax,
    AccessibleBadges
} from "./components/DataDisplay_components/Badge_comp"

import {
    CustomDeleteIconChips,
    ChipsArray
} from "./components/DataDisplay_components/Chip_comp"

import { FlexDivider, DividerText, ListDividers } from "./components/DataDisplay_components/Divider_comp"

import FontAwesomeSvgIconDemo from "./components/DataDisplay_components/Icons_comp"

import MaterialIconsdemo from "./components/DataDisplay_components/Material_Icon"

import { SwitchListSecondary, NestedList, CustomizedList } from "./components/DataDisplay_components/Lists_comp"

function DataDisplay(){
    return(
        <>
        <h2>Data Display Elements</h2>
        <div>
            <hr />
            <BackgroundLetterAvatars />
            <br /><br />
            <IconAvatars />
            <br /><br />
            <CustomSurplusAvatars />
            <br /><br />
            For more info: <a href="https://mui.com/material-ui/react-avatar/">Avatars</a>
            <hr />
            <BadgeAvatars />
            <br /><br />
            <BadgeMax />
            <br /><br />
            <AccessibleBadges />
            <br /><br />
            For more info: <a href="https://mui.com/material-ui/react-badge/">Badges</a>
            <hr />
            <CustomDeleteIconChips />
            <br /><br />
            <ChipsArray />
            <br /><br />
            For more info: <a href="https://mui.com/material-ui/react-chip/">Chip</a>
            <hr />
            <FlexDivider /><br /><br />
            <DividerText /><br /><br />
            <ListDividers /><br /><br />
            For more info: <a href="https://mui.com/material-ui/react-divider/">Divider</a>
            <hr />
            <FontAwesomeSvgIconDemo /><br /><br />
            For more info: <a href="https://mui.com/material-ui/icons/">Icons</a>
            <hr />
            <MaterialIconsdemo /><br /><br />
            For more info: <a href="https://mui.com/material-ui/material-icons/">Material Icons</a>
            <hr />
            <SwitchListSecondary /><br /><br />
            <NestedList /><br /><br />
            <CustomizedList />
            <br /><br />
            For more info: <a href="https://mui.com/material-ui/react-list/">Lists</a>
        </div>
        </>
    )
}

export default DataDisplay