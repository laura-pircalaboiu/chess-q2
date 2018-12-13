const cpType = Object.freeze({
    Pawn: "Pawn",
    Knight: "Knight",
    Bishop: "Bishop",
    Rook: "Rook",
    Queen: "Queen",
    King: "King"
});
const cpColour = Object.freeze({ Black: "Black", White: "White" });
this.cpColour = cpColour;
this.cpType = cpType;

class chessPiece {
    //assign type + colour
    constructor(t, c, div) {
        this.type = t;
        this.colour = c;
        this.div = div;
    }
}

// this.Position = class Position
// {
//     constructor(x, y)
//     {
//         this.x = x;
//         this.y = y;
//     }
// }

const movesWhite = [];
const movesBlack = [];
