
import PrimaprimaPreStartScene from './primaprimaPreStartScene.js';
import PreStartScene from './preStartScene.js'

class PrimapreStartScene extends Phaser.Scene {
  constructor(gameData) {
    super({ key: 'primapreStartScene' });
    this.gameData = gameData;
    this.startTime = 0;
  }

  preload() {
    this.loadImages();
  }

  // Preload images
  loadImages() {
    // this.load.image('URB', 'static/uniurb-logo.png');
    // this.load.image('CITI', 'static/citius-logo.png');
    // this.load.image('UBF', 'static/UBF-logo.png');
    this.load.image('shubsplanets', 'static/Shubs_Planets.png');
    this.load.image('plants', 'static/plants.png');
    this.load.image('buttonAgree', 'static/buttonSubmit.png');
    // this.load.spritesheet('shub', 'static/shub_spritesheet.png', { frameWidth: 50, frameHeight:  47 });
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

    var headtext = ["Game Scenario"];
    var content1 = [
			      "You are the new guardian for a fictional Alien species called Shubs.",
            "Different groups of Shubs live on different planets."];
    var content2 = [
            "On all planets, Shubs eat different types of leaves for their growth.",
            "But beware: each group has adapted to their own unique diet suited to their home planet.",
            "As you are new to the job, you do not know yet what works best on each planet."];

    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.05, headtext, { fontFamily: 'Arial', fontSize: '18px', fontStyle: "bold", color: '#000ff0', align: 'left'});
    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.09, content1, { fontFamily: 'Arial', fontSize: '17px', color: '#000000', align: 'left'});
    this.add.image(centerX * 0.35, centerY * 0.33, 'shubsplanets').setScale(0.55);
    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.48, content2, { fontFamily: 'Arial', fontSize: '17px', color: '#000000', align: 'left'});
    this.add.image(centerX * 0.3, centerY * 0.65, 'plants').setScale(0.38);
    // this.add.sprite(this.gameData.getScaledWidth(this.gameData.game.config.width * 0.85),this.gameData.game.config.height * 0.165, 'shub', 0, { frameWidth: 50, frameHeight: 46 }).setScale(this.gameData.getScaledUnit(1.5));

		// instatiate new start scene
		// var startScene = undefined;

    // Create the 'I agree' button
    const buttonAgree = this.add.image(0, 0, 'buttonAgree').setScale(0.4)
      .setInteractive()
      .on('pointerdown', () => this.onClickBtnAgree());

    // Create text for the button
    const textAgree = this.add.text(-45, -16, ' Next', { fontSize: '19px', color: '#ffffff' }).setOrigin(0);

    // Add button and text to a container to keep them together
    this.add.container(this.gameData.game.config.width * 0.8, this.gameData.game.config.height * 0.65, [buttonAgree, textAgree]);
  }

  // Handle button click event
  onClickBtnAgree() {
    this.logTime();
    if (!this.isBrowserWindowMaximized()) {
      alert("Please maximize your browser window before continuing by pressing F11!");
    } else {
      // this.logTime();
      this.scale.startFullscreen();
      this.gameData.game.config.width = window.innerWidth
      this.gameData.game.config.height = window.innerHeight
      
      // Start the PreStartScene
      const primaprimapreStartScene = new PrimaprimaPreStartScene(this.gameData);
      this.scene.add('primaprimaPreStartScene', primaprimapreStartScene); //string value should be the js page name.
      this.scene.start('primaprimaPreStartScene');

      // const preStartScene = new PreStartScene(this.gameData);
      // this.scene.add('preStartScene', preStartScene);
      // this.scene.start('preStartScene');
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
    this.gameData.api.logTime(2, time);
  }
}

export default PrimapreStartScene;
