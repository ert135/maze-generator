export default class Wall {
    constructor(
        private top = true,
        private left = true,
        private right = true,
        private down = true
    ) {}

    //probably overkill to have getters, wanted to use a enum but typescript wouldn't play nice
    public topState() : boolean {
        return this.top;
    }

    public leftState() : boolean {
        return this.left;
    }

    public rightState() : boolean {
        return this.right;
    }

    public downState() : boolean {
        return this.down;
    }
}