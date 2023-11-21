import QuestionnaireScene1 from './questionnaireScene1.js';
import StableConfigScene from  './stableConfigScene.js'

class FeedbackScene extends Phaser.Scene {

	constructor(gameData) {
		super({ key: 'feedbackScene' });
		this.gameData = gameData
		this.startTime = undefined;
	}

	init() { }

	preload() {
		this.load.spritesheet('shub', 'static/shub_spritesheet.png', { frameWidth: 50, frameHeight: 47 });

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
		this.startTime = new Date().getTime();

			// 1st round:
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.025, 'In round 1, you selected:', { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.image(window.innerWidth * 0.05, window.innerHeight * 0.075, 'plant1').setScale(0.1);
		this.add.text(window.innerWidth * 0.07, window.innerHeight * 0.075, 'x ' + this.gameData.in_array[1][0], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.image(window.innerWidth * 0.16, window.innerHeight * 0.075, 'plant2').setScale(0.1);
		this.add.text(window.innerWidth * 0.18, window.innerHeight * 0.075, 'x ' + this.gameData.in_array[1][1], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.image(window.innerWidth * 0.27, window.innerHeight * 0.075, 'plant3').setScale(0.1);
		this.add.text(window.innerWidth * 0.29, window.innerHeight * 0.075, 'x ' + this.gameData.in_array[1][2], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.image(window.innerWidth * 0.38, window.innerHeight * 0.075, 'plant4').setScale(0.1);
		this.add.text(window.innerWidth * 0.40, window.innerHeight * 0.075, 'x ' + this.gameData.in_array[1][3], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.image(window.innerWidth * 0.49, window.innerHeight * 0.075, 'plant5').setScale(0.1);
		this.add.text(window.innerWidth * 0.51, window.innerHeight * 0.075, 'x ' + this.gameData.in_array[1][4], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });

		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.1250, 'Result:', { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.text(window.innerWidth * 0.125, window.innerHeight * 0.1250, 'Before:', { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.sprite(window.innerWidth * 0.225, window.innerHeight * 0.1250, 'shub', 0, { frameWidth: 50, frameHeight: 46 }).setScale(0.8);
		this.add.text(window.innerWidth * 0.250, window.innerHeight * 0.1250, 'x ' + this.gameData.shubOldHealth[0], { fontFamily: "monogram", fontSize: '18px', color: '#000000' }); //updated

		this.add.text(window.innerWidth * 0.325, window.innerHeight * 0.1250, 'After:', { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		this.add.sprite(window.innerWidth * 0.425, window.innerHeight * 0.1250, 'shub', 0, { frameWidth: 50, frameHeight: 46 }).setScale(0.8);
		this.add.text(window.innerWidth * 0.450, window.innerHeight * 0.1250, 'x ' + this.gameData.shubNewHealth[0], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });

		if (1) {
			if (this.gameData.cf_array[0][1] == -1000) {
				this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.200, 'Congrats! You were close to an optimal solution in this round!', { fontFamily: "monogram", fontSize: '18px', fontStyle: "bold", color: '#000000' });
			} else {
				this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.175, 'Your result would have been better if you had selected:', { fontFamily: "monogram", fontSize: '18px', fontStyle: "bold", color: '#000000' });

				this.add.image(window.innerWidth * 0.05, window.innerHeight * 0.2250, 'plant1').setScale(0.1);
				this.add.text(window.innerWidth * 0.07, window.innerHeight * 0.2250, 'x ' + this.gameData.cf_array[0][0], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				this.add.image(window.innerWidth * 0.16, window.innerHeight * 0.2250, 'plant2').setScale(0.1);
				this.add.text(window.innerWidth * 0.18, window.innerHeight * 0.2250, 'x ' + this.gameData.cf_array[0][1], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				this.add.image(window.innerWidth * 0.27, window.innerHeight * 0.2250, 'plant3').setScale(0.1);
				this.add.text(window.innerWidth * 0.29, window.innerHeight * 0.2250, 'x ' + this.gameData.cf_array[0][2], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				this.add.image(window.innerWidth * 0.38, window.innerHeight * 0.2250, 'plant4').setScale(0.1);
				this.add.text(window.innerWidth * 0.40, window.innerHeight * 0.2250, 'x ' + this.gameData.cf_array[0][3], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				this.add.image(window.innerWidth * 0.49, window.innerHeight * 0.2250, 'plant5').setScale(0.1);
				this.add.text(window.innerWidth * 0.51, window.innerHeight * 0.2250, 'x ' + this.gameData.cf_array[0][4], { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
			}
		}

		// 2nd round:
		if (this.gameData.numTrialsPerBlock >= 2 && this.gameData.trialCount > 2) {
			for (let roundIndex = 2; roundIndex <= 5; roundIndex++) {
				const yMultiplier = (roundIndex - 2) * 0.175;
		
				this.add.text(window.innerWidth * 0.025, window.innerHeight * (0.3 + yMultiplier), `In round ${roundIndex}, you selected:`, { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		
				for (let i = 0; i < this.gameData.in_array[roundIndex - 1].length; i++) {
					const plantX = window.innerWidth * (0.05 + i * 0.09);
					const plantName = `plant${i + 1}`;
					const plantCount = this.gameData.in_array[roundIndex - 1][i];
		
					this.add.image(plantX, window.innerHeight * (0.35 + yMultiplier), plantName).setScale(0.1);
					this.add.text(plantX + 0.03, window.innerHeight * (0.35 + yMultiplier), `x ${plantCount}`, { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				}
		
				this.add.text(window.innerWidth * 0.025, window.innerHeight * (0.4 + yMultiplier), 'Result:', { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				this.add.text(window.innerWidth * 0.125, window.innerHeight * (0.4 + yMultiplier), 'Before:', { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				this.add.sprite(window.innerWidth * 0.225, window.innerHeight * (0.4 + yMultiplier), 'shub', 0, { frameWidth: 50, frameHeight: 46 }).setScale(0.8);
				this.add.text(window.innerWidth * 0.250, window.innerHeight * (0.4 + yMultiplier), `x ${this.gameData.shubOldHealth[roundIndex - 1]}`, { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		
				this.add.text(window.innerWidth * 0.325, window.innerHeight * (0.4 + yMultiplier), 'After:', { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
				this.add.sprite(window.innerWidth * 0.425, window.innerHeight * (0.4 + yMultiplier), 'shub', 0, { frameWidth: 50, frameHeight: 46 }).setScale(0.8);
				this.add.text(window.innerWidth * 0.450, window.innerHeight * (0.4 + yMultiplier), `x ${this.gameData.shubNewHealth[roundIndex - 1]}`, { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
		
				if (!this.gameData.api.controlGroup) {
					if (this.gameData.cf_array[roundIndex - 1][0] == -1000) {
						this.add.text(window.innerWidth * 0.025, window.innerHeight * (0.475 + yMultiplier), 'Congrats! You were close to an optimal solution in this round!', { fontFamily: "monogram", fontSize: '18px', fontStyle: "bold", color: '#000000' });
					} else {
						this.add.text(window.innerWidth * 0.025, window.innerHeight * (0.45 + yMultiplier), 'Your result would have been better if you had selected:', { fontFamily: "monogram", fontSize: '18px', fontStyle: "bold", color: '#000000' });
		
						for (let i = 0; i < this.gameData.cf_array[roundIndex - 1].length; i++) {
							const plantX = window.innerWidth * (0.05 + i * 0.09);
							const plantName = `plant${i + 1}`;
							const plantCount = this.gameData.cf_array[roundIndex - 1][i];
		
							this.add.image(plantX, window.innerHeight * (0.525 + yMultiplier), plantName).setScale(0.1);
							this.add.text(plantX + 0.02, window.innerHeight * (0.525 + yMultiplier), `x ${plantCount}`, { fontFamily: "monogram", fontSize: '18px', color: '#000000' });
						}
					}
				}
			}
		}
	//}

		// after each round of feedback, increase blockCount by one
		this.gameData.blockCount++;

		// depending on block number:
		if (this.gameData.blockCount < this.gameData.maxBlockCount) {
			setTimeout(function() {
				// instatiate and add new stable scene with current data
				var stableConfigScene = undefined;

				// add button to request feedback
				var buttonContinue = this.add.image(0, 0, 'buttonFeed').setScale(0.5)
					.setInteractive()
					.on('pointerdown', () => {
						this.gameData.trialCount = 0;
						this.gameData.health = 10;
						this.gameData.shubNewHealth = [];
						this.gameData.shubOldHealth = [];
						this.gameData.feedback_flag = false;
						this.gameData.cur_pred = 0;
					})
					.on('pointerdown', () => this.logTime())
					.on('pointerdown', () => stableConfigScene = new StableConfigScene(this.gameData))
					.on('pointerdown', () => this.scene.remove('stableConfigScene', stableConfigScene))
					.on('pointerdown', () => this.scene.add('stableConfigScene', stableConfigScene))
					.on('pointerdown', () => this.scene.start('stableConfigScene'));

				var textContinue = this.add.text(-75, -20, 'Continue!', { fontSize: '25px', color: '#ffffff' });
				this.add.container(window.innerWidth * 0.8, window.innerHeight * 0.5, [buttonContinue, textContinue]);
			}.bind(this), this.gameData.btnContinueShowDelay);
		} else {
			setTimeout(function() {
				// instatiate and add new end scene with current data
				var questionnaireScene1 = undefined;

				// add button to request feedback
				var buttonContinue = this.add.image(0, 0, 'buttonFeed').setScale(0.5)
					.setInteractive()
					.on('pointerdown', () => {
						this.gameData.trialCount = 0;
						this.gameData.health = 10;
						this.gameData.shubNewHealth = [];
						this.gameData.shubOldHealth = [];
						this.gameData.feedback_flag = false;
						this.gameData.cur_pred = 0;
					})
					.on('pointerdown', () => this.logTime())
					.on('pointerdown', () => questionnaireScene1 = new QuestionnaireScene1(this.gameData))
					.on('pointerdown', () => this.scene.remove('questionnaireScene1', questionnaireScene1))
					.on('pointerdown', () => this.scene.add('questionnaireScene1', questionnaireScene1))
					.on('pointerdown', () => this.scene.start('questionnaireScene1'));

				var textContinue = this.add.text(-75, -20, 'Continue!', { fontSize: '25px', color: '#ffffff' });
				this.add.container(window.innerWidth * 0.8, window.innerHeight * 0.5, [buttonContinue, textContinue]);
			}.bind(this), this.gameData.btnContinueShowDelay);
		}

	}

	logTime() {
		var time = new Date().getTime() - this.startTime;
		this.gameData.api.logTime(5, time, this.gameData.blockCount, this.gameData.trialCount);
	}

	update() { }

}

export default FeedbackScene;
