
import "./index.css";
import React from "react";

interface propType {
    text: string
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    onClick: Function
    disable?: boolean | undefined
    outlined?: boolean
}
interface IStyle {
    btnRoot: {
        display: string,
        justifyContent: string,
        borderRadius: string,
        height: string,
        paddingLeft: string,
        paddingRight: string,
        transition: string
    },
    btnOutlined: {
        backgroundColor: string,
        border: string,
        color: string
    },
    btnContained: {
        backgroundColor: string
    },
    btnDisable: {
        backgroundColor: string
    },
    btnIcon: {
        fill: string,
        width: string,
        height: string,
        marginTop: string,
        marginBottom: string
    },
    btnTextRoot: {
        marginTop: string,
        marginBottom: string
    },
    btnText: {
        fontSize: string,
        fontWeight: string,
        paddingLeft: string
    }
}
const style:IStyle = {
    btnRoot: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        height: '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        transition: 'background-color .2s'
    },
    btnOutlined: {
        backgroundColor: '#ffffff',
        border: '1px solid #1B4238',
        color: '#1B4238'
    },
    btnContained: {
        backgroundColor: '#FFBF30'
    },
    btnDisable: {
        backgroundColor: '#d3b575'
    },
    btnIcon: {
        fill: '#000000',
        width: '14px',
        height: '12px',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    btnTextRoot: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    btnText: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingLeft: '2px'
    }
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