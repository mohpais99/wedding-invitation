import React from 'react';
import './style.css';

function Preload() {
    return (
        <div className="wrapper-loading d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto py-2 text-center">
                            <div className="spinner-grow text-success mr-1" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-success mr-1" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-success mr-1" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preload
