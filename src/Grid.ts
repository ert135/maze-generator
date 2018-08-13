import Cell from './Cell'

export default class Grid {
    private cols: number;
    private rows: number;
    private gridWidth: number;
    private cells: Array<Cell> = [];

    constructor(
        private p5Ref: p5,
        private width: number,
        private height: number,
        private w: number
    ) {
        this.cols = Math.floor(this.width/this.w);
        this.rows = Math.floor(this.height/this.w);
        this.gridWidth = w;
        this.buildGrid();
    }

    public buildGrid() : void {
        console.log('Making grid', this.cols, this.rows)
        for(var i = 0; i < this.cols; i++) {
            for(var j = 0; j < this.rows; j++) {
                this.cells.push(new Cell(this.p5Ref, i, j));
            }
        }

        console.log('cells here now are ', this.cells);
    }

    public drawGrid() : void {
        this.cells.forEach((cell: Cell) => {
            cell.draw(this.w);
        });
    }
}