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
        
        this.coin1 = this.add.circle(0, centerY, 100, 0xd6ad18);
        this.coin2 = this.add.circle(this.cameras.main.width, centerY, 100, 0xd6ad18);
        
        
        this.text1 = this.add.text(centerX, centerY, "Coin", {font: "48px Arial", align:"Center"});
        this.text2 = this.add.text(centerX, centerY, "Studio", {font: "48px Arial", align:"Center"});
        
        
        this.text1.setVisible(false);
        this.text1.setPosition(centerX - this.text1.width/2, centerY - this.text1.height/2);
        this.text2.setVisible(false);
        this.text2.setPosition(centerX - this.text2.width/2, centerY - this.text2.height/2);
        
        
        this.add.tween({
            targets: this.coin1,
            x: centerX,
            y: centerY,
            duration: 2000,
        })
        this.time.delayedCall(2000, () => {
            this.text1.setVisible(true);
            this.add.tween({
                targets: this.coin2,
                x: centerX,
                y: centerY,
                duration: 2000,
            })
        });
        this.time.delayedCall(4000, () => {
            this.text1.setVisible(false);
            this.text2.setVisible(true);
        });

        this.time.delayedCall(6000, () => {
            this.scene.start('warningText');
        });
    }
    update(){}
}

class WarningText extends Phaser.Scene {
    constructor() {
        super('warningText');
    }
    preload() {
        this.load.path = './assets/';
        //this.load.image('sectionimage', 'sectionimage.png');
    }
    create(){
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        
        this.wTextthis.text2 = this.add.text(centerX, centerY, "Studio", {font: "48px Arial", align:"Center"});
    }
    update(){}
}

class MenuScreen extends Phaser.Scene {
    constructor() {
        super('menuScreen');
    }
    preload() {
        this.load.path = './assets/';
        //this.load.image('sectionimage', 'sectionimage.png');
    }
    create(){
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
    }
    update(){}
}


let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [StudioLogo, WarningText, MenuScreen],
}

let game = new Phaser.Game(config);
