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
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 600, y: groundY - 20, damage: 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "obstacle", x: 900, y: groundY - 20, damage: 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "obstacle", x: 1200, y: groundY - 20, damage : 10, hzSize: 20, image: "img/arrows.png", offsetX: -60, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -2, rotation: 0 },
          { type: "enemy", x: 800, y: groundY - 50, damage: 10, score: 100, hzSize: 25, image: "img/knight.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 2 },
          { type: "enemy", x: 1700, y: groundY - 50, damage: 10, score: 100, hzSize: 25, image: "img/knight.png", offsetX: -50, offsetY: -80, scaleX: 0.25, scaleY: 0.25, speed: 2 },
          { type: "reward", x: 1000, y: groundY - 90, hzSize: 25, image: "img/coins.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1300, y: groundY - 90, hzSize: 25, image: "img/coins.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1500, y: groundY - 140, score: 200, health: 5, hzSize: 25, image: "img/coins.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15 },
          { type: "levelmarker", x: 1900, y: groundY - 75, health: 100, hzSize: 25, image: "img/door.png", offsetX: -110, offsetY: -110, scaleX: 0.6, scaleY: 0.6, speed: 2},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 1000, y: groundY - 90, damage: 15, hzSize: 10, image: "img/sword.png", offsetX: -50, offsetY: -50, scaleX: 0.2, scaleY: 0.2, speed: -5, rotation: 0 },
          { type: "obstacle", x: 600, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
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
