import { TransitionAlerts, DescriptionAlerts } from "./components/Feedback_components/AlertComp"
import SimpleBackdrop from "./components/Feedback_components/Backdrop"
import {AlertDialogSlide, DraggableDialog} from "./components/Feedback_components/Dialog"
import { CircularWithValueLabel, CircularIntegration } from "./components/Feedback_components/Progress"
import SkeletonTypography from "./components/Feedback_components/Skeleton"
import { FabIntegrationSnackbar, IntegrationNotistack } from "./components/Feedback_components/SnackBar"

function Feedback(){
    return(
        <>
        <h2>Feedback Component</h2>
        <hr />
        <TransitionAlerts />
        <br /><br />
        <DescriptionAlerts />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-alert/">Alert</a>
        <hr />
        <SimpleBackdrop />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-backdrop/">Backdrop</a>
        <hr />
        <AlertDialogSlide /><br /><br />
        <DraggableDialog />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-dialog/">Dialog</a>
        <hr />
        <CircularWithValueLabel /><br /><br />
        <CircularIntegration />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-progress/">Progress</a>
        <hr />
        <SkeletonTypography />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-skeleton/">Skeleton</a>
        <hr />
        <FabIntegrationSnackbar />
        <br /><br />
        <IntegrationNotistack />
        <br /><br />
        For more info: <a href="https://mui.com/material-ui/react-snackbar/">Snackbar</a>
        <hr />
        </>
    )
}

export default Feedback