const cpType = Object.freeze({
    Pawn:"Pawn", 
    Knight:"Knight", 
    Bishop:"Bishop", 
    Rook:"Rook", 
    Queen:"Queen", 
    King: "King"
});
const cpColour = Object.freeze({"Black":0, "White":1});
module.exports.cpColour = cpColour;
module.exports.cpType = cpType;

module.exports.Position = class Position
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}