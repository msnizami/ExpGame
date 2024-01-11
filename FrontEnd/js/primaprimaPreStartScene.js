
import PreStartScene from './preStartScene.js';

class PrimaprimaPreStartScene extends Phaser.Scene {
  constructor(gameData) {
    super({ key: 'primaprimaPreStartScene' });
    this.gameData = gameData;
    this.startTime = 0;
  }

  preload() {
    this.loadImages();
  }

  // Preload images
  loadImages() {
    this.load.image('nutrisolver', 'static/AlienNutriSolver.png');
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

    var headtext = ["Game Scenario cont..."];
    var content1 = [  
            "However, you are assisted by the AlienNutriSolver, an advanced, intergalactic dietary analysis tool.",
            "This tool uses cutting-edge algorithms to process and analyze vast arrays of data, simulating",
            "the current environment and dietary needs of alien species across planets.",
            "",
            "To work with the AlienNutriSolver, for each planet, you have to set beforehand preliminary ranges of leaves.",
            "These ranges are taken as global constraints in the search for optimal solutions by the AlienNutriSolver.",
            "The tool will conduct a thorough exploration of potential combinations within those limits, to suggest a healthier diet for the current planet.",
            "Your task is to travel to the different planets, experiment with leaves and the AlienNutriSolver, and find the healthiest diet for each group of Shubs."
    ];

    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.05, headtext, { fontFamily: 'Arial', fontSize: '18px', fontStyle: "bold", color: '#000ff0', align: 'left'});
    this.add.text(window.innerWidth * 0.05, window.innerHeight * 0.09, content1, { fontFamily: 'Arial', fontSize: '17px', color: '#000000', align: 'left'});
    this.add.image(centerX * 0.35, centerY * 0.53, 'nutrisolver').setScale(0.35);
    // this.add.image(centerX * 0.3, centerY * 0.65, 'plants').setScale(0.38);
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
      const preStartScene = new PreStartScene(this.gameData);
      this.scene.add('preStartScene', preStartScene);
      this.scene.start('preStartScene');
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
    this.gameData.api.logTime(3, time);
  }
}

export default PrimaprimaPreStartScene;
