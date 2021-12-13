import React from "react";
import styled from "styled-components";

interface propType {
    text: string
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    onClick: Function
    disable?: boolean | undefined
    outlined?: boolean
}



const HaiderButton = ({ text, Icon, onClick, disable, outlined }:propType) => {

    return <ButtonWrapper variant={outlined} disabled={disable} >
        <div  className={`btn-root
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
    </ButtonWrapper>
}

export default HaiderButton;

interface IStyled {
    readonly variant: boolean | undefined
    readonly disabled: boolean | undefined
}
const ButtonWrapper = styled.div<IStyled>`
    
.btn-root {
    display: flex;
    justify-content: center;
    border-radius: 10px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${props => props.variant ? "#FFFFFF" : "#FFBF30" };
    opacity: ${props => props.disabled ? ".6" : "1" };
    color: ${props => props.variant ? "#1B4238" : "#000000" };
    border: ${props => props.variant ? "1px solid #1B4238" : "none" };
    transition: background-color .2s;
}

.btn-contained.disable {
    background-color: #d3b575;
}


.btn-root .btn-icon-root {
    margin-top: auto;
    margin-bottom: auto;
}
.btn-root .btn-icon-root .btn-icon {
    fill: #000000;
    width: 14px;
    height: 12px;
}

.btn-root .btn-text-root {
    margin-top: auto;
    margin-bottom: auto;
}
.btn-root .btn-text-root .btn-text {
    font-size: 14px;
    font-weight: bold;
    padding-left: 2px;
}

.btn-contained:hover {
    background-color: #d18f00;
    cursor: pointer;
}
.btn-contained.disable:hover {
    background-color: #d3b575;
    cursor: auto;
}

.btn-outlined:hover {
    background-color: #E5E5E5;
    cursor: pointer;
}
`;