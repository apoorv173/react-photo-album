import React, { Fragment } from 'react';

const ModalWindow =({ children, onClose }) =>  {
    return (
        <Fragment>
            <div className="modal-parent"></div>
            <div className="modal is-open" role="dialog" aria-modal="true">
                <div className="modal-container">
                    {children}
                    <button type="button" className="modal-close" aria-label="Close" onClick={() => onClose()}>X
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalWindow;

