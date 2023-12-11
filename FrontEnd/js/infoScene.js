"use strict";

// import PreStartScene from './preStartScene.js';
import InfoSceneNext from './infoSceneNext.js';
import QuestionnaireScene2 from './questionnaireScene2.js';

class InfoScene extends Phaser.Scene {
  constructor(gameData) {
    super({ key: 'infoScene' });
    this.gameData = gameData;
    this.startTime = 0;
  }

  preload() {
    this.loadImages();
  }

  // Preload images
  loadImages() {
    this.load.image('URB', 'static/uniurb-logo.png');
    this.load.image('CITI', 'static/citius-logo.png');
    this.load.image('UBF', 'static/UBF-logo.png');
    this.load.image('buttonAgree', 'static/buttonSubmit.png');
  }

  create() {
    this.startTime = new Date().getTime();
    this.createUI();
  }

  // Create user interface elements
  createUI() {
    const centerX = window.innerWidth ;
    const centerY = window.innerHeight ;

    // Uncomment these lines to add logos if needed
    this.add.image(centerX * 0.15, centerY * 0.06, 'URB').setScale(0.2);
    this.add.image(centerX * 0.5, centerY * 0.06, 'CITI').setScale(0.2);
    this.add.image(centerX * 0.85, centerY * 0.06, 'UBF').setScale(0.2);

    var headtext = ["Welcome to the Alien Fitness Game study!"];
    var content = [
			"The purpose of this study is to examine how human feedback impacts the automated generation of counterfactual explanations.",
			"This is a research project being conducted by Mr. Muhammad Suffian at University of Urbino.",
			"People of any gender, aged 18 and above, are invited to participate.",
			"Your participation in this research study is voluntary. You may choose not to participate. If you decide to participate, you may withdraw at any time.",
			"",
			"The procedure involves playing a small online game that will take approximately 15 minutes.",
			"Afterwards, you will be asked to answer a short questionnaire assessing your experience with the game.",
			"Your responses will be confidential and we do not collect identifying information such as your name, email address or IP address.",
			"We will do our best to keep your information confidential.",
			"",
			"The results of this study will be used for scholarly purposes only.",
			"If you have any questions about the research study, please contact Mr. Muhammad Suffian at m.suffian@campus.uniurb.it .",
			"",
      "The information that we collect is in agreement with European Union's General Data Protection Regulation (GDPR).",
			"Ethics approval for this study was granted by University of Urbino with the reference code XXXXX.",
      "After completion of the study, the research data collected will be made publicly available in an anonymized form through a suitable data archive.",
      "The purpose, type, and scope of potential subsequent use are currently not foreseeable.",
      "The data will only be published in a way that does not allow any conclusions to be drawn at any time about individual or specific persons."
    ];

    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.17, headtext, { fontFamily: 'Arial', fontSize: '18px', fontStyle: "bold", color: '#000ff0', align: 'left'});
    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.24, content, { fontFamily: 'Arial', fontSize: '17px', color: '#000000', align: 'left'});

		// instatiate new start scene
		var startScene = undefined;

    // Create the 'I agree' button
    const buttonAgree = this.add.image(0, 0, 'buttonAgree').setScale(0.4)
      .setInteractive()
      .on('pointerdown', () => this.onClickBtnAgree());

    // Create text for the button
    const textAgree = this.add.text(-55, -16, 'Continue', { fontSize: '18px', color: '#ffffff' }).setOrigin(0);

    // Add button and text to a container to keep them together
    this.add.container(this.gameData.game.config.width * 0.8, this.gameData.game.config.height * 0.9, [buttonAgree, textAgree]);
  }

  // Handle button click event
  onClickBtnAgree() {
    if (!this.isBrowserWindowMaximized()) {
      alert("Please maximize your browser window before continuing by pressing F11!");
    } else {
      this.logTime();
      this.scale.startFullscreen();
      this.gameData.game.config.width = window.innerWidth
      this.gameData.game.config.height = window.innerHeight
      
      // Start the PreStartScene
      const infoSceneNext = new InfoSceneNext(this.gameData);
      this.scene.add('infoSceneNext', infoSceneNext);
      this.scene.start('infoSceneNext');
      // const questionnaireScene2 = new QuestionnaireScene2(this.gameData);
      // this.scene.add('questionnaireScene2', questionnaireScene2);
      // this.scene.start('questionnaireScene2');
    }
  }

  // Check if the browser window is maximized
  isBrowserWindowMaximized() {
    const maxWidth = screen.availWidth - window.innerWidth === 0;
    const screenPixelRatio = (window.outerWidth - 8) / window.innerWidth;
    const defaultZoom = screenPixelRatio > 0.92 && screenPixelRatio <= 1.10;
    return maxWidth && defaultZoom;
  }

  // Log the time
  logTime() {
    const time = new Date().getTime() - this.startTime;
    this.gameData.api.logTime(0, time);
  }
}

export default InfoScene;
