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
        this.load.image('Light', 'Light.png');
    }
    create(){
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        
        this.cameras.main.flash(8000, 0, 0, 0)

        this.wText = this.add.text(centerX, centerY, `Warning:
This game has sequences of flashing lights.
Caution Advised.`, {font: "24px Arial", align: "center"});
this.wText.setPosition(centerX - this.wText.width/2, centerY - this.wText.height/2);

this.light = this.add.image(
    centerX,
    150,
    'Light',
)

this.time.delayedCall(24000, () => {
    this.cameras.main.fadeOut(8000, 0,0,0);
});

this.time.delayedCall(32000, () => {
    this.scene.start('menuScreen');
})
   }
    update(){}
}

class MenuScreen extends Phaser.Scene {
    constructor() {
        super('menuScreen');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('Menu', 'Menu.png');
        this.load.image('Triangle', 'Triangle.png');
    }
    create(){
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        this.menu = this.add.image(
            250,
            250,
            'Menu',
        )

        this.triangle = this.add.image(
            centerX,
            centerY,
            'Triangle',
        )

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
