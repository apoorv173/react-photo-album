

import React from "react";

const Pagination = ({prevDisabled, nextDisabled, onPrevClick, onNextClick}) => {
    
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="left">
                    <button
                        disabled={prevDisabled ? 'disabled' : ''} 
                        aria-label="Previous"
                        className="btn btn-primary prev-btn"
                        onClick={onPrevClick}
                    > 
                        <span aria-hidden="true">Previous</span>
                    </button>
                </li>
                
                <li className="right">
                    <button
                        disabled={nextDisabled ? 'disabled' : ''}
                        aria-label="Next"
                        className="btn btn-primary next-btn"
                        onClick={onNextClick}
                    >
                        <span aria-hidden="true">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
};

export default Pagination;
