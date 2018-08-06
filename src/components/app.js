import React, { Component } from 'react';

export default class App extends Component {
  render() {

    var turn = 0;
    var colorOne = "Green"
    var colorTwo = "Red"
    var stringPartOne = "Player "
    var stringPartTwo = turn.toString();
    var stringPartThree = "'s Turn"
    var stringPartFour = "Player One Wins!"
    var stringPartFive = "Player Two Wins!"
    var playerOneChosen = false;
    var playerTwoChosen = false;

    var car = {
      rOnecOne: 0,
      rTwocOne: 0,
      rThreecOne: 0,
      rFourcOne: 0,
      rFivecOne: 0,
      rSixcOne: 0,

      rOnecTwo: 0,
      rTwocTwo: 0,
      rThreecTwo: 0,
      rFourcTwo: 0,
      rFivecTwo: 0,
      rSixcTwo: 0,

      rOnecThree: 0,
      rTwocThree: 0,
      rThreecThree: 0,
      rFourcThree: 0,
      rFivecThree: 0,
      rSixcThree: 0,

      rOnecFour: 0,
      rTwocFour: 0,
      rThreecFour: 0,
      rFourcFour: 0,
      rFivecFour: 0,
      rSixcFour: 0,

      rOnecFive: 0,
      rTwocFive: 0,
      rThreecFive: 0,
      rFourcFive: 0,
      rFivecFive: 0,
      rSixcFive: 0,

      rOnecSix: 0,
      rTwocSix: 0,
      rThreecSix: 0,
      rFourcSix: 0,
      rFivecSix: 0,
      rSixcSix: 0,

      rOnecSeven: 0,
      rTwocSeven: 0,
      rThreecSeven: 0,
      rFourcSeven: 0,
      rFivecSeven: 0,
      rSixcSeven: 0, 
    }

    function winnersAre(winner, idOne, idTwo, idThree, idFour) {
      if (winner == 1) {
        document.getElementById("43").innerHTML = stringPartFour;
      } else if (winner == 2) {
        document.getElementById("43").innerHTML = stringPartFive;
      }
      document.getElementById(idOne).style.backgroundColor = "Orange";
      document.getElementById(idTwo).style.backgroundColor = "Orange";
      document.getElementById(idThree).style.backgroundColor = "Orange";
      document.getElementById(idFour).style.backgroundColor = "Orange";
      turn = 0;
      document.getElementById("44").style.zIndex = "3";
    }

    function playGame() {
      document.getElementById("49").style.zIndex = "-2"
      document.getElementById("50").style.zIndex = "-2"
      document.getElementById("51").style.zIndex = "-2"
      document.getElementById("52").style.zIndex = "-2"
      document.getElementById("53").style.zIndex = "-2"
      document.getElementById("54").style.zIndex = "-2"
      document.getElementById("55").style.zIndex = "-2"
      document.getElementById("56").style.zIndex = "-2"
      document.getElementById("45").style.zIndex = "-2"
      document.getElementById("46").style.zIndex = "-2"
      document.getElementById("47").style.zIndex = "-2"
      document.getElementById("48").style.zIndex = "-2"
      turn = 1;
    }

    function pOneGreen() {
      if (playerOneChosen == false) {
        document.getElementById("50").style.zIndex = "-2";
        document.getElementById("51").style.zIndex = "-2";
        document.getElementById("52").style.zIndex = "-2";
        document.getElementById("55").style.zIndex = "-2";
        playerOneChosen = true;
        colorOne = "Green";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function pOneRed() {
      if (playerOneChosen == false) {
        document.getElementById("49").style.zIndex = "-2";
        document.getElementById("51").style.zIndex = "-2";
        document.getElementById("53").style.zIndex = "-2";
        document.getElementById("55").style.zIndex = "-2";
        playerOneChosen = true;
        colorOne = "Red";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function pOneYellow() {
      if (playerOneChosen == false) {
        document.getElementById("49").style.zIndex = "-2";
        document.getElementById("50").style.zIndex = "-2";
        document.getElementById("54").style.zIndex = "-2";
        document.getElementById("55").style.zIndex = "-2";
        playerOneChosen = true;
        colorOne = "Yellow";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function pTwoGreen() {
      if (playerTwoChosen == false) {
        document.getElementById("53").style.zIndex = "-2";
        document.getElementById("54").style.zIndex = "-2";
        document.getElementById("49").style.zIndex = "-2";
        document.getElementById("56").style.zIndex = "-2";
        playerTwoChosen = true;
        colorTwo = "Green";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function pTwoRed() {
      if (playerTwoChosen == false) {
        document.getElementById("52").style.zIndex = "-2";
        document.getElementById("54").style.zIndex = "-2";
        document.getElementById("56").style.zIndex = "-2";
        document.getElementById("50").style.zIndex = "-2";
        playerTwoChosen = true;
        colorTwo = "Red";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function pTwoYellow() {
      if (playerTwoChosen == false) {
        document.getElementById("52").style.zIndex = "-2";
        document.getElementById("53").style.zIndex = "-2";
        document.getElementById("56").style.zIndex = "-2";
        document.getElementById("51").style.zIndex = "-2";
        playerTwoChosen = true;
        colorTwo = "Yellow";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function pOneTeal() {
      if (playerOneChosen == false) {
        document.getElementById("49").style.zIndex = "-2";
        document.getElementById("50").style.zIndex = "-2";
        document.getElementById("51").style.zIndex = "-2";
        document.getElementById("56").style.zIndex = "-2";
        playerOneChosen = true;
        colorOne = "Teal";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function pTwoTeal() {
      if (playerTwoChosen == false) {
        document.getElementById("52").style.zIndex = "-2";
        document.getElementById("53").style.zIndex = "-2";
        document.getElementById("54").style.zIndex = "-2";
        document.getElementById("55").style.zIndex = "-2";
        playerTwoChosen = true;
        colorTwo = "Teal";
      }
      if (playerOneChosen == true && playerTwoChosen == true) {
        playGame();
      }
    }

    function restartGame() {
      document.getElementById("44").style.zIndex = "-3";
      document.getElementById("43").innerHTML = "Player 1's Turn";
      car.rOnecOne = 0;
      car.rTwocOne = 0;
      car.rThreecOne = 0;
      car.rFourcOne = 0;
      car.rFivecOne = 0;
      car.rSixcOne = 0;

      car.rOnecTwo = 0;
      car.rTwocTwo = 0;
      car.rThreecTwo = 0;
      car.rFourcTwo = 0;
      car.rFivecTwo = 0;
      car.rSixcTwo = 0;

      car.rOnecThree = 0;
      car.rTwocThree = 0;
      car.rThreecThree = 0;
      car.rFourcThree = 0;
      car.rFivecThree = 0;
      car.rSixcThree = 0;

      car.rOnecFour = 0;
      car.rTwocFour = 0;
      car.rThreecFour = 0;
      car.rFourcFour = 0;
      car.rFivecFour = 0;
      car.rSixcFour = 0;

      car.rOnecFive = 0;
      car.rTwocFive = 0;
      car.rThreecFive = 0;
      car.rFourcFive = 0;
      car.rFivecFive = 0;
      car.rSixcFive = 0;

      car.rOnecSix = 0;
      car.rTwocSix = 0;
      car.rThreecSix = 0;
      car.rFourcSix = 0;
      car.rFivecSix = 0;
      car.rSixcSix = 0;

      car.rOnecSeven = 0;
      car.rTwocSeven = 0;
      car.rThreecSeven = 0;
      car.rFourcSeven = 0;
      car.rFivecSeven = 0;
      car.rSixcSeven = 0;
      var i = 1;
      while (i <= 42) {
        document.getElementById(i).style.backgroundColor = "#8f8f8f";
        i = i + 1
      }
      i = 0
      playerOneChosen = false;
      playerTwoChosen = false;
      turn = 0;
      document.getElementById("49").style.zIndex = "2";
      document.getElementById("50").style.zIndex = "2";
      document.getElementById("51").style.zIndex = "2";
      document.getElementById("52").style.zIndex = "2";
      document.getElementById("53").style.zIndex = "2";
      document.getElementById("54").style.zIndex = "2";
      document.getElementById("55").style.zIndex = "2";
      document.getElementById("56").style.zIndex = "2";
      document.getElementById("45").style.zIndex = "2";
      document.getElementById("46").style.zIndex = "2";
      document.getElementById("47").style.zIndex = "2";
      document.getElementById("48").style.zIndex = "2";
    }

    function checkForFour() {
      stringPartTwo = turn.toString()
      document.getElementById("43").innerHTML = stringPartOne.concat(stringPartTwo, stringPartThree)
      //horizontal player 1
      if (car.rSixcOne == 1 && car.rSixcTwo == 1 && car.rSixcThree == 1 && car.rSixcFour == 1) {winnersAre(1, "6", "12", "18", "24")}
      if (car.rSixcTwo == 1 && car.rSixcThree == 1 && car.rSixcFour == 1 && car.rSixcFive == 1) {winnersAre(1, "30", "12", "18", "24")}
      if (car.rSixcThree == 1 && car.rSixcFour == 1 && car.rSixcFive == 1 && car.rSixcSix == 1) {winnersAre(1, "30", "36", "18", "24")}
      if (car.rSixcFour == 1 && car.rSixcFive == 1 && car.rSixcSix == 1 && car.rSixcSeven == 1) {winnersAre(1, "30", "36", "42", "24")}
      if (car.rFivecOne == 1 && car.rFivecTwo == 1 && car.rFivecThree == 1 && car.rFivecFour == 1) {winnersAre(1, "5", "11", "17", "23")}
      if (car.rFivecTwo == 1 && car.rFivecThree == 1 && car.rFivecFour == 1 && car.rFivecFive == 1) {winnersAre(1, "11", "17", "23", "29")}
      if (car.rFivecThree == 1 && car.rFivecFour == 1 && car.rFivecFive == 1 && car.rFivecSix == 1) {winnersAre(1, "17", "23", "29", "35")}
      if (car.rFivecFour == 1 && car.rFivecFive == 1 && car.rFivecSix == 1 && car.rFivecSeven == 1) {winnersAre(1, "23", "29", "35", "41")}
      if (car.rFourcOne == 1 && car.rFourcTwo == 1 && car.rFourcThree == 1 && car.rFourcFour == 1) {winnersAre(1, "4", "10", "16", "22")}
      if (car.rFourcTwo == 1 && car.rFourcThree == 1 && car.rFourcFour == 1 && car.rFourcFive == 1) {winnersAre(1, "28", "10", "16", "22")}
      if (car.rFourcThree == 1 && car.rFourcFour == 1 && car.rFourcFive == 1 && car.rFourcSix == 1) {winnersAre(1, "28", "34", "16", "22")}
      if (car.rFourcFour == 1 && car.rFourcFive == 1 && car.rFourcSix == 1 && car.rFourcSeven == 1) {winnersAre(1, "28", "34", "40", "22")}
      if (car.rThreecOne == 1 && car.rThreecTwo == 1 && car.rThreecThree == 1 && car.rThreecFour == 1) {winnersAre(1, "3", "9", "15", "21")}
      if (car.rThreecTwo == 1 && car.rThreecThree == 1 && car.rThreecFour == 1 && car.rThreecFive == 1) {winnersAre(1, "27", "9", "15", "21")}
      if (car.rThreecThree == 1 && car.rThreecFour == 1 && car.rThreecFive == 1 && car.rThreecSix == 1) {winnersAre(1, "27", "33", "15", "21")}
      if (car.rThreecFour == 1 && car.rThreecFive == 1 && car.rThreecSix == 1 && car.rThreecSeven == 1) {winnersAre(1, "27", "33", "39", "21")}
      if (car.rTwocOne == 1 && car.rTwocTwo == 1 && car.rTwocThree == 1 && car.rTwocFour == 1) {winnersAre(1, "2", "8", "14", "20")}
      if (car.rTwocTwo == 1 && car.rTwocThree == 1 && car.rTwocFour == 1 && car.rTwocFive == 1) {winnersAre(1, "26", "8", "14", "20")}
      if (car.rTwocThree == 1 && car.rTwocFour == 1 && car.rTwocFive == 1 && car.rTwocSix == 1) {winnersAre(1, "26", "32", "14", "20")}
      if (car.rTwocFour == 1 && car.rTwocFive == 1 && car.rTwocSix == 1 && car.rTwocSeven == 1) {winnersAre(1, "26", "32", "38", "20")}
      if (car.rOnecOne == 1 && car.rOnecTwo == 1 && car.rOnecThree == 1 && car.rOnecFour == 1) {winnersAre(1, "1", "7", "13", "19")}
      if (car.rOnecTwo == 1 && car.rOnecThree == 1 && car.rOnecFour == 1 && car.rOnecFive == 1) {winnersAre(1, "25", "7", "13", "19")}
      if (car.rOnecThree == 1 && car.rOnecFour == 1 && car.rOnecFive == 1 && car.rOnecSix == 1) {winnersAre(1, "25", "31", "13", "19")}
      if (car.rOnecFour == 1 && car.rOnecFive == 1 && car.rOnecSix == 1 && car.rOnecSeven == 1) {winnersAre(1, "25", "31", "37", "19")}

      //vertical player 1
      if (car.rOnecOne == 1 && car.rTwocOne == 1 && car.rThreecOne == 1 && car.rFourcOne == 1) {winnersAre(1, "1", "2", "3", "4")}
      if (car.rFivecOne == 1 && car.rTwocOne == 1 && car.rThreecOne == 1 && car.rFourcOne == 1) {winnersAre(1, "5", "2", "3", "4")}
      if (car.rFivecOne == 1 && car.rSixcOne == 1 && car.rThreecOne == 1 && car.rFourcOne == 1) {winnersAre(1, "5", "6", "3", "4")}
      if (car.rOnecTwo == 1 && car.rTwocTwo == 1 && car.rThreecTwo == 1 && car.rFourcTwo == 1) {winnersAre(1, "7", "8", "9", "10")}
      if (car.rFivecTwo == 1 && car.rTwocTwo == 1 && car.rThreecTwo == 1 && car.rFourcTwo == 1) {winnersAre(1, "11", "8", "9", "10")}
      if (car.rFivecTwo == 1 && car.rSixcTwo == 1 && car.rThreecTwo == 1 && car.rFourcTwo == 1) {winnersAre(1, "11", "12", "9", "10")}
      if (car.rOnecThree == 1 && car.rTwocThree == 1 && car.rThreecThree == 1 && car.rFourcThree == 1) {winnersAre(1, "13", "14", "15", "16")}
      if (car.rFivecThree == 1 && car.rTwocThree == 1 && car.rThreecThree == 1 && car.rFourcThree == 1) {winnersAre(1, "17", "14", "15", "16")}
      if (car.rFivecThree == 1 && car.rSixcThree == 1 && car.rThreecThree == 1 && car.rFourcThree == 1) {winnersAre(1, "17", "18", "15", "16")}
      if (car.rOnecFour == 1 && car.rTwocFour == 1 && car.rThreecFour == 1 && car.rFourcFour == 1) {winnersAre(1, "19", "20", "21", "22")}
      if (car.rFivecFour == 1 && car.rTwocFour == 1 && car.rThreecFour == 1 && car.rFourcFour == 1) {winnersAre(1, "23", "20", "21", "22")}
      if (car.rFivecFour == 1 && car.rSixcFour == 1 && car.rThreecFour == 1 && car.rFourcFour == 1) {winnersAre(1, "23", "24", "21", "22")}
      if (car.rOnecFive == 1 && car.rTwocFive == 1 && car.rThreecFive == 1 && car.rFourcFive == 1) {winnersAre(1, "25", "26", "27", "28")}
      if (car.rFivecFive == 1 && car.rTwocFive == 1 && car.rThreecFive == 1 && car.rFourcFive == 1) {winnersAre(1, "29", "26", "27", "28")}
      if (car.rFivecFive == 1 && car.rSixcFive == 1 && car.rThreecFive == 1 && car.rFourcFive == 1) {winnersAre(1, "29", "30", "27", "28")}
      if (car.rOnecSix == 1 && car.rTwocSix == 1 && car.rThreecSix == 1 && car.rFourcSix == 1) {winnersAre(1, "31", "32", "33", "34")}
      if (car.rFivecSix == 1 && car.rTwocSix == 1 && car.rThreecSix == 1 && car.rFourcSix == 1) {winnersAre(1, "35", "32", "33", "34")}
      if (car.rFivecSix == 1 && car.rSixcSix == 1 && car.rThreecSix == 1 && car.rFourcSix == 1) {winnersAre(1, "35", "36", "33", "34")}
      if (car.rOnecSeven == 1 && car.rTwocSeven == 1 && car.rThreecSeven == 1 && car.rFourcSeven == 1) {winnersAre(1, "37", "38", "39", "40")}
      if (car.rFivecSeven == 1 && car.rTwocSeven == 1 && car.rThreecSeven == 1 && car.rFourcSeven == 1) {winnersAre(1, "41", "38", "39", "40")}
      if (car.rFivecSeven == 1 && car.rSixcSeven == 1 && car.rThreecSeven == 1 && car.rFourcSeven == 1) {winnersAre(1, "41", "42", "39", "40")}

      //diagonal player 1
      if (car.rOnecOne == 1 && car.rTwocTwo == 1 && car.rThreecThree == 1 && car.rFourcFour == 1) {winnersAre(1, "1", "8", "15", "22")}
      if (car.rOnecTwo == 1 && car.rTwocThree == 1 && car.rThreecFour == 1 && car.rFourcFive == 1) {winnersAre(1, "7", "14", "21", "28")}
      if (car.rOnecThree == 1 && car.rTwocFour == 1 && car.rThreecFive == 1 && car.rFourcSix == 1) {winnersAre(1, "13", "20", "27", "32")}
      if (car.rOnecFour == 1 && car.rTwocFive == 1 && car.rThreecSix == 1 && car.rFourcSeven == 1) {winnersAre(1, "19", "26", "33", "40")}

      if (car.rTwocOne == 1 && car.rThreecTwo == 1 && car.rFourcThree == 1 && car.rFivecFour == 1) {winnersAre(1, "2", "9", "16", "23")}
      if (car.rTwocTwo == 1 && car.rThreecThree == 1 && car.rFourcFour == 1 && car.rFivecFive == 1) {winnersAre(1, "8", "15", "22", "29")}
      if (car.rTwocThree == 1 && car.rThreecFour == 1 && car.rFourcFive == 1 && car.rFivecSix == 1) {winnersAre(1, "14", "21", "28", "33")}
      if (car.rTwocFour == 1 && car.rThreecFive == 1 && car.rFourcSix == 1 && car.rFivecSeven == 1) {winnersAre(1, "20", "27", "34", "41")}

      if (car.rThreecOne == 1 && car.rFourcTwo == 1 && car.rFivecThree == 1 && car.rSixcFour == 1) {winnersAre(1, "3", "10", "17", "24")}
      if (car.rThreecTwo == 1 && car.rFourcThree == 1 && car.rFivecFour == 1 && car.rSixcFive == 1) {winnersAre(1, "9", "16", "23", "30")}
      if (car.rThreecThree == 1 && car.rFourcFour == 1 && car.rFivecFive == 1 && car.rSixcSix == 1) {winnersAre(1, "15", "22", "29", "36")}
      if (car.rThreecFour == 1 && car.rFourcFive == 1 && car.rFivecSix == 1 && car.rSixcSeven == 1) {winnersAre(1, "21", "28", "35", "42")}


      if (car.rOnecFour == 1 && car.rTwocThree == 1 && car.rThreecTwo == 1 && car.rFourcOne == 1) {winnersAre(1, "19", "14", "9", "4")}
      if (car.rOnecFive == 1 && car.rTwocFour == 1 && car.rThreecThree == 1 && car.rFourcTwo == 1) {winnersAre(1, "25", "20", "15", "10")}
      if (car.rOnecSix == 1 && car.rTwocFive == 1 && car.rThreecFour == 1 && car.rFourcThree == 1) {winnersAre(1, "31", "26", "21", "16")}
      if (car.rOnecSeven == 1 && car.rTwocSix == 1 && car.rThreecFive == 1 && car.rFourcFour == 1) {winnersAre(1, "37", "22", "17", "12")}

      if (car.rTwocFour == 1 && car.rThreecThree == 1 && car.rFourcTwo == 1 && car.rFivecOne == 1) {winnersAre(1, "20", "15", "10", "5")}
      if (car.rTwocFive == 1 && car.rThreecFour == 1 && car.rFourcThree == 1 && car.rFivecTwo == 1) {winnersAre(1, "26", "21", "16", "11")}
      if (car.rTwocSix == 1 && car.rThreecFive == 1 && car.rFourcFour == 1 && car.rFivecThree == 1) {winnersAre(1, "32", "27", "22", "17")}
      if (car.rTwocSeven == 1 && car.rThreecSix == 1 && car.rFourcFive == 1 && car.rFivecFour == 1) {winnersAre(1, "38", "23", "18", "13")}

      if (car.rThreecFour == 1 && car.rFourcThree == 1 && car.rFivecTwo == 1 && car.rSixcOne == 1) {winnersAre(1, "21", "16", "11", "6")}
      if (car.rThreecFive == 1 && car.rFourcFour == 1 && car.rFivecThree == 1 && car.rSixcTwo == 1) {winnersAre(1, "27", "22", "17", "12")}
      if (car.rThreecSix == 1 && car.rFourcFive == 1 && car.rFivecFour == 1 && car.rSixcThree == 1) {winnersAre(1, "33", "28", "23", "18")}
      if (car.rThreecSeven == 1 && car.rFourcSix == 1 && car.rFivecFive == 1 && car.rSixcFour == 1) {winnersAre(1, "39", "24", "29", "34")}



      //horizontal player 2
      if (car.rSixcOne == 2 && car.rSixcTwo == 2 && car.rSixcThree == 2 && car.rSixcFour == 2) {winnersAre(2, "6", "12", "18", "24")}
      if (car.rSixcTwo == 2 && car.rSixcThree == 2 && car.rSixcFour == 2 && car.rSixcFive == 2) {winnersAre(2, "30", "12", "18", "24")}
      if (car.rSixcThree == 2 && car.rSixcFour == 2 && car.rSixcFive == 2 && car.rSixcSix == 2) {winnersAre(2, "30", "36", "18", "24")}
      if (car.rSixcFour == 2 && car.rSixcFive == 2 && car.rSixcSix == 2 && car.rSixcSeven == 2) {winnersAre(2, "30", "36", "42", "24")}
      if (car.rFivecOne == 2 && car.rFivecTwo == 2 && car.rFivecThree == 2 && car.rFivecFour == 2) {winnersAre(2, "5", "11", "17", "23")}
      if (car.rFivecTwo == 2 && car.rFivecThree == 2 && car.rFivecFour == 2 && car.rFivecFive == 2) {winnersAre(2, "11", "17", "23", "29")}
      if (car.rFivecThree == 2 && car.rFivecFour == 2 && car.rFivecFive == 2 && car.rFivecSix == 2) {winnersAre(2, "17", "23", "29", "35")}
      if (car.rFivecFour == 2 && car.rFivecFive == 2 && car.rFivecSix == 2 && car.rFivecSeven == 2) {winnersAre(2, "23", "29", "35", "41")}
      if (car.rFourcOne == 2 && car.rFourcTwo == 2 && car.rFourcThree == 2 && car.rFourcFour == 2) {winnersAre(2, "4", "10", "16", "22")}
      if (car.rFourcTwo == 2 && car.rFourcThree == 2 && car.rFourcFour == 2 && car.rFourcFive == 2) {winnersAre(2, "28", "10", "16", "22")}
      if (car.rFourcThree == 2 && car.rFourcFour == 2 && car.rFourcFive == 2 && car.rFourcSix == 2) {winnersAre(2, "28", "34", "16", "22")}
      if (car.rFourcFour == 2 && car.rFourcFive == 2 && car.rFourcSix == 2 && car.rFourcSeven == 2) {winnersAre(2, "28", "34", "40", "22")}
      if (car.rThreecOne == 2 && car.rThreecTwo == 2 && car.rThreecThree == 2 && car.rThreecFour == 2) {winnersAre(2, "3", "9", "15", "21")}
      if (car.rThreecTwo == 2 && car.rThreecThree == 2 && car.rThreecFour == 2 && car.rThreecFive == 2) {winnersAre(2, "27", "9", "15", "21")}
      if (car.rThreecThree == 2 && car.rThreecFour == 2 && car.rThreecFive == 2 && car.rThreecSix == 2) {winnersAre(2, "27", "33", "15", "21")}
      if (car.rThreecFour == 2 && car.rThreecFive == 2 && car.rThreecSix == 2 && car.rThreecSeven == 2) {winnersAre(2, "27", "33", "39", "21")}
      if (car.rTwocOne == 2 && car.rTwocTwo == 2 && car.rTwocThree == 2 && car.rTwocFour == 2) {winnersAre(2, "2", "8", "14", "20")}
      if (car.rTwocTwo == 2 && car.rTwocThree == 2 && car.rTwocFour == 2 && car.rTwocFive == 2) {winnersAre(2, "26", "8", "14", "20")}
      if (car.rTwocThree == 2 && car.rTwocFour == 2 && car.rTwocFive == 2 && car.rTwocSix == 2) {winnersAre(2, "26", "32", "14", "20")}
      if (car.rTwocFour == 2 && car.rTwocFive == 2 && car.rTwocSix == 2 && car.rTwocSeven == 2) {winnersAre(2, "26", "32", "38", "20")}
      if (car.rOnecOne == 2 && car.rOnecTwo == 2 && car.rOnecThree == 2 && car.rOnecFour == 2) {winnersAre(2, "1", "7", "13", "19")}
      if (car.rOnecTwo == 2 && car.rOnecThree == 2 && car.rOnecFour == 2 && car.rOnecFive == 2) {winnersAre(2, "25", "7", "13", "19")}
      if (car.rOnecThree == 2 && car.rOnecFour == 2 && car.rOnecFive == 2 && car.rOnecSix == 2) {winnersAre(2, "25", "31", "13", "19")}
      if (car.rOnecFour == 2 && car.rOnecFive == 2 && car.rOnecSix == 2 && car.rOnecSeven == 2) {winnersAre(2, "25", "31", "37", "19")}

      //vertical player 2
      if (car.rOnecOne == 2 && car.rTwocOne == 2 && car.rThreecOne == 2 && car.rFourcOne == 2) {winnersAre(2, "1", "2", "3", "4")}
      if (car.rFivecOne == 2 && car.rTwocOne == 2 && car.rThreecOne == 2 && car.rFourcOne == 2) {winnersAre(2, "5", "2", "3", "4")}
      if (car.rFivecOne == 2 && car.rSixcOne == 2 && car.rThreecOne == 2 && car.rFourcOne == 2) {winnersAre(2, "5", "6", "3", "4")}
      if (car.rOnecTwo == 2 && car.rTwocTwo == 2 && car.rThreecTwo == 2 && car.rFourcTwo == 2) {winnersAre(2, "7", "8", "9", "10")}
      if (car.rFivecTwo == 2 && car.rTwocTwo == 2 && car.rThreecTwo == 2 && car.rFourcTwo == 2) {winnersAre(2, "11", "8", "9", "10")}
      if (car.rFivecTwo == 2 && car.rSixcTwo == 2 && car.rThreecTwo == 2 && car.rFourcTwo == 2) {winnersAre(2, "11", "12", "9", "10")}
      if (car.rOnecThree == 2 && car.rTwocThree == 2 && car.rThreecThree == 2 && car.rFourcThree == 2) {winnersAre(2, "13", "14", "15", "16")}
      if (car.rFivecThree == 2 && car.rTwocThree == 2 && car.rThreecThree == 2 && car.rFourcThree == 2) {winnersAre(2, "17", "14", "15", "16")}
      if (car.rFivecThree == 2 && car.rSixcThree == 2 && car.rThreecThree == 2 && car.rFourcThree == 2) {winnersAre(2, "17", "18", "15", "16")}
      if (car.rOnecFour == 2 && car.rTwocFour == 2 && car.rThreecFour == 2 && car.rFourcFour == 2) {winnersAre(2, "19", "20", "21", "22")}
      if (car.rFivecFour == 2 && car.rTwocFour == 2 && car.rThreecFour == 2 && car.rFourcFour == 2) {winnersAre(2, "23", "20", "21", "22")}
      if (car.rFivecFour == 2 && car.rSixcFour == 2 && car.rThreecFour == 2 && car.rFourcFour == 2) {winnersAre(2, "23", "24", "21", "22")}
      if (car.rOnecFive == 2 && car.rTwocFive == 2 && car.rThreecFive == 2 && car.rFourcFive == 2) {winnersAre(2, "25", "26", "27", "28")}
      if (car.rFivecFive == 2 && car.rTwocFive == 2 && car.rThreecFive == 2 && car.rFourcFive == 2) {winnersAre(2, "29", "26", "27", "28")}
      if (car.rFivecFive == 2 && car.rSixcFive == 2 && car.rThreecFive == 2 && car.rFourcFive == 2) {winnersAre(2, "29", "30", "27", "28")}
      if (car.rOnecSix == 2 && car.rTwocSix == 2 && car.rThreecSix == 2 && car.rFourcSix == 2) {winnersAre(2, "31", "32", "33", "34")}
      if (car.rFivecSix == 2 && car.rTwocSix == 2 && car.rThreecSix == 2 && car.rFourcSix == 2) {winnersAre(2, "35", "32", "33", "34")}
      if (car.rFivecSix == 2 && car.rSixcSix == 2 && car.rThreecSix == 2 && car.rFourcSix == 2) {winnersAre(2, "35", "36", "33", "34")}
      if (car.rOnecSeven == 2 && car.rTwocSeven == 2 && car.rThreecSeven == 2 && car.rFourcSeven == 2) {winnersAre(2, "37", "38", "39", "40")}
      if (car.rFivecSeven == 2 && car.rTwocSeven == 2 && car.rThreecSeven == 2 && car.rFourcSeven == 2) {winnersAre(2, "41", "38", "39", "40")}
      if (car.rFivecSeven == 2 && car.rSixcSeven == 2 && car.rThreecSeven == 2 && car.rFourcSeven == 2) {winnersAre(2, "41", "42", "39", "40")}

      //diagonal player 2
      if (car.rOnecOne == 2 && car.rTwocTwo == 2 && car.rThreecThree == 2 && car.rFourcFour == 2) {winnersAre(2, "1", "8", "15", "22")}
      if (car.rOnecTwo == 2 && car.rTwocThree == 2 && car.rThreecFour == 2 && car.rFourcFive == 2) {winnersAre(2, "7", "14", "21", "28")}
      if (car.rOnecThree == 2 && car.rTwocFour == 2 && car.rThreecFive == 2 && car.rFourcSix == 2) {winnersAre(2, "13", "20", "27", "32")}
      if (car.rOnecFour == 2 && car.rTwocFive == 2 && car.rThreecSix == 2 && car.rFourcSeven == 2) {winnersAre(2, "19", "26", "33", "40")}

      if (car.rTwocOne == 2 && car.rThreecTwo == 2 && car.rFourcThree == 2 && car.rFivecFour == 2) {winnersAre(2, "2", "9", "16", "23")}
      if (car.rTwocTwo == 2 && car.rThreecThree == 2 && car.rFourcFour == 2 && car.rFivecFive == 2) {winnersAre(2, "8", "15", "22", "29")}
      if (car.rTwocThree == 2 && car.rThreecFour == 2 && car.rFourcFive == 2 && car.rFivecSix == 2) {winnersAre(2, "14", "21", "28", "33")}
      if (car.rTwocFour == 2 && car.rThreecFive == 2 && car.rFourcSix == 2 && car.rFivecSeven == 2) {winnersAre(2, "20", "27", "34", "41")}

      if (car.rThreecOne == 2 && car.rFourcTwo == 2 && car.rFivecThree == 2 && car.rSixcFour == 2) {winnersAre(2, "3", "10", "17", "24")}
      if (car.rThreecTwo == 2 && car.rFourcThree == 2 && car.rFivecFour == 2 && car.rSixcFive == 2) {winnersAre(2, "9", "16", "23", "30")}
      if (car.rThreecThree == 2 && car.rFourcFour == 2 && car.rFivecFive == 2 && car.rSixcSix == 2) {winnersAre(2, "15", "22", "29", "36")}
      if (car.rThreecFour == 2 && car.rFourcFive == 2 && car.rFivecSix == 2 && car.rSixcSeven == 2) {winnersAre(2, "21", "28", "35", "42")}


      if (car.rOnecFour == 2 && car.rTwocThree == 2 && car.rThreecTwo == 2 && car.rFourcOne == 2) {winnersAre(2, "19", "14", "9", "4")}
      if (car.rOnecFive == 2 && car.rTwocFour == 2 && car.rThreecThree == 2 && car.rFourcTwo == 2) {winnersAre(2, "25", "20", "15", "10")}
      if (car.rOnecSix == 2 && car.rTwocFive == 2 && car.rThreecFour == 2 && car.rFourcThree == 2) {winnersAre(2, "31", "26", "21", "16")}
      if (car.rOnecSeven == 2 && car.rTwocSix == 2 && car.rThreecFive == 2 && car.rFourcFour == 2) {winnersAre(2, "37", "22", "17", "12")}

      if (car.rTwocFour == 2 && car.rThreecThree == 2 && car.rFourcTwo == 2 && car.rFivecOne == 2) {winnersAre(2, "20", "15", "10", "5")}
      if (car.rTwocFive == 2 && car.rThreecFour == 2 && car.rFourcThree == 2 && car.rFivecTwo == 2) {winnersAre(2, "26", "21", "16", "11")}
      if (car.rTwocSix == 2 && car.rThreecFive == 2 && car.rFourcFour == 2 && car.rFivecThree == 2) {winnersAre(2, "32", "27", "22", "17")}
      if (car.rTwocSeven == 2 && car.rThreecSix == 2 && car.rFourcFive == 2 && car.rFivecFour == 2) {winnersAre(2, "38", "23", "18", "13")}

      if (car.rThreecFour == 2 && car.rFourcThree == 2 && car.rFivecTwo == 2 && car.rSixcOne == 2) {winnersAre(2, "21", "16", "11", "6")}
      if (car.rThreecFive == 2 && car.rFourcFour == 2 && car.rFivecThree == 2 && car.rSixcTwo == 2) {winnersAre(2, "27", "22", "17", "12")}
      if (car.rThreecSix == 2 && car.rFourcFive == 2 && car.rFivecFour == 2 && car.rSixcThree == 2) {winnersAre(2, "33", "28", "23", "18")}
      if (car.rThreecSeven == 2 && car.rFourcSix == 2 && car.rFivecFive == 2 && car.rSixcFour == 2) {winnersAre(2, "39", "24", "29", "34")}
    }

    function cOne() {
      if (turn != 0) {
        if (car.rSixcOne == 0 && turn == 1) {
          document.getElementById("6").style.backgroundColor = colorOne;
          turn = 2;
          car.rSixcOne = 1;
        } else if (car.rFivecOne == 0 && turn == 1) {
          document.getElementById("5").style.backgroundColor = colorOne;
          turn = 2;
          car.rFivecOne = 1;
        } else if (car.rFourcOne == 0 && turn == 1) {
          document.getElementById("4").style.backgroundColor = colorOne;
          turn = 2;
          car.rFourcOne = 1;
        } else if (car.rThreecOne == 0 && turn == 1) {
          document.getElementById("3").style.backgroundColor = colorOne;
          turn = 2;
          car.rThreecOne = 1;
        } else if (car.rTwocOne == 0 && turn == 1) {
          document.getElementById("2").style.backgroundColor = colorOne;
          turn = 2;
          car.rTwocOne = 1;
        } else if (car.rOnecOne == 0 && turn == 1) {
          document.getElementById("1").style.backgroundColor = colorOne;
          turn = 2;
          car.rOnecOne = 1;
        } else if (car.rSixcOne == 0 && turn == 2) {
          document.getElementById("6").style.backgroundColor = colorTwo;
          turn = 1;
          car.rSixcOne = 2;
        } else if (car.rFivecOne == 0 && turn == 2) {
          document.getElementById("5").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFivecOne = 2;
        } else if (car.rFourcOne == 0 && turn == 2) {
          document.getElementById("4").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFourcOne = 2;
        } else if (car.rThreecOne == 0 && turn == 2) {
          document.getElementById("3").style.backgroundColor = colorTwo;
          turn = 1;
          car.rThreecOne = 2;
        } else if (car.rTwocOne == 0 && turn == 2) {
          document.getElementById("2").style.backgroundColor = colorTwo;
          turn = 1;
          car.rTwocOne = 2;
        } else if (car.rOnecOne == 0 && turn == 2) {
          document.getElementById("1").style.backgroundColor = colorTwo;
          turn = 1;
          car.rOnecOne = 2;
        }
        checkForFour();
      }
    }

    function cTwo() {
      if (turn != 0) {
        if (car.rSixcTwo == 0 && turn == 1) {
          document.getElementById("12").style.backgroundColor = colorOne;
          turn = 2;
          car.rSixcTwo = 1;
        } else if (car.rFivecTwo == 0 && turn == 1) {
          document.getElementById("11").style.backgroundColor = colorOne;
          turn = 2;
          car.rFivecTwo = 1;
        } else if (car.rFourcTwo == 0 && turn == 1) {
          document.getElementById("10").style.backgroundColor = colorOne;
          turn = 2;
          car.rFourcTwo = 1;
        } else if (car.rThreecTwo == 0 && turn == 1) {
          document.getElementById("9").style.backgroundColor = colorOne;
          turn = 2;
          car.rThreecTwo = 1;
        } else if (car.rTwocTwo == 0 && turn == 1) {
          document.getElementById("8").style.backgroundColor = colorOne;
          turn = 2;
          car.rTwocTwo = 1;
        } else if (car.rOnecTwo == 0 && turn == 1) {
          document.getElementById("7").style.backgroundColor = colorOne;
          turn = 2;
          car.rOnecTwo = 1;
        } else if (car.rSixcTwo == 0 && turn == 2) {
          document.getElementById("12").style.backgroundColor = colorTwo;
          turn = 1;
          car.rSixcTwo = 2;
        } else if (car.rFivecTwo == 0 && turn == 2) {
          document.getElementById("11").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFivecTwo = 2;
        } else if (car.rFourcTwo == 0 && turn == 2) {
          document.getElementById("10").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFourcTwo = 2;
        } else if (car.rThreecTwo == 0 && turn == 2) {
          document.getElementById("9").style.backgroundColor = colorTwo;
          turn = 1;
          car.rThreecTwo = 2;
        } else if (car.rTwocTwo == 0 && turn == 2) {
          document.getElementById("8").style.backgroundColor = colorTwo;
          turn = 1;
          car.rTwocTwo = 2;
        } else if (car.rOnecTwo == 0 && turn == 2) {
          document.getElementById("7").style.backgroundColor = colorTwo;Green
          turn = 1;
          car.rOnecTwo = 2;
        }
        checkForFour();
      }
    }

    function cThree() {
      if (turn != 0) {
        if (car.rSixcThree == 0 && turn == 1) {
          document.getElementById("18").style.backgroundColor = colorOne;
          turn = 2;
          car.rSixcThree = 1;
        } else if (car.rFivecThree == 0 && turn == 1) {
          document.getElementById("17").style.backgroundColor = colorOne;
          turn = 2;
          car.rFivecThree = 1;
        } else if (car.rFourcThree == 0 && turn == 1) {
          document.getElementById("16").style.backgroundColor = colorOne;
          turn = 2;
          car.rFourcThree = 1;
        } else if (car.rThreecThree == 0 && turn == 1) {
          document.getElementById("15").style.backgroundColor = colorOne;
          turn = 2;
          car.rThreecThree = 1;
        } else if (car.rTwocThree == 0 && turn == 1) {
          document.getElementById("14").style.backgroundColor = colorOne;
          turn = 2;
          car.rTwocThree = 1;
        } else if (car.rOnecThree == 0 && turn == 1) {
          document.getElementById("13").style.backgroundColor = colorOne;
          turn = 2;
          car.rOnecThree = 1;
        } else if (car.rSixcThree == 0 && turn == 2) {
          document.getElementById("18").style.backgroundColor = colorTwo;
          turn = 1;
          car.rSixcThree = 2;
        } else if (car.rFivecThree == 0 && turn == 2) {
          document.getElementById("17").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFivecThree = 2;
        } else if (car.rFourcThree == 0 && turn == 2) {
          document.getElementById("16").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFourcThree = 2;
        } else if (car.rThreecThree == 0 && turn == 2) {
          document.getElementById("15").style.backgroundColor = colorTwo;
          turn = 1;
          car.rThreecThree = 2;
        } else if (car.rTwocThree == 0 && turn == 2) {
          document.getElementById("14").style.backgroundColor = colorTwo;
          turn = 1;
          car.rTwocThree = 2;
        } else if (car.rOnecThree == 0 && turn == 2) {
          document.getElementById("13").style.backgroundColor = colorTwo;
          turn = 1;
          car.rOnecThree = 2;
        }
        checkForFour();
      }
    }

    function cFour() {
      if (turn != 0) {
        if (car.rSixcFour == 0 && turn == 1) {
          document.getElementById("24").style.backgroundColor = colorOne;
          turn = 2;
          car.rSixcFour = 1;
        } else if (car.rFivecFour == 0 && turn == 1) {
          document.getElementById("23").style.backgroundColor = colorOne;
          turn = 2;
          car.rFivecFour = 1;
        } else if (car.rFourcFour == 0 && turn == 1) {
          document.getElementById("22").style.backgroundColor = colorOne;
          turn = 2;
          car.rFourcFour = 1;
        } else if (car.rThreecFour == 0 && turn == 1) {
          document.getElementById("21").style.backgroundColor = colorOne;
          turn = 2;
          car.rThreecFour = 1;
        } else if (car.rTwocFour == 0 && turn == 1) {
          document.getElementById("20").style.backgroundColor = colorOne;
          turn = 2;
          car.rTwocFour = 1;
        } else if (car.rOnecFour == 0 && turn == 1) {
          document.getElementById("19").style.backgroundColor = colorOne;
          turn = 2;
          car.rOnecFour = 1;
        } else if (car.rSixcFour == 0 && turn == 2) {
          document.getElementById("24").style.backgroundColor = colorTwo;
          turn = 1;
          car.rSixcFour = 2;
        } else if (car.rFivecFour == 0 && turn == 2) {
          document.getElementById("23").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFivecFour = 2;
        } else if (car.rFourcFour == 0 && turn == 2) {
          document.getElementById("22").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFourcFour = 2;
        } else if (car.rThreecFour == 0 && turn == 2) {
          document.getElementById("21").style.backgroundColor = colorTwo;
          turn = 1;
          car.rThreecFour = 2;
        } else if (car.rTwocFour == 0 && turn == 2) {
          document.getElementById("20").style.backgroundColor = colorTwo;
          turn = 1;
          car.rTwocFour = 2;
        } else if (car.rOnecFour == 0 && turn == 2) {
          document.getElementById("19").style.backgroundColor = colorTwo;
          turn = 1;
          car.rOnecFour = 2;
        }
        checkForFour();
      }
    }

    function cFive() {
      if (turn != 0) {
        if (car.rSixcFive == 0 && turn == 1) {
          document.getElementById("30").style.backgroundColor = colorOne;
          turn = 2;
          car.rSixcFive = 1;
        } else if (car.rFivecFive == 0 && turn == 1) {
          document.getElementById("29").style.backgroundColor = colorOne;
          turn = 2;
          car.rFivecFive = 1;
        } else if (car.rFourcFive == 0 && turn == 1) {
          document.getElementById("28").style.backgroundColor = colorOne;
          turn = 2;
          car.rFourcFive = 1;
        } else if (car.rThreecFive == 0 && turn == 1) {
          document.getElementById("27").style.backgroundColor = colorOne;
          turn = 2;
          car.rThreecFive = 1;
        } else if (car.rTwocFive == 0 && turn == 1) {
          document.getElementById("26").style.backgroundColor = colorOne;
          turn = 2;
          car.rTwocFive = 1;
        } else if (car.rOnecFive == 0 && turn == 1) {
          document.getElementById("25").style.backgroundColor = colorOne;
          turn = 2;
          car.rOnecFive = 1;
        } else if (car.rSixcFive == 0 && turn == 2) {
          document.getElementById("30").style.backgroundColor = colorTwo;
          turn = 1;
          car.rSixcFive = 2;
        } else if (car.rFivecFive == 0 && turn == 2) {
          document.getElementById("29").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFivecFive = 2;
        } else if (car.rFourcFive == 0 && turn == 2) {
          document.getElementById("28").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFourcFive = 2;
        } else if (car.rThreecFive == 0 && turn == 2) {
          document.getElementById("27").style.backgroundColor = colorTwo;
          turn = 1;
          car.rThreecFive = 2;
        } else if (car.rTwocFive == 0 && turn == 2) {
          document.getElementById("26").style.backgroundColor = colorTwo;
          turn = 1;
          car.rTwocFive = 2;
        } else if (car.rOnecFive == 0 && turn == 2) {
          document.getElementById("25").style.backgroundColor = colorTwo;
          turn = 1;
          car.rOnecFive = 2;
        }
        checkForFour();
      }
    }

    function cSix() {
      if (turn != 0) {
        if (car.rSixcSix == 0 && turn == 1) {
          document.getElementById("36").style.backgroundColor = colorOne;
          turn = 2;
          car.rSixcSix = 1;
        } else if (car.rFivecSix == 0 && turn == 1) {
          document.getElementById("35").style.backgroundColor = colorOne;
          turn = 2;
          car.rFivecSix = 1;
        } else if (car.rFourcSix == 0 && turn == 1) {
          document.getElementById("34").style.backgroundColor = colorOne;
          turn = 2;
          car.rFourcSix = 1;
        } else if (car.rThreecSix == 0 && turn == 1) {
          document.getElementById("33").style.backgroundColor = colorOne;
          turn = 2;
          car.rThreecSix = 1;
        } else if (car.rTwocSix == 0 && turn == 1) {
          document.getElementById("32").style.backgroundColor = colorOne;
          turn = 2;
          car.rTwocSix = 1;
        } else if (car.rOnecSix == 0 && turn == 1) {
          document.getElementById("31").style.backgroundColor = colorOne;
          turn = 2;
          car.rOnecSix = 1;
        } else if (car.rSixcSix == 0 && turn == 2) {
          document.getElementById("36").style.backgroundColor = colorTwo;
          turn = 1;
          car.rSixcSix = 2;
        } else if (car.rFivecSix == 0 && turn == 2) {
          document.getElementById("35").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFivecSix = 2;
        } else if (car.rFourcSix == 0 && turn == 2) {
          document.getElementById("34").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFourcSix = 2;
        } else if (car.rThreecSix == 0 && turn == 2) {
          document.getElementById("33").style.backgroundColor = colorTwo;
          turn = 1;
          car.rThreecSix = 2;
        } else if (car.rTwocSix == 0 && turn == 2) {
          document.getElementById("32").style.backgroundColor = colorTwo;
          turn = 1;
          car.rTwocSix = 2;
        } else if (car.rOnecSix == 0 && turn == 2) {
          document.getElementById("31").style.backgroundColor = colorTwo;
          turn = 1;
          car.rOnecSix = 2;
        }
        checkForFour();
      }
    }

    function cSeven() {
      if (turn != 0) {
        if (car.rSixcSeven == 0 && turn == 1) {
          document.getElementById("42").style.backgroundColor = colorOne;
          turn = 2;
          car.rSixcSeven = 1;
        } else if (car.rFivecSeven == 0 && turn == 1) {
          document.getElementById("41").style.backgroundColor = colorOne;
          turn = 2;
          car.rFivecSeven = 1;
        } else if (car.rFourcSeven == 0 && turn == 1) {
          document.getElementById("40").style.backgroundColor = colorOne;
          turn = 2;
          car.rFourcSeven = 1;
        } else if (car.rThreecSeven == 0 && turn == 1) {
          document.getElementById("39").style.backgroundColor = colorOne;
          turn = 2;
          car.rThreecSeven = 1;
        } else if (car.rTwocSeven == 0 && turn == 1) {
          document.getElementById("38").style.backgroundColor = colorOne;
          turn = 2;
          car.rTwocSeven = 1;
        } else if (car.rOnecSeven == 0 && turn == 1) {
          document.getElementById("37").style.backgroundColor = colorOne;
          turn = 2;
          car.rOnecSeven = 1;
        } else if (car.rSixcSeven == 0 && turn == 2) {
          document.getElementById("42").style.backgroundColor = colorTwo;
          turn = 1;
          car.rSixcSeven = 2;
        } else if (car.rFivecSeven == 0 && turn == 2) {
          document.getElementById("41").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFivecSeven = 2;
        } else if (car.rFourcSeven == 0 && turn == 2) {
          document.getElementById("40").style.backgroundColor = colorTwo;
          turn = 1;
          car.rFourcSeven = 2;
        } else if (car.rThreecSeven == 0 && turn == 2) {
          document.getElementById("39").style.backgroundColor = colorTwo;
          turn = 1;
          car.rThreecSeven = 2;
        } else if (car.rTwocSeven == 0 && turn == 2) {
          document.getElementById("38").style.backgroundColor = colorTwo;
          turn = 1;
          car.rTwocSeven = 2;
        } else if (car.rOnecSeven == 0 && turn == 2) {
          document.getElementById("37").style.backgroundColor = colorTwo;
          turn = 1;
          car.rOnecSeven = 2;
        }
        checkForFour();
      }
    }

    return (
      <div className="container">
        <div className="top">
          <h1>Connect Four</h1>
          <h3 id="43" >Player 1's Turn</h3>
        </div>
        <div className="middle">
          <div id="1" className="block row__one column__one"></div>
          <div id="2" className="block row__two column__one"></div>
          <div id="3" className="block row__three column__one"></div>
          <div id="4" className="block row__four column__one"></div>
          <div id="5" className="block row__five column__one"></div>
          <div id="6" className="block row__six column__one"></div>
          <div id="7" className="block row__one column__two"></div>
          <div id="8" className="block row__two column__two"></div>
          <div id="9" className="block row__three column__two"></div>
          <div id="10" className="block row__four column__two"></div>
          <div id="11" className="block row__five column__two"></div>
          <div id="12" className="block row__six column__two"></div>
          <div id="13" className="block row__one column__three"></div>
          <div id="14" className="block row__two column__three"></div>
          <div id="15" className="block row__three column__three"></div>
          <div id="16" className="block row__four column__three"></div>
          <div id="17" className="block row__five column__three"></div>
          <div id="18" className="block row__six column__three"></div>
          <div id="19" className="block row__one column__four"></div>
          <div id="20" className="block row__two column__four"></div>
          <div id="21" className="block row__three column__four"></div>
          <div id="22" className="block row__four column__four"></div>
          <div id="23" className="block row__five column__four"></div>
          <div id="24" className="block row__six column__four"></div>
          <div id="25" className="block row__one column__five"></div>
          <div id="26" className="block row__two column__five"></div>
          <div id="27" className="block row__three column__five"></div>
          <div id="28" className="block row__four column__five"></div>
          <div id="29" className="block row__five column__five"></div>
          <div id="30" className="block row__six column__five"></div>
          <div id="31" className="block row__one column__six"></div>
          <div id="32" className="block row__two column__six"></div>
          <div id="33" className="block row__three column__six"></div>
          <div id="34" className="block row__four column__six"></div>
          <div id="35" className="block row__five column__six"></div>
          <div id="36" className="block row__six column__six"></div>
          <div id="37" className="block row__one column__seven"></div>
          <div id="38" className="block row__two column__seven"></div>
          <div id="39" className="block row__three column__seven"></div>
          <div id="40" className="block row__four column__seven"></div>
          <div id="41" className="block row__five column__seven"></div>
          <div id="42" className="block row__six column__seven"></div>
          <div id="45" className="playerOne">Player One</div>
          <div id="46" className="playerTwo">Player Two</div>
          <div id="47" className="chooseColorText"></div>
          <div id="48" className="newBackground"></div>
          <div onClick={()=>pOneGreen()} id="49" className="chooseGreenOne"></div>
          <div onClick={()=>pOneRed()} id="50" className="chooseRedOne"></div>
          <div onClick={()=>pOneYellow()} id="51" className="chooseYellowOne"></div>
          <div onClick={()=>pTwoGreen()} id="52" className="chooseGreenTwo"></div>
          <div onClick={()=>pTwoRed()} id="53" className="chooseRedTwo"></div>
          <div onClick={()=>pTwoYellow()} id="54" className="chooseYellowTwo"></div>
          <div onClick={()=>pOneTeal()} id="55" className="chooseTealOne"></div>
          <div onClick={()=>pTwoTeal()} id="56" className="chooseTealTwo"></div>
          
          <div onClick={() =>restartGame()} id="44" className="restart-button">Restart?</div>

          <div onClick={() =>cOne()} className="trig column__one__button">
          </div>
          <div onClick={() =>cTwo()} className="trig column__two__button">
          </div>
          <div onClick={() =>cThree()} className="trig column__three__button">
          </div>
          <div onClick={() =>cFour()} className="trig column__four__button">
          </div>
          <div onClick={() =>cFive()} className="trig column__five__button">
          </div>
          <div onClick={() =>cSix()} className="trig column__six__button">
          </div>
          <div onClick={() =>cSeven()} className="trig column__seven__button">
          </div>

        </div>
        <div className="bottom">
          <p>Created by Devin Frandsen, no copyright infringement intended.</p>
        </div>
      </div>
    );
  }
}
