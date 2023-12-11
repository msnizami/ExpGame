class EndScene extends Phaser.Scene {

	constructor(varObj) {
		super({key : 'endScene'});
		this.varObj = varObj
	}

	init() { }

	preload() {
		// load button images
		this.load.spritesheet('checkbox', 'static/CheckBoxSprites.png', { frameWidth: 51, frameHeight: 50 });
		this.load.image('URB', 'static/uniurb-logo.png');
    	this.load.image('CITI', 'static/citius-logo.png');
    	this.load.image('UBF', 'static/UBF-logo.png');
		this.load.image('buttonAgree', 'static/buttonSubmit.png');

	}

	create() {
		
		const centerX = window.innerWidth ;
    	const centerY = window.innerHeight ;

    	// Uncomment these lines to add logos if needed
    	this.add.image(centerX * 0.15, centerY * 0.06, 'URB').setScale(0.2);
    	this.add.image(centerX * 0.5, centerY * 0.06, 'CITI').setScale(0.2);
    	this.add.image(centerX * 0.85, centerY * 0.06, 'UBF').setScale(0.2);
		this.varObj.api.logUserPayment();	// Store (ecrypted) paymentId on server

		this.add.image(window.innerWidth * 0.1, window.innerHeight * 0.1, 'Uniurb').setScale(0.15);
		// this.add.image(window.innerWidth * 0.8, window.innerHeight * 0.1, 'ITSML').setScale(0.15);

		var qIntro1 = [
			'You have completed the study. Thank you very much for your participation!',
			'',
		]

		var qIntro2 = [
			'Your unique survey completion code is:',
			'',
			this.varObj.api.paymentId,
			'',
			'Note down this code, return to Prolific and insert the code into the box to receive your payment.',
		]

		var qIntro3 = [
			'If you would like to know more about the aim of this work, click the button below.',
			'',
			'In case you have further questions or comments regarding this study, please contact',
			'',
			'Mr. Muhammad Suffian at University of Urbino: m.suffian@campus.uniurb.it .',
			'',
			'You may close this window now.',
			''
		]

		// add button to start game and switch to fullscreen
		var buttonDebrief = this.add.image(0, 0, 'buttonAgree').setScale(0.65)
			.setInteractive()
			.on('pointerdown', () => { window.open('https://ieeexplore.ieee.org/document/9819899/'); });

		var textDebrief = this.add.text(-100, -25, ['I want to learn more','about the study!'], { fontSize: '18px', color: '#ffffff' }).setOrigin(0);
		var buttonContainer = this.add.container(window.innerWidth * 0.80, window.innerHeight * 0.70, [buttonDebrief, textDebrief])

		this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.20, qIntro1, { fontFamily: 'monogram', fontSize: '18px', color: '#000000' });
		this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.30, qIntro2, { fontFamily: 'monogram', fontSize: '18px', fontStyle: "bold",  color: '#000000' });
		this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.50, qIntro3, { fontFamily: 'monogram', fontSize: '18px', color: '#000000' });


	  }

	update() { }

}

export default EndScene;
