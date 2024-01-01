import StableConfigScene from './stableConfigScene.js';
import StableScene from './stableScene.js';
import QuestionnaireScene1 from './questionnaireScene1.js';
import { costsArray } from './constants.js';

class ProgressScene extends Phaser.Scene {

	constructor(gameData) {
		super({ key: 'progressScene' });
		this.gameData = gameData
	}

	init() { }

	preload() {
		this.load.spritesheet('shub', 'static/shub_spritesheet.png', { frameWidth: 60, frameHeight: 57 });

		// load button images
		this.load.image('buttonFeed', 'static/buttonSubmit.png');

		//load plant images
		this.load.image('plant1', this.gameData.plants[0]);
		this.load.image('plant2', this.gameData.plants[1]);
		this.load.image('plant3', this.gameData.plants[2]);
		this.load.image('plant4', this.gameData.plants[3]);
		this.load.image('plant5', this.gameData.plants[4]);

	}


	create() {
		// clean slate:
		this.children.removeAll();

		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.05, 'Feeding in progress for better fitness level...', { fontFamily: "monogram", fontSize: '20px', color: '#000000' });

		// add overview of current choice:
		this.add.image(window.innerWidth * 0.05, window.innerHeight * 0.175, 'plant1').setScale(0.15);
		this.add.text(window.innerWidth * 0.07, window.innerHeight * 0.175, 'x ' + this.gameData.cf_array?.at(-1)?.at(0), { fontFamily: "monogram", fontSize: '20px', color: '#000000' });
		this.add.image(window.innerWidth * 0.16, window.innerHeight * 0.175, 'plant2').setScale(0.15);
		this.add.text(window.innerWidth * 0.18, window.innerHeight * 0.175, 'x ' + this.gameData.cf_array?.at(-1)?.at(1), { fontFamily: "monogram", fontSize: '20px', color: '#000000' });
		this.add.image(window.innerWidth * 0.27, window.innerHeight * 0.175, 'plant3').setScale(0.15);
		this.add.text(window.innerWidth * 0.29, window.innerHeight * 0.175, 'x ' + this.gameData.cf_array?.at(-1)?.at(2), { fontFamily: "monogram", fontSize: '20px', color: '#000000' });
		this.add.image(window.innerWidth * 0.38, window.innerHeight * 0.175, 'plant4').setScale(0.15);
		this.add.text(window.innerWidth * 0.40, window.innerHeight * 0.175, 'x ' + this.gameData.cf_array?.at(-1)?.at(3), { fontFamily: "monogram", fontSize: '20px', color: '#000000' });
		this.add.image(window.innerWidth * 0.49, window.innerHeight * 0.175, 'plant5').setScale(0.15);
		this.add.text(window.innerWidth * 0.51, window.innerHeight * 0.175, 'x ' + this.gameData.cf_array?.at(-1)?.at(4), { fontFamily: "monogram", fontSize: '20px', color: '#000000' });

		// add three shubs as 'loading animation'
		var progShubs = {
			key: 'progMove',
			frames: this.anims.generateFrameNumbers('shub', { start: 0, end: 9, first: Phaser.Math.Between(0, 9) }),
			frameRate: 10,
			repeat: -1,
			repeatDelay: 10
		};

		// create animation
		this.anims.create(progShubs);

		// add three shubs
		var progShub1 = this.add.sprite(window.innerWidth * 0.40, window.innerHeight * 0.45, 'shub', 0);
		// var progShub2 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.5, 'shub', 0);
		// var progShub3 = this.add.sprite(window.innerWidth * 0.60, window.innerHeight * 0.5, 'shub', 0);

		// scale them
		progShub1.displayWidth = 45;
		// progShub2.displayWidth = 45;
		// progShub3.displayWidth = 45;

		progShub1.scaleY = progShub1.scaleX;
		// progShub2.scaleY = progShub2.scaleX;
		// progShub3.scaleY = progShub3.scaleX;

		// animate them
		progShub1.anims.delayedPlay(0, 'progMove', 0);
		// progShub2.anims.delayedPlay(0, 'progMove', 0);
		// progShub3.anims.delayedPlay(0, 'progMove', 0);


		// const imgindex = +localStorage.getItem("imgindex");
		// this.gameData.globcost =
		// this.gameData.cf_array?.at(-1)?.at(0) * costsArray[imgindex].leaves[0].cost +
		// this.gameData.cf_array?.at(-1)?.at(1) * costsArray[imgindex].leaves[1].cost +
		// this.gameData.cf_array?.at(-1)?.at(2) * costsArray[imgindex].leaves[2].cost +
		// this.gameData.cf_array?.at(-1)?.at(3) * costsArray[imgindex].leaves[3].cost +
		// this.gameData.cf_array?.at(-1)?.at(4) * costsArray[imgindex].leaves[4].cost;

		// Two cases, if testno is reached to 3 or 5 then move to questionair else move to next testcase(stableconfigscene)
		if(this.gameData.testno == 3){
			setTimeout(() => {
				// message popup for user-satisfaction
				const messageContainer = this.add.container(0, 0).setDepth(100);
				// Background
				var infoDialogBG = this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0xFFFFFF, 0.5).setOrigin(0);
				messageContainer.add(infoDialogBG);
				// Dialog
				var infoDialog = this.add.rectangle((window.innerWidth * 0.5) - 300, (window.innerHeight * 0.5) - 260, 800, 400, 0xffffff, 1).setOrigin(0);
				infoDialog.setStrokeStyle(1, 0x1000000, 1);
				messageContainer.add(infoDialog);

				// Texts
				const message = ['You played very well, Game is over. \n Please proceed to the post-game questionnaire.'];
				const messageTxt = this.add.text(
					(window.innerWidth * 0.5) - 280,
					(window.innerHeight * 0.5) - 200,
					message,
					{ fontFamily: "monogram", fontSize: '24px', color: '#000000' }
				).setOrigin(0);
				messageContainer.add(messageTxt);

				// OK Button
				var buttonNo = this.add.rectangle((window.innerWidth * 0.5) + 50, (window.innerHeight * 0.5) + 25, 100, 50, 0x1a65ac, 1).setOrigin(0);
				buttonNo.setStrokeStyle(1, 0x1000000, 1);
				var buttonTextOK = this.add.text((window.innerWidth * 0.5) + 80, (window.innerHeight * 0.5) + 30, 'Ok', { fontFamily: "monogram", fontSize: '25px', color: '#ffffff' }).setOrigin(0);

				
				// Make the button interactive and hide the popup on click
				buttonNo.setInteractive().on('pointerdown', hidePopup);

				// Add button and text to the container
				messageContainer.add(buttonNo);
				messageContainer.add(buttonTextOK);

				// Initially, show the popup
				messageContainer.setVisible(true);

				// Function to hide the popup
				function hidePopup() {
					messageContainer.setVisible(false);
				}
			}, 3500);
			// move to next screen anyhow with
			setTimeout(() => {
				this.gameData.testno += 1 ;
				if(this.gameData.cur_pred){
					this.gameData.health += 5 ;
				}
				
				// alert("Your fed diet resulted positively, great.");
				// switch to post-game survey
				var questionnaireScene1 = new QuestionnaireScene1(this.gameData)
				this.scene.remove("questionnaireScene1", questionnaireScene1);
				this.scene.add("questionnaireScene1", questionnaireScene1);
				this.scene.start("questionnaireScene1");
				
			}, 4000);


		}
		else{

			

			setTimeout(() => {
				// message popup for user-satisfaction
				const messageContainer = this.add.container(0, 0).setDepth(100);
				// Background
				var infoDialogBG = this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0xFFFFFF, 0.5).setOrigin(0);
				messageContainer.add(infoDialogBG);
				// Dialog
				var infoDialog = this.add.rectangle((window.innerWidth * 0.5) - 300, (window.innerHeight * 0.5) - 260, 800, 400, 0xffffff, 1).setOrigin(0);
				infoDialog.setStrokeStyle(1, 0x1000000, 1);
				messageContainer.add(infoDialog);

				// Texts
				const message = ['Great! You managed successfully feeding Shubs.\n It is now time to go to the next planet.'];
				const messageTxt = this.add.text(
					(window.innerWidth * 0.5) - 280,
					(window.innerHeight * 0.5) - 200,
					message,
					{ fontFamily: "monogram", fontSize: '24px', color: '#000000' }
				).setOrigin(0);
				messageContainer.add(messageTxt);

				// OK Button
				var buttonNo = this.add.rectangle((window.innerWidth * 0.5) + 50, (window.innerHeight * 0.5) + 25, 100, 50, 0x1a65ac, 1).setOrigin(0);
				buttonNo.setStrokeStyle(1, 0x1000000, 1);
				var buttonTextOK = this.add.text((window.innerWidth * 0.5) + 80, (window.innerHeight * 0.5) + 30, 'Ok', { fontFamily: "monogram", fontSize: '25px', color: '#ffffff' }).setOrigin(0);

				
				// Make the button interactive and hide the popup on click
				buttonNo.setInteractive().on('pointerdown', hidePopup);

				// Add button and text to the container
				messageContainer.add(buttonNo);
				messageContainer.add(buttonTextOK);

				// Initially, show the popup
				messageContainer.setVisible(true);

				// Function to hide the popup
				function hidePopup() {
					messageContainer.setVisible(false);
				}
			}, 4000);
			// move to next screen anyhow with
			setTimeout(() => {
				this.gameData.testno += 1 ;
				if(this.gameData.cur_pred){
					this.gameData.health += 5 ;
				}
				// global budget update

				// alert("Your fed diet resulted positively, great.");
				// switch to stable Scene again
				this.scene.remove('stableConfigScene', StableConfigScene);
				var stableConfigScene = new StableConfigScene(this.gameData);
				this.scene.add('stableConfigScene', stableConfigScene);
				this.scene.start('stableConfigScene');
				
			}, 5000);
		}

			// compute new Shub no, based on user input
		// this.gameData.api.computeNewShubNo(this.gameData).then((newShubData) => {
		// 	if (newShubData == undefined) {
		// 		throw "Error while computing new shub number"
		// 	}

		// 	var idx;
		// 	if (this.gameData.trialCount % this.gameData.numTrialsPerBlock == 0) {
		// 		idx = this.gameData.numTrialsPerBlock
		// 	} else {
		// 		idx = this.gameData.trialCount % this.gameData.numTrialsPerBlock
		// 	}

		// 	// assign info to arrays for later feedback Scene
		// 	this.gameData.in_array[idx] = [this.gameData.clickCountVar1, this.gameData.clickCountVar2, this.gameData.clickCountVar3, this.gameData.clickCountVar4, this.gameData.clickCountVar5];
		// 	this.gameData.cf_array.push([newShubData.counterfactualCountVars.Var1, newShubData.counterfactualCountVars.Var2, newShubData.counterfactualCountVars.Var3, newShubData.counterfactualCountVars.Var4, newShubData.counterfactualCountVars.Var5]);
		// 	this.gameData.rand_array[idx] = [Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6), Phaser.Math.Between(0, 6)];
		// 	// this.varObj.old_pred[idx] = this.varObj.old_pred; // updated
		// 	//this.varObj.new_pred[idx] = newShubData.new_pred; // updated
		// 	// this.varObj.newNumber = newShubData.newNumber;
		// 	this.gameData.cur_pred = newShubData.cur_pred;
		
		// 	// Logging random feedback
		// 	this.gameData.api.logUserPerformance(this.gameData.trialCount, this.gameData.blockCount, this.gameData.in_array[idx], this.gameData.cf_array[idx], this.gameData.old_pred, this.gameData.newNumber); //updated

			

		// 	// if(!this.gameData.cur_pred){

		// 	// 	// switch to stable Scene again
		// 	// 	this.scene.remove('stableScene', stableScene);
		// 	// 	var stableScene = new StableScene(this.gameData);
		// 	// 	this.scene.add('stableScene', stableScene);
		// 	// 	this.scene.start('stableScene')
		// 	// }else{
		// 	// 	this.gameData.testno += 1 ; 
		// 	// 	this.gameData.health += 5 ;
		// 	// 	// switch to stable Scene again
		// 	// 	this.scene.remove('stableConfigScene', StableConfigScene);
		// 	// 	var stableConfigScene = new StableConfigScene(this.gameData);
		// 	// 	this.scene.add('stableConfigScene', stableConfigScene);
		// 	// 	this.scene.start('stableConfigScene')
		// 	// }
			
		// });

		
		// // Updates budget .
		// updateBudgetglobal() {
		// 	const imgindex = +localStorage.getItem('imgindex')
		// 	const totalCost =
		// 	  this.gameData.clickCountVar1 * costsArray[imgindex].leaves[0].cost +
		// 	  this.gameData.clickCountVar2 * costsArray[imgindex].leaves[1].cost +
		// 	  this.gameData.clickCountVar3 * costsArray[imgindex].leaves[2].cost +
		// 	  this.gameData.clickCountVar4 * costsArray[imgindex].leaves[3].cost +
		// 	  this.gameData.clickCountVar5 * costsArray[imgindex].leaves[4].cost;
		
		// 	// Ensure the totalCost does not exceed the totalBudget
		// 	const newBudget = Math.max(0, this.totalBudget - totalCost);
		
		// 	// Update the currentBudget only if it doesn't go below 0
		// 	if (newBudget >= 0) {
		// 	  this.currentBudget = newBudget;
		// 	  this.budget.setText("Try to help me to select range of each leaf (or a few leaves) for which I can find a solution for the better fitness of Shub \n Available Budget: " + this.currentBudget);
			  
		// 	  // // additional text
		// 	  // this.add.text(
		// 	  //   window.innerWidth * 0.05 + 50,
		// 	  //   (window.innerHeight * 0.50),
		// 	  //   'Try to help me to select range of each leaf (or a few leaves) for which I can find a solution for the better fitness of Shub',
		// 	  //   { fontFamily: "monogram", fontSize: "16px", color: "#000000" }
		// 	  // );
		// 	}
		//   };

	}
	
		

	update() { }

}

export default ProgressScene;
