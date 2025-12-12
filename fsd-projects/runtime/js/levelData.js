var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Infiltrate",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 600, y: groundY - 5, damage: 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "obstacle", x: 900, y: groundY - 5, damage: 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "obstacle", x: 1200, y: groundY - 5, damage : 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "obstacle", x: 1400, y: groundY - 5, damage : 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "obstacle", x: 2400, y: groundY - 110, damage : 10, hzSize: 15, image: "img/rock.png", offsetX: -37, offsetY: -37, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: -4 },
          { type: "obstacle", x: 3500, y: groundY - 110, damage : 10, hzSize: 15, image: "img/rock.png", offsetX: -37, offsetY: -37, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: -4 },
          { type: "obstacle", x: 3900, y: groundY - 110, damage : 10, hzSize: 15, image: "img/rock.png", offsetX: -37, offsetY: -37, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: -4 },
          { type: "obstacle", x: 1800, y: groundY - 5, damage: 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "obstacle", x: 2200, y: groundY - 5, damage: 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "enemy", x: 800, y: groundY - 50, damage: 10, score: 100, hzSize: 25, image: "img/peasant.png", offsetX: -195, offsetY: -110, scaleX: 0.6, scaleY: 0.6, speed: 2 },
          { type: "enemy", x: 1100, y: groundY - 50, damage: 10, score: 100, hzSize: 25, image: "img/peasant.png", offsetX: -195, offsetY: -110, scaleX: 0.6, scaleY: 0.6, speed: 2 },
          { type: "enemy", x: 1700, y: groundY - 50, damage: 10, score: 100, hzSize: 25, image: "img/knight.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 2 },
          { type: "enemy", x: 2100, y: groundY - 50, damage: 10, score: 100, hzSize: 25, image: "img/peasant.png", offsetX: -195, offsetY: -110, scaleX: 0.6, scaleY: 0.6, speed: 2 },
          { type: "enemy", x: 2400, y: groundY - 50, damage: 10, score: 100, hzSize: 25, image: "img/knight.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 2 },
          { type: "reward", x: 1000, y: groundY - 90, hzSize: 25, image: "img/coins.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1300, y: groundY - 90, hzSize: 25, image: "img/coins.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1900, y: groundY - 140, score: 200, health: 5, hzSize: 25, image: "img/coins.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15 },
          { type: "levelmarker", x: 2575, y: groundY - 75, health: 0, hzSize: 25, image: "img/door.png", offsetX: -110, offsetY: -110, scaleX: 0.6, scaleY: 0.6, speed: 2},
          
        ],
      },
      {
        name: "Annihilate",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 1000, y: groundY - 90, damage: 15, hzSize: 10, image: "img/sword.png", offsetX: -50, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: 0 },
          { type: "obstacle", x: 2000, y: groundY- 90, damage: 15, hzSize: 10, image: "img/sword.png", offsetX: -50, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: 0 },
          { type: "obstacle", x: 2500, y: groundY- 90, damage: 15, hzSize: 15, image: "img/balls.png", offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: -10 },
          { type: "obstacle", x: 3000, y: groundY- 90, damage: 15, hzSize: 10, image: "img/sword.png", offsetX: -50, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: 0 },
          { type: "obstacle", x: 3500, y: groundY- 90, damage: 15, hzSize: 15, image: "img/balls.png", offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: -10 },
          { type: "enemy", x: 700, y: groundY - 50, damage: 10, score: 250, hzSize: 25, image: "img/knight.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 2 },
          { type: "enemy", x: 1200, y: groundY - 50, damage: 15, score: 350, hzSize: 25, image: "img/jester.png", offsetX: -60, offsetY: -55, scaleX: 0.15, scaleY: 0.15, speed: 2 },
          { type: "enemy", x: 1700, y: groundY - 50, damage: 15, score: 350, hzSize: 25, image: "img/jester.png", offsetX: -60, offsetY: -55, scaleX: 0.15, scaleY: 0.15, speed: 2 },
          { type: "enemy", x: 2100, y: groundY - 50, damage: 10, score: 250, hzSize: 25, image: "img/knight.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 2 },
          { type: "enemy", x: 2300, y: groundY - 50, damage: 15, score: 350, hzSize: 25, image: "img/jester.png", offsetX: -60, offsetY: -55, scaleX: 0.15, scaleY: 0.15, speed: 2 },
          { type: "enemy", x: 2600, y: groundY - 50, damage: 999, score: 1000, hzSize: 25, image: "img/king.png", offsetX: -140, offsetY: -190, scaleX: 1.2, scaleY: 1.2, speed: 2 },
          { type: "reward", x: 1000, y: groundY - 90, hzSize: 25, image: "img/gems.png", offsetX: -50, offsetY: -45, scaleX: 0.4, scaleY: 0.35, score: 500, health: 5 },
          { type: "reward", x: 1400, y: groundY - 90, hzSize: 25, image: "img/ham.png", offsetX: -35, offsetY: -30, scaleX: 0.15, scaleY: 0.15, score: 500, health: 35 },
          { type: "reward", x: 1800, y: groundY - 90, hzSize: 25, image: "img/gems.png", offsetX: -50, offsetY: -45, scaleX: 0.4, scaleY: 0.35, score: 500, health: 5 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
