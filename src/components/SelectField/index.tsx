import "./index.css";

interface propType {
    id?:string
    width?: string 
    height?: string
    Prefix?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    onClick?: Function
    onChange: Function
    onBlur: Function
    value: string
    values: string[]
    isTouched?: boolean | undefined
    isError?: string | undefined
    isSelect?: boolean | undefined
}

const GoldiSelect = ({ 
    id, value, values, width, height,
    isError, isSelect, isTouched,
    onClick, onChange, onBlur
}:propType) => {

    return <div
             className={`select-root ${isSelect ? "selected" : "" } 
             ${isError ? "error" : "" } 
             `}
             style={{
                width,
                height
             }}
             >

            <select
                 className="select-element" 
                 name={id} 
                 id={id}
                 value={value}
                 onClick={() => onClick ? onClick() : '' }
                 onChange={(e) => onChange(e)}
                 onBlur={(e) => onBlur(e)}
                 >
                     <option value="" selected disabled hidden>Choose here</option>
                {
                    values?.map(
                        (item:string, index:number) => <option key={index} value={item} >{item}</option>
                    )
                }
            </select>
    </div>
}

export default GoldiSelect;