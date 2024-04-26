import NestedModal from "./components/Utils_components/Modal"
import DisabledPortalPopup from "./components/Utils_components/Popup"
import SimplePortal from "./components/Utils_components/Portal"
import MaxHeightTextarea from "./components/Utils_components/Textarea"
import ReactTransitionGroup from "./components/Utils_components/Transition"

function Utils(){
    return(
        <>
        <h2>Utils Component</h2>
        <hr />
        <NestedModal />
        <br />
        For more info: <a href="https://mui.com/base-ui/react-modal/">Modal</a>
        <hr />
        <DisabledPortalPopup />
        <br />
        For more info: <a href="https://mui.com/base-ui/react-popup/">Popper / PopUp</a>
        <hr />
        <SimplePortal />
        <br />
        For more info: <a href="https://mui.com/base-ui/react-portal/">Portal</a>
        <hr />
        <MaxHeightTextarea />
        <br />
        For more info: <a href="https://mui.com/base-ui/react-textarea-autosize/">TextArea AutoSize</a>
        <hr />
        <ReactTransitionGroup />
        <br />
        For more info: <a href="https://mui.com/base-ui/react-transitions/">Transtitions</a>
        <hr />
        </>
    )
}

export default Utils