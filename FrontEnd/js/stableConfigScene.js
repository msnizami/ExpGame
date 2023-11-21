import FeedbackScene from "./feedbackScene.js";
import StableScene from "./stableScene.js";


class StableConfigScene extends Phaser.Scene {
  constructor(gameData) {
    super({ key: "stableConfigScene" });
    this.gameData = gameData;
    this.startTime = new Date().getTime();
  }


  budget = 0;
  health = 0;
  healthIndicator;
  diffCountVars;
  errorText;
  totalBudget = 0;
  currentBudget = 0;
  attemptsCount = 2;
  triesText
  levelTextContainer
  RoundTextContainer
  trialCountLimit;
  hasBorrowedTries = true

  exampleTestCaseText

  init() { }

  preload() {
    const values =  this.gameData.testInstances.at(0)
    for(let i =0; i< values?.length; i++){
      // this.gameData.dropDownRanges.at(i).max = values.at(i);
      this.gameData['clickCountVar'+i] = values.at(i)
    }



    if (!this.gameData.health) this.gameData.health = this.health;

    this.trialCountLimit = this.gameData.numTrialsPerBlock;

    // this.load.image("stable", "static/stable.png");
    this.load.spritesheet("shub", "static/shub_spritesheet.png", {
      frameWidth: 50,
      frameHeight: 47,
    });

    this.load.spritesheet("coin", "static/Coin.png", {
      frameWidth: 7,
      frameHeight: 8,
    });

    this.load.image("buttonUp", "static/buttonUp.png");
    this.load.image("buttonDown", "static/buttonDown.png");
    this.load.image("buttonFeed", "static/buttonSubmit.png");

    for (let i = 0; i < 5; i++) {
      this.load.image("plant" + (i + 1), this.gameData.plants[i].image);
    }

    this.gameData.isStableConfigured = false;

    // const highestArray = this.findArrayWithHighestSum(this.gameData.testInstances);

    // if (highestArray?.length > 0) {
    //   budget = 0;
    //   highestArray.forEach((x) => (budget += x));
    //   this.totalBudget = this.currentBudget = this.budget = budget;
    // }

    this.totalBudget = this.currentBudget = this.budget = 21 //this.findArrayWithHighestSum(this.gameData.testInstances);
  }


  create() {
    self = this
    /**
     * Help container starts here
     */
    // Create a container for the popup
    const popupContainer = this.add.container(0, 0).setDepth(100);
    // Background
    var infoDialogBG = this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0xFFFFFF, 0.5).setOrigin(0);
    popupContainer.add(infoDialogBG);
    // Dialog
    var infoDialog = this.add.rectangle((window.innerWidth * 0.5) - 300, (window.innerHeight * 0.5) - 260, 800, 400, 0xffffff, 1).setOrigin(0);
    infoDialog.setStrokeStyle(1, 0x1000000, 1);
    popupContainer.add(infoDialog);
    // Text
    var borrowInfoDialogTxt = this.add.text((window.innerWidth * 0.5) - 280, (window.innerHeight * 0.5) - 200, 'Suggestion 1:Your results would have been better if you had changed  yellow_leaf.', { fontFamily: "monogram", fontSize: '16px', color: '#000000' }).setOrigin(0);
    popupContainer.add(borrowInfoDialogTxt);
    var infoDialogTxt2 = this.add.text((window.innerWidth * 0.5) - 280, (window.innerHeight * 0.5) - 150, 'Suggestion 2:Your results would have been better if you had changed  yellow_leaf and pink leaf together.', { fontFamily: "monogram", fontSize: '16px', color: '#000000' }).setOrigin(0);
    popupContainer.add(infoDialogTxt2);
    var infoDialogTxt3 = this.add.text((window.innerWidth * 0.5) - 280, (window.innerHeight * 0.5) - 100, 'Suggestion 3:Your results would have been better if you had changed  yellow_leaf, grey_leaf and pink leaf \ntogether.', { fontFamily: "monogram", fontSize: '16px', color: '#000000' }).setOrigin(0);
    popupContainer.add(infoDialogTxt3);

    // OK Button
    var buttonNo = this.add.rectangle((window.innerWidth * 0.5) + 50, (window.innerHeight * 0.5) + 25, 100, 50, 0x1a65ac, 1).setOrigin(0);
    buttonNo.setStrokeStyle(1, 0x1000000, 1);
    var buttonTextOK = this.add.text((window.innerWidth * 0.5) + 80, (window.innerHeight * 0.5) + 30, 'Ok', { fontFamily: "monogram", fontSize: '25px', color: '#ffffff' }).setOrigin(0);

    // Make the button interactive and hide the popup on click
    buttonNo.setInteractive().on('pointerdown', hidePopup);

    // Add button and text to the container
    popupContainer.add(buttonNo);
    popupContainer.add(buttonTextOK);

    // Initially, hide the popup
    popupContainer.setVisible(false);

    // Function to show the popup
    function showPopup() {
      popupContainer.setVisible(true);
    }
    // Function to hide the popup
    function hidePopup() {
      popupContainer.setVisible(false);
    }

    /**
     * Help container ends here
     */


    /**
     * Borrow Tries container starts here
     */
    // Create a container for the popup
    const borrowPopupContainer = this.add.container(0, 0).setDepth(100);
    // Background
    var infoDialogBG = this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0xFFFFFF, 0.5).setOrigin(0);
    borrowPopupContainer.add(infoDialogBG);
    // Dialog
    var infoDialog = this.add.rectangle((window.innerWidth * 0.5) - 300, (window.innerHeight * 0.5) - 260, 800, 400, 0xffffff, 1).setOrigin(0);
    infoDialog.setStrokeStyle(1, 0x1000000, 1);
    borrowPopupContainer.add(infoDialog);
    // Text
    var borrowInfoDialogTxt = this.add.text((window.innerWidth * 0.5) - 280, (window.innerHeight * 0.5) - 150, 'Do you want to borrow two more attempts.', { fontFamily: "monogram", fontSize: '16px', color: '#000000' }).setOrigin(0);
    borrowPopupContainer.add(borrowInfoDialogTxt);

    // OK Button
    var buttonYes = this.add.rectangle((window.innerWidth * 0.6) + 50, (window.innerHeight * 0.5) + 25, 100, 50, 0x1a65ac, 1).setOrigin(0);
    buttonYes.setStrokeStyle(1, 0x1000000, 1);
    var buttonYesText = this.add.text((window.innerWidth * 0.6) + 80, (window.innerHeight * 0.5) + 30, 'Yes', { fontFamily: "monogram", fontSize: '25px', color: '#ffffff' }).setOrigin(0);
    buttonYes.setInteractive().on('pointerdown', borrowTries);
    borrowPopupContainer.add(buttonYes);
    borrowPopupContainer.add(buttonYesText);
    // OK Button
    var buttonNo = this.add.rectangle((window.innerWidth * 0.4) + 50, (window.innerHeight * 0.5) + 25, 100, 50, 0x1a65ac, 1).setOrigin(0);
    buttonNo.setStrokeStyle(1, 0x1000000, 1);
    var buttonNoText = this.add.text((window.innerWidth * 0.4) + 80, (window.innerHeight * 0.5) + 30, 'No', { fontFamily: "monogram", fontSize: '25px', color: '#ffffff' }).setOrigin(0);
    buttonNo.setInteractive().on('pointerdown', hideBorrowPopup);

    // Add button and text to the container
    borrowPopupContainer.add(buttonNo);
    borrowPopupContainer.add(buttonNoText);

    // Initially, hide the popup
    borrowPopupContainer.setVisible(false);

    // Function to hide the popup
    function hideBorrowPopup() {
      this.hasBorrowedTries = false
      borrowPopupContainer.setVisible(false);
      self.handleRoundComplete()
    }

    // Function to show the popup
    function showBorrowPopup() {
      borrowPopupContainer.setVisible(true);
    }

    function borrowTries() {
      this.hasBorrowedTries = false;
      this.trialCount += 2;
      hideBorrowPopup()
    }

    /**
  * Borrow Tries container ends here
  */


    const constants = {
      screenWidth: this.scale.width,
      screenHeight: this.scale.height,
    };

    this.gameData.api.creteBorderBox(constants.screenWidth * 0.03,  constants.screenHeight * 0.3, constants.screenWidth * .55,constants.screenHeight * .15, this.add)

    this.add.text(
      constants.screenWidth * 0.045,
      constants.screenHeight * 0.3,
      'According to your planet, the cost of one leaf for each type is following:',
      {
        fontFamily: "monogram",
        fontSize: "18px",
        color: "#000000",
      })

    // leaves and costs
    for (let i = 0; i < this.gameData.plants.length; i++) {
      const xPos = constants.screenWidth * (0.05 + (i * 0.1));
      const yPos = constants.screenHeight * 0.35;
      const costPerUnitText = ":";
      const plantKey = `plant${i + 1}`;
      const plantCost = this.gameData.plants[i].cost;

      this.add.image(xPos, yPos + 20, plantKey).setScale(0.1);
      this.add.text(
        xPos + 50,
        yPos,
        `${costPerUnitText} ${plantCost}`,
        {
          fontFamily: "monogram",
          fontSize: "18px",
          color: "#000000",
        }
      );
    }

    //budget information
    // // this.add.image(window.innerWidth * 0.05, window.innerHeight * 0.55, 'plant1').setScale(0.1);
    // this.budget = this.add.text(
    //   window.innerWidth * 0.05 + 50,
    //   (window.innerHeight * 0.55) - 10,
    //   "Available budget:" + this.currentBudget,
    //   { fontFamily: "monogram", fontSize: "16px", color: "#000000" }
    // );

    // this.budget.setText("Try to help me to select range of each leaf (or a few leaves) for which I can find a solution for the better fitness of Shub \n Available Budget: " + this.Budget);
    this.budget = this.add.text(
      window.innerWidth * 0.05 + 50,
      (window.innerHeight * 0.57),
      'Try to help me to select range of each leaf (or a few leaves) for which I can find a solution for the better fitness of Shub \n Available Budget:',
      { fontFamily: "monogram", fontSize: "16px", color: "#000000" }
    );


    //Round information
    this.RoundTextContainer = this.add.text(
      window.innerWidth * 0.48,
      window.innerHeight * 0.03,
      "Test Case No : " + this.gameData.blockCount,
      { fontFamily: "monogram", fontSize: "30px", color: "#000000" }
    ).setOrigin(0, 0);

    // this.levelTextContainer = this.add.text(
    //   window.innerWidth * 0.49,
    //   window.innerHeight * 0.1,
    //   "Level : " + this.gameData.trialCount + 1,
    //   { fontFamily: "monogram", fontSize: "24px", color: "#000000" }
    // ).setOrigin(0, 0);


    // You can trigger the popup to show or hide based on game events or user actions
    // For example, when the player clicks a button, you can call showPopup() to display it.

    const startX = window.innerWidth * 0.05;
    const startY = window.innerHeight * 0.125;
    let scale = 0.2;
    const xOffset = window.innerWidth * 0.11;

    for (let i = 0; i < 5; i++) {
      const plantImage = this.add
        .image(startX + i * xOffset, startY, "plant" + (i + 1))
        .setScale(0.1).setDepth(0);
      const plantValue = this.gameData.testInstances[this.gameData.blockCount - 1][i];

      // Setting the min value to the min of dropdown.
      // this.gameData.dropDownRanges.at(i).min = this.gameData.testInstances[0][i];
      // this.gameData.dropDownRanges.at(i).max = this.gameData.testInstances[0][i];

      const posX = startX + i * xOffset + window.innerWidth * 0.02;

      this.add.text(
        posX,
        startY,
        `x ${plantValue}`,
        { fontFamily: "monogram", fontSize: "20px", color: "#000000" }
      );
    }


    const start_X = window.innerWidth * 0.05;
    const start_Y = window.innerHeight * 0.490;
    scale = 0.1;

    this.add.text(
      window.innerWidth * 0.025,
      window.innerHeight * 0.05,
      "Example diet with no positive outcome.",
      { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
    );

    if (this.gameData.showWrongRangeSelectionMessage) {
      var feedbackScene = undefined;
      // const buttonFeed = this.add
      //   .image(0, 0, "buttonFeed")
      //   .setScale(0.5)
      //   .setInteractive()
      //   .on("pointerdown", this.clickBtnFeedback.bind(this));

      // var textFeedback = this.add.text(-90, -20, "Get feedback!", {
      //   fontSize: "25px",
      //   color: "#ffffff",
      // });

      // var buttonContainer = this.add.container(
      //   window.innerWidth * 0.8,
      //   window.innerHeight * 0.5,
      //   [buttonFeed, textFeedback]
      // );
    } else {
      this.gameData.oldNumber = this.gameData.newNumber;

      const plantY = 0.7;
      const dropDownY = plantY;
      const textY = plantY - 0.02;

      // this.add.text(
      //   window.innerWidth * 0.025,
      //   window.innerHeight * (textY - 0.3),
      //   "Min Values.",
      //   { fontFamily: "monogram", fontSize: "18px", color: "#000000" }
      // );

      const numPlants = 5;

      for (let i = 0; i <= numPlants; i++) {
        let xPosition = window.innerWidth * (0.04 + (i - 1) * 0.15);

        let buttonUpVar1 = this.add.image(xPosition + 0.05 + window.innerWidth * 0.05, window.innerHeight * (plantY - 0.05), 'buttonUp').setScale(0.3)
          .setInteractive()
          .on('pointerdown', () => {
            // this.gameData[`clickCountVar${i}`] *
            if (this.gameData[`clickCountVar${i}`] < 6 && this.currentBudget >= this.gameData.plants.at(i-1).cost) {
              this.gameData[`clickCountVar${i}`]++;
              clickCountTextVar.setText(this.gameData[`clickCountVar${i}`])
              this.updateBudget();
            }
          });

        let clickCountTextVar = this.add.text(
          xPosition + 0.04 + window.innerWidth * 0.04,
          window.innerHeight * (plantY - 0.023),
          this.gameData[`clickCountVar${i}`],
          { fontFamily: "monogram", fontSize: "24px", color: "#000000" }
        );

        let plantImage = this.add
          .image(xPosition, window.innerHeight * plantY-.05, "plant" + i).setDepth(0)
          .setScale(0.1);

        let buttonDownVar = this.add.image(xPosition + 0.05 + window.innerWidth * 0.05, window.innerHeight * (plantY + 0.04), 'buttonDown').setScale(0.3)
          .setInteractive()
          .on('pointerdown', () => {
            if (this.gameData[`clickCountVar${i}`] > 0) {
              this.gameData[`clickCountVar${i}`]--;
              clickCountTextVar.setText(this.gameData[`clickCountVar${i}`]);
              this.updateBudget();
            }
          });
      }

      
      if (this.gameData.attentionTrials.includes(this.gameData.trialCount)) {
        var stableScene = undefined;
        const buttonFeed = this.add
          .image(0, 0, "buttonFeed")
          .setScale(0.4)
          .setInteractive()
          .on("pointerdown", () => {
            this.logTimeFeed();
            stableScene = new StableScene(this.gameData);
            this.scene.remove("stableScene", stableScene);
            this.scene.add("stableScene", stableScene);
            this.scene.start("stableScene");
          });

          
      //Attempts count
      this.triesText = this.add.text(
        window.innerWidth * 0.8
        (window.innerHeight * 0.55) - 10,
        "Attempts Left  :" + this.attemptsCount,
        { fontFamily: "Ariel", fontSize: "16px", color: "#000000" }
      );



        var textFeed = this.add
          .text(-70, -15, "Check Solutions", {
            fontSize: "20px",
            color: "#ffffff",
          })
          .setOrigin(0);

        var buttonContainer = this.add.container(
          window.innerWidth * 0.8,
          window.innerHeight * 0.75,
          [buttonFeed, textFeed]
        );
      } else {
        const buttonFeed = this.add
          .image(0, 0, "buttonFeed")
          .setScale(0.4)
          .setInteractive()
          .on("pointerdown", () => {
            this.logTimeFeed();

            let isDataChanged = false;
            for (let i = 0; i < 6; i++) {
              if (this.gameData[`clickCountVarMax${i}`] != this.gameData[`clickCountVar${i}`]) {
                isDataChanged = true;
                break;
              }
            }

            if (!isDataChanged) {
              this.gameData.showWrongRangeSelectionMessage = true;
              if (!this.gameData.isStableConfigured && this.gameData.showWrongRangeSelectionMessage) {
                this.add.text(
                  window.innerWidth * 0.025,
                  window.innerHeight * 0.47,
                  "Unfortunately your chosen combination of plants or leaf values could not produce a positive impact, you can also ask for help",
                  { fontFamily: "monogram", fontSize: "20px", color: "#FF0000" }
                );
                helpContainer.setVisible(true)
                let differenceLeaves = [];
                for (let i = 0; i < this.diffCountVars?.length; i++) {
                  if (this.diffCountVars[i] > 0) {
                    differenceLeaves.push(this.gameData.plants.at(i).image.trim().split('/').at(-1).split('.').at(0))
                  }
                }

              }
              this.update();
              return;
            } else {
              this.gameData.showWrongRangeSelectionMessage = false;
            }

            buttonContainer.setVisible(false);
            loadingContainer.setVisible(true);

            this.gameData.shubOldHealth.push(this.gameData.health);
            this.gameData.api.computeNewShubNo(this.gameData).then((newShubData) => {
              this.attemptsCount--;
              loadingContainer.setVisible(false);
              buttonContainer.setVisible(true);
              if (newShubData?.cur_pred || this.attemptsCount == 0) {
                this.gameData.isStableConfigured = true
                this.gameData.showWrongRangeSelectionMessage = false
                this.gameData.health += 5;
                this.health += 5;
                // this.gameData.blockCount++;
                this.gameData.trialCount = 0;
                this.trialCountLimit = this.gameData.trialCountLimit;

                this.gameData.cur_pred = newShubData?.cur_pred;
                this.gameData.cur_pred = 1
                
                /*
                *If tries count is 0 that mean that user failed to get a range that is within the acceptable range
                *In that case we are setting the predicted value and moving to the next screen forcefully
                */
                
                if(this.attemptsCount == 0){
                  const values = Object.values(newShubData.counterfactualCountVars)
                  for(let i =0; i< values?.length; i++){
                    // this.gameData.dropDownRanges.at(i).max = values.at(i);
                    this.gameData['clickCountVar'+i] = values.at(i)
                  }
                }

                this.handleRoundComplete(newShubData?.cur_pred || this.attemptsCount == 0)
              } else {
                this.triesText.setText("Attempts left:" + this.attemptsCount);
                this.gameData.showWrongRangeSelectionMessage = true
                this.gameData.isStableConfigured = false
                if (!this.gameData.isStableConfigured && this.gameData.showWrongRangeSelectionMessage) {
                  if (this.errorText) {
                    this.errorText.destroy()
                  }
                  this.errorText = this.add.text(
                    window.innerWidth * 0.025,
                    window.innerHeight * 0.47,
                    "Unfortunately your chosen combination of plants or leaf values could not produce a positive impact, you can also ask for help.",
                    { fontFamily: "monogram", fontSize: "20px", color: "#FF0000" }
                  );
                  this.diffCountVars = Object.values(newShubData?.diffCountVars)
                  helpContainer.setVisible(true)
                  let differenceLeaves = [];
                  for (let i = 0; i < this.diffCountVars?.length; i++) {
                    if (this.diffCountVars[i] > 0) {
                      differenceLeaves.push(this.gameData.plants.at(i).image.trim().split('/').at(-1).split('.').at(0))
                    }
                  }
                  // if(differenceLeaves){
                  //   var infoDialogTxt = this.add.text((window.innerWidth * 0.5)-150, (window.innerHeight * 0.5)-200, 'Suggestion 1:\nYour results would have been better if you had \n changed'+ differenceLeaves.toString(), { fontFamily: "monogram", fontSize: '18px', color: '#000000', align: 'center' }).setOrigin(0);
                  //   popupContainer.add(infoDialogTxt)
                  // }
                }
                this.update();
              }
              // Increasing level count after every try
              // this.gameData.trialCount++;




              // Change the color of shub after each round.
              if (this.gameData.trialCount % 2 == 0) {
                thisShub.setTint(0xff0000)
              }
              else {
                thisShub.clearTint();
              }
              var idx;
              if (this.gameData.trialCount % this.gameData.numTrialsPerBlock == 0) {
                idx = this.gameData.numTrialsPerBlock
              } else {
                idx = this.gameData.trialCount % this.gameData.numTrialsPerBlock
              }
              this.gameData.in_array[idx] = [this.gameData.clickCountVar1, this.gameData.clickCountVar2, this.gameData.clickCountVar3, this.gameData.clickCountVar4, this.gameData.clickCountVar5];
              this.gameData.cf_array.push([newShubData?.counterfactualCountVars.Var1, newShubData?.counterfactualCountVars.Var2, newShubData?.counterfactualCountVars.Var3, newShubData?.counterfactualCountVars.Var4, newShubData?.counterfactualCountVars.Var5]);
              this.gameData.rand_array[idx] = [Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6)];
              // this.varObj.old_pred[idx] = this.varObj.old_pred; // updated
              //this.varObj.new_pred[idx] = newShubData?.new_pred; // updated
              // this.varObj.newNumber = newShubData?.newNumber;
              this.gameData.cur_pred =1;
              // Logging random feedback
              this.gameData.api.logUserPerformance(this.gameData.trialCount, this.gameData.blockCount, this.gameData.in_array[idx], this.gameData.cf_array[idx], this.gameData.old_pred, this.gameData.newNumber); //updated

              if (this.hasBorrowedTries && this.gameData.trialCount >= this.trialCountLimit) {
                showBorrowPopup();
              } else {
                this.handleRoundComplete()
              };

              // this.levelTextContainer.setText("Level : " + (parseInt(this.gameData.trialCount) + 1));
              this.RoundTextContainer.setText("Test Case No : " + this.gameData.blockCount);
              this.gameData.shubNewHealth.push(this.gameData.health);
            });

          });

        var textFeed = this.add
          .text(-70, -20, "Check Solutions!", {
            fontSize: "18px",
            color: "#ffffff",
          })
          .setOrigin(0);

        var buttonContainer = this.add.container(
          window.innerWidth * 0.85,
          window.innerHeight * 0.7,
          [buttonFeed, textFeed]
        );

        //Attempts count
      this.triesText = this.add.text(
        window.innerWidth * 0.8,
        (window.innerHeight * 0.65) - 20,
        "Attempts Left  :" + this.attemptsCount,
        { fontFamily: "Ariel", fontSize: "16px", color: "#000000" }
      );

      }
    }

    var loadingText = this.add
      .text(-70, -15, "Loading...", {
        fontSize: "20px",
        color: "#ffffff",
      })
      .setOrigin(0);

    const loadingButton = this.add
      .image(0, 0, "buttonFeed")
      .setScale(0.4)


    var loadingContainer = this.add.container(
      window.innerWidth * 0.85,
      window.innerHeight * 0.7,
      [loadingButton, loadingText]
    );


    var helpText = this.add
      .text(-70, -15, "Help!", {
        fontSize: "20px",
        color: "#ffffff",
      })
      .setOrigin(0);

    const helpButton = this.add
      .image(0, 0, "buttonFeed")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", () => {
        showPopup();
      })


    var helpContainer = this.add.container(
      window.innerWidth * 0.8,
      window.innerHeight * 0.55,
      [helpButton
        , helpText]
    )

    helpContainer.setVisible(false)
    loadingContainer.setVisible(false);

    let xInPercentage, yInPercentage, widthInPercentage, heightInPercentage;
    xInPercentage = 0.7;
    yInPercentage = 0.1;
    const xInPixels = window.innerWidth * xInPercentage;
    const yInPixels = window.innerHeight * 0.02;

    this.createSlider(xInPixels + 300, yInPixels, 0, 40, this.health);

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
    this.anims.create(shubs);

    // var coins = {
    //   key: "coinanim",
    //   frames: this.anims.generateFrameNumbers("coin", {
    //     start: 0,
    //     end: 4,
    //     first: Phaser.Math.Between(0, 4),
    //   }),
    //   frameRate: 4,
    //   repeat: -1,
    //   repeatDelay: 4,
    // };
    // this.anims.create(coins);




    const subXposition = xInPixels / 2 + 688;


    const percentage = this.health / 20;
    const subYPosition = yInPixels + 140 - (percentage * 140);

    var thisShub = this.add.sprite(
      subXposition,
      subYPosition,
      "shub",
      0
    );
    thisShub.displayWidth = 65;
    thisShub.scaleY = thisShub.scaleX;
    thisShub.anims.delayedPlay(
      Phaser.Math.Between(0, 100),
      "move",
      Phaser.Math.Between(0, 9)
    );


    // Adding coin sprite and animating it.
    // var thisCoins = this.add.sprite(
    //   window.innerWidth * 0.8,
    //   window.innerHeight *  0.05,
    //   "coin",
    //   0
    // );
    // thisCoins.displayWidth = 10;
    // thisCoins.scaleY = thisCoins.scaleX;
    // thisCoins.anims.delayedPlay(
    //   0,
    //   "coinanim",
    //   4
    // );

    if (Phaser.Math.Between(0, 1) == 1) {
      thisShub.anims.reverse();
    }
  }

  clickBtnFeedback() {
    this.logTimeFeedback();
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

  logTimeFeedback() {
    var time = new Date().getTime() - this.startTime;
    this.gameData.api.logTime(
      4,
      time,
      this.gameData.blockCount,
      this.gameData.trialCount
    );
  }

  update() { }

  createDropdown = (dropdownX, dropdownY, variable, textField, min, max, idx) => {
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

    // this.gameData.api.creteBorderBox(x,y,width,this.health);

    // Create the dropdown button image
    this.add
      .image(dropdownX - 10, dropdownY, "buttonDown")
      .setScale(0.1)
      .setInteractive()
      .on("pointerdown", () => {
        toggleDropdown(dropdownGroup); // Use the defined toggleDropdown function
      });

    // Create a group to hold the dropdown items
    const dropdownGroup = this.add.group();

    dropdownGroup.add(graphics);

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

    // Add each item to the dropdown groupthis[`clickCountVar${i}`
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

          if (idx) {
            if (this.gameData[`clickCountVar${idx + 1}`] < parseInt(item)) {
              alert(
                "Max limit value cannot be smaller than or equal to minimum limit value` "
              );
              return;
            }
          }

          // Assigning the value to the dropdown
          this.gameData[variable] = parseInt(item);
          textField.setText(item);

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

  createSlider(x, y, min, max, current) {
    const range = 25;
    const percentage = (current - min) / range;
    const sliderHeight = 180;

    let graphics = this.add.graphics();
    graphics.fillStyle(0x333333, 1);
    graphics.fillRect(x - 5, y, 15, sliderHeight);

    this.add.text(x,y-18,"Fitness Levels", {
      fontFamily: "Ariel",
      fontSize: "10px",
      color: "#000000",
      fontWeight: 'bold'
    });

    const indicatorY = y + sliderHeight - (percentage * sliderHeight);
    this.healthIndicator = this.add.graphics();
    this.healthIndicator.fillStyle(0xff0000, 1);
    this.healthIndicator.fillRect(x - 5, indicatorY, 25, 5);

    for (let i = 0; i < 6; i++) {
      const stepValue = min + (range / 5) * i;
      const stepPercentage = (stepValue - min) / range;
      const stepY = y + sliderHeight - (stepPercentage * sliderHeight);

      this.add.text(x + 10, stepY - 10,"  Level-"+ stepValue, {
        fontFamily: "Ariel",
        fontSize: "11px",
        color: "#000000",
        fontWeight: 'bold'
      });
    }
  }


  // Updates budget .
  updateBudget() {
    const totalCost =
      this.gameData.clickCountVar1 * this.gameData.plants.at(0).cost +
      this.gameData.clickCountVar2 * this.gameData.plants.at(1).cost +
      this.gameData.clickCountVar3 * this.gameData.plants.at(2).cost +
      this.gameData.clickCountVar4 * this.gameData.plants.at(3).cost +
      this.gameData.clickCountVar5 * this.gameData.plants.at(4).cost;

    // Ensure the totalCost does not exceed the totalBudget
    const newBudget = Math.max(0, this.totalBudget - totalCost);

    // Update the currentBudget only if it doesn't go below 0
    if (newBudget >= 0) {
      this.currentBudget = newBudget;
      this.budget.setText("Try to help me to select range of each leaf (or a few leaves) for which I can find a solution for the better fitness of Shub \n Available Budget: " + this.currentBudget);
      
      // // additional text
      // this.add.text(
      //   window.innerWidth * 0.05 + 50,
      //   (window.innerHeight * 0.50),
      //   'Try to help me to select range of each leaf (or a few leaves) for which I can find a solution for the better fitness of Shub',
      //   { fontFamily: "monogram", fontSize: "16px", color: "#000000" }
      // );
    }
  }


  // Finds the array with highest sum from the arrays.
  findArrayWithHighestSum(arrays) {
    if (!arrays || arrays.length === 0) {
      return null;
    }

    // let maxSum = -Infinity;
    // let maxArray = null;

    // for (let i = 0; i < arrays.length; i++) {
    //   const currentArray = arrays[i];
    //   const currentSum = currentArray.reduce((acc, num) => acc + num, 0);

    //   if (currentSum > maxSum) {
    //     maxSum = currentSum;
    //     maxArray = currentArray;
    //   }
    // }
    const currentArray = arrays[this.gameData.blockCount - 1];
    return currentArray.reduce((acc, num) => acc + num, 0);
  }

  handleRoundComplete(changeRound) {
    // If user have played total rounds rounds then reset the trial count and move to next stage
    if (this.health == 25 || this.gameData.trialCount >= this.trialCountLimit || changeRound) {
      this.gameData.isStableConfigured = true
      this.gameData.showWrongRangeSelectionMessage = false
      // this.gameData.blockCount++;
      this.gameData.trialCount = 0
      // var feedbackScene = new FeedbackScene(this.gameData);
      // this.scene.remove("feedbackScene", feedbackScene);
      // this.scene.add("feedbackScene", feedbackScene);
      // this.scene.start("feedbackScene");

      var stableScene = new StableScene(this.gameData);
      this.scene.remove("stableScene", stableScene);
      this.scene.add("stableScene", stableScene);
      this.scene.start("stableScene");
    }
  }
}

export default StableConfigScene;
