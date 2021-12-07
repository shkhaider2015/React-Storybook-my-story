
import React, { useState } from "react";
import "./index.css";

interface propType {
  id?: string;
  width?: string;
  height?: string;
  Prefix?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: Function;
  onChange: Function;
  onBlur: Function;
  value: string;
  isTouched?: boolean | undefined;
  isError?: string | undefined;
  isSelect?: boolean | undefined;
  autoCompleteValues?: string[]
  type?: "text"|"password"
}

const GoldiInput = ({
  id,
  width,
  height,
  Prefix,
  isSelect,
  isError,
  onClick,
  onChange,
  onBlur,
  value,
  type
}: propType) => {

  const [isShow, setIShow] = useState<boolean>(false);
   
  return (<div
        onClick={() => (onClick ? onClick() : "")}
        className={`input-root 
         ${isSelect ? "selected" : ""} 
         ${isError ? "error" : ""} 
         `}
        // style={{ width: width, height: height }}
      >
        {Prefix && <Prefix className="prefix" />}
        <input
          id={id}
          value={value}
          className={`input-field ${Prefix ? "isPrefix" : ""}`}
          type={isShow ? "text" : type }
          onChange={(e) => onChange(e) }
          onBlur={(e) => onBlur(e) }
        />
        <div className="postfix" onClick={() => setIShow(!isShow) } >
          {
            type === "password"
            ? isShow 
                ? "Hide" 
                : "Show"
            : null
          }
        </div>
      </div>
  );
};

export default GoldiInput;
