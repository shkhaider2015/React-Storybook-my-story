import RotateX from "./Elements/RotateX";
import ScaleDown from "./Elements/ScaleDown";
import "./index.css";

const DropDown = () => {
    return <div className="dropdown-root" >
           <div className="element" >
           <ScaleDown />
           </div>
           <div className="element" >
           <RotateX />
           </div>
    </div>
}

export default DropDown;