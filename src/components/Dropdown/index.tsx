import RotateY from "./Elements/RotateY";
import ScaleDown from "./Elements/ScaleDown";
import TranslateY from "./Elements/TranslateY";
import "./index.css";

const DropDown = () => {
  return (
    <div className="dropdown-root">
      <div className="element">
        <ScaleDown />
      </div>
      <div className="element">
        <RotateY />
      </div>
      <div className="element">
        <TranslateY />
      </div>
    </div>
  );
};

export default DropDown;
