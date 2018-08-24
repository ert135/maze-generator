import Wall from './Wall'
import Grid from './grid'

export default class Cell {
    constructor(
        private p5Ref: p5,
        public i: number, 
        public j: number,
        private columns: number,
        private rows: number,
        private cellWidth: number,
        public visited: boolean = false,
        private wallState: Wall = new Wall()
    ) {}

    private drawWalls(x: number, y: number, width: number): void {
        if(this.wallState.getTopState() === true){
            this.p5Ref.line(x,y,x+width,y);
        }
        if(this.wallState.getRightState() === true){
            this.p5Ref.line(x+width,y,x+width,y+width);
        }
        if(this.wallState.getDownState() === true){
            this.p5Ref.line(x+width,y+width,x,y+width)
        }
        if(this.wallState.getLeftState() === true){
            this.p5Ref.line(x,y+width,x,y);
        }
    }

    private colorActive(x: number, y: number): void {
        if(this.visited === true){
            this.p5Ref.fill(255, 0, 255, 100);
            this.p5Ref.rect(x, y, 16, 16);
        }
    }

    public draw(width: number): void {
        const x = this.i*width;
        const y = this.j*width;
        // this.p5Ref.rect(x,y,width,width);
        this.drawWalls(x, y, width);
        this.colorActive(x,y);
    }

    /**
     * Because I built this using a 1 dimentional array we have to use the following formula to get the 
     * cells index.
    **/
    private getIndex(i, j) {
        if (i < 0 || j < 0 || i > 50-1 || j > 50-1) {
            return -1;
        }
        return i + j * 50;
    }

    public getRandomUnvisitedNeighbor(grid: Grid): Cell {
        let neighbors = [];

        const top = grid[this.getIndex(this.i, this.j-1)];
        const right = grid[this.getIndex(this.i+1, this.j)];
        const bottom = grid[this.getIndex(this.i, this.j+1)];
        const left = grid[this.getIndex(this.i-1, this.j)];
    
        if (top && !top.visited){
            neighbors.push(top);
        }

        if (right && !right.visited){
            neighbors.push(right);
        }

        if (bottom && !bottom.visited){
            neighbors.push(bottom);
        }

        if (left && !left.visited){
            neighbors.push(left);
        }

        if (neighbors.length > 0){
            var randomIndex = Math.floor(Math.random() * neighbors.length);
            console.log('')
            return neighbors[randomIndex];
        } 

        return null
    }
}