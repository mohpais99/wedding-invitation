import React from 'react'
import bg13 from 'assets/img/bg-13.jpeg';
import bgresponsive from 'assets/img/cc.jpeg';
function ThanksPage(props) {
    return (
        <div id="datepage" className="section d-flex align-items-center banner--img font-dekko" style={{backgroundImage: `url(${props.width > 769 ? bg13 : bgresponsive})`}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto py-2 text-center">
                        <div className="card">
                            <div className="card-body border">
                                <h4>Demikian undangan ini kami sampaikan, kami berharap anda sekeluarga dapat menghadiri acara pernikahan kami!! :)</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThanksPage
