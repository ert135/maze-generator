export const p5Wrapper = function( sketch: p5 ) {

    sketch.setup = function() {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
    };

    sketch.draw = function() {
        if (sketch.mouseIsPressed) {
                sketch.fill(0, 0, 0)
        } else {
            sketch.fill(255, 0, 0)
        }
    };

};
