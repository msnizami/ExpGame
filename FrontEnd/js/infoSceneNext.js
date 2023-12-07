
// import PreStartScene from './preStartScene.js';
import PrimapreStartScene from './primapreStartScene.js';

class InfoSceneNext extends Phaser.Scene {
  constructor(gameData) {
    super({ key: 'infoSceneNext' });
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
    // this.add.image(centerX * 0.15, centerY * 0.06, 'URB').setScale(0.2);
    // this.add.image(centerX * 0.5, centerY * 0.06, 'CITI').setScale(0.2);
    // this.add.image(centerX * 0.85, centerY * 0.06, 'UBF').setScale(0.2);

    var headtext = ["ELECTRONIC CONSENT!"];
    var content = [
			"Clicking on the 'I agree to participate' button indicates that:",
			"",
			"	    	• you have read the above information",
			"	    	• you voluntarily agree to participate",
			"	    	• you are at least 18 years of age",
            "	    	• your anonymous responses may be used for research purposes in accordance with GDPR",
			"",
			"If you do not wish to participate in the research study, please decline participation by closing this window.",
            "",
            "NOTE: Do not press the back button in the browser at any stage, else you will lose the progress that you have made so far in the game."
    ];

    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.1, headtext, { fontFamily: 'Arial', fontSize: '18px', fontStyle: "bold", color: '#000ff0', align: 'left'});
    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.16, content, { fontFamily: 'Arial', fontSize: '17px', color: '#000000', align: 'left'});

		// instatiate new start scene
		var startScene = undefined;

    // Create the 'I agree' button
    const buttonAgree = this.add.image(0, 0, 'buttonAgree').setScale(0.4)
      .setInteractive()
      .on('pointerdown', () => this.onClickBtnAgree());

    // Create text for the button
    const textAgree = this.add.text(-60, -20, 'I agree to\nparticipate.', { fontSize: '17px', color: '#ffffff' }).setOrigin(0);

    // Add button and text to a container to keep them together
    this.add.container(this.gameData.game.config.width * 0.8, this.gameData.game.config.height * 0.65, [buttonAgree, textAgree]);
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
      const primapreStartScene = new PrimapreStartScene(this.gameData);
      this.scene.add('primapreStartScene', primapreStartScene);
      this.scene.start('primapreStartScene');
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

export default InfoSceneNext;
