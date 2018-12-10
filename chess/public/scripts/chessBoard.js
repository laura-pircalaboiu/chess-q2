
function chessBoard() {
    const cb = Array(8).fill(0).map(x => Array(8).fill(0));
    const cbOrder = [cpType.Rook, cpType.Knight, cpType.Bishop,
    cpType.King, cpType.Queen, cpType.Bishop,
    cpType.Knight, cpType.Rook];

    const cbSection = document.querySelector("#board");
    console.log(cbSection)

    let counter = 0;

    for (let r = 0; r < cb.length; r++) {
        for (let c = 0; c < cb.length; c++) {
            let div = document.createElement('div');

            if ((r + c) % 2 === 0)
                div.classList.add('Black');
            else
                div.classList.add('White');

            counter++;
            div.setAttribute('id', (counter) + '');


            if (r === 0) {
                cb[r, c] = new chessPiece(cbOrder[c], cpColour.Black, div);
                div.setAttribute('piece', `${cbOrder[c]}`);
                div.innerHTML = "bpi"
                div.setAttribute("draggable", true);
                console.log(c);

                switch (c) {
                    case 0: {
                        div.style.backgroundImage = 'url(../images/blackRook.png)';
                        break;
                    }

                    case 1: {
                        div.style.backgroundImage = 'url(../images/blackKnight.png)';
                        break;
                    }

                    case 2: {
                        div.style.backgroundImage = 'url(../images/blackBishop.png)';
                        break;
                    }

                    case 3: {
                        div.style.backgroundImage = 'url(../images/blackKing.png)';
                        break;
                    }

                    case 4: {
                        div.style.backgroundImage = 'url(../images/blackQueen.png)';
                        break;
                    }

                    case 5: {
                        div.style.backgroundImage = 'url(../images/blackBishop.png)';
                        break;
                    }

                    case 6: {
                        div.style.backgroundImage = 'url(../images/blackKnight.png)';
                        break;
                    }

                    case 7: {
                        div.style.backgroundImage = 'url(../images/blackRook.png)';
                        break;
                    }
                }
            }

            if (r === 1) {
                cb[r][c] = new chessPiece(cpType.Pawn, cpColour.Black, div);
                div.setAttribute('piece', `${cpType.Pawn}`);
                div.innerHTML = "bp"
                div.setAttribute("draggable", true);
                div.style.backgroundImage = 'url(../images/blackPawn.png)'
            }

            if (r === 6) {
                cb[r, c] = new chessPiece(cpType.Pawn, cpColour.White, div);
                div.setAttribute('piece', `${cpType.Pawn}`)
                div.innerHTML = "wp"
                div.setAttribute("draggable", true);
                div.style.backgroundImage = 'url(../images/whitePawn.png)'
            }

            if (r === 7) {
                cb[r][c] = new chessPiece(cbOrder[c], cpColour.White, div);
                div.setAttribute('piece', `${cbOrder[c]}`);
                div.innerHTML = "wpi"
                div.setAttribute("draggable", true);

                switch (c) {
                    case 0: {
                        div.style.backgroundImage = 'url(../images/whiteRook.png)';
                        break;
                    }

                    case 1: {
                        div.style.backgroundImage = 'url(../images/whiteKnight.png)';
                        break;
                    }

                    case 2: {
                        div.style.backgroundImage = 'url(../images/whiteBishop.png)';
                        break;
                    }

                    case 3: {
                        div.style.backgroundImage = 'url(../images/whiteKing.png)';
                        break;
                    }

                    case 4: {
                        div.style.backgroundImage = 'url(../images/whiteQueen.png)';
                        break;
                    }

                    case 5: {
                        div.style.backgroundImage = 'url(../images/whiteBishop.png)';
                        break;
                    }

                    case 6: {
                        div.style.backgroundImage = 'url(../images/whiteKnight.png)';
                        break;
                    }

                    case 7: {
                        div.style.backgroundImage = 'url(../images/whiteRook.png)';
                        break;
                    }
                }
            }

            else
                div.setAttribute('piece', 'None');

            div.addEventListener("dragstart", function () {
                this.style.opacity = "100%"
            })

            div.addEventListener("dragover", function(e){
                this.style.cursor = 'move';
                e.preventDefault();
            })

            /* div.addEventListener("dragend",function(e){
                 console.log(e.screenX+" "+e.screenY)
                 let refTop = cbSection.getBoundingClientRect().top
                 let refLeft = cbSection.getBoundingClientRect().left
                 for(let row=0;row<cb.length;row++){
                     for(let col=0;col<cb.length;col++){
                         cb[r][c].div.getBoundingClientRect().top
                         cb[r][c].div.getBoundingClientRect().left
                         if()
                     }
                 }
             })*/
            div.style.top = `calc(12.5% * ${r})`
            div.style.left = `calc(12.5% * ${c})`
            cbSection.appendChild(div);
        }
    }
}
// document.onload = function(){
chessBoard();
// }