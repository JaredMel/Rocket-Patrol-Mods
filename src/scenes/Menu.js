class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.spritesheet('meteor', './assets/meteor.png', {
            frameWidth: 32,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 1
        });
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('planets', './assets/planets.png');
        this.load.image('title-screen', './assets/title-screen.png');
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        });
        // load audio
        this.load.audio('sfx-select', './assets/sfx-select.wav');
        this.load.audio('sfx-explosion', './assets/sfx-explosion.wav');
        this.load.audio('sfx-shot', './assets/sfx-shot.wav');
    }
    create() {
        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        this.anims.create({
            key: 'meteorMove',
            frames: this.anims.generateFrameNumbers('meteor', { start: 0, end: 1 }),
            frameRate: 30,
            repeat: -1
        });
        let menuConfig = {
            fontFamily: 'Commando',
            fontSize: '48px',
            //backgroundColor: '#fcfcfc',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        };
        this.titleScreen = this.add.tileSprite(0, 0, 640, 480, 'title-screen').setOrigin(0, 0);
        // display menu text
        this.add.text(game.config.width/2, game.config.height/6 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        this.add.text(game.config.width/2, game.config.height/5, 'Use <-> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#ffffff';
        this.add.text(game.config.width/2, game.config.height/4 + borderUISize + borderPadding, 'Press <- for Novice or -> Expert', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            };
            this.sound.play('sfx-select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            };
            this.sound.play('sfx-select');
            this.scene.start('playScene');
        }
    }
}