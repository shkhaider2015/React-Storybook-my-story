import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {ReactComponent as ChevronLeftIcon} from "../../images/icons/chevronLeftVec.svg";
import {ReactComponent as ChevronRightIcon} from "../../images/icons/chevronRightVec.svg";

interface propTypes {
  tableData: {
    headers: string[];
    data: string[][];
  };
}

const TableComp = ({ tableData }: propTypes) => {
  const [selectedRow, setSelectedRow] = useState<number>(-1);
  const [rowsPerPage, setRowsPerPage] = useState<string>("5");
  const [pageNo, setPageNo] = useState<number>(1);
  const [startInd, setStartInd] = useState<number>(0)
  const [endInd, setEndInd] = useState<number>(parseInt(rowsPerPage));

  const handlePageNumber = (val:"next"|"back") => {
    if(tableData?.data?.length <= 0) return
    let totalPages:number = tableData?.data?.length / parseInt(rowsPerPage)
    if(val === "next")
    {
      if(tableData?.data?.length <= 5) return
      if(pageNo === totalPages) return;

      setPageNo(pageNo + 1);
      setStartInd(startInd + parseInt(rowsPerPage));
      setEndInd(endInd + parseInt(rowsPerPage))
    }

    if(val === "back")
    {
      if(pageNo === 1) return

      setPageNo(pageNo - 1)
      setStartInd(startInd - parseInt(rowsPerPage));
      setEndInd(endInd - parseInt(rowsPerPage) )
    }
  }

  useEffect(
    () => {
      setEndInd(parseInt(rowsPerPage))
    }, [rowsPerPage]
  )

  return (
    <table className="table-root">
      {/* Header */}
      <thead>
        <tr className="table-row-head">
          {tableData?.headers?.map((item: string, index: number) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      {/* Rows */}
      <tbody>
        {tableData?.data?.slice(startInd, endInd).map((item: string[], index: number) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "table-row-even" : "table-row-odd"}
                     ${selectedRow === index ? "selected" : ""}
                     `}
            onClick={() => setSelectedRow(index)}
            >
            {item?.map((item: string, indexJ: number) => {

              if(indexJ === 0) return <td key={index + indexJ}  > <Link style={{ textDecoration : "none", color: 'black' }} to={`/clients/${item}`} >{item}</Link>  </td>
              return <td key={index + indexJ}  >{item}</td>

            })}
          </tr>
        ))}
      </tbody>

      {/* footer */}
      <tfoot style={{ borderTop: '1px solid gray' }} >
        <tr>
          <td className="cell-1" colSpan={4}>
            <span>Rows per page</span>
            <select
              name="pages"
              id="pages"
              value={rowsPerPage}
              onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setRowsPerPage(e?.target?.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </td>
          <td className="cell-2">
            <span>{startInd}-{endInd} of {tableData?.data?.length} items</span>
          </td>
          <td className="cell-3">
            <div>
               <ChevronLeftIcon
                 fillOpacity={.25} 
                 className="chevron-left" 
                 onClick={() => handlePageNumber("back") }
                 />
            </div>
            <div>
              <ChevronRightIcon
                 fillOpacity={.25} 
                 className="chevron-left" 
                 onClick={() => handlePageNumber("next") }
                 />
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TableComp;
