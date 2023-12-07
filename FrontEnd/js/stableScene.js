import ProgressScene from "./progressScene.js";
import FeedbackScene from "./feedbackScene.js";
import AttentionScene from "./attentionScene.js";
import { costsArray } from "./constants.js";

class StableScene extends Phaser.Scene {
  constructor(gameData) {
    super({ key: "stableScene" });
    this.gameData = gameData;
    this.startTime = undefined;
  }

  budget = undefined;
  currentBudget = 0;
  health = 0;
  healthIndicator;
  isShubInitialized = false;
  buttonContainer;

  init() {}

  preload() {
    this.currentBudget = this.gameData.budget;

    if (!this.gameData.health) this.gameData.health = this.health;

    this.load.image("stable", "static/stable.png");
    this.load.spritesheet("shub", "static/shub_spritesheet.png", {
      frameWidth: 50,
      frameHeight: 47,
    });

    // load button images
    this.load.image("buttonUp", "static/buttonUp.png");
    this.load.image("buttonDown", "static/buttonDown.png");
    this.load.image("buttonFeed", "static/buttonSubmit.png");

    //load plant images
    this.load.image("plant1", this.gameData.plants[0]);
    this.load.image("plant2", this.gameData.plants[1]);
    this.load.image("plant3", this.gameData.plants[2]);
    this.load.image("plant4", this.gameData.plants[3]);
    this.load.image("plant5", this.gameData.plants[4]);

    // Resetting the click count
    // this.gameData.clickCountVar1 = 0
    // this.gameData.clickCountVar2 = 0
    // this.gameData.clickCountVar3 = 0
    // this.gameData.clickCountVar4 = 0
    // this.gameData.clickCountVar5 = 0
  }

  create() {
    this.startTime = new Date().getTime();

    // this.gameData.trialCount++
    // if (this.gameData.trialCount > this.gameData.numTrialsPerBlock || this.gameData.cur_pred) {
    //   this.gameData.feedback_flag = true;
    // } else {
    //   this.gameData.feedback_flag = false;
    // }
    /** Round and  budget information */

    this.RoundTextContainer = this.add
      .text(
        window.innerWidth * 0.48,
        window.innerHeight * 0.05,
        "Planet No : " + this.gameData.testno,
        { fontFamily: "monogram", fontSize: "36px", color: "#000000" }
      )
      .setOrigin(0, 0);

    if (!this.gameData.feedback_flag) {
      //Round no
      // this.add.text(
      //   window.innerWidth * 0.03,
      //   window.innerHeight * 0.57,
      //   "Round :" + this.gameData.trialCount,
      //   { fontFamily: "monogram", fontSize: "16px", color: "#000000" }
      // );
      // const highestArray = this.findArrayWithHighestSum(this.gameData.cf_array);
      // if (highestArray?.length > 0) {
      //   let budget = 0;
      //   highestArray.forEach((x) => (budget += x));
      //   // this.currentBudget = this.budget = Math.abs(this.totalBudget = budget + 10);
      //   this.currentBudget = this.budget = Math.abs(this.totalBudget = budget);
      // }
      //  budget information
      // this.budget = this.add.text(
      //   window.innerWidth * 0.03,
      //   window.innerHeight * 0.4,
      //   //"Available Budget :" + this.currentBudget,
      //   "Consider the following selcted values on drop menu for feeding.",
      //   { fontFamily: "monogram", fontSize: "16px", color: "#000000" }
      // );
      //this.updateBudget();
    }

    // *** define variable values for a clean run ***
    let oldVar1 = this.gameData.clickCountVar1;
    let oldVar2 = this.gameData.clickCountVar2;
    let oldVar3 = this.gameData.clickCountVar3;
    let oldVar4 = this.gameData.clickCountVar4;
    let oldVar5 = this.gameData.clickCountVar5;

    // *** Upper content of window ***
    // if (this.gameData.trialCount == 1) {
    //   this.add.text(
    //     window.innerWidth * 0.025,
    //     window.innerHeight * 0.025,
    //     "This is your first run!",
    //     { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
    //   );
    //   this.add.text(
    //     window.innerWidth * 0.025,
    //     window.innerHeight * 0.073,
    //     "Make selection from dropdown menu below.",
    //     { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
    //   );
    //   this.add.text(
    //     window.innerWidth * 0.025,
    //     window.innerHeight * 0.123,
    //     "Submit by hitting the button on the bottom right.",
    //     { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
    //   );
    //   this.add.text(
    //     window.innerWidth * 0.025,
    //     window.innerHeight * 0.156,
    //     "Following is your original input which was resulted to decrese the fitness level.",
    //     { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
    //   );
    // }

    if (1) {
      this.gameData.shubOldHealth.push(this.gameData.health);

      // this.add.text(
      //   window.innerWidth * 0.025,
      //   window.innerHeight * 0.09,
      //   "Shub health : " + (this.gameData.cur_pred ? " increased" : " decreased"),
      //   { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
      // );
      if (this.gameData.cur_pred) {
        // this.gameData.health += 5;
        this.health = this.gameData.health;
        this.gameData.shubNewHealth.push(this.gameData.health);
      } else {
        // this.gameData.health -= 5;
        this.health = this.gameData.health;
        this.gameData.shubNewHealth.push(this.gameData.health);
      }
      // this.add.text(
      //   window.innerWidth * 0.025,
      //   window.innerHeight * 0.12,
      //   "Before Shub's fitness level was : " +
      //     this.gameData.shubOldHealth.at(-1) +
      //     ", and Now it is : " +
      //     this.gameData.health,
      //   { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
      // );
    }
    this.gameData.prevHealth = this.gameData.health;

    if (this.gameData.trialCount == this.gameData.numTrialsPerBlock) {
      let feedText = this.add.text(
        window.innerWidth * 0.025,
        window.innerHeight * 0.15,
        "Your selected leaf ranges are:",
        { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
      );
    }

    // display everything:
    this.add
      .image(window.innerWidth * 0.05, window.innerHeight * 0.125, "plant1")
      .setScale(0.1);
    this.add.text(
      window.innerWidth * 0.07,
      window.innerHeight * 0.125,
      "x " + this.gameData.clickCountVar1,
      { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
    );
    this.add
      .image(window.innerWidth * 0.16, window.innerHeight * 0.125, "plant2")
      .setScale(0.1);
    this.add.text(
      window.innerWidth * 0.18,
      window.innerHeight * 0.125,
      "x " + this.gameData.clickCountVar2,
      { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
    );
    this.add
      .image(window.innerWidth * 0.27, window.innerHeight * 0.125, "plant3")
      .setScale(0.1);
    this.add.text(
      window.innerWidth * 0.29,
      window.innerHeight * 0.125,
      "x " + this.gameData.clickCountVar3,
      { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
    );
    this.add
      .image(window.innerWidth * 0.38, window.innerHeight * 0.125, "plant4")
      .setScale(0.1);
    this.add.text(
      window.innerWidth * 0.4,
      window.innerHeight * 0.125,
      "x " + this.gameData.clickCountVar4,
      { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
    );
    this.add
      .image(window.innerWidth * 0.49, window.innerHeight * 0.125, "plant5")
      .setScale(0.1);
    this.add.text(
      window.innerWidth * 0.51,
      window.innerHeight * 0.125,
      "x " + this.gameData.clickCountVar5,
      { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
    );

    //"Example diet with no positive outcome.",
    this.add.text(
      window.innerWidth * 0.025,
      window.innerHeight * 0.05,
      "Your selected leaf ranges are:",
      { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
    );
    // Explaination modal here

    // if (this.gameData.trialCount > 1 && !this.gameData.cur_pred) {
    if (1) {
      this.add.text(
        window.innerWidth * 0.025,
        window.innerHeight * 0.2,
        "Based on the provided range of leaves, a healthier combination is suggested below:",
        { fontFamily: "monogram", fontSize: "20px", color: "#03ff30" }
      );
      this.add.text(
        window.innerWidth * 0.025,
        window.innerHeight * 0.3,
        "The Shub's fitness level could have been better if you had selected the following:",
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );

      this.add.text(
        window.innerWidth * 0.025,
        window.innerHeight * 0.45,
        "Consider the above suggestion as a diet for the Shub by clicking on the Feeding time button:",
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );

      this.add
        .image(window.innerWidth * 0.05, window.innerHeight * 0.35, "plant1")
        .setScale(0.1);
      this.add.text(
        window.innerWidth * 0.07,
        window.innerHeight * 0.35,
        "x " + this.gameData.cf_array?.at(-1)?.at(0),
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );
      this.add
        .image(window.innerWidth * 0.16, window.innerHeight * 0.35, "plant2")
        .setScale(0.1);
      this.add.text(
        window.innerWidth * 0.18,
        window.innerHeight * 0.35,
        "x " + this.gameData.cf_array?.at(-1)?.at(1),
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );
      this.add
        .image(window.innerWidth * 0.27, window.innerHeight * 0.35, "plant3")
        .setScale(0.1);
      this.add.text(
        window.innerWidth * 0.29,
        window.innerHeight * 0.35,
        "x " + this.gameData.cf_array?.at(-1)?.at(2),
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );
      this.add
        .image(window.innerWidth * 0.38, window.innerHeight * 0.35, "plant4")
        .setScale(0.1);
      this.add.text(
        window.innerWidth * 0.4,
        window.innerHeight * 0.35,
        "x " + this.gameData.cf_array?.at(-1)?.at(3),
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );
      this.add
        .image(window.innerWidth * 0.49, window.innerHeight * 0.35, "plant5")
        .setScale(0.1);
      this.add.text(
        window.innerWidth * 0.51,
        window.innerHeight * 0.35,
        "x " + this.gameData.cf_array?.at(-1)?.at(4),
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );

      var loadingText = this.add
        .text(-70, -15, "Loading...", {
          fontSize: "20px",
          color: "#ffffff",
        })
        .setOrigin(0);

      const loadingButton = this.add.image(0, 0, "buttonFeed").setScale(0.4);

      var loadingContainer = this.add.container(
        window.innerWidth * 0.8,
        window.innerHeight * 0.6,
        [loadingButton, loadingText]
      );
      loadingContainer.setVisible(false);
    }

    // if three trails are done, get feedback and start a new block
    // if (this.gameData.feedback_flag) {

    //   // instatiate and add new progress scene with current data
    //   var feedbackScene = undefined;
    //   // add button to submit new input - change scene when pressed!
    //   const buttonFeed = this.add
    //     .image(0, 0, "buttonFeed")
    //     .setScale(0.5)
    //     .setInteractive()
    //     .on("pointerdown", this.clickBtnFeedback.bind(this));

    //   var textFeedback = this.add.text(-90, -20, "Get feedback!", {
    //     fontSize: "25px",
    //     color: "#ffffff",
    //   });
    //   buttonContainer = this.add.container(
    //     window.innerWidth * 0.8,
    //     window.innerHeight * 0.5,
    //     [buttonFeed, textFeedback]
    //   );
    // } else {
    // update old number of shubs
    this.gameData.oldNumber = this.gameData.newNumber;

    const plantY = 0.55;
    const dropDownY = plantY;
    const textY = plantY - 0.02;

    //PLANT 1:
    const xOffset = 0.03;
    const yOffset = plantY;
    const textXOffset = 0.03;
    const dropDownXOffset = 0.1;
    const plantImages = this.gameData.plants.map(
      (plantData) => plantData.image
    );

    var progressScene = undefined;
    // add button to submit new input - change scene when pressed!
    const buttonFeed = this.add
      .image(0, 0, "buttonFeed")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", () => this.logTimeFeed())
      .on("pointerdown", () => {
        this.gameData.budget = this.currentBudget;

        progressScene = new ProgressScene(this.gameData);
      })
      .on("pointerdown", () =>
        this.scene.remove("progressScene", progressScene)
      )
      .on("pointerdown", () => this.scene.add("progressScene", progressScene))
      .on("pointerdown", () => this.scene.start("progressScene"));

    var textFeed = this.add
      .text(-70, -15, "Feeding time!", {
        fontSize: "20px",
        color: "#ffffff",
      })
      .setOrigin(0);
    var buttonContainer = this.add.container(
      window.innerWidth * 0.8,
      window.innerHeight * 0.6,
      [buttonFeed, textFeed]
    );

    // // updating budget to global
    // const imgindex = +localStorage.getItem('imgindex')
    // this.currentBudget =
    // this.gameData.budget -
    // (this.gameData.cf_array[0] * this.costsArray[imgindex].leaves[0].cost +
    //   this.gameData.cf_array[1] * this.costsArray[imgindex].leaves[1].cost +
    //   this.gameData.cf_array[2] * this.costsArray[imgindex].leaves[2].cost +
    //   this.gameData.cf_array3[3] * this.costsArray[imgindex].leaves[3].cost +
    //   this.gameData.cf_array[4] * this.costsArray[imgindex].leaves[4].cost);
    // this.gameData.budget = this.currentBudget;

    //   for (let i = 0; i < plantImages.length; i++) {
    //     const xPosition = window.innerWidth * (xOffset + i * dropDownXOffset); // Fixed xPosition calculation

    //     // Plant Image
    //     this.add
    //       .image(xPosition, window.innerHeight * (yOffset - 0.05), 'plant' + (i + 1))
    //       .setScale(0.1);

    //     // add counters for plant
    //     this[`clickCountTextVar${i}`] = this.add.text(
    //       xPosition + (window.innerWidth * (textXOffset)),
    //       window.innerHeight * (dropDownY - 0.05),
    //       this.gameData.cf_array?.at(-1)?.at(i),
    //       { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
    //     );

    //     // Plant Dropdown
    //     const buttonVar = this.createDropdown(
    //     xPosition + (window.innerWidth * (0.07)),
    //     window.innerHeight * (dropDownY - 0.055),
    //     this[`clickCountTextVar${i}`],
    //     this.gameData.dropDownRanges[i].min,
    //     // this.gameData[`clickCountVarMax${i + 1}`]
    //     this.gameData.dropDownRanges[i].max
    //     );
    //   // }

    //   /**
    // * Help container starts here
    // */
    //   // Create a container for the popup
    //   const popupContainer = this.add.container(0, 0).setDepth(100);
    //   // Background
    //   var infoDialogBG = this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0xFFFFFF, 0.5).setOrigin(0);
    //   popupContainer.add(infoDialogBG);
    //   // Dialog
    //   var infoDialog = this.add.rectangle((window.innerWidth * 0.5) - 300, (window.innerHeight * 0.5) - 260, 800, 400, 0xffffff, 1).setOrigin(0);
    //   infoDialog.setStrokeStyle(1, 0x1000000, 1);
    //   popupContainer.add(infoDialog);
    //   // Text
    //   var borrowInfoDialogTxt = this.add.text((window.innerWidth * 0.5) - 280, (window.innerHeight * 0.5) - 200, 'According to your planet, the cost of one leaf for each type is following:', { fontFamily: "monogram", fontSize: '16px', color: '#000000' }).setOrigin(0);
    //   popupContainer.add(borrowInfoDialogTxt);
    //   // leaves and costs

    //   const constants = {
    //     screenWidth: this.scale.width,
    //     screenHeight: this.scale.height,
    //   };

    //   // OK Button
    //   var buttonNo = this.add.rectangle((window.innerWidth * 0.5) + 50, (window.innerHeight * 0.5) + 25, 100, 50, 0x1a65ac, 1).setOrigin(0);
    //   buttonNo.setStrokeStyle(1, 0x1000000, 1);
    //   var buttonTextOK = this.add.text((window.innerWidth * 0.5) + 80, (window.innerHeight * 0.5) + 30, 'Ok', { fontFamily: "monogram", fontSize: '25px', color: '#ffffff' }).setOrigin(0);

    //   // Make the button interactive and hide the popup on click
    //   buttonNo.setInteractive().on('pointerdown', hidePopup);

    //   // Add button and text to the container
    //   popupContainer.add(buttonNo);
    //   popupContainer.add(buttonTextOK);

    //   for (let i = 0; i < this.gameData.plants.length; i++) {
    //     const xPos = window.innerWidth * 0.3 + (80 * i);
    //     const yPos = window.innerHeight * 0.3;
    //     const costPerUnitText = ":";
    //     const plantKey = `plant${i + 1}`;
    //     const plantCost = this.gameData.plants[i].cost;

    //     const img = this.add.image(xPos, yPos, plantKey).setScale(0.1);
    //     const txt = this.add.text(
    //       xPos + 25,
    //       yPos,
    //       `${costPerUnitText} ${plantCost}`,
    //       {
    //         fontFamily: "monogram",
    //         fontSize: "18px",
    //         color: "#000000",
    //       }
    //     );
    //     popupContainer.add(img);
    //     popupContainer.add(txt);

    //   }

    //   // Initially, hide the popup
    //   popupContainer.setVisible(false);

    //   // Function to show the popup
    //   function showPopup() {
    //     popupContainer.setVisible(true);
    //   }
    //   // Function to hide the popup
    //   function hidePopup() {
    //     popupContainer.setVisible(false);
    //   }

    //   /**
    //    * Help container ends here
    //    */
    //   // var helpText = this.add
    //   // .text(-70, -15, "Help", {
    //   //   fontSize: "20px",
    //   //   color: "#ffffff",
    //   // })
    //   // .setOrigin(0);
    //   // const helpButton = this.add
    //   // .image(0, 0, "buttonFeed")
    //   // .setScale(0.4)
    //   // .setInteractive()
    //   // .on("pointerdown", () => {
    //   //   showPopup();
    //   // })

    // var leafCostText = this.add
    //   .text(0, 0, "Cost:", {
    //     fontSize: "20px",
    //     color: "#ffffff",
    //   }).setOrigin(0)

    // const leafCosts =  this.add
    //   .image(window.innerWidth * 0.8, window.innerHeight * 7, "buttonFeed")
    //   .setScale(0.4)
    //   .setInteractive()
    //   .on("pointerdown", () => {
    //     showPopup();
    //   }).setOrigin(0);

    // this.add.container(
    //     window.innerWidth * 0.7, window.innerHeight * 0.5
    //     [leafCosts, leafCostText])

    // this.add
    //     .text(window.innerWidth * 0.8, window.innerHeight * 0.5, "Cost", {
    //       fontSize: "20px",
    //       color: "#fff",
    //     })

    //   // enter attention scene after pre-defined trials (see gameUI)
    //   if (this.gameData.attentionTrials.includes(this.gameData.trialCount)) {
    //     // instatiate and add new progress scene with current data
    //     var attentionScene = undefined;
    //     // add button to submit new input - change scene when pressed!
    //     const buttonFeed = this.add
    //       .image(0, 0, "buttonFeed")
    //       .setScale(0.4)
    //       .setInteractive()
    //       .on("pointerdown", () => this.logTimeFeed())
    //       .on(
    //         "pointerdown",
    //         () => {this.gameData.budget = this.currentBudget;
    //           attentionScene = new AttentionScene(this.gameData)}
    //       )
    //       .on("pointerdown", () =>
    //         this.scene.remove("attentionScene", attentionScene)
    //       )
    //       .on("pointerdown", () =>
    //         this.scene.add("attentionScene", attentionScene)
    //       )
    //       .on("pointerdown", () => this.scene.start("attentionScene"))

    //     var textFeed = this.add
    //       .text(-70, -15, "Feeding time!", {
    //         fontSize: "20px",
    //         color: "#ffffff",
    //       })
    //       .setOrigin(0);
    //     var buttonContainer = this.add.container(
    //       window.innerWidth * 0.8,
    //       window.innerHeight * 0.6,
    //       [buttonFeed, textFeed]
    //     );
    //   } else {
    //     // instatiate and add new progress scene with current data
    //     var progressScene = undefined;
    //     // add button to submit new input - change scene when pressed!
    //     const buttonFeed = this.add
    //       .image(0, 0, "buttonFeed")
    //       .setScale(0.4)
    //       .setInteractive()
    //       .on("pointerdown", () => this.logTimeFeed())
    //       .on("pointerdown", () => {
    //         this.gameData.budget = this.currentBudget;
    //         progressScene = new ProgressScene(this.gameData);
    //       })
    //       .on("pointerdown", () =>
    //         this.scene.remove("progressScene", progressScene)
    //       )
    //       .on("pointerdown", () =>
    //         this.scene.add("progressScene", progressScene)
    //       )
    //       .on("pointerdown", () => this.scene.start("progressScene"));

    //     var textFeed = this.add
    //       .text(-70, -15, "Feeding time!", {
    //         fontSize: "20px",
    //         color: "#ffffff",
    //       })
    //       .setOrigin(0);
    //     var buttonContainer = this.add.container(
    //       window.innerWidth * 0.8,
    //       window.innerHeight * 0.6,
    //       [buttonFeed, textFeed]
    //     );
    //   }
    // }

    // Display stable and Shubs

    // Image size in percentages
    let xInPercentage, yInPercentage, widthInPercentage, heightInPercentage;
    xInPercentage = 0.7;
    yInPercentage = 0.1;
    const xInPixels = window.innerWidth * xInPercentage;
    const yInPixels = window.innerHeight * 0.01;

    this.createSlider(xInPixels + 300, yInPixels, 0, 40, this.gameData.health);

    // define animated shubs (aka "sprites" in phaser terms)
    var shubs = {
      key: "move",
      frames: this.anims.generateFrameNumbers("shub", {
        start: 0,
        end: 9,
        first: Phaser.Math.Between(0, 9),
      }),
      frameRate: 10,
      repeat: -1,
      repeatDelay: 10,
    };

    // create animation
    this.anims.create(shubs);

    // Calculating shub positions
    const subXposition = xInPixels / 2 + 688;

    const percentage = this.health / 25;
    const subYPosition = yInPixels + 140 - percentage * 140;

    var thisShub = this.add.sprite(subXposition, subYPosition, "shub", 0);
    //set the width of the sprite
    thisShub.displayWidth = 65;
    //scale evenly
    thisShub.scaleY = thisShub.scaleX;
    // animate current individual
    thisShub.anims.delayedPlay(
      Phaser.Math.Between(0, 100),
      "move",
      Phaser.Math.Between(0, 9)
    );
    if (Phaser.Math.Between(0, 1) == 1) {
      // some move backward for variation
      thisShub.anims.reverse();
    }
  }

  /**
   *  clickBtnFeedback
   */
  clickBtnFeedback() {
    this.logTimeFeedback();
    this.gameData.budget = this.currentBudget;
    var feedbackScene = new FeedbackScene(this.gameData);
    this.scene.remove("feedbackScene", feedbackScene);
    this.scene.add("feedbackScene", feedbackScene);
    this.scene.start("feedbackScene");
  }

  logTimeFeed() {
    var time = new Date().getTime() - this.startTime;
    this.gameData.api.logTime(
      3,
      time,
      this.gameData.blockCount,
      this.gameData.trialCount
    );
  }

  /**
   *  logTimeFeedback
   */
  logTimeFeedback() {
    var time = new Date().getTime() - this.startTime;
    this.gameData.api.logTime(
      4,
      time,
      this.gameData.blockCount,
      this.gameData.trialCount
    );
  }

  update() {}

  /**
   * Creates a clickable dropdown on given position
   * @param {number} dropdownX
   * @param {number} dropdownY
   */
  createDropdown = (dropdownX, dropdownY, variable, textField, min, max) => {
    min = 0;
    max = 6;
    // Dropdown content and style
    let dropdownItems = [];
    while (max - min >= 0) {
      dropdownItems.push(min);
      min++;
    }

    const itemHeight = 30;
    const dropdownWidth = 60;
    const dropdownHeight = itemHeight * dropdownItems.length;

    // Create a graphics object to draw the dropdown background
    const graphics = this.add.graphics();
    graphics.fillStyle(0x333333, 1);
    graphics.fillRoundedRect(
      dropdownX,
      dropdownY,
      dropdownWidth,
      dropdownHeight,
      5
    );

    // Create the dropdown button image
    this.add
      .image(dropdownX - 10, dropdownY, "buttonDown")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => {
        toggleDropdown(dropdownGroup); // Use the defined toggleDropdown function
      });

    // Create a group to hold the dropdown items
    const dropdownGroup = this.add.group();

    dropdownGroup.add(graphics);

    // this.gameData.api.creteBorderBox(dropdownX-60,dropdownY-13,70,35,this.add)

    // Function to handle dropdown visibility toggle
    const toggleDropdownVisibility = () => {
      toggleDropdown(dropdownGroup); // Use the defined toggleDropdown function
    };

    // Function to hide the dropdown when clicked outside
    const hideDropdownOnOutsideClick = (pointer) => {
      // if (!graphics.getBounds().contains(pointer.x, pointer.y)) {
      toggleDropdown(dropdownGroup); // Use the defined toggleDropdown function
      this.input.off("pointerdown", hideDropdownOnOutsideClick);
      // }
    };

    // Function to handle toggling the visibility of the dropdown group
    const toggleDropdown = () => {
      dropdownGroup.visibility = !dropdownGroup.visibility;
      dropdownGroup.toggleVisible();
    };

    // Add click event handler for the background graphics
    graphics.setInteractive().on("pointerdown", toggleDropdownVisibility);

    // Add each item to the dropdown group
    dropdownItems.forEach((item, index) => {
      const dropdownItem = this.add
        .text(
          dropdownX + dropdownWidth - 20, // Offset to make it look better
          dropdownY + 8 + index * itemHeight,
          item,
          {
            font: "16px monogram",
            fill: "#ffffff",
          }
        )
        .setInteractive()
        .on("pointerdown", () => {
          // Checking if the selected value is greater then or equal to remaining budget. If not show an alert
          if (this.currentBudget - parseInt(item) < 0) {
            alert(
              "accept the already selected values for better fitness and click feeding." // + this.currentBudget
            );
            return;
          }

          // Assigning the value to the dropdown
          this.gameData[variable] = parseInt(item);
          textField.setText(item);

          // Updates total remaining budget by adding all 5 fields
          // this.updateBudget();

          // Close dropdown after selection.
          toggleDropdown();
        });

      dropdownGroup.add(dropdownItem);
    });
    dropdownGroup.visibility = false;

    // Initially, hide the dropdown
    dropdownGroup.toggleVisible = () => {
      dropdownGroup.setVisible(dropdownGroup.visibility);

      dropdownGroup.children.iterate((child) => {
        child.setVisible(dropdownGroup.visibility);
      });
    };

    dropdownGroup.toggleVisible();
  };

  // updateBudgetGlobal() {
  //   const imgindex = +localStorage.getItem('imgindex')
  //   // this.updateBudgetGlobal = this.gameData.budget ;
  //   this.currentBudget =
  //     this.gameData.budget -
  //     (this.gameData.cf_array[0] * this.costsArray[imgindex].leaves[0].cost +
  //       this.gameData.cf_array[1] * this.costsArray[imgindex].leaves[1].cost +
  //       this.gameData.cf_array[2] * this.costsArray[imgindex].leaves[2].cost +
  //       this.gameData.cf_array3[3] * this.costsArray[imgindex].leaves[3].cost +
  //       this.gameData.cf_array[4] * this.costsArray[imgindex].leaves[4].cost);
  //       this.gameData.budget = this.currentBudget;
  //   // this.budget.setText("Available budget :" + this.currentBudget);
  // }

  createSlider(x, y, min, max, current) {
    if (this.isShubInitialized) return;
    this.isShubInitialized = true;
    const range = 25;
    const percentage = (current - min) / range;
    const sliderHeight = 180;

    this.add.text(x, y - 20, "Fitness Levels", {
      fontFamily: "Ariel",
      fontSize: "10px",
      color: "#000000",
      fontWeight: "bold",
    });

    let graphics = this.add.graphics();
    graphics.fillStyle(0x333333, 1);
    graphics.fillRect(x - 5, y, 15, sliderHeight);

    const indicatorY = y + sliderHeight - percentage * sliderHeight;
    this.healthIndicator = this.add.graphics();
    this.healthIndicator.fillStyle(0xff0000, 1);
    this.healthIndicator.fillRect(x - 5, indicatorY, 25, 5);

    for (let i = 0; i < 6; i++) {
      const stepValue = min + (range / 5) * i;
      const stepPercentage = (stepValue - min) / range;
      const stepY = y + sliderHeight - stepPercentage * sliderHeight;

      this.add.text(x + 10, stepY - 10, "  Level-" + stepValue, {
        fontFamily: "monogram",
        fontSize: "11px",

        color: "#000000",
      });
    }
  }

  findArrayWithHighestSum(arrays) {
    if (!arrays || arrays.length === 0) {
      return null;
    }

    let maxSum = -Infinity;
    let maxArray = null;

    for (let i = 0; i < arrays.length; i++) {
      const currentArray = arrays[i];
      const currentSum = currentArray.reduce((acc, num) => acc + num, 0);

      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxArray = currentArray;
      }
    }

    return maxArray;
  }
}

export default StableScene;
