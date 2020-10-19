import React, { useState, useEffect, Profiler } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import {
    aboutHeading,
    aboutDescription,
    showInstaProfilePic,
    instaLink,
    instaUsername,
    instaQuerry,
  } from "../../editable-stuff/configurations.json";
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {/* <p className="lead text-center">
              Outside of software engineering, I love to meditate, read, and play soccer!
            </p><br/> */}
            <div className="row" style={divStyle}>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://img.icons8.com/nolan/128/saving-book.png"/>
                <p className="lead text-center">
                  I have been a voracious reader since childhood. Non-fiction books are my favorites. Check out what I've been reading on <a href="https://www.goodreads.com/user/show/57196887-sneha-herle" target="_blank">Goodreads</a>!
                </p>
                </div>
                <div className="col text-center" >
                <p className="lead text-center" style={{fontSize:'28px'}}>Writing</p>
                <img src="https://img.icons8.com/nolan/128/pen.png"/>
                <p className="lead text-center">
                  I love to write blogs describing how I feel about something and what was my experience. Check out what I've been writing on <a href="https://www.quora.com/profile/Sneha-Herle" target="_blank">Quora</a> and <a href="https://medium.com/@sneha.herle" target="_blank">Medium</a>.
                </p>
                </div>
                
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Walking</p>
                <img src="https://img.icons8.com/nolan/128/exercise.png"/>
                <p className="lead text-center">
                  I love going on long walks in parks all by myself. It calms me and helps in organising my thoughts. 
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Art</p>
                <img src="https://img.icons8.com/nolan/128/paint-palette.png"/>
                <p className="lead text-center">
                  Although I am not a very good painter, I paint sometimes on weekends just for the joy it provides me.
                </p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
