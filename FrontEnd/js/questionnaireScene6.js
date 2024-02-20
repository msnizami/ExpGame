import QuestionnaireScene7 from './questionnaireScene7.js';

class QuestionnaireScene6 extends Phaser.Scene {

	constructor(gameData) {
		super({ key: 'questionnaireScene6' });
		this.gameData = gameData;

		this.item15Var1Checked = false;
		this.item15Var2Checked = false;
		this.item15Var3Checked = false;
		this.item15Var4Checked = false;
		this.item15Var5Checked = false;
		this.item15Var6Checked = false;

		this.item16Var1Checked = false;
		this.item16Var2Checked = false;
		this.item16Var3Checked = false;
		this.item16Var4Checked = false;
		this.item16Var5Checked = false;
		this.item16Var6Checked = false;

        this.item17Var1Checked = false;
		this.item17Var2Checked = false;
		this.item17Var3Checked = false;
		this.item17Var4Checked = false;
		this.item17Var5Checked = false;
		this.item17Var6Checked = false;
	}

	init() { }

	preload() {
		// load button images
		this.load.spritesheet('checkbox', 'static/CheckBoxSprites.png', { frameWidth: 51, frameHeight: 50 });
		this.load.image('buttonFeed', 'static/buttonSubmit.png');
	}

	create() {
		// clean slate:
		this.children.removeAll();

		var qIntro1 = [
			'To complete the study, please answer the following questions.',
		]

		var qIntro2 = [
			'These questions are designed to assess your personal impressions from the game. Therefore, there are no wrong answers.',
			'',
			'Please answer as truthfully and accurately as possible.',
		]

		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.05, qIntro1, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.1, qIntro2, { fontFamily: 'monogram', fontSize: '17px',fontStyle: "bold italic", color: '#000000' });

		// if (this.gameData.api.controlGroup) {
		// 	var item15 = [
		// 		"12. I trust the predictions of the AlienNutriSolver."
		// 	];
		// } else {
		var item15 = [
			"15. I trust the predictions of the AlienNutriSolver."
			//"9. I received the feedback on what choice would have led to a better result in a timely and efficient manner."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.25, item15, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.3, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item15Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item15Sprite1.on('pointerdown', function (pointer) {
			if (this.item15Var1Checked) {
				item15Sprite1.setFrame(0);
				this.item15Var1Checked = false;
			} else {
				item15Sprite1.setFrame(1);
				this.item15Var1Checked = true;

				this.item15Var2Checked = false;
				this.item15Var3Checked = false;
				this.item15Var4Checked = false;
				this.item15Var5Checked = false;
				this.item15Var6Checked = false;
				item15Sprite2.setFrame(0);
				item15Sprite3.setFrame(0);
				item15Sprite4.setFrame(0);
				item15Sprite5.setFrame(0);
				item15Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.3, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item15Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item15Sprite2.on('pointerdown', function (pointer) {
			if (this.item15Var2Checked) {
				item15Sprite2.setFrame(0);
				this.item15Var2Checked = false;
			} else {
				item15Sprite2.setFrame(1);
				this.item15Var2Checked = true;

				this.item15Var1Checked = false;
				this.item15Var3Checked = false;
				this.item15Var4Checked = false;
				this.item15Var5Checked = false;
				this.item15Var6Checked = false;
				item15Sprite1.setFrame(0);
				item15Sprite3.setFrame(0);
				item15Sprite4.setFrame(0);
				item15Sprite5.setFrame(0);
				item15Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.3, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item15Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item15Sprite3.on('pointerdown', function (pointer) {
			if (this.item15Var3Checked) {
				item15Sprite3.setFrame(0);
				this.item15Var3Checked = false;
			} else {
				item15Sprite3.setFrame(1);
				this.item15Var3Checked = true;

				this.item15Var1Checked = false;
				this.item15Var2Checked = false;
				this.item15Var4Checked = false;
				this.item15Var5Checked = false;
				this.item15Var6Checked = false;
				item15Sprite1.setFrame(0);
				item15Sprite2.setFrame(0);
				item15Sprite4.setFrame(0);
				item15Sprite5.setFrame(0);
				item15Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.3, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item15Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item15Sprite4.on('pointerdown', function (pointer) {
			if (this.item15Var4Checked) {
				item15Sprite4.setFrame(0);
				this.item15Var4Checked = false;
			} else {
				item15Sprite4.setFrame(1);
				this.item15Var4Checked = true;

				this.item15Var1Checked = false;
				this.item15Var2Checked = false;
				this.item15Var3Checked = false;
				this.item15Var5Checked = false;
				this.item15Var6Checked = false;
				item15Sprite1.setFrame(0);
				item15Sprite2.setFrame(0);
				item15Sprite3.setFrame(0);
				item15Sprite5.setFrame(0);
				item15Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.3, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item15Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item15Sprite5.on('pointerdown', function (pointer) {
			if (this.item15Var5Checked) {
				item15Sprite5.setFrame(0);
				this.item15Var5Checked = false;
			} else {
				item15Sprite5.setFrame(1);
				this.item15Var5Checked = true;

				this.item15Var1Checked = false;
				this.item15Var2Checked = false;
				this.item15Var3Checked = false;
				this.item15Var4Checked = false;
				this.item15Var6Checked = false;
				item15Sprite1.setFrame(0);
				item15Sprite2.setFrame(0);
				item15Sprite3.setFrame(0);
				item15Sprite4.setFrame(0);
				item15Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.3, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item15Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item15Sprite6.on('pointerdown', function (pointer) {
			if (this.item15Var6Checked) {
				item15Sprite6.setFrame(0);
				this.item15Var6Checked = false;
			} else {
				item15Sprite6.setFrame(1);
				this.item15Var6Checked = true;

				this.item15Var1Checked = false;
				this.item15Var2Checked = false;
				this.item15Var3Checked = false;
				this.item15Var4Checked = false;
				this.item15Var5Checked = false;
				item15Sprite1.setFrame(0);
				item15Sprite2.setFrame(0);
				item15Sprite3.setFrame(0);
				item15Sprite4.setFrame(0);
				item15Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
		// 	var item16 = [
		// 		"10. No question..."
		// 	];
		// } else {
		var item16 = [
			"16. I “do not trust” the suggestions on what choice would have led to a better result provided by the “Help” button."
			//"7. I found inconsistencies in the feedback on what choice would have led to a better result."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.425, item16, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.475, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item16Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item16Sprite1.on('pointerdown', function (pointer) {
			if (this.item16Var1Checked) {
				item16Sprite1.setFrame(0);
				this.item16Var1Checked = false;
			} else {
				item16Sprite1.setFrame(1);
				this.item16Var1Checked = true;

				this.item16Var2Checked = false;
				this.item16Var3Checked = false;
				this.item16Var4Checked = false;
				this.item16Var5Checked = false;
				this.item16Var6Checked = false;
				item16Sprite2.setFrame(0);
				item16Sprite3.setFrame(0);
				item16Sprite4.setFrame(0);
				item16Sprite5.setFrame(0);
				item16Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.475, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item16Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item16Sprite2.on('pointerdown', function (pointer) {
			if (this.item16Var2Checked) {
				item16Sprite2.setFrame(0);
				this.item16Var2Checked = false;
			} else {
				item16Sprite2.setFrame(1);
				this.item16Var2Checked = true;

				this.item16Var1Checked = false;
				this.item16Var3Checked = false;
				this.item16Var4Checked = false;
				this.item16Var5Checked = false;
				this.item16Var6Checked = false;
				item16Sprite1.setFrame(0);
				item16Sprite3.setFrame(0);
				item16Sprite4.setFrame(0);
				item16Sprite5.setFrame(0);
				item16Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.475, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item16Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item16Sprite3.on('pointerdown', function (pointer) {
			if (this.item16Var3Checked) {
				item16Sprite3.setFrame(0);
				this.item16Var3Checked = false;
			} else {
				item16Sprite3.setFrame(1);
				this.item16Var3Checked = true;

				this.item16Var1Checked = false;
				this.item16Var2Checked = false;
				this.item16Var4Checked = false;
				this.item16Var5Checked = false;
				this.item16Var6Checked = false;
				item16Sprite1.setFrame(0);
				item16Sprite2.setFrame(0);
				item16Sprite4.setFrame(0);
				item16Sprite5.setFrame(0);
				item16Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.475, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item16Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item16Sprite4.on('pointerdown', function (pointer) {
			if (this.item16Var4Checked) {
				item16Sprite4.setFrame(0);
				this.item16Var4Checked = false;
			} else {
				item16Sprite4.setFrame(1);
				this.item16Var4Checked = true;

				this.item16Var1Checked = false;
				this.item16Var2Checked = false;
				this.item16Var3Checked = false;
				this.item16Var5Checked = false;
				this.item16Var6Checked = false;
				item16Sprite1.setFrame(0);
				item16Sprite2.setFrame(0);
				item16Sprite3.setFrame(0);
				item16Sprite5.setFrame(0);
				item16Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.475, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item16Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item16Sprite5.on('pointerdown', function (pointer) {
			if (this.item16Var5Checked) {
				item16Sprite5.setFrame(0);
				this.item16Var5Checked = false;
			} else {
				item16Sprite5.setFrame(1);
				this.item16Var5Checked = true;

				this.item16Var1Checked = false;
				this.item16Var2Checked = false;
				this.item16Var3Checked = false;
				this.item16Var4Checked = false;
				this.item16Var6Checked = false;
				item16Sprite1.setFrame(0);
				item16Sprite2.setFrame(0);
				item16Sprite3.setFrame(0);
				item16Sprite4.setFrame(0);
				item16Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.475, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item16Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item16Sprite6.on('pointerdown', function (pointer) {
			if (this.item16Var6Checked) {
				item16Sprite6.setFrame(0);
				this.item16Var6Checked = false;
			} else {
				item16Sprite6.setFrame(1);
				this.item16Var6Checked = true;

				this.item16Var1Checked = false;
				this.item16Var2Checked = false;
				this.item16Var3Checked = false;
				this.item16Var4Checked = false;
				this.item16Var5Checked = false;
				item16Sprite1.setFrame(0);
				item16Sprite2.setFrame(0);
				item16Sprite3.setFrame(0);
				item16Sprite4.setFrame(0);
				item16Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
		// 	var item17 = [
		// 		"17. no question."
		// 	];
		// } else {
		var item17 = [
			"17. I am confident in the suggestions on what choice would have led to a better result provided by the “Help” button. I feel that they work well."
			//"7. I found inconsistencies in the feedback on what choice would have led to a better result."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.6, item17, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.65, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item17Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item17Sprite1.on('pointerdown', function (pointer) {
			if (this.item17Var1Checked) {
				item17Sprite1.setFrame(0);
				this.item17Var1Checked = false;
			} else {
				item17Sprite1.setFrame(1);
				this.item17Var1Checked = true;

				this.item17Var2Checked = false;
				this.item17Var3Checked = false;
				this.item17Var4Checked = false;
				this.item17Var5Checked = false;
				this.item17Var6Checked = false;
				item17Sprite2.setFrame(0);
				item17Sprite3.setFrame(0);
				item17Sprite4.setFrame(0);
				item17Sprite5.setFrame(0);
				item17Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.475, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item17Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item17Sprite2.on('pointerdown', function (pointer) {
			if (this.item17Var2Checked) {
				item17Sprite2.setFrame(0);
				this.item17Var2Checked = false;
			} else {
				item17Sprite2.setFrame(1);
				this.item17Var2Checked = true;

				this.item17Var1Checked = false;
				this.item17Var3Checked = false;
				this.item17Var4Checked = false;
				this.item17Var5Checked = false;
				this.item17Var6Checked = false;
				item17Sprite1.setFrame(0);
				item17Sprite3.setFrame(0);
				item17Sprite4.setFrame(0);
				item17Sprite5.setFrame(0);
				item17Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.65, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item17Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item17Sprite3.on('pointerdown', function (pointer) {
			if (this.item17Var3Checked) {
				item17Sprite3.setFrame(0);
				this.item17Var3Checked = false;
			} else {
				item17Sprite3.setFrame(1);
				this.item17Var3Checked = true;

				this.item17Var1Checked = false;
				this.item17Var2Checked = false;
				this.item17Var4Checked = false;
				this.item17Var5Checked = false;
				this.item17Var6Checked = false;
				item17Sprite1.setFrame(0);
				item17Sprite2.setFrame(0);
				item17Sprite4.setFrame(0);
				item17Sprite5.setFrame(0);
				item17Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.65, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item17Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item17Sprite4.on('pointerdown', function (pointer) {
			if (this.item17Var4Checked) {
				item17Sprite4.setFrame(0);
				this.item17Var4Checked = false;
			} else {
				item17Sprite4.setFrame(1);
				this.item17Var4Checked = true;

				this.item17Var1Checked = false;
				this.item17Var2Checked = false;
				this.item17Var3Checked = false;
				this.item17Var5Checked = false;
				this.item17Var6Checked = false;
				item17Sprite1.setFrame(0);
				item17Sprite2.setFrame(0);
				item17Sprite3.setFrame(0);
				item17Sprite5.setFrame(0);
				item17Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.65, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item17Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item17Sprite5.on('pointerdown', function (pointer) {
			if (this.item17Var5Checked) {
				item17Sprite5.setFrame(0);
				this.item17Var5Checked = false;
			} else {
				item17Sprite5.setFrame(1);
				this.item17Var5Checked = true;

				this.item17Var1Checked = false;
				this.item17Var2Checked = false;
				this.item17Var3Checked = false;
				this.item17Var4Checked = false;
				this.item17Var6Checked = false;
				item17Sprite1.setFrame(0);
				item17Sprite2.setFrame(0);
				item17Sprite3.setFrame(0);
				item17Sprite4.setFrame(0);
				item17Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.65, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item17Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item17Sprite6.on('pointerdown', function (pointer) {
			if (this.item17Var6Checked) {
				item17Sprite6.setFrame(0);
				this.item17Var6Checked = false;
			} else {
				item17Sprite6.setFrame(1);
				this.item17Var6Checked = true;

				this.item17Var1Checked = false;
				this.item17Var2Checked = false;
				this.item17Var3Checked = false;
				this.item17Var4Checked = false;
				this.item17Var5Checked = false;
				item17Sprite1.setFrame(0);
				item17Sprite2.setFrame(0);
				item17Sprite3.setFrame(0);
				item17Sprite4.setFrame(0);
				item17Sprite5.setFrame(0);

			}
		}.bind(this));

		// instatiate and add new end scene with current data
		var questionnaireScene5 = undefined;

		// add button to request feedback
		var buttonContinue = this.add.image(0, 0, 'buttonFeed').setScale(0.4)
			.setInteractive()
			.on('pointerdown', () => this.onBtnContinue());

		var textContinue = this.add.text(-50, -15, 'Continue!', { fontSize: '18px', color: '#ffffff' })
		var buttonContainer = this.add.container(window.innerWidth * 0.92, window.innerHeight * 0.76, [buttonContinue, textContinue])

	}

	logAnswers() {
		this.gameData.api.logQuestionnaire(14, this.item15Var1Checked, this.item15Var2Checked, this.item15Var3Checked, this.item15Var4Checked, this.item15Var5Checked, this.item15Var6Checked);
		this.gameData.api.logQuestionnaire(15, this.item16Var1Checked, this.item16Var2Checked, this.item16Var3Checked, this.item16Var4Checked, this.item16Var5Checked, this.item16Var6Checked);
		this.gameData.api.logQuestionnaire(16, this.item17Var1Checked, this.item17Var2Checked, this.item17Var3Checked, this.item17Var4Checked, this.item17Var5Checked, this.item17Var6Checked)
	}

	onBtnContinue() {
		if ([this.item15Var1Checked, this.item15Var2Checked, this.item15Var3Checked, this.item15Var4Checked, this.item15Var5Checked, this.item15Var6Checked].every(a => a == false) ||
		[this.item16Var1Checked, this.item16Var2Checked, this.item16Var3Checked, this.item16Var4Checked, this.item16Var5Checked, this.item16Var6Checked].every(a => a == false)|| 
		[this.item17Var1Checked, this.item17Var2Checked, this.item17Var3Checked, this.item17Var4Checked, this.item17Var5Checked, this.item17Var6Checked].every(a => a == false)) {
			// alerts cause issues in fullscreen mode, here's a workaround:

			// background
			var warnDialogBG = this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0xFFFFFF, 0.5).setOrigin(0);
			// dialog
			var warnDialog = this.add.rectangle((window.innerWidth * 0.5)-200, (window.innerHeight * 0.5)-130, 400, 200, 0xFFFFFF, 1).setOrigin(0);
			warnDialog.setStrokeStyle(1, 0x1000000, 1);
			var warnDialogTxt = this.add.text((window.innerWidth * 0.5)-150, (window.innerHeight * 0.5)-80, "Please answer all questions!", { fontFamily: "monogram", fontSize: '25px', color: '#000000' }).setOrigin(0);
			// text
			var buttonOK = this.add.rectangle((window.innerWidth * 0.5)-50, (window.innerHeight * 0.5)-25, 100, 50, 0x1a65ac, 1).setOrigin(0);
			buttonOK.setStrokeStyle(1, 0x1000000, 1);
			var buttontextOK = this.add.text((window.innerWidth * 0.5)-20, (window.innerHeight * 0.5)-12.5, 'Ok', { fontFamily: "monogram", fontSize: '25px', color: '#FFFFFF' }).setOrigin(0);

			// make interactive and remove all after clicking ok
			buttonOK
				.setInteractive()
				.on('pointerdown', () => { warnDialogBG.destroy(); })
				.on('pointerdown', () => { warnDialog.destroy(); })
				.on('pointerdown', () => { warnDialogTxt.destroy(); })
				.on('pointerdown', () => { buttonOK.destroy(); })
				.on('pointerdown', () => { buttontextOK.destroy(); });

		}
		else {
			this.logAnswers();

			var questionnaireScene7 = new QuestionnaireScene7(this.gameData);
			this.scene.remove('questionnaireScene7', questionnaireScene7);
			this.scene.add('questionnaireScene7', questionnaireScene7);
			this.scene.start('questionnaireScene7');
		}
	}

	update() { }

}

export default QuestionnaireScene6;
