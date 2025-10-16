var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, "#00e1ffff", 2); // uses existing function to draw random circles of random size, color, and location on the screen
            physikz.addRandomVelocity(circle, canvas, 5, 5); // uses physikz library to add random direction and velocity to circle
            view.addChild(circle); // adds the circle as a child of view so it appears on the screen
            circles.push(circle); // pushed circle to array of circles by pushing it to the end of the existing array
        }


        // TODO 3 : Call the drawCircle() function
        // drawCircle();
        // drawCircle();
        // drawCircle();
        // drawCircle();
        // drawCircle();
        
        // TODO 7 : Use a loop to create multiple circles
        for(var i = 0; i < 100; i++){ // start at 0, increase by 1 until you reach 100
            drawCircle(); // draws a circle until the for loop ends
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            // physikz.updatePosition(circles[0])
            // physikz.updatePosition(circles[1])
            // physikz.updatePosition(circles[2])
            // physikz.updatePosition(circles[3])
            // physikz.updatePosition(circles[4])
            // the code above updates the position of every single individual circle
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            // game.checkCirclePosition(circles[0])
            // game.checkCirclePosition(circles[1])
            // game.checkCirclePosition(circles[2])
            // game.checkCirclePosition(circles[3])
            // game.checkCirclePosition(circles[4])
            // the code above checks the position of every single individual circle

            // TODO 8 / TODO 9 : Iterate over the array
           for(i = 0; i < circles.length; i++){ // starty 1 until you count every circle in the circles array
            physikz.updatePosition(circles[i]) // updates every circle position in the array until the for loop stops it
            game.checkCirclePosition(circles[i]) // checks every circle position in the array until the for loop stops it
           }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed at 0, increase b to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0; // when circle reaches right side of screen, go to left side
            } 
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.x < 0){
                circle.x = canvas.width // when circle reaches left side of screen, go to right side
            } else if (circle.y > canvas.height){
                circle.y = 0 // when circle reaches bottom of screen, go to top
            } else if (circle.y < 0){
                circle.y = canvas.height // when circle reaches top of screen, go to bottom
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
