import EndScene from './endScene.js';

class QuestionnaireScene8 extends Phaser.Scene {

	constructor(gameData) {
		super({ key: 'questionnaireScene8' });
		this.gameData = gameData;

		this.itemGenderVar1Checked = false;
		this.itemGenderVar2Checked = false;
		this.itemGenderVar3Checked = false;
		this.itemGenderVar4Checked = false;
		this.itemGenderVar5Checked = false;
		this.itemGenderVar6Checked = false;
		this.itemGenderVar7Checked = false;

		this.itemAgeVar1Checked = false;
		this.itemAgeVar2Checked = false;
		this.itemAgeVar3Checked = false;
		this.itemAgeVar4Checked = false;
		this.itemAgeVar5Checked = false;
		this.itemAgeVar6Checked = false;
		this.itemAgeVar7Checked = false;

		// this.itemEduVar1Checked = false;
		// this.itemEduVar2Checked = false;
		// this.itemEduVar3Checked = false;
		// this.itemEduVar4Checked = false;
		// this.itemEduVar5Checked = false;
		// this.itemEduVar6Checked = false;
		// this.itemEduVar7Checked = false;

		// this.itemBackVar1Checked = false;
		// this.itemBackVar2Checked = false;
		// this.itemBackVar3Checked = false;
		// this.itemBackVar4Checked = false;
		// this.itemBackVar5Checked = false;
		// this.itemBackVar6Checked = false;
		// this.itemBackVar7Checked = false;

		// this.itemRegVar1Checked = false;
		// this.itemRegVar2Checked = false;
		// this.itemRegVar3Checked = false;
		// this.itemRegVar4Checked = false;
		// this.itemRegVar5Checked = false;
		// this.itemRegVar6Checked = false;
		// this.itemRegVar7Checked = false;

		this.itemEngVar1Checked = false;
		this.itemEngVar2Checked = false;
		this.itemEngVar3Checked = false;
		this.itemEngVar4Checked = false;
		this.itemEngVar5Checked = false;
		this.itemEngVar6Checked = false;
		this.itemEngVar7Checked = false;

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

		var demographics = [
			'To finish up, we would like to collect some demographic information.',,
		]

		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.03, demographics, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemGender = [
			"Which term most accurately describes your gender?"
		]

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.15, itemGender, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.20, 'Female', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemGenderSprite1 = this.add.sprite(window.innerWidth * 0.04, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.4).setInteractive();

		itemGenderSprite1.on('pointerdown', function (pointer) {
			if (this.itemGenderVar1Checked) {
				itemGenderSprite1.setFrame(0);
				this.itemGenderVar1Checked = false;
			} else {
				itemGenderSprite1.setFrame(1);
				this.itemGenderVar1Checked = true;

				this.itemGenderVar2Checked = false;
				this.itemGenderVar3Checked = false;
				this.itemGenderVar4Checked = false;
				this.itemGenderVar5Checked = false;
				this.itemGenderVar6Checked = false;
				// this.itemGenderVar7Checked = false;
				itemGenderSprite2.setFrame(0);
				itemGenderSprite3.setFrame(0);
				itemGenderSprite4.setFrame(0);
				itemGenderSprite5.setFrame(0);
				itemGenderSprite6.setFrame(0);
				// itemGenderSprite7.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.150, window.innerHeight * 0.20, 'Male', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemGenderSprite2 = this.add.sprite(window.innerWidth * 0.16, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.4).setInteractive();

		itemGenderSprite2.on('pointerdown', function (pointer) {
			if (this.itemGenderVar2Checked) {
				itemGenderSprite2.setFrame(0);
				this.itemGenderVar2Checked = false;
			} else {
				itemGenderSprite2.setFrame(1);
				this.itemGenderVar2Checked = true;

				this.itemGenderVar1Checked = false;
				this.itemGenderVar3Checked = false;
				this.itemGenderVar4Checked = false;
				this.itemGenderVar5Checked = false;
				this.itemGenderVar6Checked = false;
				// this.itemGenderVar7Checked = false;
				itemGenderSprite1.setFrame(0);
				itemGenderSprite3.setFrame(0);
				itemGenderSprite4.setFrame(0);
				itemGenderSprite5.setFrame(0);
				itemGenderSprite6.setFrame(0);
				// itemGenderSprite7.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.265, window.innerHeight * 0.20, 'Transgender', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemGenderSprite3 = this.add.sprite(window.innerWidth * 0.31, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.4).setInteractive();

		itemGenderSprite3.on('pointerdown', function (pointer) {
			if (this.itemGenderVar3Checked) {
				itemGenderSprite3.setFrame(0);
				this.itemGenderVar3Checked = false;
			} else {
				itemGenderSprite3.setFrame(1);
				this.itemGenderVar3Checked = true;

				this.itemGenderVar1Checked = false;
				this.itemGenderVar2Checked = false;
				this.itemGenderVar4Checked = false;
				this.itemGenderVar5Checked = false;
				this.itemGenderVar6Checked = false;
				// this.itemGenderVar7Checked = false;
				itemGenderSprite1.setFrame(0);
				itemGenderSprite2.setFrame(0);
				itemGenderSprite4.setFrame(0);
				itemGenderSprite5.setFrame(0);
				itemGenderSprite6.setFrame(0);
				// itemGenderSprite7.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.385, window.innerHeight * 0.20, 'Non-binary', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemGenderSprite4 = this.add.sprite(window.innerWidth * 0.44, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.4).setInteractive();

		itemGenderSprite4.on('pointerdown', function (pointer) {
			if (this.itemGenderVar4Checked) {
				itemGenderSprite4.setFrame(0);
				this.itemGenderVar4Checked = false;
			} else {
				itemGenderSprite4.setFrame(1);
				this.itemGenderVar4Checked = true;

				this.itemGenderVar1Checked = false;
				this.itemGenderVar2Checked = false;
				this.itemGenderVar3Checked = false;
				this.itemGenderVar5Checked = false;
				this.itemGenderVar6Checked = false;
				// this.itemGenderVar7Checked = false;
				itemGenderSprite1.setFrame(0);
				itemGenderSprite2.setFrame(0);
				itemGenderSprite3.setFrame(0);
				itemGenderSprite5.setFrame(0);
				itemGenderSprite6.setFrame(0);
				// itemGenderSprite7.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.505, window.innerHeight * 0.20, 'Not listed', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemGenderSprite5 = this.add.sprite(window.innerWidth * 0.56, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.4).setInteractive();

		itemGenderSprite5.on('pointerdown', function (pointer) {
			if (this.itemGenderVar5Checked) {
				itemGenderSprite5.setFrame(0);
				this.itemGenderVar5Checked = false;
			} else {
				itemGenderSprite5.setFrame(1);
				this.itemGenderVar5Checked = true;

				this.itemGenderVar1Checked = false;
				this.itemGenderVar2Checked = false;
				this.itemGenderVar3Checked = false;
				this.itemGenderVar4Checked = false;
				this.itemGenderVar6Checked = false;
				// this.itemGenderVar7Checked = false;
				itemGenderSprite1.setFrame(0);
				itemGenderSprite2.setFrame(0);
				itemGenderSprite3.setFrame(0);
				itemGenderSprite4.setFrame(0);
				itemGenderSprite6.setFrame(0);
				// itemGenderSprite7.setFrame(0);

			}
		}.bind(this));

		// option 6
		this.add.text(window.innerWidth * 0.65, window.innerHeight * 0.20, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemGenderSprite6 = this.add.sprite(window.innerWidth * 0.67, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.4).setInteractive();

		itemGenderSprite6.on('pointerdown', function (pointer) {
			if (this.itemGenderVar6Checked) {
				itemGenderSprite6.setFrame(0);
				this.itemGenderVar6Checked = false;
			} else {
				itemGenderSprite6.setFrame(1);
				this.itemGenderVar6Checked = true;

				this.itemGenderVar1Checked = false;
				this.itemGenderVar2Checked = false;
				this.itemGenderVar3Checked = false;
				this.itemGenderVar4Checked = false;
				this.itemGenderVar5Checked = false;
				// this.itemGenderVar7Checked = false;
				itemGenderSprite1.setFrame(0);
				itemGenderSprite2.setFrame(0);
				itemGenderSprite3.setFrame(0);
				itemGenderSprite4.setFrame(0);
				itemGenderSprite5.setFrame(0);
				// itemGenderSprite7.setFrame(0);

			}
		}.bind(this));

		// // Don't know
		// this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.20, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemGenderSprite7 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.25, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemGenderSprite7.on('pointerdown', function (pointer) {
		// 	if (this.itemGenderVar7Checked) {
		// 		itemGenderSprite7.setFrame(0);
		// 		this.itemGenderVar7Checked = false;
		// 	} else {
		// 		itemGenderSprite7.setFrame(1);
		// 		this.itemGenderVar7Checked = true;

		// 		this.itemGenderVar1Checked = false;
		// 		this.itemGenderVar2Checked = false;
		// 		this.itemGenderVar3Checked = false;
		// 		this.itemGenderVar4Checked = false;
		// 		this.itemGenderVar5Checked = false;
		// 		this.itemGenderVar6Checked = false;
		// 		itemGenderSprite1.setFrame(0);
		// 		itemGenderSprite2.setFrame(0);
		// 		itemGenderSprite3.setFrame(0);
		// 		itemGenderSprite4.setFrame(0);
		// 		itemGenderSprite5.setFrame(0);
		// 		itemGenderSprite6.setFrame(0);

		// 	}
		// }.bind(this));

		var itemAge = [
			"Please indicate your age:"
		]

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.35, itemAge, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.40, '18-24y', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemAgeSprite1 = this.add.sprite(window.innerWidth * 0.04, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.4).setInteractive();

		itemAgeSprite1.on('pointerdown', function (pointer) {
			if (this.itemAgeVar1Checked) {
				itemAgeSprite1.setFrame(0);
				this.itemAgeVar1Checked = false;
			} else {
				itemAgeSprite1.setFrame(1);
				this.itemAgeVar1Checked = true;

				this.itemAgeVar2Checked = false;
				this.itemAgeVar3Checked = false;
				this.itemAgeVar4Checked = false;
				this.itemAgeVar5Checked = false;
				this.itemAgeVar6Checked = false;
				this.itemAgeVar7Checked = false;
				itemAgeSprite2.setFrame(0);
				itemAgeSprite3.setFrame(0);
				itemAgeSprite4.setFrame(0);
				itemAgeSprite5.setFrame(0);
				itemAgeSprite6.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.125, window.innerHeight * 0.40, '25-34y', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemAgeSprite2 = this.add.sprite(window.innerWidth * 0.14, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.4).setInteractive();

		itemAgeSprite2.on('pointerdown', function (pointer) {
			if (this.itemAgeVar2Checked) {
				itemAgeSprite2.setFrame(0);
				this.itemAgeVar2Checked = false;
			} else {
				itemAgeSprite2.setFrame(1);
				this.itemAgeVar2Checked = true;

				this.itemAgeVar1Checked = false;
				this.itemAgeVar3Checked = false;
				this.itemAgeVar4Checked = false;
				this.itemAgeVar5Checked = false;
				this.itemAgeVar6Checked = false;
				this.itemAgeVar7Checked = false;
				itemAgeSprite1.setFrame(0);
				itemAgeSprite3.setFrame(0);
				itemAgeSprite4.setFrame(0);
				itemAgeSprite5.setFrame(0);
				itemAgeSprite6.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.225, window.innerHeight * 0.40, '35-44y', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemAgeSprite3 = this.add.sprite(window.innerWidth * 0.24, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.4).setInteractive();

		itemAgeSprite3.on('pointerdown', function (pointer) {
			if (this.itemAgeVar3Checked) {
				itemAgeSprite3.setFrame(0);
				this.itemAgeVar3Checked = false;
			} else {
				itemAgeSprite3.setFrame(1);
				this.itemAgeVar3Checked = true;

				this.itemAgeVar1Checked = false;
				this.itemAgeVar2Checked = false;
				this.itemAgeVar4Checked = false;
				this.itemAgeVar5Checked = false;
				this.itemAgeVar6Checked = false;
				this.itemAgeVar7Checked = false;
				itemAgeSprite1.setFrame(0);
				itemAgeSprite2.setFrame(0);
				itemAgeSprite4.setFrame(0);
				itemAgeSprite5.setFrame(0);
				itemAgeSprite6.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.325, window.innerHeight * 0.40, '45-54y', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemAgeSprite4 = this.add.sprite(window.innerWidth * 0.34, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.4).setInteractive();

		itemAgeSprite4.on('pointerdown', function (pointer) {
			if (this.itemAgeVar4Checked) {
				itemAgeSprite4.setFrame(0);
				this.itemAgeVar4Checked = false;
			} else {
				itemAgeSprite4.setFrame(1);
				this.itemAgeVar4Checked = true;

				this.itemAgeVar1Checked = false;
				this.itemAgeVar2Checked = false;
				this.itemAgeVar3Checked = false;
				this.itemAgeVar5Checked = false;
				this.itemAgeVar6Checked = false;
				this.itemAgeVar6Checked = false;
				this.itemAgeVar7Checked = false;
				itemAgeSprite1.setFrame(0);
				itemAgeSprite2.setFrame(0);
				itemAgeSprite3.setFrame(0);
				itemAgeSprite5.setFrame(0);
				itemAgeSprite6.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.425, window.innerHeight * 0.40, '55-64y', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemAgeSprite5 = this.add.sprite(window.innerWidth * 0.44, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.4).setInteractive();

		itemAgeSprite5.on('pointerdown', function (pointer) {
			if (this.itemAgeVar5Checked) {
				itemAgeSprite5.setFrame(0);
				this.itemAgeVar5Checked = false;
			} else {
				itemAgeSprite5.setFrame(1);
				this.itemAgeVar5Checked = true;

				this.itemAgeVar1Checked = false;
				this.itemAgeVar2Checked = false;
				this.itemAgeVar3Checked = false;
				this.itemAgeVar4Checked = false;
				this.itemAgeVar6Checked = false;
				this.itemAgeVar7Checked = false;
				itemAgeSprite1.setFrame(0);
				itemAgeSprite2.setFrame(0);
				itemAgeSprite3.setFrame(0);
				itemAgeSprite4.setFrame(0);
				itemAgeSprite6.setFrame(0);

			}
		}.bind(this));

		// option 6
		this.add.text(window.innerWidth * 0.525, window.innerHeight * 0.40, '65y and over', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemAgeSprite6 = this.add.sprite(window.innerWidth * 0.54, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.4).setInteractive();

		itemAgeSprite6.on('pointerdown', function (pointer) {
			if (this.itemAgeVar6Checked) {
				itemAgeSprite6.setFrame(0);
				this.itemAgeVar6Checked = false;
			} else {
				itemAgeSprite6.setFrame(1);
				this.itemAgeVar6Checked = true;

				this.itemAgeVar1Checked = false;
				this.itemAgeVar2Checked = false;
				this.itemAgeVar3Checked = false;
				this.itemAgeVar4Checked = false;
				this.itemAgeVar5Checked = false;
				this.itemAgeVar7Checked = false;
				itemAgeSprite1.setFrame(0);
				itemAgeSprite2.setFrame(0);
				itemAgeSprite3.setFrame(0);
				itemAgeSprite4.setFrame(0);
				itemAgeSprite5.setFrame(0);
				itemAgeSprite7.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.625, window.innerHeight * 0.40, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemAgeSprite7 = this.add.sprite(window.innerWidth * 0.64, window.innerHeight * 0.45, 'checkbox', 0).setScale(0.4).setInteractive();

		itemAgeSprite7.on('pointerdown', function (pointer) {
			if (this.itemAgeVar7Checked) {
				itemAgeSprite7.setFrame(0);
				this.itemAgeVar7Checked = false;
			} else {
				itemAgeSprite7.setFrame(1);
				this.itemAgeVar7Checked = true;

				this.itemAgeVar1Checked = false;
				this.itemAgeVar2Checked = false;
				this.itemAgeVar3Checked = false;
				this.itemAgeVar4Checked = false;
				this.itemAgeVar5Checked = false;
				this.itemAgeVar6Checked = false;
				itemAgeSprite1.setFrame(0);
				itemAgeSprite2.setFrame(0);
				itemAgeSprite3.setFrame(0);
				itemAgeSprite4.setFrame(0);
				itemAgeSprite5.setFrame(0);
				itemAgeSprite6.setFrame(0);

			}
		}.bind(this));


		// var itemEdu = [
		// 	"What is your education level?"
		// ]

		// // add item 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.33, itemEdu, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// // option 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.37, 'Secondary', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemEduSprite1 = this.add.sprite(window.innerWidth * 0.04, window.innerHeight * 0.41, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemEduSprite1.on('pointerdown', function (pointer) {
		// 	if (this.itemEduVar1Checked) {
		// 		itemEduSprite1.setFrame(0);
		// 		this.itemEduVar1Checked = false;
		// 	} else {
		// 		itemEduSprite1.setFrame(1);
		// 		this.itemEduVar1Checked = true;

		// 		this.itemEduVar2Checked = false;
		// 		this.itemEduVar3Checked = false;
		// 		this.itemEduVar4Checked = false;
		// 		this.itemEduVar5Checked = false;
		// 		this.itemEduVar6Checked = false;
		// 		this.itemEduVar7Checked = false;
		// 		itemEduSprite2.setFrame(0);
		// 		itemEduSprite3.setFrame(0);
		// 		itemEduSprite4.setFrame(0);
		// 		itemEduSprite5.setFrame(0);
		// 		itemEduSprite6.setFrame(0);
		// 		itemEduSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 2
		// this.add.text(window.innerWidth * 0.150, window.innerHeight * 0.37, 'Upper-Secondary', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemEduSprite2 = this.add.sprite(window.innerWidth * 0.16, window.innerHeight * 0.41, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemEduSprite2.on('pointerdown', function (pointer) {
		// 	if (this.itemEduVar2Checked) {
		// 		itemEduSprite2.setFrame(0);
		// 		this.itemEduVar2Checked = false;
		// 	} else {
		// 		itemEduSprite2.setFrame(1);
		// 		this.itemEduVar2Checked = true;

		// 		this.itemEduVar1Checked = false;
		// 		this.itemEduVar3Checked = false;
		// 		this.itemEduVar4Checked = false;
		// 		this.itemEduVar5Checked = false;
		// 		this.itemEduVar6Checked = false;
		// 		this.itemEduVar7Checked = false;
		// 		itemEduSprite1.setFrame(0);
		// 		itemEduSprite3.setFrame(0);
		// 		itemEduSprite4.setFrame(0);
		// 		itemEduSprite5.setFrame(0);
		// 		itemEduSprite6.setFrame(0);
		// 		itemEduSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 3
		// this.add.text(window.innerWidth * 0.265, window.innerHeight * 0.37, 'Short-cycle Tertiary', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemEduSprite3 = this.add.sprite(window.innerWidth * 0.29, window.innerHeight * 0.41, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemEduSprite3.on('pointerdown', function (pointer) {
		// 	if (this.itemEduVar3Checked) {
		// 		itemEduSprite3.setFrame(0);
		// 		this.itemEduVar3Checked = false;
		// 	} else {
		// 		itemEduSprite3.setFrame(1);
		// 		this.itemEduVar3Checked = true;

		// 		this.itemEduVar1Checked = false;
		// 		this.itemEduVar2Checked = false;
		// 		this.itemEduVar4Checked = false;
		// 		this.itemEduVar5Checked = false;
		// 		this.itemEduVar6Checked = false;
		// 		this.itemEduVar7Checked = false;
		// 		itemEduSprite1.setFrame(0);
		// 		itemEduSprite2.setFrame(0);
		// 		itemEduSprite4.setFrame(0);
		// 		itemEduSprite5.setFrame(0);
		// 		itemEduSprite6.setFrame(0);
		// 		itemEduSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 4
		// this.add.text(window.innerWidth * 0.385, window.innerHeight * 0.37, 'Bachelors(B.A.,B.S.)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemEduSprite4 = this.add.sprite(window.innerWidth * 0.42, window.innerHeight * 0.41, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemEduSprite4.on('pointerdown', function (pointer) {
		// 	if (this.itemEduVar4Checked) {
		// 		itemEduSprite4.setFrame(0);
		// 		this.itemEduVar4Checked = false;
		// 	} else {
		// 		itemEduSprite4.setFrame(1);
		// 		this.itemEduVar4Checked = true;

		// 		this.itemEduVar1Checked = false;
		// 		this.itemEduVar2Checked = false;
		// 		this.itemEduVar3Checked = false;
		// 		this.itemEduVar5Checked = false;
		// 		this.itemEduVar6Checked = false;
		// 		this.itemEduVar7Checked = false;
		// 		itemEduSprite1.setFrame(0);
		// 		itemEduSprite2.setFrame(0);
		// 		itemEduSprite3.setFrame(0);
		// 		itemEduSprite5.setFrame(0);
		// 		itemEduSprite6.setFrame(0);
		// 		itemEduSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 5
		// this.add.text(window.innerWidth * 0.505, window.innerHeight * 0.37, 'Masters(M.A., M.S.)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemEduSprite5 = this.add.sprite(window.innerWidth * 0.54, window.innerHeight * 0.41, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemEduSprite5.on('pointerdown', function (pointer) {
		// 	if (this.itemEduVar5Checked) {
		// 		itemEduSprite5.setFrame(0);
		// 		this.itemEduVar5Checked = false;
		// 	} else {
		// 		itemEduSprite5.setFrame(1);
		// 		this.itemEduVar5Checked = true;

		// 		this.itemEduVar1Checked = false;
		// 		this.itemEduVar2Checked = false;
		// 		this.itemEduVar3Checked = false;
		// 		this.itemEduVar4Checked = false;
		// 		this.itemEduVar6Checked = false;
		// 		this.itemEduVar7Checked = false;
		// 		itemEduSprite1.setFrame(0);
		// 		itemEduSprite2.setFrame(0);
		// 		itemEduSprite3.setFrame(0);
		// 		itemEduSprite4.setFrame(0);
		// 		itemEduSprite6.setFrame(0);
		// 		itemEduSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 6
		// this.add.text(window.innerWidth * 0.65, window.innerHeight * 0.37, 'Doctorate(Ph.D.)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemEduSprite6 = this.add.sprite(window.innerWidth * 0.67, window.innerHeight * 0.41, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemEduSprite6.on('pointerdown', function (pointer) {
		// 	if (this.itemEduVar6Checked) {
		// 		itemEduSprite6.setFrame(0);
		// 		this.itemEduVar6Checked = false;
		// 	} else {
		// 		itemEduSprite6.setFrame(1);
		// 		this.itemEduVar6Checked = true;

		// 		this.itemEduVar1Checked = false;
		// 		this.itemEduVar2Checked = false;
		// 		this.itemEduVar3Checked = false;
		// 		this.itemEduVar4Checked = false;
		// 		this.itemEduVar5Checked = false;
		// 		this.itemEduVar7Checked = false;
		// 		itemEduSprite1.setFrame(0);
		// 		itemEduSprite2.setFrame(0);
		// 		itemEduSprite3.setFrame(0);
		// 		itemEduSprite4.setFrame(0);
		// 		itemEduSprite5.setFrame(0);
		// 		itemEduSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // Don't know
		// this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.37, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemEduSprite7 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.41, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemEduSprite7.on('pointerdown', function (pointer) {
		// 	if (this.itemEduVar7Checked) {
		// 		itemEduSprite7.setFrame(0);
		// 		this.itemEduVar7Checked = false;
		// 	} else {
		// 		itemEduSprite7.setFrame(1);
		// 		this.itemEduVar7Checked = true;

		// 		this.itemEduVar1Checked = false;
		// 		this.itemEduVar2Checked = false;
		// 		this.itemEduVar3Checked = false;
		// 		this.itemEduVar4Checked = false;
		// 		this.itemEduVar5Checked = false;
		// 		this.itemEduVar6Checked = false;
		// 		itemEduSprite1.setFrame(0);
		// 		itemEduSprite2.setFrame(0);
		// 		itemEduSprite3.setFrame(0);
		// 		itemEduSprite4.setFrame(0);
		// 		itemEduSprite5.setFrame(0);
		// 		itemEduSprite6.setFrame(0);

		// 	}
		// }.bind(this));

		// var itemBack = [
		// 	"What is your education background (broad discipline)?"
		// ]

		// // add item 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.46, itemBack, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// // option 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.5, 'Science', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemBackSprite1 = this.add.sprite(window.innerWidth * 0.04, window.innerHeight * 0.54, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemBackSprite1.on('pointerdown', function (pointer) {
		// 	if (this.itemBackVar1Checked) {
		// 		itemBackSprite1.setFrame(0);
		// 		this.itemEduVar1Checked = false;
		// 	} else {
		// 		itemBackSprite1.setFrame(1);
		// 		this.itemBackVar1Checked = true;

		// 		this.itemBackVar2Checked = false;
		// 		this.itemBackVar3Checked = false;
		// 		this.itemBackVar4Checked = false;
		// 		this.itemBackVar5Checked = false;
		// 		this.itemBackVar6Checked = false;
		// 		this.itemBackVar7Checked = false;
		// 		itemBackSprite2.setFrame(0);
		// 		itemBackSprite3.setFrame(0);
		// 		itemBackSprite4.setFrame(0);
		// 		itemBackSprite5.setFrame(0);
		// 		itemBackSprite6.setFrame(0);
		// 		itemBackSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 2
		// this.add.text(window.innerWidth * 0.150, window.innerHeight * 0.5, 'Technology', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemBackSprite2 = this.add.sprite(window.innerWidth * 0.16, window.innerHeight * 0.54, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemBackSprite2.on('pointerdown', function (pointer) {
		// 	if (this.itemBackVar2Checked) {
		// 		itemBackSprite2.setFrame(0);
		// 		this.itemBackVar2Checked = false;
		// 	} else {
		// 		itemBackSprite2.setFrame(1);
		// 		this.itemBackVar2Checked = true;

		// 		this.itemBackVar1Checked = false;
		// 		this.itemBackVar3Checked = false;
		// 		this.itemBackVar4Checked = false;
		// 		this.itemBackVar5Checked = false;
		// 		this.itemBackVar6Checked = false;
		// 		this.itemBackVar7Checked = false;
		// 		itemBackSprite1.setFrame(0);
		// 		itemBackSprite3.setFrame(0);
		// 		itemBackSprite4.setFrame(0);
		// 		itemBackSprite5.setFrame(0);
		// 		itemBackSprite6.setFrame(0);
		// 		itemBackSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 3
		// this.add.text(window.innerWidth * 0.265, window.innerHeight * 0.5, 'Engineering', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemBackSprite3 = this.add.sprite(window.innerWidth * 0.29, window.innerHeight * 0.54, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemBackSprite3.on('pointerdown', function (pointer) {
		// 	if (this.itemBackVar3Checked) {
		// 		itemBackSprite3.setFrame(0);
		// 		this.itemBackVar3Checked = false;
		// 	} else {
		// 		itemBackSprite3.setFrame(1);
		// 		this.itemBackVar3Checked = true;

		// 		this.itemBackVar1Checked = false;
		// 		this.itemBackVar2Checked = false;
		// 		this.itemBackVar4Checked = false;
		// 		this.itemBackVar5Checked = false;
		// 		this.itemBackVar6Checked = false;
		// 		this.itemBackVar7Checked = false;
		// 		itemBackSprite1.setFrame(0);
		// 		itemBackSprite2.setFrame(0);
		// 		itemBackSprite4.setFrame(0);
		// 		itemBackSprite5.setFrame(0);
		// 		itemBackSprite6.setFrame(0);
		// 		itemBackSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 4
		// this.add.text(window.innerWidth * 0.385, window.innerHeight * 0.5, 'Arts', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemBackSprite4 = this.add.sprite(window.innerWidth * 0.4, window.innerHeight * 0.54, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemBackSprite4.on('pointerdown', function (pointer) {
		// 	if (this.itemBackVar4Checked) {
		// 		itemBackSprite4.setFrame(0);
		// 		this.itemBackVar4Checked = false;
		// 	} else {
		// 		itemBackSprite4.setFrame(1);
		// 		this.itemBackVar4Checked = true;

		// 		this.itemBackVar1Checked = false;
		// 		this.itemBackVar2Checked = false;
		// 		this.itemBackVar3Checked = false;
		// 		this.itemBackVar5Checked = false;
		// 		this.itemBackVar6Checked = false;
		// 		this.itemBackVar7Checked = false;
		// 		itemBackSprite1.setFrame(0);
		// 		itemBackSprite2.setFrame(0);
		// 		itemBackSprite3.setFrame(0);
		// 		itemBackSprite5.setFrame(0);
		// 		itemBackSprite6.setFrame(0);
		// 		itemBackSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 5
		// this.add.text(window.innerWidth * 0.505, window.innerHeight * 0.5, 'Social sciences', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemBackSprite5 = this.add.sprite(window.innerWidth * 0.54, window.innerHeight * 0.54, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemBackSprite5.on('pointerdown', function (pointer) {
		// 	if (this.itemBackVar5Checked) {
		// 		itemBackSprite5.setFrame(0);
		// 		this.itemBackVar5Checked = false;
		// 	} else {
		// 		itemBackSprite5.setFrame(1);
		// 		this.itemBackVar5Checked = true;

		// 		this.itemBackVar1Checked = false;
		// 		this.itemBackVar2Checked = false;
		// 		this.itemBackVar3Checked = false;
		// 		this.itemBackVar4Checked = false;
		// 		this.itemBackVar6Checked = false;
		// 		this.itemBackVar7Checked = false;
		// 		itemBackSprite1.setFrame(0);
		// 		itemBackSprite2.setFrame(0);
		// 		itemBackSprite3.setFrame(0);
		// 		itemBackSprite4.setFrame(0);
		// 		itemBackSprite6.setFrame(0);
		// 		itemBackSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 6
		// this.add.text(window.innerWidth * 0.65, window.innerHeight * 0.5, 'Humanities', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemBackSprite6 = this.add.sprite(window.innerWidth * 0.67, window.innerHeight * 0.54, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemBackSprite6.on('pointerdown', function (pointer) {
		// 	if (this.itemBackVar6Checked) {
		// 		itemBackSprite6.setFrame(0);
		// 		this.itemBackVar6Checked = false;
		// 	} else {
		// 		itemBackSprite6.setFrame(1);
		// 		this.itemBackVar6Checked = true;

		// 		this.itemBackVar1Checked = false;
		// 		this.itemBackVar2Checked = false;
		// 		this.itemBackVar3Checked = false;
		// 		this.itemBackVar4Checked = false;
		// 		this.itemBackVar5Checked = false;
		// 		this.itemBackVar7Checked = false;
		// 		itemBackSprite1.setFrame(0);
		// 		itemBackSprite2.setFrame(0);
		// 		itemBackSprite3.setFrame(0);
		// 		itemBackSprite4.setFrame(0);
		// 		itemBackSprite5.setFrame(0);
		// 		itemBackSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // Don't know
		// this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.5, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemBackSprite7 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.54, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemBackSprite7.on('pointerdown', function (pointer) {
		// 	if (this.itemBackVar7Checked) {
		// 		itemBackSprite7.setFrame(0);
		// 		this.itemBackVar7Checked = false;
		// 	} else {
		// 		itemBackSprite7.setFrame(1);
		// 		this.itemBackVar7Checked = true;

		// 		this.itemBackVar1Checked = false;
		// 		this.itemBackVar2Checked = false;
		// 		this.itemBackVar3Checked = false;
		// 		this.itemBackVar4Checked = false;
		// 		this.itemBackVar5Checked = false;
		// 		this.itemBackVar6Checked = false;
		// 		itemBackSprite1.setFrame(0);
		// 		itemBackSprite2.setFrame(0);
		// 		itemBackSprite3.setFrame(0);
		// 		itemBackSprite4.setFrame(0);
		// 		itemBackSprite5.setFrame(0);
		// 		itemBackSprite6.setFrame(0);

		// 	}
		// }.bind(this));

		// var itemReg = [
		// 	"What is your geographical region?"
		// ]

		// // add item 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.59, itemReg, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// // option 1
		// this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.63, 'Europe (EU)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemRegSprite1 = this.add.sprite(window.innerWidth * 0.04, window.innerHeight * 0.67, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemRegSprite1.on('pointerdown', function (pointer) {
		// 	if (this.itemRegVar1Checked) {
		// 		itemRegSprite1.setFrame(0);
		// 		this.itemRegVar1Checked = false;
		// 	} else {
		// 		itemRegSprite1.setFrame(1);
		// 		this.itemRegVar1Checked = true;

		// 		this.itemRegVar2Checked = false;
		// 		this.itemRegVar3Checked = false;
		// 		this.itemRegVar4Checked = false;
		// 		this.itemRegVar5Checked = false;
		// 		this.itemRegVar6Checked = false;
		// 		this.itemRegVar7Checked = false;
		// 		itemRegSprite2.setFrame(0);
		// 		itemRegSprite3.setFrame(0);
		// 		itemRegSprite4.setFrame(0);
		// 		itemRegSprite5.setFrame(0);
		// 		itemRegSprite6.setFrame(0);
		// 		itemRegSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 2
		// this.add.text(window.innerWidth * 0.150, window.innerHeight * 0.63, 'United Kingdom', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemRegSprite2 = this.add.sprite(window.innerWidth * 0.16, window.innerHeight * 0.67, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemRegSprite2.on('pointerdown', function (pointer) {
		// 	if (this.itemRegVar2Checked) {
		// 		itemRegSprite2.setFrame(0);
		// 		this.itemRegVar2Checked = false;
		// 	} else {
		// 		itemRegSprite2.setFrame(1);
		// 		this.itemRegVar2Checked = true;

		// 		this.itemRegVar1Checked = false;
		// 		this.itemRegVar3Checked = false;
		// 		this.itemRegVar4Checked = false;
		// 		this.itemRegVar5Checked = false;
		// 		this.itemRegVar6Checked = false;
		// 		this.itemRegVar7Checked = false;
		// 		itemRegSprite1.setFrame(0);
		// 		itemRegSprite3.setFrame(0);
		// 		itemRegSprite4.setFrame(0);
		// 		itemRegSprite5.setFrame(0);
		// 		itemRegSprite6.setFrame(0);
		// 		itemRegSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 3
		// this.add.text(window.innerWidth * 0.265, window.innerHeight * 0.63, 'United States', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemRegSprite3 = this.add.sprite(window.innerWidth * 0.29, window.innerHeight * 0.67, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemRegSprite3.on('pointerdown', function (pointer) {
		// 	if (this.itemRegVar3Checked) {
		// 		itemRegSprite3.setFrame(0);
		// 		this.itemRegVar3Checked = false;
		// 	} else {
		// 		itemRegSprite3.setFrame(1);
		// 		this.itemRegVar3Checked = true;

		// 		this.itemRegVar1Checked = false;
		// 		this.itemRegVar2Checked = false;
		// 		this.itemRegVar4Checked = false;
		// 		this.itemRegVar5Checked = false;
		// 		this.itemRegVar6Checked = false;
		// 		this.itemRegVar7Checked = false;
		// 		itemRegSprite1.setFrame(0);
		// 		itemRegSprite2.setFrame(0);
		// 		itemRegSprite4.setFrame(0);
		// 		itemRegSprite5.setFrame(0);
		// 		itemRegSprite6.setFrame(0);
		// 		itemRegSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 4
		// this.add.text(window.innerWidth * 0.385, window.innerHeight * 0.63, 'China/Japan', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemRegSprite4 = this.add.sprite(window.innerWidth * 0.42, window.innerHeight * 0.67, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemRegSprite4.on('pointerdown', function (pointer) {
		// 	if (this.itemRegVar4Checked) {
		// 		itemRegSprite4.setFrame(0);
		// 		this.itemRegVar4Checked = false;
		// 	} else {
		// 		itemRegSprite4.setFrame(1);
		// 		this.itemRegVar4Checked = true;

		// 		this.itemRegVar1Checked = false;
		// 		this.itemRegVar2Checked = false;
		// 		this.itemRegVar3Checked = false;
		// 		this.itemRegVar5Checked = false;
		// 		this.itemRegVar6Checked = false;
		// 		this.itemRegVar7Checked = false;
		// 		itemRegSprite1.setFrame(0);
		// 		itemRegSprite2.setFrame(0);
		// 		itemRegSprite3.setFrame(0);
		// 		itemRegSprite5.setFrame(0);
		// 		itemRegSprite6.setFrame(0);
		// 		itemRegSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 5
		// this.add.text(window.innerWidth * 0.505, window.innerHeight * 0.63, 'South Asia', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemRegSprite5 = this.add.sprite(window.innerWidth * 0.54, window.innerHeight * 0.67, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemRegSprite5.on('pointerdown', function (pointer) {
		// 	if (this.itemRegVar5Checked) {
		// 		itemRegSprite5.setFrame(0);
		// 		this.itemRegVar5Checked = false;
		// 	} else {
		// 		itemRegSprite5.setFrame(1);
		// 		this.itemRegVar5Checked = true;

		// 		this.itemRegVar1Checked = false;
		// 		this.itemRegVar2Checked = false;
		// 		this.itemRegVar3Checked = false;
		// 		this.itemRegVar4Checked = false;
		// 		this.itemRegVar6Checked = false;
		// 		this.itemRegVar7Checked = false;
		// 		itemRegSprite1.setFrame(0);
		// 		itemRegSprite2.setFrame(0);
		// 		itemRegSprite3.setFrame(0);
		// 		itemRegSprite4.setFrame(0);
		// 		itemRegSprite6.setFrame(0);
		// 		itemRegSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // option 6
		// this.add.text(window.innerWidth * 0.65, window.innerHeight * 0.63, 'Middle-east', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemRegSprite6 = this.add.sprite(window.innerWidth * 0.67, window.innerHeight * 0.67, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemRegSprite6.on('pointerdown', function (pointer) {
		// 	if (this.itemRegVar6Checked) {
		// 		itemRegSprite6.setFrame(0);
		// 		this.itemRegVar6Checked = false;
		// 	} else {
		// 		itemRegSprite6.setFrame(1);
		// 		this.itemRegVar6Checked = true;

		// 		this.itemRegVar1Checked = false;
		// 		this.itemRegVar2Checked = false;
		// 		this.itemRegVar3Checked = false;
		// 		this.itemRegVar4Checked = false;
		// 		this.itemRegVar5Checked = false;
		// 		this.itemRegVar7Checked = false;
		// 		itemRegSprite1.setFrame(0);
		// 		itemRegSprite2.setFrame(0);
		// 		itemRegSprite3.setFrame(0);
		// 		itemRegSprite4.setFrame(0);
		// 		itemRegSprite5.setFrame(0);
		// 		itemRegSprite7.setFrame(0);

		// 	}
		// }.bind(this));

		// // Don't know
		// this.add.text(window.innerWidth * 0.755, window.innerHeight * 0.63, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// var itemRegSprite7 = this.add.sprite(window.innerWidth * 0.80, window.innerHeight * 0.67, 'checkbox', 0).setScale(0.4).setInteractive();

		// itemRegSprite7.on('pointerdown', function (pointer) {
		// 	if (this.itemRegVar7Checked) {
		// 		itemRegSprite7.setFrame(0);
		// 		this.itemRegVar7Checked = false;
		// 	} else {
		// 		itemRegSprite7.setFrame(1);
		// 		this.itemRegVar7Checked = true;

		// 		this.itemRegVar1Checked = false;
		// 		this.itemRegVar2Checked = false;
		// 		this.itemRegVar3Checked = false;
		// 		this.itemRegVar4Checked = false;
		// 		this.itemRegVar5Checked = false;
		// 		this.itemRegVar6Checked = false;
		// 		itemRegSprite1.setFrame(0);
		// 		itemRegSprite2.setFrame(0);
		// 		itemRegSprite3.setFrame(0);
		// 		itemRegSprite4.setFrame(0);
		// 		itemRegSprite5.setFrame(0);
		// 		itemRegSprite6.setFrame(0);

		// 	}
		// }.bind(this));

		var itemEng = [
			"What is your English language proficiency level?"]

		// add item 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.55, itemEng, { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		// option 1
		this.add.text(window.innerWidth * 0.025, window.innerHeight * 0.60, 'Beginner(A1)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemEngSprite1 = this.add.sprite(window.innerWidth * 0.04, window.innerHeight * 0.65, 'checkbox', 0).setScale(0.4).setInteractive();

		itemEngSprite1.on('pointerdown', function (pointer) {
			if (this.itemEngVar1Checked) {
				itemEngSprite1.setFrame(0);
				this.itemEngVar1Checked = false;
			} else {
				itemEngSprite1.setFrame(1);
				this.itemEngVar1Checked = true;

				this.itemEngVar2Checked = false;
				this.itemEngVar3Checked = false;
				this.itemEngVar4Checked = false;
				this.itemEngVar5Checked = false;
				this.itemEngVar6Checked = false;
				this.itemEngVar7Checked = false;
				itemEngSprite2.setFrame(0);
				itemEngSprite3.setFrame(0);
				itemEngSprite4.setFrame(0);
				itemEngSprite5.setFrame(0);
				itemEngSprite6.setFrame(0);
				itemEngSprite7.setFrame(0);

			}
		}.bind(this));

		// option 2
		this.add.text(window.innerWidth * 0.150, window.innerHeight * 0.60, 'Elementary(A2)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemEngSprite2 = this.add.sprite(window.innerWidth * 0.16, window.innerHeight * 0.65, 'checkbox', 0).setScale(0.4).setInteractive();

		itemEngSprite2.on('pointerdown', function (pointer) {
			if (this.itemEngVar2Checked) {
				itemEngSprite2.setFrame(0);
				this.itemEngVar2Checked = false;
			} else {
				itemEngSprite2.setFrame(1);
				this.itemEngVar2Checked = true;

				this.itemEngVar1Checked = false;
				this.itemEngVar3Checked = false;
				this.itemEngVar4Checked = false;
				this.itemEngVar5Checked = false;
				this.itemEngVar6Checked = false;
				this.itemEngVar7Checked = false;
				itemEngSprite1.setFrame(0);
				itemEngSprite3.setFrame(0);
				itemEngSprite4.setFrame(0);
				itemEngSprite5.setFrame(0);
				itemEngSprite6.setFrame(0);
				itemEngSprite7.setFrame(0);

			}
		}.bind(this));

		// option 3
		this.add.text(window.innerWidth * 0.265, window.innerHeight * 0.60, 'Intermediate(B1)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemEngSprite3 = this.add.sprite(window.innerWidth * 0.29, window.innerHeight * 0.65, 'checkbox', 0).setScale(0.4).setInteractive();

		itemEngSprite3.on('pointerdown', function (pointer) {
			if (this.itemEngVar3Checked) {
				itemEngSprite3.setFrame(0);
				this.itemEngVar3Checked = false;
			} else {
				itemEngSprite3.setFrame(1);
				this.itemEngVar3Checked = true;

				this.itemEngVar1Checked = false;
				this.itemEngVar2Checked = false;
				this.itemEngVar4Checked = false;
				this.itemEngVar5Checked = false;
				this.itemEngVar6Checked = false;
				this.itemEngVar7Checked = false;
				itemEngSprite1.setFrame(0);
				itemEngSprite2.setFrame(0);
				itemEngSprite4.setFrame(0);
				itemEngSprite5.setFrame(0);
				itemEngSprite6.setFrame(0);
				itemEngSprite7.setFrame(0);

			}
		}.bind(this));

		// option 4
		this.add.text(window.innerWidth * 0.385, window.innerHeight * 0.60, 'Upper-inter(B1)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemEngSprite4 = this.add.sprite(window.innerWidth * 0.42, window.innerHeight * 0.65, 'checkbox', 0).setScale(0.4).setInteractive();

		itemEngSprite4.on('pointerdown', function (pointer) {
			if (this.itemEngVar4Checked) {
				itemEngSprite4.setFrame(0);
				this.itemEngVar4Checked = false;
			} else {
				itemEngSprite4.setFrame(1);
				this.itemEngVar4Checked = true;

				this.itemEngVar1Checked = false;
				this.itemEngVar2Checked = false;
				this.itemEngVar3Checked = false;
				this.itemEngVar5Checked = false;
				this.itemEngVar6Checked = false;
				this.itemEngVar7Checked = false;
				itemEngSprite1.setFrame(0);
				itemEngSprite2.setFrame(0);
				itemEngSprite3.setFrame(0);
				itemEngSprite5.setFrame(0);
				itemEngSprite6.setFrame(0);
				itemEngSprite7.setFrame(0);

			}
		}.bind(this));

		// option 5
		this.add.text(window.innerWidth * 0.505, window.innerHeight * 0.60, 'Advanced(C1)', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemEngSprite5 = this.add.sprite(window.innerWidth * 0.54, window.innerHeight * 0.65, 'checkbox', 0).setScale(0.4).setInteractive();

		itemEngSprite5.on('pointerdown', function (pointer) {
			if (this.itemEngVar5Checked) {
				itemEngSprite5.setFrame(0);
				this.itemEngVar5Checked = false;
			} else {
				itemEngSprite5.setFrame(1);
				this.itemEngVar5Checked = true;

				this.itemEngVar1Checked = false;
				this.itemEngVar2Checked = false;
				this.itemEngVar3Checked = false;
				this.itemEngVar4Checked = false;
				this.itemEngVar6Checked = false;
				this.itemEngVar7Checked = false;
				itemEngSprite1.setFrame(0);
				itemEngSprite2.setFrame(0);
				itemEngSprite3.setFrame(0);
				itemEngSprite4.setFrame(0);
				itemEngSprite6.setFrame(0);
				itemEngSprite7.setFrame(0);

			}
		}.bind(this));

		// option 6
		this.add.text(window.innerWidth * 0.6, window.innerHeight * 0.60, 'Native', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemEngSprite6 = this.add.sprite(window.innerWidth * 0.63, window.innerHeight * 0.65, 'checkbox', 0).setScale(0.4).setInteractive();

		itemEngSprite6.on('pointerdown', function (pointer) {
			if (this.itemEngVar6Checked) {
				itemEngSprite6.setFrame(0);
				this.itemEngVar6Checked = false;
			} else {
				itemEngSprite6.setFrame(1);
				this.itemEngVar6Checked = true;

				this.itemEngVar1Checked = false;
				this.itemEngVar2Checked = false;
				this.itemEngVar3Checked = false;
				this.itemEngVar4Checked = false;
				this.itemEngVar5Checked = false;
				this.itemEngVar7Checked = false;
				itemEngSprite1.setFrame(0);
				itemEngSprite2.setFrame(0);
				itemEngSprite3.setFrame(0);
				itemEngSprite4.setFrame(0);
				itemEngSprite5.setFrame(0);
				itemEngSprite7.setFrame(0);

			}
		}.bind(this));

		// Don't know
		this.add.text(window.innerWidth * 0.68, window.innerHeight * 0.60, 'I prefer not to answer.', { fontFamily: 'monogram', fontSize: '17px', color: '#000000' });

		var itemEngSprite7 = this.add.sprite(window.innerWidth * 0.7, window.innerHeight * 0.65, 'checkbox', 0).setScale(0.4).setInteractive();

		itemEngSprite7.on('pointerdown', function (pointer) {
			if (this.itemEngVar7Checked) {
				itemEngSprite7.setFrame(0);
				this.itemEngVar7Checked = false;
			} else {
				itemEngSprite7.setFrame(1);
				this.itemEngVar7Checked = true;

				this.itemEngVar1Checked = false;
				this.itemEngVar2Checked = false;
				this.itemEngVar3Checked = false;
				this.itemEngVar4Checked = false;
				this.itemEngVar5Checked = false;
				this.itemEngVar6Checked = false;
				itemEngSprite1.setFrame(0);
				itemEngSprite2.setFrame(0);
				itemEngSprite3.setFrame(0);
				itemEngSprite4.setFrame(0);
				itemEngSprite5.setFrame(0);
				itemEngSprite6.setFrame(0);

			}
		}.bind(this));

		// instatiate and add new end scene with current data
		var endScene = undefined;

		// add button to request feedback
		var buttonContinue = this.add.image(0, 0, 'buttonFeed').setScale(0.4)
			.setInteractive()
			.on('pointerdown', () => this.onBtnContinue());

		var textContinue = this.add.text(-50, -15, 'Continue!', { fontSize: '18px', color: '#ffffff' })
		var buttonContainer = this.add.container(window.innerWidth * 0.9, window.innerHeight * 0.70, [buttonContinue, textContinue])

	}

	logAnswers() {
		this.gameData.api.logDemographics(this.itemAgeVar1Checked, this.itemAgeVar2Checked, this.itemAgeVar3Checked, this.itemAgeVar4Checked, this.itemAgeVar5Checked, this.itemAgeVar6Checked, this.itemAgeVar7Checked,
			this.itemGenderVar1Checked, this.itemGenderVar2Checked, this.itemGenderVar3Checked, this.itemGenderVar4Checked, this.itemGenderVar5Checked, this.itemGenderVar6Checked, //this.itemGenderVar7Checked
			// this.itemEduVar1Checked, this.itemEduVar2Checked, this.itemEduVar3Checked, this.itemEduVar4Checked, this.itemEduVar5Checked, this.itemEduVar6Checked, this.itemEduVar7Checked,
			// this.itemBackVar1Checked, this.itemBackVar2Checked, this.itemBackVar3Checked, this.itemBackVar4Checked, this.itemBackVar5Checked, this.itemBackVar6Checked, this.itemBackVar7Checked,
			// this.itemRegVar1Checked, this.itemRegVar2Checked, this.itemRegVar3Checked, this.itemRegVar4Checked, this.itemRegVar5Checked, this.itemRegVar6Checked, this.itemRegVar7Checked,
			this.itemEngVar1Checked, this.itemEngVar2Checked, this.itemEngVar3Checked, this.itemEngVar4Checked, this.itemEngVar5Checked, this.itemEngVar6Checked, this.itemEngVar7Checked);
	}

	onBtnContinue() {
		if ([this.itemAgeVar1Checked, this.itemAgeVar2Checked, this.itemAgeVar3Checked, this.itemAgeVar4Checked, this.itemAgeVar5Checked, this.itemAgeVar6Checked, this.itemAgeVar7Checked].every(a => a == false) ||
		[this.itemGenderVar1Checked, this.itemGenderVar2Checked, this.itemGenderVar3Checked, this.itemGenderVar4Checked, this.itemGenderVar5Checked, this.itemGenderVar6Checked].every(a => a == false)||   //, this.itemGenderVar7Checked
		[this.itemEngVar1Checked, this.itemEngVar2Checked, this.itemEngVar3Checked, this.itemEngVar4Checked, this.itemEngVar5Checked, this.itemEngVar6Checked, this.itemEngVar7Checked].every(a => a == false)
		// [this.itemEduVar1Checked, this.itemEduVar2Checked, this.itemEduVar3Checked, this.itemEduVar4Checked, this.itemEduVar5Checked, this.itemEduVar6Checked, this.itemEduVar7Checked].every(a => a == false)||
		// [this.itemBackVar1Checked, this.itemBackVar2Checked, this.itemBackVar3Checked, this.itemBackVar4Checked, this.itemBackVar5Checked, this.itemBackVar6Checked, this.itemBackVar7Checked].every(a => a == false)||
		// [this.itemRegVar1Checked, this.itemRegVar2Checked, this.itemRegVar3Checked, this.itemRegVar4Checked, this.itemRegVar5Checked, this.itemRegVar6Checked, this.itemRegVar7Checked].every(a => a == false)||
		) {
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
			// console.log(this.itemAgeVar1Checked, this.itemAgeVar2Checked, this.itemEngVar1Checked)

			var endScene = new EndScene(this.gameData);
			this.scene.remove('endScene', endScene);
			this.scene.add('endScene', endScene);
			this.scene.start('endScene');
			this.scale.stopFullscreen();
		}
	}

	update() { }

}

export default QuestionnaireScene8;