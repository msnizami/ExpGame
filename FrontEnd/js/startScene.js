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

    const costsHeading = [""];

    const costPerUnitText = "Cost: .";

    const specialNote = [
      "Today, you will visit 3 planets, with a single budget that covers all 3 visits.",
      "When you arrive at a new planet, you will see an example of a non-optimal diet for this planet.",
      "Also, you will see a box showing the planets environment, highlighting the costs for the plants for current planet.",
      "",
      "Your first task is to provide the AlienNutriSolver with preliminary ranges of leaves for this planet.",
      "Watch your budget because all suggested ranges will be deducted from it.",
      "You have 5 attempts to select a suitable range, with the following goals:",
      "   1. Keep the number of attempts to a minimum.",
      "   2. Keep the overall costs to a minimum, so you will have some budget left for the next planet.",
      "You can select a value of up to 6 for each type of leaf, provided your budget allows it.",
      "",
      "When you feed Shub a diet, witness its growth reflected in various fitness levels",
      "on the Fitness Slider displayed on your screen."
    ];

    this.add.text(
      constants.screenWidth * 0.1,
      constants.screenHeight * 0.085,
      leafBudgetHeading,
      {
        fontFamily: "Arial",
        fontSize: "18px",
        fontStyle: "bold",
        color: "#000ff0",
        align: "left",
      }
    );

    // this.add.text(
    //   constants.screenWidth * 0.055,
    //   constants.screenHeight * 0.15,
    //   costsHeading,
    //   { fontFamily: "Arial", fontSize: "18px", color: "#000000", align: "left" }
    // );

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
