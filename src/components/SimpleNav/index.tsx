import "./index.css";
import { ReactComponent as CrossIcon } from "../../images/icons/crossCircleVec.svg";
import { ReactComponent as AppIcon } from "../../images/app_icon.svg";

interface propType {
    text: string
    onClick: Function
}

const SimpleNav = ({ text, onClick }:propType) => {

    return <div className="simple-nav-root" >
            <div className="simple-nav-left" >
                <div className="nav-item" >
                    <AppIcon className="app-icon" />
                    <h1>Goldi</h1>
                </div>
                <span className="nav-text" >
                    { text }
                </span>
            </div>
            <div className="simple-nav-right" >
                <CrossIcon className="cross-icon" onClick={() => onClick()} />
            </div>
    </div>
}

export default SimpleNav;