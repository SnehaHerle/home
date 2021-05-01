import React, { useState, useEffect, Profiler } from "react";
import MetricStream from '../../editable-stuff/metricstream-logo.png'
import Fibonalabs from '../../editable-stuff/Fibonalabs.png'
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };

  const colStyle = {
    flex: 1,
    padding: '16px',
    height: '526px',
    width: '480px'
  }
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            <div className="row" style={divStyle}>
                <div className="col text-center" style={colStyle}>
                    <img
                        src={Fibonalabs}
                        alt="Fibonalabs logo"
                        width="420"
                        height="100"
                    />
                    <br/><br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Development Engineer - 1
                        <br/>
                        January 2021 - Present
                    </p>
                    <p className="lead text-center" style={{fontSize:'15px', fontStyle:'italic', color:'#1976d2'}}>
                    Received the Standout Performer Award for FY'21 Q4 for outstanding work as a Developer for Smile Genius Project by learning new technologies and implementing them quickly, and also for interacting and co-ordinating closely with the whole team.
                    </p>
                    {
                    <p className="lead text-center" style={{fontSize:'15px', fontStyle:'italic'}}>
                    At Fibonalabs, I am currently working as a SDE-1 (Backend) where I am using Serverless Node.js to implement projects and also using AWS Cloud technologies like AWS SAM, RDS, DynamoDB, S3, Cognito, Lambda, API Gateway, CodeCommit, SES, and CloudFormation. I am also working on the integration of 3rd party tools like Twilio, Stripe, and Firebase. I am also closely coordinating with the project team and also mentoring interns.
                    <br/>
                    </p>
                    }
                </div>
                <div className="col text-center" style={colStyle}>
                    <img
                        src={MetricStream}
                        alt="metricstream logo"
                        width="420"
                        height="100"
                    />
                    <br/><br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Developer 
                        <br/>
                        September 2018 - December 2020
                    </p>
                    <p className="lead text-center" style={{fontSize:'15px', fontStyle:'italic', color:'#1976d2'}}>
                    Received the SPOT Award for FY'21 Q1 for outstanding work as a Developer for 2 projects - Amedisys and NBS.
                    </p>
                    {
                    <p className="lead text-center" style={{fontSize:'15px', fontStyle:'italic'}}>
                    "Sneha has been key member on NBS and Amedisys project, she has contributed to fixing critical defects and fronting customer, she has been interacting with them and has gained customer confidence. Sneha has worked on many of the S1 and S2 tickets. She demonstrated excellent functional and technical understanding of the projects she is working. This nomination is mainly for her excellent job done in ensuring quality, minimal rework and delivering on time and quality release on the fix related to critical projects like NBS and Amedisys."
                    <br/>
                    ~ Ramesh Surabathula (Technical Manager @MetricStream)
                    </p>
                    }

                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;