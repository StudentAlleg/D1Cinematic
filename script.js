class StudioLogo extends Phaser.Scene {
    constructor() {
        super('studioLogo');
    }
    preload() {
        this.load.path = './assets/';
        //this.load.image('sectionimage', 'sectionimage.png');
    }
    create(){
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xd6ad18)
        this.fillCircle(centerX, centerY, 100)
    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x32CD32,
    scene: [StudioLogo],
}

let game = new Phaser.Game(config);
