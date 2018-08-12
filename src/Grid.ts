import Cell from './Cell'

export default class Grid {
    private cols: number;
    private rows: number;
    private cells: Array<Cell>

    constructor(
        w: number,
        width: number,
        height: number
    ) {
        this.cols = Math.floor(width/w);
        this.rows = Math.floor(height/w);
        this.buildGrid();
    }

    public buildGrid() : void {
        for(var i = 0; i < this.cols; i++){
            for(var j = 0; j < this.rows; j++) {
                this.cells.push(new Cell(i, j));
            }
        }
    }

    public drawGrid() : void {
        
    }
}