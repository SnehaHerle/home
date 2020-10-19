import React, { useState, useEffect, Profiler } from "react";
import MetricStream from '../../editable-stuff/metricstream-logo.png'
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={MetricStream}
                        alt="metricstream logo"
                        width="420"
                        height="70"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Developer 
                        <br/>
                        September 2018 - Present
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;