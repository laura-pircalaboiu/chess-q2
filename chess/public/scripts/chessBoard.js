class chessBoard
{
    constructor(id) //session id?
    {
        this.id = id;
    }

    initBoard()
    {
        const cb = Array(8).fill(0).map(x => Array(8).fill(0));
        const cbOrder = [cpType.Rook, cpType.Knight, cpType.Bishop, 
                         cpType.King, cpType.Queen, cpType.Bishop, 
                         cpType.Knight, cpType.Rook];

        for(let r = 0; r < cb.length; r++)
        {
            for(let c = 0; c < cb.length; c++)
            {
                cb[0, col] = new chessPiece(cbOrder[c], cpColour.Black);
                cb[1][col] = new chessPiece(cpType.Pawn, cpColour.Black);
                cb[6, col] = new chessPiece(cpType.Pawn, cpColour.White);
                cb[7][col] = new chessPiece(cbOrder[c], cpColour.White);
            }
        }
    }

    displayBoard()
    {
        //display board
    }
}