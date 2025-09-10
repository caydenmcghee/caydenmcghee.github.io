$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 670, 100, 20, "#279FF5");
    createPlatform(400, 650, 100, 20, "#279FF5");
    createPlatform(255, 75, 25, 125, "#b32020ff");
    createPlatform(255, 305, 25, 145, "#b32020ff");
    createPlatform(255, 550, 25, 125, "#b32020f");
    createPlatform(706, 540, 30, 15, "#279FF5");
    createPlatform(1100, 650, 100, 20, "#279FF5");
    createPlatform(1175, 525, 100, 20, "#279FF5");
    createPlatform(1100, 400, 100, 20, "#279FF5");
    createPlatform(1175, 275, 100, 20, "#279FF5");
    createPlatform(980, 200, 30, 20, "#279FF5");
    createPlatform(620, 275, 200, 20, "#279FF5");
    createPlatform(425, 430, 100, 20, "#279FF5");
    createPlatform(100, 335, 100, 20, "#279FF5");
    createPlatform(100, 0, 5, 335, "#279FF5");
    createPlatform(310, 450, 2, 2, "#523e9cff");
    createPlatform(575, 350, 2, 30, "#523e9cff");

    // TODO 3 - Create Collectables
    createCollectable("mc_iron", 247, 460, 3, 1);
    createCollectable("mc_gold", 703, 450, 1, 1);
    createCollectable("mc_emerald", 1230, 450, 1, 1);
    createCollectable("mc_diamond", 975, 120, 1, 1);
    createCollectable("mc_netherite", 135, 250, 1, 1);

    
    // TODO 4 - Create Cannons
    createCannon("left", 650, 100, 1000);
    createCannon("top", 327, 1000);
    createCannon("top", 780, 850);
    createCannon("right", 200, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});