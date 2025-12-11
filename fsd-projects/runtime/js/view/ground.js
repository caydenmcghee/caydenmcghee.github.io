(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var 
        _ = window._,
        draw = window.opspark.draw;
    
    window.opspark.makeGround = function(app) {
        var ground;
        
        ground = new createjs.Container();
        ground.resize = resize;
        render();
        
        app.addResizeable(ground);
        ground.y = ((canvas.height - ground.getBounds().height) / 2) - 3;
        app.view.addChild(ground);
        
        function render() {
            ground.removeAllChildren();
            ground.addChild(draw.bitmap("img/floor.jpg"));
            ground.scaleX = canvas.width / 540
            ground.scaleY = canvas.height / 700
        }
        
        function resize(argument) {
            render();
        }

        app.ground = ground;
        
        return ground;
    };
}(window));