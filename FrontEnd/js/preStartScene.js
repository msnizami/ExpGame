import StartScene from './startScene.js';
import {costsArray} from './constants.js';

class PreStartScene extends Phaser.Scene {
  constructor(gameData) {
    super({ key: 'preStartScene' });
    this.gameData = gameData;
    this.startTime = 0;
  }

  preload() {
    this.loadImages();
  }

  create() {
    this.startTime = new Date().getTime();
    this.setStartScreen();
  }

  loadImages() {
    const { plants } = this.gameData;
    plants.forEach((plant, index) => {
      this.load.image(`plant${index + 1}`, plant.image);
    });
    this.load.image('buttonUp', 'static/buttonUp.png');
    this.load.image('buttonDown', 'static/buttonDown.png');
    this.load.image('buttonFeed', 'static/buttonSubmit.png');
    
    
    

    const img = this.gameData.testno; // Math.floor(Math.random() * costsArray.length);
    // console.log(imgindex);
    // localStorage.setItem('imgindex', imgindex);
    
    // console.log(costsArray[imgindex-1].path)
    this.load.image('surface', costsArray[img].path);
    this.load.spritesheet('shub', 'static/shub_spritesheet.png', { frameWidth: 50, frameHeight:  47 });
    }

  setStartScreen() {
    const centerX = (this.gameData.game.config.width / 2)+((this.gameData.game.config.width / 2) *0.1);
    const centerY = (this.gameData.game.config.height / 2)-((this.gameData.game.config.width / 2) *0.08);

    // Setting background image
    this.add.image(centerX * 0.75, centerY, 'surface').setScale(this.gameData.getScaledUnit(.6));

    const textBlocks = [
      [""],
      ["On each planet, the leaves grow in different regions: they may be found at sea level, at the summit of mountains, or somewhere in between."],
      ["When you visit a new planet, your guardian station is always in sea level, making it easier for you to select some leaves than others."],
      ["Therefore, each leaf has a different cost on each planet you visit, an example is shown below."],
      [""],
      [""],
      [""],
      ["The cost of each leaf will be deducted from your overall budget."],
      ["Make sure to watch your budget: some leaves are more expensive but might be necessary."]
    ];

    textBlocks.slice(0, 5).forEach((block, index) => {
      this.add.text(this.gameData.getScaledWidth(centerX * 0.025), centerY * (0.03 + index * 0.075), block, {
        fontFamily: 'Arial',
        fontSize:  Math.round(this.gameData.getScaledWidth(16))+'px',
        color: '#000000',
        align: 'left',
        fontStyle: index >= 5 ? 'bold italic' : 'normal',
        lineSpacing: index >= 5 ? 10 : undefined,
      });
    });

    textBlocks.slice(6, textBlocks.length).forEach((block, index) => {
      this.add.text(this.gameData.getScaledWidth(centerX * 0.025), this.gameData.game.config.height * (0.60 + ((index + 1) * 0.05)), block, {
        fontFamily: 'Arial',
        fontSize:  Math.round(this.gameData.getScaledWidth(16))+'px',
        color: '#000000',
        align: 'left',
        fontStyle: index >= 5 ? 'bold italic' : 'normal',
        lineSpacing: index >= 5 ? 10 : undefined,
      });
    });


    // this.add.sprite(this.gameData.getScaledWidth(this.gameData.game.config.width * 0.9),this.gameData.game.config.height * 0.165, 'shub', 0, { frameWidth: 50, frameHeight: 46 }).setScale(this.gameData.getScaledUnit(1.5));
    //this.createPlantImages()
    this.createStartButton();
  }

  createPlantImages() {
    const plantYPositions = [0.3, 0.37, 0.44, 0.51, 0.58];
    const plantScale = this.gameData.getScaledUnit(0.1);

    plantYPositions.forEach((yPos, index) => {
      this.add.image(this.gameData.getScaledWidth(this.gameData.game.config.width * 0.05), this.gameData.game.config.height * yPos, "plant" + (index + 1)).setScale(this.gameData.getScaledUnit(plantScale));
      this.add.text(this.gameData.getScaledWidth(this.gameData.game.config.width * (0.07)), this.gameData.game.config.height * yPos, '' + this.gameData.plants.at(index).cost, {
        fontFamily: 'Arial',
        fontSize: Math.round(this.gameData.getScaledWidth(22))+'px',
        color: '#000000',
        align: 'left',
        fontStyle:  'bold italic',
        lineSpacing: index >= 5 ? 10 : undefined,
      });
    });
    // plantXPositions.slice(3,plantXPositions.length).forEach((xPos, index) => {
    //   const offset = 4
    //   this.add.image(this.gameData.game.config.width * xPos, this.gameData.game.config.height * 0.5, "plant" + (index +offset)).setScale(plantScale);
    //   this.add.text(this.gameData.game.config.width * (xPos + 0.05), this.gameData.game.config.height * 0.5, 'cost :' + this.gameData.plants.at(index).cost, {
    //     fontFamily: 'Arial',
    //     fontSize: '18px',
    //     color: '#000000',
    //     align: 'left',
    //     fontStyle: index >= 5 ? 'bold italic' : 'normal',
    //     lineSpacing: index >= 5 ? 10 : undefined,
    //   });
    // });
  }



  createStartButton() {

    const buttonStart = this.add.image(0, 0, 'buttonFeed').setScale(0.4)
      .setInteractive()
      .on('pointerdown', () => this.logTime())
      .on('pointerdown', () => this.scale.startFullscreen())
      .on('pointerdown', () => this.startGame());

    const textStart = this.add.text(-40, -15, 'Start!', { fontSize: '20px', color: '#ffffff' }).setOrigin(0);
    this.add.container(this.gameData.game.config.width * 0.9, this.gameData.game.config.height * 0.75, [buttonStart, textStart]);
  }

  startGame() {

      const cfArray = this.gameData.cf_array?.at(Math.floor(Math.random()*this.gameData.cf_array.length))?.at(i)
      for(let val in cfArray){
        this.gameData[`clickCountVar${i + 1}`] = val
      }


    const startScene = new StartScene(this.gameData);
    this.scene.add('startScene', startScene);
    this.scene.start('startScene');
  }

  logTime() {
    const time = new Date().getTime() - this.startTime;
    this.gameData.api.logTime(2, time);
  }
}

export default PreStartScene;
