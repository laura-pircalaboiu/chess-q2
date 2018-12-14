
// export class chessLogic {
    hasAPiece = function (chessboard, position) 
    {
        return (chessboard[position.x][position.y] !== null)
    }

    canMove = function (chessboard, from, to) 
    {
        if ((chessboard[from.x][from.y]) === null) 
        {
            alert("There is no piece in the position that you are trying to move from");
            return false;
        }
        if ((chessboard[to.x][to.y]) !== null) 
        {
            alert("There is already a piece where you are trying to move");
            return false;
        }
        if (validMove(chessboard, from, to)) 
            return true;
        
        else 
        {
            alert("That is not a valid move!")
            return false;
        }
    }

    validMove = function (chessboard, from, to) 
    {
        var result = false;
        var horidiff = Math.abs(from.x - to.x)
        var vertdiff = Math.abs(from.y - to.y)
        switch (chessboard[from.x][from.y].cpType) 
        {
            case Pawn:
                if ((vertdiff === 1) || (horidiff === 0))
                    result = true;
                break;

            case Rook:
                if (vertdiff * horidiff === 0)
                    result = true;
                break;

            case Knight:
                if (vertdiff * horidiff === 2)
                    result = true;
                break;

            case Bishop:
                if (vertdiff === horidiff)
                    result = true
                break

            case Bishop:
                if (vertdiff === horidiff)
                    result = true;
                break

            case Queen:
                if ((horiDiff === vertDiff) || (horiDiff === 0) || (vertDiff === 0))
                    result = true
                break
            
            case King:
                if (((oriDiff === 0) && (vertDiff === 1)) || ((horiDiff === 1) && (vertDiff === 1))
                    || ((horiDiff === 1) && (vertDiff === 0)))
                    result = true
                break
        }
        return result
    }

    kingInCheck = function (cb) 
    {
        for (let r = 0; r <= 7; r++) 
        {
            for (let c = 0; c <= 7; c++) 
            {
                if ((cb[r][c] !== null) && (cb[r][c].cptype === PieceType.King)) {
                    let pk = new Position(c, r);
                    // if (check(cb, pk)) {
                    //     if (cb[r][c].cpcolor == Color.White) 
                    //         // console.log("The White King is in check!");
                    //     if (cb[r][c].cpcolor == Color.Black)
                    //         // console.log("The Black King is in check!");
                    // }
                }
            }
        }
    }

    check = function (cb, pt) 
    {
        let result = false;
        for (let row = 0; row <= 7; row++)
            for (let col = 0; col <= 7; col++) 
            {
                let pf = new Position(col, row);
                if ((cb[row][col] !== null) && (cb[row][col].cbcolor !== cb[pt.x][pt.y].cbcolor)) 
                    if (validMove(cb, pf, pt))
                        result = true;
            }
        
        return result;
    }

    //todo: function that returns what squares are in between a piece and a position
// }