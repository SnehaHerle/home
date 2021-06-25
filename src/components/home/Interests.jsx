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
  const colStyle = {
    flex: 1,
    padding: '16px',
    height: '450px',
    width: '148px'
  }
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            <div className="row" style={divStyle}>
                <div className="col text-center" style={colStyle}>
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://img.icons8.com/nolan/128/saving-book.png"/>
                <p className="lead text-center" style={{fontSize:'15px'}}>I've been a voracious reader since childhood. You'll always find me with a book. Non-fiction is my favourite. Check out what I've been reading on <a href="https://www.goodreads.com/user/show/57196887-sneha-herle" target="_blank">Goodreads</a>! Would love to hear about your favorite book.</p>
                </div>
                <div className="col text-center" style={colStyle}>
                <p className="lead text-center" style={{fontSize:'28px'}}>Writing</p>
                <img src="https://img.icons8.com/nolan/128/pen.png"/>
                <p className="lead text-center" style={{fontSize:'15px'}}>I've always loved to write blogs. I'm someone who conveys better through writing. Check out what I've been writing on <a href="https://www.quora.com/profile/Sneha-Herle" target="_blank">Quora</a>, <a href="https://sneha-herle.medium.com/" target="_blank">Medium</a> and <a href="https://blog.fibonalabs.com/author/sneha/" target="_blank">Fibonalabs Blog</a>. Do let me know if you loved one of my writings.</p>
                </div>  
                <div className="col text-center" style={colStyle}>
                <p className="lead text-center" style={{fontSize:'28px'}}>Walking</p>
                <img src="https://img.icons8.com/nolan/128/exercise.png"/>
                <p className="lead text-center" style={{fontSize:'15px'}}>I love going on long walks in parks all by myself. While walking I enjoy observing the birds, butterflies and touching the barks of trees and the soft leaves. It is my panacea and a way to keep myself calm.</p>                
                </div>
                <div className="col text-center" style={colStyle}>
                <p className="lead text-center" style={{fontSize:'28px'}}>Art</p>
                <img src="https://img.icons8.com/nolan/128/paint-palette.png"/>
                <p className="lead text-center" style={{fontSize:'15px'}}>Although I'm not a good painter, I paint sometimes just for fun. Something is calming about drawing symmetrical designs or painting scenery with myriad hues. Check out my <a href="https://in.pinterest.com/snehaherle/my-paintings-rangoli-designs/" target="_blank">Pinterest Art Board</a> for paintings!</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
