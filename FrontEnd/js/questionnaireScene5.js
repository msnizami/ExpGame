import QuestionnaireScene6 from './questionnaireScene6.js';

class QuestionnaireScene5 extends Phaser.Scene {

	constructor(gameData) {
		super({ key: 'questionnaireScene5' });
		this.gameData = gameData;

		this.item12Var1Checked = false;
		this.item12Var2Checked = false;
		this.item12Var3Checked = false;
		this.item12Var4Checked = false;
		this.item12Var5Checked = false;
		this.item12Var6Checked = false;

		this.item13Var1Checked = false;
		this.item13Var2Checked = false;
		this.item13Var3Checked = false;
		this.item13Var4Checked = false;
		this.item13Var5Checked = false;
		this.item13Var6Checked = false;

        this.item14Var1Checked = false;
		this.item14Var2Checked = false;
		this.item14Var3Checked = false;
		this.item14Var4Checked = false;
		this.item14Var5Checked = false;
		this.item14Var6Checked = false;
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
		// 	var item9 = [
		// 		"12. No question..."
		// 	];
		// } else {
		var item12 = [
			"12. The suggestions on what choice would have led to a better result provided by the “Help” button have sufficient detail."
			//"9. I received the feedback on what choice would have led to a better result in a timely and efficient manner."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.25, item12, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.3, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item12Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item12Sprite1.on('pointerdown', function (pointer) {
			if (this.item12Var1Checked) {
				item12Sprite1.setFrame(0);
				this.item12Var1Checked = false;
			} else {
				item12Sprite1.setFrame(1);
				this.item12Var1Checked = true;

				this.item12Var2Checked = false;
				this.item12Var3Checked = false;
				this.item12Var4Checked = false;
				this.item12Var5Checked = false;
				this.item12Var6Checked = false;
				item12Sprite2.setFrame(0);
				item12Sprite3.setFrame(0);
				item12Sprite4.setFrame(0);
				item12Sprite5.setFrame(0);
				item12Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.3, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item12Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item12Sprite2.on('pointerdown', function (pointer) {
			if (this.item12Var2Checked) {
				item12Sprite2.setFrame(0);
				this.item12Var2Checked = false;
			} else {
				item12Sprite2.setFrame(1);
				this.item12Var2Checked = true;

				this.item12Var1Checked = false;
				this.item12Var3Checked = false;
				this.item12Var4Checked = false;
				this.item12Var5Checked = false;
				this.item12Var6Checked = false;
				item12Sprite1.setFrame(0);
				item12Sprite3.setFrame(0);
				item12Sprite4.setFrame(0);
				item12Sprite5.setFrame(0);
				item12Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.3, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item12Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item12Sprite3.on('pointerdown', function (pointer) {
			if (this.item12Var3Checked) {
				item12Sprite3.setFrame(0);
				this.item12Var3Checked = false;
			} else {
				item12Sprite3.setFrame(1);
				this.item12Var3Checked = true;

				this.item12Var1Checked = false;
				this.item12Var2Checked = false;
				this.item12Var4Checked = false;
				this.item12Var5Checked = false;
				this.item12Var6Checked = false;
				item12Sprite1.setFrame(0);
				item12Sprite2.setFrame(0);
				item12Sprite4.setFrame(0);
				item12Sprite5.setFrame(0);
				item12Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.3, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item12Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item12Sprite4.on('pointerdown', function (pointer) {
			if (this.item12Var4Checked) {
				item12Sprite4.setFrame(0);
				this.item12Var4Checked = false;
			} else {
				item12Sprite4.setFrame(1);
				this.item12Var4Checked = true;

				this.item12Var1Checked = false;
				this.item12Var2Checked = false;
				this.item12Var3Checked = false;
				this.item12Var5Checked = false;
				this.item12Var6Checked = false;
				item12Sprite1.setFrame(0);
				item12Sprite2.setFrame(0);
				item12Sprite3.setFrame(0);
				item12Sprite5.setFrame(0);
				item12Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.3, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item12Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item12Sprite5.on('pointerdown', function (pointer) {
			if (this.item12Var5Checked) {
				item12Sprite5.setFrame(0);
				this.item12Var5Checked = false;
			} else {
				item12Sprite5.setFrame(1);
				this.item12Var5Checked = true;

				this.item12Var1Checked = false;
				this.item12Var2Checked = false;
				this.item12Var3Checked = false;
				this.item12Var4Checked = false;
				this.item12Var6Checked = false;
				item12Sprite1.setFrame(0);
				item12Sprite2.setFrame(0);
				item12Sprite3.setFrame(0);
				item12Sprite4.setFrame(0);
				item12Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.3, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item12Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item12Sprite6.on('pointerdown', function (pointer) {
			if (this.item12Var6Checked) {
				item12Sprite6.setFrame(0);
				this.item12Var6Checked = false;
			} else {
				item12Sprite6.setFrame(1);
				this.item12Var6Checked = true;

				this.item12Var1Checked = false;
				this.item12Var2Checked = false;
				this.item12Var3Checked = false;
				this.item12Var4Checked = false;
				this.item12Var5Checked = false;
				item12Sprite1.setFrame(0);
				item12Sprite2.setFrame(0);
				item12Sprite3.setFrame(0);
				item12Sprite4.setFrame(0);
				item12Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
		// 	var item10 = [
		// 		"10. No question..."
		// 	];
		// } else {
		var item13 = [
			"13. The suggestions on what choice would have led to a better result provided by the “Help” button seem “incomplete”."
			//"7. I found inconsistencies in the feedback on what choice would have led to a better result."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.425, item13, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.475, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item13Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item13Sprite1.on('pointerdown', function (pointer) {
			if (this.item13Var1Checked) {
				item13Sprite1.setFrame(0);
				this.item13Var1Checked = false;
			} else {
				item13Sprite1.setFrame(1);
				this.item13Var1Checked = true;

				this.item13Var2Checked = false;
				this.item13Var3Checked = false;
				this.item13Var4Checked = false;
				this.item13Var5Checked = false;
				this.item13Var6Checked = false;
				item13Sprite2.setFrame(0);
				item13Sprite3.setFrame(0);
				item13Sprite4.setFrame(0);
				item13Sprite5.setFrame(0);
				item13Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.475, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item13Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item13Sprite2.on('pointerdown', function (pointer) {
			if (this.item13Var2Checked) {
				item13Sprite2.setFrame(0);
				this.item13Var2Checked = false;
			} else {
				item13Sprite2.setFrame(1);
				this.item13Var2Checked = true;

				this.item13Var1Checked = false;
				this.item13Var3Checked = false;
				this.item13Var4Checked = false;
				this.item13Var5Checked = false;
				this.item13Var6Checked = false;
				item13Sprite1.setFrame(0);
				item13Sprite3.setFrame(0);
				item13Sprite4.setFrame(0);
				item13Sprite5.setFrame(0);
				item13Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.475, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item13Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item13Sprite3.on('pointerdown', function (pointer) {
			if (this.item13Var3Checked) {
				item13Sprite3.setFrame(0);
				this.item13Var3Checked = false;
			} else {
				item13Sprite3.setFrame(1);
				this.item13Var3Checked = true;

				this.item13Var1Checked = false;
				this.item13Var2Checked = false;
				this.item13Var4Checked = false;
				this.item13Var5Checked = false;
				this.item13Var6Checked = false;
				item13Sprite1.setFrame(0);
				item13Sprite2.setFrame(0);
				item13Sprite4.setFrame(0);
				item13Sprite5.setFrame(0);
				item13Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.475, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item13Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item13Sprite4.on('pointerdown', function (pointer) {
			if (this.item13Var4Checked) {
				item13Sprite4.setFrame(0);
				this.item13Var4Checked = false;
			} else {
				item13Sprite4.setFrame(1);
				this.item13Var4Checked = true;

				this.item13Var1Checked = false;
				this.item13Var2Checked = false;
				this.item13Var3Checked = false;
				this.item13Var5Checked = false;
				this.item13Var6Checked = false;
				item13Sprite1.setFrame(0);
				item13Sprite2.setFrame(0);
				item13Sprite3.setFrame(0);
				item13Sprite5.setFrame(0);
				item13Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.475, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item13Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item13Sprite5.on('pointerdown', function (pointer) {
			if (this.item13Var5Checked) {
				item13Sprite5.setFrame(0);
				this.item13Var5Checked = false;
			} else {
				item13Sprite5.setFrame(1);
				this.item13Var5Checked = true;

				this.item13Var1Checked = false;
				this.item13Var2Checked = false;
				this.item13Var3Checked = false;
				this.item13Var4Checked = false;
				this.item13Var6Checked = false;
				item13Sprite1.setFrame(0);
				item13Sprite2.setFrame(0);
				item13Sprite3.setFrame(0);
				item13Sprite4.setFrame(0);
				item13Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.475, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item13Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item13Sprite6.on('pointerdown', function (pointer) {
			if (this.item13Var6Checked) {
				item13Sprite6.setFrame(0);
				this.item13Var6Checked = false;
			} else {
				item13Sprite6.setFrame(1);
				this.item13Var6Checked = true;

				this.item13Var1Checked = false;
				this.item13Var2Checked = false;
				this.item13Var3Checked = false;
				this.item13Var4Checked = false;
				this.item13Var5Checked = false;
				item13Sprite1.setFrame(0);
				item13Sprite2.setFrame(0);
				item13Sprite3.setFrame(0);
				item13Sprite4.setFrame(0);
				item13Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
		// 	var item11 = [
		// 		"14. no question"
		// 	];
		// } else {
		var item14 = [
			"14. The suggestions on what choice would have led to a better result provided by the “Help” button tell me how to use the AlienNutriSolver."
			//"7. I found inconsistencies in the feedback on what choice would have led to a better result."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.6, item14, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.65, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item14Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item14Sprite1.on('pointerdown', function (pointer) {
			if (this.item14Var1Checked) {
				item14Sprite1.setFrame(0);
				this.item14Var1Checked = false;
			} else {
				item14Sprite1.setFrame(1);
				this.item14Var1Checked = true;

				this.item14Var2Checked = false;
				this.item14Var3Checked = false;
				this.item14Var4Checked = false;
				this.item14Var5Checked = false;
				this.item14Var6Checked = false;
				item14Sprite2.setFrame(0);
				item14Sprite3.setFrame(0);
				item14Sprite4.setFrame(0);
				item14Sprite5.setFrame(0);
				item14Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.475, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item14Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item14Sprite2.on('pointerdown', function (pointer) {
			if (this.item14Var2Checked) {
				item14Sprite2.setFrame(0);
				this.item14Var2Checked = false;
			} else {
				item14Sprite2.setFrame(1);
				this.item14Var2Checked = true;

				this.item14Var1Checked = false;
				this.item14Var3Checked = false;
				this.item14Var4Checked = false;
				this.item14Var5Checked = false;
				this.item14Var6Checked = false;
				item14Sprite1.setFrame(0);
				item14Sprite3.setFrame(0);
				item14Sprite4.setFrame(0);
				item14Sprite5.setFrame(0);
				item14Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.65, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item14Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item14Sprite3.on('pointerdown', function (pointer) {
			if (this.item14Var3Checked) {
				item14Sprite3.setFrame(0);
				this.item14Var3Checked = false;
			} else {
				item14Sprite3.setFrame(1);
				this.item14Var3Checked = true;

				this.item14Var1Checked = false;
				this.item14Var2Checked = false;
				this.item14Var4Checked = false;
				this.item14Var5Checked = false;
				this.item14Var6Checked = false;
				item14Sprite1.setFrame(0);
				item14Sprite2.setFrame(0);
				item14Sprite4.setFrame(0);
				item14Sprite5.setFrame(0);
				item14Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.65, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item14Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item14Sprite4.on('pointerdown', function (pointer) {
			if (this.item14Var4Checked) {
				item14Sprite4.setFrame(0);
				this.item14Var4Checked = false;
			} else {
				item14Sprite4.setFrame(1);
				this.item14Var4Checked = true;

				this.item14Var1Checked = false;
				this.item14Var2Checked = false;
				this.item14Var3Checked = false;
				this.item14Var5Checked = false;
				this.item14Var6Checked = false;
				item14Sprite1.setFrame(0);
				item14Sprite2.setFrame(0);
				item14Sprite3.setFrame(0);
				item14Sprite5.setFrame(0);
				item14Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.65, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item14Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item14Sprite5.on('pointerdown', function (pointer) {
			if (this.item14Var5Checked) {
				item14Sprite5.setFrame(0);
				this.item14Var5Checked = false;
			} else {
				item14Sprite5.setFrame(1);
				this.item14Var5Checked = true;

				this.item14Var1Checked = false;
				this.item14Var2Checked = false;
				this.item14Var3Checked = false;
				this.item14Var4Checked = false;
				this.item14Var6Checked = false;
				item14Sprite1.setFrame(0);
				item14Sprite2.setFrame(0);
				item14Sprite3.setFrame(0);
				item14Sprite4.setFrame(0);
				item14Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.65, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item14Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item14Sprite6.on('pointerdown', function (pointer) {
			if (this.item14Var6Checked) {
				item14Sprite6.setFrame(0);
				this.item14Var6Checked = false;
			} else {
				item14Sprite6.setFrame(1);
				this.item14Var6Checked = true;

				this.item14Var1Checked = false;
				this.item14Var2Checked = false;
				this.item14Var3Checked = false;
				this.item14Var4Checked = false;
				this.item14Var5Checked = false;
				item14Sprite1.setFrame(0);
				item14Sprite2.setFrame(0);
				item14Sprite3.setFrame(0);
				item14Sprite4.setFrame(0);
				item14Sprite5.setFrame(0);

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
		this.gameData.api.logQuestionnaire(11, this.item12Var1Checked, this.item12Var2Checked, this.item12Var3Checked, this.item12Var4Checked, this.item12Var5Checked, this.item12Var6Checked);
		this.gameData.api.logQuestionnaire(12, this.item13Var1Checked, this.item13Var2Checked, this.item13Var3Checked, this.item13Var4Checked, this.item13Var5Checked, this.item13Var6Checked);
		this.gameData.api.logQuestionnaire(13, this.item14Var1Checked, this.item14Var2Checked, this.item14Var3Checked, this.item14Var4Checked, this.item14Var5Checked, this.item14Var6Checked)
	}

	onBtnContinue() {
		if ([this.item12Var1Checked, this.item12Var2Checked, this.item12Var3Checked, this.item12Var4Checked, this.item12Var5Checked, this.item12Var6Checked].every(a => a == false) ||
		[this.item13Var1Checked, this.item13Var2Checked, this.item13Var3Checked, this.item13Var4Checked, this.item13Var5Checked, this.item13Var6Checked].every(a => a == false)|| 
		[this.item14Var1Checked, this.item14Var2Checked, this.item14Var3Checked, this.item14Var4Checked, this.item14Var5Checked, this.item14Var6Checked].every(a => a == false)) {
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

			var questionnaireScene6 = new QuestionnaireScene6(this.gameData);
			this.scene.remove('questionnaireScene6', questionnaireScene6);
			this.scene.add('questionnaireScene6', questionnaireScene6);
			this.scene.start('questionnaireScene6');
		}
	}

	update() { }

}

export default QuestionnaireScene5;
