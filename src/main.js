// Name : Jared Melendez
// Title : Rocket Patrol 2 Electric Boogaloo
// Time : ~15 hours
// Modifications : New Enemy Spaceship type - 5
//                 New timing/scoring mechanism - 5
//                 Display timer - 3
//                 Parallaxing - 3
//                 New Title Screen - 3
//                 New Scrolling Sprite Background - 1
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play]
};
let game = new Phaser.Game(config);

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;