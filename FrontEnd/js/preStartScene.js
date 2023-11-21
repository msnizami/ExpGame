import StartScene from './startScene.js';

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
    this.load.spritesheet('shub', 'static/shub_spritesheet.png', { frameWidth: 50, frameHeight: 47 });
    this.load.image('surface', 'static/planet-surface-2.png', { frameWidth: 50, frameHeight: 47 });
  }

  setStartScreen() {
    const centerX = this.gameData.game.config.width / 2;
    const centerY = this.gameData.game.config.height / 2;

    const textBlocks = [
      ["Assume that you are a guardian of fictional Alien species called Shub on a virtual space of Aliens."],
      ["The Shub eat different types of leaves for their growth."],
      ["Some leaves are healthier than others because they grow up in different regions of the virtual space."],
      ["At the moment, you don't know which leaves are more healthy as a diet, because on the different planets of this virtual space."],
      ["The healthiness of leaves changes due to the environment of that planet."],
      ["Your task is to feed a little Shub by providing it with different combinations of leaves which constitute the diet to achieve an optimal level of fitness."],
      ["Taking into account that your home is at sea level and leaves can grow in different regions."],
      ["Such as flat sea-level surface, summit of mountain, or somewhere in between."],
      ["Some leaves can be easier or harder to find and collect than others."],
      ["This issue is reflected in the cost associated to each type of leaf as shown above."]
    ];

    textBlocks.slice(0, 5).forEach((block, index) => {
      this.add.text(centerX * 0.025, centerY * (0.03 + index * 0.075), block, {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000',
        align: 'left',
        fontStyle: index >= 5 ? 'bold italic' : 'normal',
        lineSpacing: index >= 5 ? 10 : undefined,
      });
    });

    textBlocks.slice(6, textBlocks.length).forEach((block, index) => {
      this.add.text(centerX * 0.025, this.gameData.game.config.height * (0.6 + ((index + 1) * 0.05)), block, {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000',
        align: 'left',
        fontStyle: index >= 5 ? 'bold italic' : 'normal',
        lineSpacing: index >= 5 ? 10 : undefined,
      });
    });


    this.add.sprite(this.gameData.game.config.width * 0.9, this.gameData.game.config.height * 0.175, 'shub', 0, { frameWidth: 50, frameHeight: 46 }).setScale(1.5);
    this.add.image(this.gameData.game.config.width * 0.95, this.gameData.game.config.height * 0.275, 'surface', 0, { frameWidth: 30, frameHeight: 26 }).setScale(1.5);
    this.createPlantImages()
    this.createStartButton();
  }

  createPlantImages() {
    const plantXPositions = [0.1, 0.3, 0.5, 0.2, 0.4];
    const plantScale = 0.25;

    plantXPositions.slice(0, 3).forEach((xPos, index) => {
      this.add.image(this.gameData.game.config.width * xPos, this.gameData.game.config.height * 0.3, "plant" + (index + 1)).setScale(plantScale);
      this.add.text(this.gameData.game.config.width * (xPos + 0.05), this.gameData.game.config.height * 0.3, 'cost :' + this.gameData.plants.at(index).cost, {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000',
        align: 'left',
        fontStyle: index >= 5 ? 'bold italic' : 'normal',
        lineSpacing: index >= 5 ? 10 : undefined,
      });
    });
    plantXPositions.slice(3,plantXPositions.length).forEach((xPos, index) => {
      const offset = 4
      this.add.image(this.gameData.game.config.width * xPos, this.gameData.game.config.height * 0.5, "plant" + (index +offset)).setScale(plantScale);
      this.add.text(this.gameData.game.config.width * (xPos + 0.05), this.gameData.game.config.height * 0.5, 'cost :' + this.gameData.plants.at(index).cost, {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000',
        align: 'left',
        fontStyle: index >= 5 ? 'bold italic' : 'normal',
        lineSpacing: index >= 5 ? 10 : undefined,
      });
    });
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
