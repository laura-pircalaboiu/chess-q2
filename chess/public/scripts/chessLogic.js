
// export class chessLogic {
    hasAPiece = function (chessboard, position) 
    {
        return (chessboard[position.x][position.y] !== null)
    }

    canMove = function (move) 
    {
        if (move.chessPiece === "None") 
        {
            alert("There is no piece in the position that you are trying to move from");
            return false;
        }

        if (validMove(move)) 
            return true;
        
        alert("That is not a valid move!")
        return false;
    }

    validMove = function (move) 
    {
        var xdiff = Math.abs(move.from.x - move.to.x)
        var ydiff = Math.abs(move.from.y - move.to.y)
        console.log(move.from, move.to)
        console.log(`xdiff = ${xdiff}, ydiff = ${ydiff}`)

        if(move.chessPiece.includes("Pawn"))
            if ((xdiff === 1 || xdiff === 2) && (ydiff === 0))
                if((document.getElementById(`${move.to.x}, ${move.to.y}`)
                .getAttribute("data-piece")) === "None")
                    return true
        
        if(move.chessPiece.includes("Rook"))
            if (xdiff * ydiff === 0)
                return true

        if(move.chessPiece.includes("Knight"))
            if (xdiff * ydiff === 2)
                return true

        if(move.chessPiece.includes("Bishop"))
            if (xdiff === ydiff)
                return true
        
        if(move.chessPiece.includes("Queen"))
            if ((xdiff === ydiff) || (xdiff === 0) || (ydiff === 0))
                return true
        
        if(move.chessPiece.includes("King"))
            if (((xdiff === 0) && (ydiff === 1)) || ((xdiff === 1) && (ydiff === 1))
            || ((xdiff === 1) && (ydiff === 0)))
                return true

        return false
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