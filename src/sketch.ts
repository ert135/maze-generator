import Cell from './Cell'

export const p5Wrapper = function( sketch: p5 ) {
    sketch.setup = function() {
        sketch.createCanvas(800, 800)
    };

    sketch.draw = function() {
        if (sketch.mouseIsPressed) {
            console.log('Should be filling')
                sketch.fill(0, 70, 20)
        } else {
            sketch.fill(255, 0, 0)
        }
    };
};
