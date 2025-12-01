var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#2e0147ff'); //draws a rectangle and stores it inside backgroundFill
            background.addChild(backgroundFill); //adds the background fill to the background object
            
            // TODO 2: - Add a moon and starfield
            for(var i = 0; i < 100; i++){ 
                var circle = draw.circle(4, "white", "LightGray", 2); //creates a circle with a specified radius, border color, fill color, alpha, and stores it in the variable circle
                circle.x = canvasWidth * Math.random(); //sets a random x position within canvas width
                circle.y = groundY * Math.random(); //sets a random y position within canvas height
                background.addChild(circle); //adds the circles to the background
            }

            var moon = draw.bitmap("img/moon.png"); //creates a bitmap object using the moon image and stores it in the variable moon
            moon.x = canvas.width - 500; //sets the moon's x position
            moon.y = groundY - 350; //sets the moon's y position
            moon.scaleX = 0.6; //scales the moon's width
            moon.scaleY = 0.6; //scales the moon's height
            background.addChild(moon); //adds the moon to the background container
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); //creates a bitmap object using the tree image and stores it in the variable tree
            tree.x = 600; //sets x value of tree
            tree.y = groundY - 230; //sets y value of tree
            background.addChild(tree); //adds tree to background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 4; //moves the tree to the left by subtracting form its curent x position

            //checks if the tree has gone off the left side of the screen, and resets it to the right side
            if (tree.x < -200) {
            tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
