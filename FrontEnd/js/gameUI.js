"use strict";

import InfoScene from './infoScene.js';
class GameInitializer {
  constructor(api) {
    this.api = api;
  }

  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  async initializeGame() {
    try {

      // Getting data from the server
      const data = await this.api.gameStart();

      // Throw an error and no need to continue if no state is found
      if (!data?.state) {
        throw new Error("Error while starting the game");
      }
      // Phaser configuration
      var config = {
        type: Phaser.AUTO,
            scale: {
              mode: Phaser.Scale.FIT,
              parent: "app",
              autoCenter: Phaser.Scale.CENTER_BOTH,
              fullscreenTarget: document.getElementById("app"),
            },
            dom: {
                createContainer: true
            },
            backgroundColor: '#ffffff',
            width: window.innerWidth,
            height: window.innerHeight,
            physics: {
              default: 'arcade',
              arcade: {
                gravity: { y: 300 },
                debug: false
              }
            }
          };
      // Initializing phaser with configuration
      const game = new Phaser.Game(config);

      // Combination of plants and their respective costs (Randomized)
      const plants =  [
        { image: 'static/leaf1.png', cost: 1 },
        { image: 'static/leaf2.png', cost: 2 },
        { image: 'static/leaf3.png', cost: 1 },
        { image: 'static/leaf4.png', cost: 2 },
        { image: 'static/leaf5.png', cost: 2 }
      ] 

      const dropDownRanges = [{
        min:0,
        max:6
      },{
        min:0,
        max:6
      },{
        min:0,
        max:6
      },{
        min:0,
        max:6
      },{
        min:0,
        max:6
      }
    ]

      // Object that will hold data throughout the scenes
      const gameData = {
        "api": this.api,
        "plants": plants,
        "btnContinueShowDelay": 5,
        "btnOkayShowDelay": 5,
        "btnStartShowDelay": 5,
        "trialCount": 0,
        "blockCount": 1,
        "maxBlockCount": Math.round(Math.random(3,5)*10), //Levels from 3 to 5 at random
        "numTrialsPerBlock": 1, // Rounds per block
        "attentionTrials": [3, 7],
        "attentionTrialsInterval": 3, //Attention round after specified interval
        "clickCountVar1": 0,
        "clickCountVar2": 0,
        "clickCountVar3": 0,
        "clickCountVar4": 0,
        "clickCountVar5": 0,
        "oldNumber": 0,     
        "newNumber": 0,     
        "maxFeedingNo": 6,  
        "minFeedingNo": 0,  
        "inArray": [],
        "cfArray": [],
        "randArray": [],
        "shubOldHealth": [],
        "shubNewHealth": [],
        "feedback_flag": false,
        "testInstances": data.test_instance, 
        "game":game,
        "dropDownRanges":dropDownRanges,
        "in_array":[],
        "cf_array":[],
        "rand_array":[],
        "health":0,
        "testno": 1
      };

        const link = document.createElement("link");
        link.rel = "preload";
        link.href = "static/monogram.ttf";
        link.as = "font";
        link.type = "font/ttf";
        document.head.appendChild(link);




      const infoScene = new InfoScene(gameData);

      // Adding and starting the info scene
      game.scene.add('infoScene', infoScene);
      game.scene.start('infoScene');
    } catch (error) {
      console.error("Something went wrong :(");
      console.error(error);
    }
  }
}

// Run the game initialization
const api = new AlienZooApi();
const gameInitializer = new GameInitializer(api);
gameInitializer.initializeGame();
