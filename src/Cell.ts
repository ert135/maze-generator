import {Wall} from './Wall'

export default class Cell {

    private wallState: Enumerator<any>

    constructor(
        private p5Ref: p5,
        public i: number, 
        public j: number
    ) {
        this.wallState = Wall.State
    }

    /*
        Passiung in the width here is a bit hacky,
        but each cell needs to know the totaL width of the grid
        so it can draw itsself in the position
    */
    public draw(width: number) : void {
        const x = this.i*width;
        const y = this.j*width;
        // this.p5Ref.rect(x,y,width,width);
        //Wall drawing logic

        //top right bottom left
        this.p5Ref.line(x,y,x+width,y);
        this.p5Ref.line(x+width,y,x+width,y+width);
        this.p5Ref.line(x+width,y+width,x,y+width);
        this.p5Ref.line(x,y+width,x,y);
    }
}