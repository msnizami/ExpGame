import StableConfigScene from './stableConfigScene.js';

class StartScene extends Phaser.Scene {
  constructor(gameData) {
    super({ key: 'startScene' });
    this.gameData = gameData;
    this.startTime = undefined;
  }

  preload() {
    this.loadAssets();
  }

  create() {
    this.startTime = new Date().getTime();
    this.createUI();
  }

  logTime() {
    const time = new Date().getTime() - this.startTime;
    this.gameData.api.logTime(2, time);
  }

  loadAssets() {
    this.load.spritesheet('shub', 'static/shub_spritesheet.png', {
      frameWidth: 50,
      frameHeight: 47,
    });

    this.load.image('buttonUp', 'static/buttonUp.png');
    this.load.image('buttonDown', 'static/buttonDown.png');
    this.load.image('buttonFeed', 'static/buttonSubmit.png');

    for (let i = 0; i < this.gameData.plants.length; i++) {
      const plantKey = `plant${i + 1}`;
      this.load.image(plantKey, this.gameData.plants[i].image);
    }
  }

  createUI() {
    const constants = {
      screenWidth: this.scale.width,
      screenHeight: this.scale.height,
    };

    const leafBudgetHeading = [
      "Information about the selection of leaves, budget, allowed attempts, and scoring mechanism.",
    ];

    const costsHeading = ["You will see an example of non-optimal diet."];

    const costPerUnitText = "Cost: .";

    const specialNote = [
      "You will have 5 attempts to help Shub finding a diet which optimizes the following goals:",
      "",
      "    1) minimum number of attempts",
      "    2) minimum spent of the given budget",
      "    3) minimum number of changes with respect to the given non-optimal diet",
      "",
      "In each attempt, you must select a new combination of leaves such as the total cost remains below the given budget.",
      "You can select a value up to 6 for each type of leaf provided that the budget allows it.",
      "Notice that  the smaller the values of leaves,",
       "the smaller the number of options to explore in the search for the optimal solution", 
      "but also the bigger chance not to find a plausible solution.",
    ];

    this.add.text(
      constants.screenWidth * 0.2,
      constants.screenHeight * 0.045,
      leafBudgetHeading,
      {
        fontFamily: "Arial",
        fontSize: "18px",
        fontStyle: "bold",
        color: "#000000",
        align: "left",
      }
    );

    this.add.text(
      constants.screenWidth * 0.055,
      constants.screenHeight * 0.15,
      costsHeading,
      { fontFamily: "Arial", fontSize: "18px", color: "#000000", align: "left" }
    );

    // for (let i = 0; i < this.gameData.plants.length; i++) {
    //   const xPos = constants.screenWidth * (0.1 + i * 0.2);
    //   const yPos = constants.screenHeight * 0.35;

    //   const plantKey = `plant${i + 1}`;
    //   const plantCost = this.gameData.plants[i].cost;

    //   this.add.image(xPos, yPos, plantKey).setScale(0.25);
    //   this.add.text(
    //     xPos + 50,
    //     yPos,
    //     `${costPerUnitText} ${plantCost}`,
    //     {
    //       fontFamily: "Arial",
    //       fontSize: "18px",
    //       color: "#000000",
    //     }
    //   );
    // }

    this.add.text(
      constants.screenWidth * 0.055,
      constants.screenHeight * 0.25,
      specialNote,
      {
        fontFamily: "Arial",
        fontSize: "18px",
        color: "#000011",
        align: "left",
        lineSpacing: 10,
      }
    );

    setTimeout(() => {
      // Instantiate and add a new stable scene with current data
      let stableConfigScene = undefined;

      // Add a button to start the game and switch to fullscreen
      const buttonStart = this.add
        .image(0, 0, "buttonFeed")
        .setScale(0.4)
        .setInteractive()
        .on("pointerdown", () => this.logTime())
        .on("pointerdown", () => this.scale.startFullscreen())
        .on("pointerdown", () => {
          stableConfigScene = new StableConfigScene(this.gameData);
          this.scene.add("stableConfigScene", stableConfigScene);
          this.scene.start("stableConfigScene");
        });

      const textStart = this.add
        .text(-40, -15, "Play!", { fontSize: "20px", color: "#ffffff" })
        .setOrigin(0);
      const buttonContainer = this.add.container(
        constants.screenWidth * 0.85,
        constants.screenHeight * 0.75,
        [buttonStart, textStart]
      );
    }, this.gameData.btnStartShowDelay);
  }
}

export default StartScene;
