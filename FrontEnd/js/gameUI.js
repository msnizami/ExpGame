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
  

  getScaledWidth(resolution){
    return window.screen.width/1280 * resolution;
  }


  getScaledHeight(resolution){
    return window.screen.height/720 * resolution;
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
        { key:"blue_leaf", index:0, image: 'static/leaf1.png', cost: 1 },
        { key:"yellow_leaf" , index:1, image: 'static/leaf2.png', cost: 2 },
        { key:"purple_leaf", index:2, image: 'static/leaf3.png', cost: 1 },
        { key:"grey_leaf" , index:3, image: 'static/leaf4.png', cost: 2 },
        { key:"pink_leaf" , index:4, image: 'static/leaf5.png', cost: 2 }
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

    loadDataFromCSV().then(csvData=>{
        // Object that will hold data throughout the scenes
        const gameData = {
          "api": this.api,
          "plants": plants,
          "btnContinueShowDelay": 5,
          "btnOkayShowDelay": 5,
          "btnStartShowDelay": 5,
          "trialCount": 0,
          "blockCount": 1,
          "maxBlockCount": 3, //Levels from 3 to 5 at random
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
          "testno": 1,
          "budget":60,
          "glob_Budget":60,
          "testvalMenu":[0,0,0,0,0],
          "getScaledUnit":this.getScaledWidth,
          "getScaledWidth":this.getScaledWidth,
          "getScaledHeight":this.getScaledHeight,
          "leafCoordinatesIntro":{
            0:[],
            1:[],
            2:[]
          },
          "csvData":csvData
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
    })

    
    } catch (error) {
      console.error("Something went wrong :(");
      console.error(error);
    }
  }
}


 async function loadDataFromCSV() {
  const yourHostedDomain = 'https://localhost:8080'; // Replace this with your actual domain
  const apiPath = '/static/X_2test.csv'; // Replace this with the path to your CSV file

  const apiUrl =  apiPath;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error while loading');
      }
      return response.text();
    })
    .then(csvData => {
      const parsedData = parseCSV(csvData);
    })
    .catch(error => console.error('Error:', error));

  function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const result = [];

    for (let i = 0; i < lines.length; i++) {
      const values = lines[i].split(',');
      result.push(values.map(x=> x.trim()));
    }
    // console.log("csvdata:", result.splice(1,result.length));
    return result.splice(1,result.length);
  }
};


// Run the game initialization
const api = new AlienZooApi();
const gameInitializer = new GameInitializer(api);
gameInitializer.initializeGame();
