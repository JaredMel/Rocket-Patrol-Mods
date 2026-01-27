// Meteor prefab
class Meteor extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        // store pointValue
        this.points = pointValue;
        // rocket speed in pixels/frame
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed * 1.5;

        // wrap from left to right
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    // reset position
    reset() {
        this.x = game.config.width;
    }
}