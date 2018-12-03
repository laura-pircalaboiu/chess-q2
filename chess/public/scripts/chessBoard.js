module.exports = class chessBoard {
    constructor(id) //session id?
    {
        this.id = id;
    }

    static initBoard() {
        const cb = Array(8).fill(0).map(x => Array(8).fill(0));
        const cbOrder = [cpType.Rook, cpType.Knight, cpType.Bishop,
        cpType.King, cpType.Queen, cpType.Bishop,
        cpType.Knight, cpType.Rook];

        const cbSection = document.querySelector("#board");
        for (let r = 0; r < cb.length; r++) {
            for (let c = 0; c < cb.length; c++) {
                let div = document.createElement('div');
                if ((r + c) % 2 === 0)
                    div.classList.add('Black');
                else
                    div.classList.add('White');

                div.setAttribute('id', '' + (r + c));

                if (r == 0) {
                    cb[r, col] = new chessPiece(cbOrder[c], cpColour.Black);
                    div.setAttribute('piece', `${cbOrder[c]}`);
                }
                if (r = 1) {
                    cb[r][col] = new chessPiece(cpType.Pawn, cpColour.Black);
                    div.setAttribute('piece', `${cbOrder[c]}`);
                }

                if (r == 6)
                {
                    cb[r, col] = new chessPiece(cpType.Pawn, cpColour.White);
                    div.setAttribute('piece', `${cpType.Pawn}`)
                }

                if(r == 7)
                {
                    cb[r][col] = new chessPiece(cbOrder[c], cpColour.White);
                    div.setAttribute('piece', `${cbOrder[c]}`);
                }
                
                cbSection.appendChild(div);
            }
        }
    }
}
