import QuestionnaireScene8 from './questionnaireScene8.js';

class QuestionnaireScene7 extends Phaser.Scene {

	constructor(gameData) {
		super({ key: 'questionnaireScene7' });
		this.gameData = gameData;

		this.item18Var1Checked = false;
		this.item18Var2Checked = false;
		this.item18Var3Checked = false;
		this.item18Var4Checked = false;
		this.item18Var5Checked = false;
		this.item18Var6Checked = false;

		this.item19Var1Checked = false;
		this.item19Var2Checked = false;
		this.item19Var3Checked = false;
		this.item19Var4Checked = false;
		this.item19Var5Checked = false;
		this.item19Var6Checked = false;

        this.item20Var1Checked = false;
		this.item20Var2Checked = false;
		this.item20Var3Checked = false;
		this.item20Var4Checked = false;
		this.item20Var5Checked = false;
		this.item20Var6Checked = false;
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
		// 		"18. no question."
		// 	];
		// } else {
		var item18 = [
			"18. I “do not feel safe” that when I rely on the suggestions on what choice would have led to a better result provided by the “Help” button, I will get the right answers."
			//"9. I received the feedback on what choice would have led to a better result in a timely and efficient manner."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.25, item18, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.3, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item18Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item18Sprite1.on('pointerdown', function (pointer) {
			if (this.item18Var1Checked) {
				item18Sprite1.setFrame(0);
				this.item18Var1Checked = false;
			} else {
				item18Sprite1.setFrame(1);
				this.item18Var1Checked = true;

				this.item18Var2Checked = false;
				this.item18Var3Checked = false;
				this.item18Var4Checked = false;
				this.item18Var5Checked = false;
				this.item18Var6Checked = false;
				item18Sprite2.setFrame(0);
				item18Sprite3.setFrame(0);
				item18Sprite4.setFrame(0);
				item18Sprite5.setFrame(0);
				item18Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.3, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item18Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item18Sprite2.on('pointerdown', function (pointer) {
			if (this.item18Var2Checked) {
				item18Sprite2.setFrame(0);
				this.item18Var2Checked = false;
			} else {
				item18Sprite2.setFrame(1);
				this.item18Var2Checked = true;

				this.item18Var1Checked = false;
				this.item18Var3Checked = false;
				this.item18Var4Checked = false;
				this.item18Var5Checked = false;
				this.item18Var6Checked = false;
				item18Sprite1.setFrame(0);
				item18Sprite3.setFrame(0);
				item18Sprite4.setFrame(0);
				item18Sprite5.setFrame(0);
				item18Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.3, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item18Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item18Sprite3.on('pointerdown', function (pointer) {
			if (this.item18Var3Checked) {
				item18Sprite3.setFrame(0);
				this.item18Var3Checked = false;
			} else {
				item18Sprite3.setFrame(1);
				this.item18Var3Checked = true;

				this.item18Var1Checked = false;
				this.item18Var2Checked = false;
				this.item18Var4Checked = false;
				this.item18Var5Checked = false;
				this.item18Var6Checked = false;
				item18Sprite1.setFrame(0);
				item18Sprite2.setFrame(0);
				item18Sprite4.setFrame(0);
				item18Sprite5.setFrame(0);
				item18Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.3, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item18Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item18Sprite4.on('pointerdown', function (pointer) {
			if (this.item18Var4Checked) {
				item18Sprite4.setFrame(0);
				this.item18Var4Checked = false;
			} else {
				item18Sprite4.setFrame(1);
				this.item18Var4Checked = true;

				this.item18Var1Checked = false;
				this.item18Var2Checked = false;
				this.item18Var3Checked = false;
				this.item18Var5Checked = false;
				this.item18Var6Checked = false;
				item18Sprite1.setFrame(0);
				item18Sprite2.setFrame(0);
				item18Sprite3.setFrame(0);
				item18Sprite5.setFrame(0);
				item18Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.3, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item18Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item18Sprite5.on('pointerdown', function (pointer) {
			if (this.item18Var5Checked) {
				item18Sprite5.setFrame(0);
				this.item18Var5Checked = false;
			} else {
				item18Sprite5.setFrame(1);
				this.item18Var5Checked = true;

				this.item18Var1Checked = false;
				this.item18Var2Checked = false;
				this.item18Var3Checked = false;
				this.item18Var4Checked = false;
				this.item18Var6Checked = false;
				item18Sprite1.setFrame(0);
				item18Sprite2.setFrame(0);
				item18Sprite3.setFrame(0);
				item18Sprite4.setFrame(0);
				item18Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.3, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item18Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item18Sprite6.on('pointerdown', function (pointer) {
			if (this.item18Var6Checked) {
				item18Sprite6.setFrame(0);
				this.item18Var6Checked = false;
			} else {
				item18Sprite6.setFrame(1);
				this.item18Var6Checked = true;

				this.item18Var1Checked = false;
				this.item18Var2Checked = false;
				this.item18Var3Checked = false;
				this.item18Var4Checked = false;
				this.item18Var5Checked = false;
				item18Sprite1.setFrame(0);
				item18Sprite2.setFrame(0);
				item18Sprite3.setFrame(0);
				item18Sprite4.setFrame(0);
				item18Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
		// 	var item19 = [
		// 		"19. No question..."
		// 	];
		// } else {
		var item19 = [
			"19. I “am wary” (cautious) of the suggestions on what choice would have led to a better result provided by the “Help” button."
			//"7. I found inconsistencies in the feedback on what choice would have led to a better result."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.425, item19, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.475, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item19Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item19Sprite1.on('pointerdown', function (pointer) {
			if (this.item19Var1Checked) {
				item19Sprite1.setFrame(0);
				this.item19Var1Checked = false;
			} else {
				item19Sprite1.setFrame(1);
				this.item19Var1Checked = true;

				this.item19Var2Checked = false;
				this.item19Var3Checked = false;
				this.item19Var4Checked = false;
				this.item19Var5Checked = false;
				this.item19Var6Checked = false;
				item19Sprite2.setFrame(0);
				item19Sprite3.setFrame(0);
				item19Sprite4.setFrame(0);
				item19Sprite5.setFrame(0);
				item19Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.475, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item19Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item19Sprite2.on('pointerdown', function (pointer) {
			if (this.item19Var2Checked) {
				item19Sprite2.setFrame(0);
				this.item19Var2Checked = false;
			} else {
				item19Sprite2.setFrame(1);
				this.item19Var2Checked = true;

				this.item19Var1Checked = false;
				this.item19Var3Checked = false;
				this.item19Var4Checked = false;
				this.item19Var5Checked = false;
				this.item19Var6Checked = false;
				item19Sprite1.setFrame(0);
				item19Sprite3.setFrame(0);
				item19Sprite4.setFrame(0);
				item19Sprite5.setFrame(0);
				item19Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.475, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item19Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item19Sprite3.on('pointerdown', function (pointer) {
			if (this.item19Var3Checked) {
				item19Sprite3.setFrame(0);
				this.item19Var3Checked = false;
			} else {
				item19Sprite3.setFrame(1);
				this.item19Var3Checked = true;

				this.item19Var1Checked = false;
				this.item19Var2Checked = false;
				this.item19Var4Checked = false;
				this.item19Var5Checked = false;
				this.item19Var6Checked = false;
				item19Sprite1.setFrame(0);
				item19Sprite2.setFrame(0);
				item19Sprite4.setFrame(0);
				item19Sprite5.setFrame(0);
				item19Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.475, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item19Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item19Sprite4.on('pointerdown', function (pointer) {
			if (this.item19Var4Checked) {
				item19Sprite4.setFrame(0);
				this.item19Var4Checked = false;
			} else {
				item19Sprite4.setFrame(1);
				this.item19Var4Checked = true;

				this.item19Var1Checked = false;
				this.item19Var2Checked = false;
				this.item19Var3Checked = false;
				this.item19Var5Checked = false;
				this.item19Var6Checked = false;
				item19Sprite1.setFrame(0);
				item19Sprite2.setFrame(0);
				item19Sprite3.setFrame(0);
				item19Sprite5.setFrame(0);
				item19Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.475, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item19Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item19Sprite5.on('pointerdown', function (pointer) {
			if (this.item19Var5Checked) {
				item19Sprite5.setFrame(0);
				this.item19Var5Checked = false;
			} else {
				item19Sprite5.setFrame(1);
				this.item19Var5Checked = true;

				this.item19Var1Checked = false;
				this.item19Var2Checked = false;
				this.item19Var3Checked = false;
				this.item19Var4Checked = false;
				this.item19Var6Checked = false;
				item19Sprite1.setFrame(0);
				item19Sprite2.setFrame(0);
				item19Sprite3.setFrame(0);
				item19Sprite4.setFrame(0);
				item19Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.475, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item19Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item19Sprite6.on('pointerdown', function (pointer) {
			if (this.item19Var6Checked) {
				item19Sprite6.setFrame(0);
				this.item19Var6Checked = false;
			} else {
				item19Sprite6.setFrame(1);
				this.item19Var6Checked = true;

				this.item19Var1Checked = false;
				this.item19Var2Checked = false;
				this.item19Var3Checked = false;
				this.item19Var4Checked = false;
				this.item19Var5Checked = false;
				item19Sprite1.setFrame(0);
				item19Sprite2.setFrame(0);
				item19Sprite3.setFrame(0);
				item19Sprite4.setFrame(0);
				item19Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
		// 	var item11 = [
		// 		"11. no question."
		// 	];
		// } else {
		var item20 = [
			"20. I like using the suggestions on what choice would have led to a better result provided by the “Help” button for decision making."
			//"7. I found inconsistencies in the feedback on what choice would have led to a better result."
		];
		// }

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.6, item20, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.65, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item20Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item20Sprite1.on('pointerdown', function (pointer) {
			if (this.item20Var1Checked) {
				item20Sprite1.setFrame(0);
				this.item20Var1Checked = false;
			} else {
				item20Sprite1.setFrame(1);
				this.item20Var1Checked = true;

				this.item20Var2Checked = false;
				this.item20Var3Checked = false;
				this.item20Var4Checked = false;
				this.item20Var5Checked = false;
				this.item20Var6Checked = false;
				item20Sprite2.setFrame(0);
				item20Sprite3.setFrame(0);
				item20Sprite4.setFrame(0);
				item20Sprite5.setFrame(0);
				item20Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.475, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item20Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item20Sprite2.on('pointerdown', function (pointer) {
			if (this.item20Var2Checked) {
				item20Sprite2.setFrame(0);
				this.item20Var2Checked = false;
			} else {
				item20Sprite2.setFrame(1);
				this.item20Var2Checked = true;

				this.item20Var1Checked = false;
				this.item20Var3Checked = false;
				this.item20Var4Checked = false;
				this.item20Var5Checked = false;
				this.item20Var6Checked = false;
				item20Sprite1.setFrame(0);
				item20Sprite3.setFrame(0);
				item20Sprite4.setFrame(0);
				item20Sprite5.setFrame(0);
				item20Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.65, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item20Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item20Sprite3.on('pointerdown', function (pointer) {
			if (this.item20Var3Checked) {
				item20Sprite3.setFrame(0);
				this.item20Var3Checked = false;
			} else {
				item20Sprite3.setFrame(1);
				this.item20Var3Checked = true;

				this.item20Var1Checked = false;
				this.item20Var2Checked = false;
				this.item20Var4Checked = false;
				this.item20Var5Checked = false;
				this.item20Var6Checked = false;
				item20Sprite1.setFrame(0);
				item20Sprite2.setFrame(0);
				item20Sprite4.setFrame(0);
				item20Sprite5.setFrame(0);
				item20Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.65, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item20Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item20Sprite4.on('pointerdown', function (pointer) {
			if (this.item20Var4Checked) {
				item20Sprite4.setFrame(0);
				this.item20Var4Checked = false;
			} else {
				item20Sprite4.setFrame(1);
				this.item20Var4Checked = true;

				this.item20Var1Checked = false;
				this.item20Var2Checked = false;
				this.item20Var3Checked = false;
				this.item20Var5Checked = false;
				this.item20Var6Checked = false;
				item20Sprite1.setFrame(0);
				item20Sprite2.setFrame(0);
				item20Sprite3.setFrame(0);
				item20Sprite5.setFrame(0);
				item20Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.65, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item20Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item20Sprite5.on('pointerdown', function (pointer) {
			if (this.item20Var5Checked) {
				item20Sprite5.setFrame(0);
				this.item20Var5Checked = false;
			} else {
				item20Sprite5.setFrame(1);
				this.item20Var5Checked = true;

				this.item20Var1Checked = false;
				this.item20Var2Checked = false;
				this.item20Var3Checked = false;
				this.item20Var4Checked = false;
				this.item20Var6Checked = false;
				item20Sprite1.setFrame(0);
				item20Sprite2.setFrame(0);
				item20Sprite3.setFrame(0);
				item20Sprite4.setFrame(0);
				item20Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.65, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item20Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item20Sprite6.on('pointerdown', function (pointer) {
			if (this.item20Var6Checked) {
				item20Sprite6.setFrame(0);
				this.item20Var6Checked = false;
			} else {
				item20Sprite6.setFrame(1);
				this.item20Var6Checked = true;

				this.item20Var1Checked = false;
				this.item20Var2Checked = false;
				this.item20Var3Checked = false;
				this.item20Var4Checked = false;
				this.item20Var5Checked = false;
				item20Sprite1.setFrame(0);
				item20Sprite2.setFrame(0);
				item20Sprite3.setFrame(0);
				item20Sprite4.setFrame(0);
				item20Sprite5.setFrame(0);

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
		this.gameData.api.logQuestionnaire(17, this.item18Var1Checked, this.item18Var2Checked, this.item18Var3Checked, this.item18Var4Checked, this.item18Var5Checked, this.item18Var6Checked);
		this.gameData.api.logQuestionnaire(18, this.item19Var1Checked, this.item19Var2Checked, this.item19Var3Checked, this.item19Var4Checked, this.item19Var5Checked, this.item19Var6Checked);
		this.gameData.api.logQuestionnaire(19, this.item20Var1Checked, this.item20Var2Checked, this.item20Var3Checked, this.item20Var4Checked, this.item20Var5Checked, this.item20Var6Checked)
	}

	onBtnContinue() {
		if ([this.item18Var1Checked, this.item18Var2Checked, this.item18Var3Checked, this.item18Var4Checked, this.item18Var5Checked, this.item18Var6Checked].every(a => a == false) ||
		[this.item19Var1Checked, this.item19Var2Checked, this.item19Var3Checked, this.item19Var4Checked, this.item19Var5Checked, this.item19Var6Checked].every(a => a == false)|| 
		[this.item20Var1Checked, this.item20Var2Checked, this.item20Var3Checked, this.item20Var4Checked, this.item20Var5Checked, this.item20Var6Checked].every(a => a == false)) {
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

			var questionnaireScene8 = new QuestionnaireScene8(this.gameData);
			this.scene.remove('questionnaireScene8', questionnaireScene8);
			this.scene.add('questionnaireScene8', questionnaireScene8);
			this.scene.start('questionnaireScene8');
		}
	}

	update() { }

}

export default QuestionnaireScene7;
