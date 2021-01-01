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
                        September 2018 - December 2020
                    </p>
                    <p className="lead text-center" style={{fontSize:'22px', fontStyle:'italic', color:'#1976d2'}}>
                    Received the SPOT Award for FY'21 Q1 for outstanding work as a Developer for 2 projects - Amedisys and NBS.
                    </p>
                    {
                    <p className="lead text-center" style={{fontSize:'22px', fontStyle:'italic'}}>
                    "Sneha has been key member on NBS and Amedisys project, she has contributed to fixing critical defects and fronting customer, she has been interacting with them and has gained customer confidence. Sneha has worked on many of the S1 and S2 tickets. She demonstrated excellent functional and technical understanding of the projects she is working. This nomination is mainly for her excellent job done in ensuring quality, minimal rework and delivering on time and quality release on the fix related to critical projects like NBS and Amedisys."
                    <br/>
                    ~ Ramesh Surabathula (Technical Manager @MetricStream)
                    </p>
                    }
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