var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, damage){
      var hitZoneSize = 25; //sets the size of the obstacle's collision area
      var damageFromObstacle = damage; //sets the obstacles damage
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle hitzone with the size and damage attatched to it
      obstacleHitZone.x = x; //sets the obstacles x position
      obstacleHitZone.y = y; //sets the obstacles y position
      game.addGameItem(obstacleHitZone); //adds obstacle to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); //draws sawblade as a bitmap and stores it to obstacleImage
      obstacleHitZone.addChild(obstacleImage); //takes obstacleImage and adds it as a child to hitzone
      obstacleImage.x = -25; //offsets the image's sprite horizontally towards the hitzone
      obstacleImage.y = -25; //offsets the image's sprite vertically towards the hitzone

      obstacleHitZone.rotationalVelocity = 25;

    }

    createObstacle(400, groundY - 110, 10)
    createObstacle(700, groundY - 5, 10)
    createObstacle(1000, groundY - 110, 10)
      
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);

    enemy.velocityX -= 3

    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10)
    };

    enemy.onProjectileCollision = function(){
      game.increaseScore(100)
      enemy.fadeOut()
    };

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
