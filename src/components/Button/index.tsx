
import "./index.css";
import React from "react";

interface propType {
    text: string
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    onClick: Function
    disable?: boolean | undefined
    outlined?: boolean
}



const GoldiButton = ({ text, Icon, onClick, disable, outlined }:propType) => {

    return <div  className={`btn-root ${outlined ? "btn-outlined" : "btn-contained"} 
                    ${disable ? "disable" : ""} 
                    `} onClick={() => disable ? '' : onClick() } >
        {
            Icon && (<div className="btn-icon-root" >
            <Icon className="btn-icon" />
        </div>)
        }
        <div className="btn-text-root" >
            <span className="btn-text" > {text} </span>
        </div>
    </div>
}

export default GoldiButton;