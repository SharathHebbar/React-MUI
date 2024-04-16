
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
        </div>
        </>
    )
}

export default DataDisplay