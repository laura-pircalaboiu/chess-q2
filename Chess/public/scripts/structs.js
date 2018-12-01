const cpType = Object.freeze({"Pawn":0, "Knight":1, "Bishop":2, "Rook":3, "Queen":4, "King": 5});
const cpColour = Object.freeze({"Black":0, "White":1})

class Position
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}