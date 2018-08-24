import Cell from './Cell'

export default class Grid {
    private cols: number;
    private rows: number;
    private gridWidth: number;
    public cells: Array<Cell> = [];
    private current: any

    constructor(
        private p5Ref: p5,
        private width: number,
        private height: number,
        private resolution: number
    ) {
        this.cols = Math.floor(this.width/this.resolution);
        this.rows = Math.floor(this.height/this.resolution);
        this.buildGrid();
        this.current = this.cells[0]
    }

    private buildGrid(): void {
        for (var j = 0; j < this.rows; j++) {
            for (var i = 0; i < this.cols; i++) {
                this.cells.push(new Cell(this.p5Ref, i, j, this.cols, this.rows, this.cols));
            }
        }

        this.cells[0].visited = true;
    }

    public drawGrid(): void {
        this.cells.forEach((cell: Cell) => {
            cell.draw(this.resolution);
        });
    }

    public generateMaze(): void {
        console.log('Current is now ', this.current);
        let next = this.current.getRandomUnvisitedNeighbor(this.cells);

        if(next){
            next.visited = true;
            console.log('random neighbor is ', next);
            this.current = next;
        }
    }
}