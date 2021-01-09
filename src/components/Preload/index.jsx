import React from 'react';
import './style.css';
// import wait from 'assets/img/please_wt.gif';

function Preload() {
    return (
        <div className="wrapper-loading d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto py-2 text-center">
                        {/* <img className="w-100" src={wait} alt="please-wait..."/> */}
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
