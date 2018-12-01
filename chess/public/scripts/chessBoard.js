class chessBoard
{
    constructor(id) //session id?
    {
        this.id = id;
    }

    initBoard()
    {
        const cb = Array(8).fill(0).map(x => Array(8).fill(0));

        for(let r = 0; r < cb.length; r++)
        {
            for(let c = 0; c < cb.length; c++)
            {
                /* Need to figure out enums
                chessBoard[1][col]= new Piece(PieceType.Pawn,Color.Black);
			    chessBoard[0][col]= new Piece(order[col],Color.Black);

			    chessBoard[6][col]= new Piece(PieceType.Pawn,Color.White);
			    chessBoard[7][col]= new Piece(order[col],Color.White);
		        */
            }
        }
    }

    displayBoard()
    {
        //display board
    }
}