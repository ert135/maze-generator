export default class Wall {
    constructor(
        private top = true,
        private left = true,
        private right = true,
        private down = true
    ) {}

    //Probably overkill to have getters, wanted to use a enum but typescript wouldn't play nice
    //We could possibly expand this to have differetn types of walls in future.
    public getTopState() : boolean {
        return this.top;
    }

    public getLeftState() : boolean {
        return this.left;
    }

    public getRightState() : boolean {
        return this.right;
    }

    public getDownState() : boolean {
        return this.down;
    }

    public removeTopWall() : void {
        this.top = false;
    }

    public removeLeftWall() : void {
        this.left = false;
    }

    public removeRightWall() : void {
        this.right = false;
    }

    public removeDownWall() : void {
        this.down = false;
    }

    public addTopWall() : void {
        this.top = true;
    }

    public addLeftWall() : void {
        this.left = true;
    }

    public addRightWall() : void {
        this.right = true;
    }

    public addDownWall() : void {
        this.down = true;
    }
}