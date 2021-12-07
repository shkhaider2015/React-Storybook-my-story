import React, { useEffect, useRef, useState } from "react";

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
  options: string[];
  setFieldValue: Function
}

const GoldiAutoCompleteInput = ({
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
  options,
  setFieldValue
}: propType) => {
  const [isExpand, setIsExpand] = useState<boolean>();
  const [searchField, setSearchField] = useState<string[]>(options);

  const ref = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: string) => {
      setFieldValue(id, item)
      setIsExpand(false)
    
  };


  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsExpand(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(
    () => {
      let temp = options.filter((item) => item.includes(value))
      setSearchField(temp);
      // eslint-disable-next-line
    }, [value]
  )
  
  return (
    <div className="root-root">
      
      <div
        onClick={() => (onClick ? onClick() : "")}
        className={`input-root 
         ${isSelect ? "selected" : ""} 
         ${isError ? "error" : ""} 
         `}
        style={{ width: width, height: height }}
      >
        {Prefix && <Prefix className="prefix" />}
        <input
          id={id}
          value={value}
          className={`input-field ${Prefix ? "isPrefix" : ""}`}
          type="text"
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          onFocus={() => setIsExpand(true)}
          autoComplete="off"
        />
      </div>
      <div className="dropdown">
        {isExpand && (
          <div
            ref={ref}
            className={`autocomplete ${
              options?.length > 0 ? "autocomplete-shadow" : ""
            }  `}
          >
            {/* sdsdsdsd */}
            {searchField.map((item, index) => (
              <div key={index} onClick={(e) => handleItemClick(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
        {}
      </div>
    </div>
  );
};

export default GoldiAutoCompleteInput;
