

export default class Cell {

    constructor(
        private p5Ref: p5,
        public i: number, 
        public j: number
    ) {}

    /*
        Passiung in the width here is a bit hacky,
        but each cell needs to know the totaL width of the grid
        so it can draw itsself in the position
    */
    public draw(width: number) : void {
        const x = this.i*width;
        const y = this.j*width;
        this.p5Ref.rect(x,y,width,width);
    }
}