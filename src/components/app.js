import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var turn = 1;
    function cOne() {
      if (car.rSixcOne == false && turn == 1) {
        document.getElementById("6").style.backgroundColor = "green";
        turn = 2;
        car.rSixcOne = true;
      }
    }
    var turn = 1;
    var car = {
      rOnecOne: false,
      rTwocOne: false,
      rThreecOne: false,
      rFourcOne: false,
      rFivecOne: false,
      rSixcOne: false,

      rOnecTwo: false,
      rTwocTwo: false,
      rThreecTwo: false,
      rFourcTwo: false,
      rFivecTwo: false,
      rSixcTwo: false,

      rOnecThree: false,
      rTwocThree: false,
      rThreecThree: false,
      rFourcThree: false,
      rFivecThree: false,
      rSixcThree: false,

      rOnecFour: false,
      rTwocFour: false,
      rThreecFour: false,
      rFourcFour: false,
      rFivecFour: false,
      rSixcFour: false,

      rOnecFive: false,
      rTwocFive: false,
      rThreecFive: false,
      rFourcFive: false,
      rFivecFive: false,
      rSixcFive: false,

      rOnecSix: false,
      rTwocSix: false,
      rThreecSix: false,
      rFourcSix: false,
      rFivecSix: false,
      rSixcSix: false,

      rOnecSeven: false,
      rTwocSeven: false,
      rThreecSeven: false,
      rFourcSeven: false,
      rFivecSeven: false,
      rSixcSeven: false, 
    }

    

    return (
      <div className="container">
        <div className="top">
          <h1>Connect Four</h1>
          <h3>Player One's Turn</h3>
        </div>
        <div className="middle">
          <div className="block row__one column__one">
          </div>
          <div className="block row__two column__one">
          </div>
          <div className="block row__three column__one">
          </div>
          <div className="block row__four column__one">
          </div>
          <div className="block row__five column__one">
          </div>
          <div id="6" className="block row__six column__one">
          </div>
          <div className="block row__one column__two">
          </div>
          <div className="block row__two column__two">
          </div>
          <div className="block row__three column__two">
          </div>
          <div className="block row__four column__two">
          </div>
          <div className="block row__five column__two">
          </div>
          <div className="block row__six column__two">
          </div>
          <div className="block row__one column__three">
          </div>
          <div className="block row__two column__three">
          </div>
          <div className="block row__three column__three">
          </div>
          <div className="block row__four column__three">
          </div>
          <div className="block row__five column__three">
          </div>
          <div className="block row__six column__three">
          </div>
          <div className="block row__one column__four">
          </div>
          <div className="block row__two column__four">
          </div>
          <div className="block row__three column__four">
          </div>
          <div className="block row__four column__four">
          </div>
          <div className="block row__five column__four">
          </div>
          <div className="block row__six column__four">
          </div>
          <div className="block row__one column__five">
          </div>
          <div className="block row__two column__five">
          </div>
          <div className="block row__three column__five">
          </div>
          <div className="block row__four column__five">
          </div>
          <div className="block row__five column__five">
          </div>
          <div className="block row__six column__five">
          </div>
          <div className="block row__one column__six">
          </div>
          <div className="block row__two column__six">
          </div>
          <div className="block row__three column__six">
          </div>
          <div className="block row__four column__six">
          </div>
          <div className="block row__five column__six">
          </div>
          <div className="block row__six column__six">
          </div>
          <div className="block row__one column__seven">
          </div>
          <div className="block row__two column__seven">
          </div>
          <div className="block row__three column__seven">
          </div>
          <div className="block row__four column__seven">
          </div>
          <div className="block row__five column__seven">
          </div>
          <div className="block row__six column__seven">
          </div>


          <button onClick={() =>cOne()} className="trig column__one__button">
          </button>
          <button className="trig column__two__button">
          </button>
          <button className="trig column__three__button">
          </button>
          <button className="trig column__four__button">
          </button>
          <button className="trig column__five__button">
          </button>
          <button className="trig column__six__button">
          </button>
          <button className="trig column__seven__button">
          </button>

        </div>
        <div className="bottom">
          <p>Created by Devin Frandsen, no copyright intended.</p>
        </div>
      </div>
    );
  }
}
