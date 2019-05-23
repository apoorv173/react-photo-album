import React from "react";
import {ROW_COUNT} from '../../actions/constants';

const DataTable = ({onCountChange, rowCount}) => {
    
    return (
        <nav aria-label="Page rows">
            <h4 className="d-inline-block">Rows per page: </h4>
            <span>{`    `}</span>
            <select className="form-control select-wrapper d-inline-block"
                onChange={(event) => onCountChange(event.target.value)}
                value={rowCount}
            >
                {ROW_COUNT.map(count => <option value={count} key={count}>{count}</option>)}
            </select>
        </nav>
    )
};

export default DataTable;
