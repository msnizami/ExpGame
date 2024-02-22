import QuestionnaireScene3 from './questionnaireScene3.js';

class QuestionnaireScene2 extends Phaser.Scene {

	constructor(gameData) {
		super({ key: 'questionnaireScene2' });
		this.gameData = gameData;

		this.item3Var1Checked = false;
		this.item3Var2Checked = false;
		this.item3Var3Checked = false;
		this.item3Var4Checked = false;
		this.item3Var5Checked = false;
		this.item3Var6Checked = false;

		this.item4Var1Checked = false;
		this.item4Var2Checked = false;
		this.item4Var3Checked = false;
		this.item4Var4Checked = false;
		this.item4Var5Checked = false;
		this.item4Var6Checked = false;

		this.item5Var1Checked = false;
		this.item5Var2Checked = false;
		this.item5Var3Checked = false;
		this.item5Var4Checked = false;
		this.item5Var5Checked = false;
		this.item5Var6Checked = false;
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
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.1, qIntro2, { fontFamily: 'monogram', fontSize: '17px', fontStyle: "bold italic", color: '#000000' });  //


		// if (this.gameData.api.controlGroup) {
			// var item3 = [
			// 	"3. I would have liked to have a “Help” button to get suggestions on what choice would have led to a better result."
			// ];
			var textStyle = { fontFamily: 'monogram', fontSize: '17px', color: '#000000' }
			var textStyle1 = { fontFamily: 'monogram', fontSize: '17px', color: '#000000', fontStyle: 'bold' }
			var sentenceParts = [
				{ text: "3. I would have ", style: textStyle },
				{ text: "liked", style: textStyle1 },
				{ text: " to have a “Help” button to get suggestions on what choice would have led to a better result.", style: textStyle },
			];
			var x = window.innerWidth * 0.025;
			var y = window.innerHeight * 0.25;
			sentenceParts.forEach(part => {
				var text = this.add.text(x, y, part.text, part.style);
				x += text.width; // Update x position for next text part
			});
		// } else {
		// var item3 = [
		// 	"3.  I often used the “Help” button to get suggestions on what choice would have led to a better result."
		// ];
		//}

		// add item 1
		//this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.25, item3, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });//fontStyle: "bold",
	

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.30, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item3Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item3Sprite1.on('pointerdown', function (pointer) {
			if (this.item3Var1Checked) {
				item3Sprite1.setFrame(0);
				this.item3Var1Checked = false;
			} else {
				item3Sprite1.setFrame(1);
				this.item3Var1Checked = true;

				this.item3Var2Checked = false;
				this.item3Var3Checked = false;
				this.item3Var4Checked = false;
				this.item3Var5Checked = false;
				this.item3Var6Checked = false;
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.30, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item3Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item3Sprite2.on('pointerdown', function (pointer) {
			if (this.item3Var2Checked) {
				item3Sprite2.setFrame(0);
				this.item3Var2Checked = false;
			} else {
				item3Sprite2.setFrame(1);
				this.item3Var2Checked = true;

				this.item3Var1Checked = false;
				this.item3Var3Checked = false;
				this.item3Var4Checked = false;
				this.item3Var5Checked = false;
				this.item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.30, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item3Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item3Sprite3.on('pointerdown', function (pointer) {
			if (this.item3Var3Checked) {
				item3Sprite3.setFrame(0);
				this.item3Var3Checked = false;
			} else {
				item3Sprite3.setFrame(1);
				this.item3Var3Checked = true;

				this.item3Var1Checked = false;
				this.item3Var2Checked = false;
				this.item3Var4Checked = false;
				this.item3Var5Checked = false;
				this.item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.30, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item3Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item3Sprite4.on('pointerdown', function (pointer) {
			if (this.item3Var4Checked) {
				item3Sprite4.setFrame(0);
				this.item3Var4Checked = false;
			} else {
				item3Sprite4.setFrame(1);
				this.item3Var4Checked = true;

				this.item3Var1Checked = false;
				this.item3Var2Checked = false;
				this.item3Var3Checked = false;
				this.item3Var5Checked = false;
				this.item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite5.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.30, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item3Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item3Sprite5.on('pointerdown', function (pointer) {
			if (this.item3Var5Checked) {
				item3Sprite5.setFrame(0);
				this.item3Var5Checked = false;
			} else {
				item3Sprite5.setFrame(1);
				this.item3Var5Checked = true;

				this.item3Var1Checked = false;
				this.item3Var2Checked = false;
				this.item3Var3Checked = false;
				this.item3Var4Checked = false;
				this.item3Var6Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.30, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item3Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.35, 'checkbox', 0).setScale(0.4).setInteractive();

		item3Sprite6.on('pointerdown', function (pointer) {
			if (this.item3Var6Checked) {
				item3Sprite6.setFrame(0);
				this.item3Var6Checked = false;
			} else {
				item3Sprite6.setFrame(1);
				this.item3Var6Checked = true;

				this.item3Var1Checked = false;
				this.item3Var2Checked = false;
				this.item3Var3Checked = false;
				this.item3Var4Checked = false;
				this.item3Var5Checked = false;
				item3Sprite1.setFrame(0);
				item3Sprite2.setFrame(0);
				item3Sprite3.setFrame(0);
				item3Sprite4.setFrame(0);
				item3Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
			// var item4 = [
			// 	"4. I needed no support to understand which selection choices would have led to a better result."
			// ];

			var textStyle = { fontFamily: 'monogram', fontSize: '17px', color: '#000000' }
			var textStyle1 = { fontFamily: 'monogram', fontSize: '17px', color: '#000000', fontStyle: 'bold' }
			var sentenceParts = [
				{ text: "4. I ", style: textStyle },
				{ text: "needed no support", style: textStyle1 },
				{ text: " to understand which selection choices would have led to a better result.", style: textStyle },
			];
			var x = window.innerWidth * 0.025;
			var y = window.innerHeight * 0.425;
			sentenceParts.forEach(part => {
				var text = this.add.text(x, y, part.text, part.style);
				x += text.width; // Update x position for next text part
			});

		// } else {
		// var item4 = [
		// 	"4. I “did not understand” the suggestions on what choice would have led to a better result provided by the “Help” button."
		// ];
		// }

		// add item 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.425, item4, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });


		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.475, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item4Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item4Sprite1.on('pointerdown', function (pointer) {
			if (this.item4Var1Checked) {
				item4Sprite1.setFrame(0);
				this.item4Var1Checked = false;
			} else {
				item4Sprite1.setFrame(1);
				this.item4Var1Checked = true;

				this.item4Var2Checked = false;
				this.item4Var3Checked = false;
				this.item4Var4Checked = false;
				this.item4Var5Checked = false;
				this.item4Var6Checked = false;
				item4Sprite2.setFrame(0);
				item4Sprite3.setFrame(0);
				item4Sprite4.setFrame(0);
				item4Sprite5.setFrame(0);
				item4Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.475, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item4Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item4Sprite2.on('pointerdown', function (pointer) {
			if (this.item4Var2Checked) {
				item4Sprite2.setFrame(0);
				this.item4Var2Checked = false;
			} else {
				item4Sprite2.setFrame(1);
				this.item4Var2Checked = true;

				this.item4Var1Checked = false;
				this.item4Var3Checked = false;
				this.item4Var4Checked = false;
				this.item4Var5Checked = false;
				this.item4Var6Checked = false;
				item4Sprite1.setFrame(0);
				item4Sprite3.setFrame(0);
				item4Sprite4.setFrame(0);
				item4Sprite5.setFrame(0);
				item4Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.475, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item4Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item4Sprite3.on('pointerdown', function (pointer) {
			if (this.item4Var3Checked) {
				item4Sprite3.setFrame(0);
				this.item4Var3Checked = false;
			} else {
				item4Sprite3.setFrame(1);
				this.item4Var3Checked = true;

				this.item4Var1Checked = false;
				this.item4Var2Checked = false;
				this.item4Var4Checked = false;
				this.item4Var5Checked = false;
				this.item4Var6Checked = false;
				item4Sprite1.setFrame(0);
				item4Sprite2.setFrame(0);
				item4Sprite4.setFrame(0);
				item4Sprite5.setFrame(0);
				item4Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.475, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item4Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item4Sprite4.on('pointerdown', function (pointer) {
			if (this.item4Var4Checked) {
				item4Sprite4.setFrame(0);
				this.item4Var4Checked = false;
			} else {
				item4Sprite4.setFrame(1);
				this.item4Var4Checked = true;

				this.item4Var1Checked = false;
				this.item4Var2Checked = false;
				this.item4Var3Checked = false;
				this.item4Var5Checked = false;
				this.item4Var6Checked = false;
				item4Sprite1.setFrame(0);
				item4Sprite2.setFrame(0);
				item4Sprite3.setFrame(0);
				item4Sprite5.setFrame(0);
				item4Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.475, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item4Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item4Sprite5.on('pointerdown', function (pointer) {
			if (this.item4Var5Checked) {
				item4Sprite5.setFrame(0);
				this.item4Var5Checked = false;
			} else {
				item4Sprite5.setFrame(1);
				this.item4Var5Checked = true;

				this.item4Var1Checked = false;
				this.item4Var2Checked = false;
				this.item4Var3Checked = false;
				this.item4Var4Checked = false;
				this.item4Var6Checked = false;
				item4Sprite1.setFrame(0);
				item4Sprite2.setFrame(0);
				item4Sprite3.setFrame(0);
				item4Sprite4.setFrame(0);
				item4Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.475, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item4Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.55, 'checkbox', 0).setScale(0.4).setInteractive();

		item4Sprite6.on('pointerdown', function (pointer) {
			if (this.item4Var6Checked) {
				item4Sprite6.setFrame(0);
				this.item4Var6Checked = false;
			} else {
				item4Sprite6.setFrame(1);
				this.item4Var6Checked = true;

				this.item4Var1Checked = false;
				this.item4Var2Checked = false;
				this.item4Var3Checked = false;
				this.item4Var4Checked = false;
				this.item4Var5Checked = false;
				item4Sprite1.setFrame(0);
				item4Sprite2.setFrame(0);
				item4Sprite3.setFrame(0);
				item4Sprite4.setFrame(0);
				item4Sprite5.setFrame(0);

			}
		}.bind(this));

		// if (this.gameData.api.controlGroup) {
			// var item5 = [
			// 	"5. To show you are paying attention to this question, please select “I prefer not to answer”."
			// ];

			var textStyle = { fontFamily: 'monogram', fontSize: '17px', color: '#000000' }
			var textStyle1 = { fontFamily: 'monogram', fontSize: '17px', color: '#000000', fontStyle: 'bold' }
			var sentenceParts = [
				{ text: "5. To show you are ", style: textStyle },
				{ text: "paying attention", style: textStyle1 },
				{ text: " to this question, please select “I prefer not to answer”.", style: textStyle },
			];
			var x = window.innerWidth * 0.025;
			var y = window.innerHeight * 0.61;
			sentenceParts.forEach(part => {
				var text = this.add.text(x, y, part.text, part.style);
				x += text.width; // Update x position for next text part
			});

		// } else {
		// var item5 = [
		// 		"5. I have learned from the suggestions on what choice would have led to a better result provided by the “Help” button \n how to select a good diet to increase the fitness of the Shub."
		// ];
		// }

		// add item 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.61, item5, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.67, 'Strongly disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item5Sprite1 = this.add.sprite(window.innerWidth * 0.05, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item5Sprite1.on('pointerdown', function (pointer) {
			if (this.item5Var1Checked) {
				item5Sprite1.setFrame(0);
				this.item5Var1Checked = false;
			} else {
				item5Sprite1.setFrame(1);
				this.item5Var1Checked = true;

				this.item5Var2Checked = false;
				this.item5Var3Checked = false;
				this.item5Var4Checked = false;
				this.item5Var5Checked = false;
				this.item5Var6Checked = false;
				item5Sprite2.setFrame(0);
				item5Sprite3.setFrame(0);
				item5Sprite4.setFrame(0);
				item5Sprite5.setFrame(0);
				item5Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.175, window.innerHeight * 0.67, 'Disagree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item5Sprite2 = this.add.sprite(window.innerWidth * 0.20, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item5Sprite2.on('pointerdown', function (pointer) {
			if (this.item5Var2Checked) {
				item5Sprite2.setFrame(0);
				this.item5Var2Checked = false;
			} else {
				item5Sprite2.setFrame(1);
				this.item5Var2Checked = true;

				this.item5Var1Checked = false;
				this.item5Var3Checked = false;
				this.item5Var4Checked = false;
				this.item5Var5Checked = false;
				this.item5Var6Checked = false;
				item5Sprite1.setFrame(0);
				item5Sprite3.setFrame(0);
				item5Sprite4.setFrame(0);
				item5Sprite5.setFrame(0);
				item5Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.335, window.innerHeight * 0.67, 'Neutral', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item5Sprite3 = this.add.sprite(window.innerWidth * 0.35, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item5Sprite3.on('pointerdown', function (pointer) {
			if (this.item5Var3Checked) {
				item5Sprite3.setFrame(0);
				this.item5Var3Checked = false;
			} else {
				item5Sprite3.setFrame(1);
				this.item5Var3Checked = true;

				this.item5Var1Checked = false;
				this.item5Var2Checked = false;
				this.item5Var4Checked = false;
				this.item5Var5Checked = false;
				this.item5Var6Checked = false;
				item5Sprite1.setFrame(0);
				item5Sprite2.setFrame(0);
				item5Sprite4.setFrame(0);
				item5Sprite5.setFrame(0);
				item5Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.485, window.innerHeight * 0.67, 'Agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item5Sprite4 = this.add.sprite(window.innerWidth * 0.50, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item5Sprite4.on('pointerdown', function (pointer) {
			if (this.item5Var4Checked) {
				item5Sprite4.setFrame(0);
				this.item5Var4Checked = false;
			} else {
				item5Sprite4.setFrame(1);
				this.item5Var4Checked = true;

				this.item5Var1Checked = false;
				this.item5Var2Checked = false;
				this.item5Var3Checked = false;
				this.item5Var5Checked = false;
				this.item5Var6Checked = false;
				item5Sprite1.setFrame(0);
				item5Sprite2.setFrame(0);
				item5Sprite3.setFrame(0);
				item5Sprite5.setFrame(0);
				item5Sprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.615, window.innerHeight * 0.67, 'Strongly agree', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item5Sprite5 = this.add.sprite(window.innerWidth * 0.65, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item5Sprite5.on('pointerdown', function (pointer) {
			if (this.item5Var5Checked) {
				item5Sprite5.setFrame(0);
				this.item5Var5Checked = false;
			} else {
				item5Sprite5.setFrame(1);
				this.item5Var5Checked = true;

				this.item5Var1Checked = false;
				this.item5Var2Checked = false;
				this.item5Var3Checked = false;
				this.item5Var4Checked = false;
				this.item5Var6Checked = false;
				item5Sprite1.setFrame(0);
				item5Sprite2.setFrame(0);
				item5Sprite3.setFrame(0);
				item5Sprite4.setFrame(0);
				item5Sprite6.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.66, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var item5Sprite6 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.725, 'checkbox', 0).setScale(0.4).setInteractive();

		item5Sprite6.on('pointerdown', function (pointer) {
			if (this.item5Var6Checked) {
				item5Sprite6.setFrame(0);
				this.item5Var6Checked = false;
			} else {
				item5Sprite6.setFrame(1);
				this.item5Var6Checked = true;

				this.item5Var1Checked = false;
				this.item5Var2Checked = false;
				this.item5Var3Checked = false;
				this.item5Var4Checked = false;
				this.item5Var5Checked = false;
				item5Sprite1.setFrame(0);
				item5Sprite2.setFrame(0);
				item5Sprite3.setFrame(0);
				item5Sprite4.setFrame(0);
				item5Sprite5.setFrame(0);

			}
		}.bind(this));

		// instatiate and add new end scene with current data
		var questionnaireScene3 = undefined;

		// add button to request feedback
		var buttonContinue = this.add.image(0, 0, 'buttonFeed').setScale(0.4)
			.setInteractive()
			.on('pointerdown', () => this.onBtnContinue());

		var textContinue = this.add.text(-50, -15, 'Continue!', { fontSize: '18px', color: '#ffffff' })
		var buttonContainer = this.add.container(window.innerWidth * 0.92, window.innerHeight * 0.76, [buttonContinue, textContinue])

	}

	logAnswers() {
		this.gameData.api.logQuestionnaire(2, this.item3Var1Checked, this.item3Var2Checked, this.item3Var3Checked, this.item3Var4Checked, this.item3Var5Checked, this.item3Var6Checked);
		this.gameData.api.logQuestionnaire(3, this.item4Var1Checked, this.item4Var2Checked, this.item4Var3Checked, this.item4Var4Checked, this.item4Var5Checked, this.item4Var6Checked);
		this.gameData.api.logQuestionnaire(4, this.item5Var1Checked, this.item5Var2Checked, this.item5Var3Checked, this.item5Var4Checked, this.item5Var5Checked, this.item5Var6Checked);
	}

	onBtnContinue() {
		if ([this.item3Var1Checked, this.item3Var2Checked, this.item3Var3Checked, this.item3Var4Checked, this.item3Var5Checked, this.item3Var6Checked].every(a => a == false) ||
			[this.item4Var1Checked, this.item4Var2Checked, this.item4Var3Checked, this.item4Var4Checked, this.item4Var5Checked, this.item4Var6Checked].every(a => a == false) ||
			[this.item5Var1Checked, this.item5Var2Checked, this.item5Var3Checked, this.item5Var4Checked, this.item5Var5Checked, this.item5Var6Checked].every(a => a == false)) {
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

			var questionnaireScene3 = new QuestionnaireScene3(this.gameData);
			this.scene.remove('questionnaireScene3', questionnaireScene3);
			this.scene.add('questionnaireScene3', questionnaireScene3);
			this.scene.start('questionnaireScene3');
		}
	}

	update() { }

}

export default QuestionnaireScene2;
