
function chessBoard() 
{
    let cb = Array(8).fill(0).map(x => Array(8).fill(0));
    const cbOrder = [cpType.Rook, cpType.Knight, cpType.Bishop,
    cpType.King, cpType.Queen, cpType.Bishop,
    cpType.Knight, cpType.Rook];
    let clicked = false;
    let tempPiece= 'None';

    const cbSection = document.querySelector("#board");
    console.log(cbSection);

    let counter = 0;

    for (let r = 0; r < cb.length; r++) 
    {
        for (let c = 0; c < cb.length; c++) 
        {
            let div = document.createElement('div');
            console.log('test');

            if ((r + c) % 2 === 0)
                div.classList.add('Black');
            else
                div.classList.add('White');

            counter++;
            div.setAttribute('id', (counter) + '');
            div.setAttribute('draggable', "true");

            if (r === 0) 
            {
                div.chessPiece = new chessPiece(cbOrder[c], cpColour.Black, div);
                div.setAttribute('data-piece', `Black ${cbOrder[c]}`);
            }

            else if (r === 1) 
            {
                div.chessPiece = new chessPiece(cpType.Pawn, cpColour.Black, div);
                div.setAttribute('data-piece', `Black ${cpType.Pawn}`);
            }

            else if (r === 6) 
            {
                div.chessPiece = new chessPiece(cpType.Pawn, cpColour.White, div);
                div.setAttribute('data-piece', `White ${cpType.Pawn}`);
            }

            else if (r === 7) 
            {
                div.chessPiece = new chessPiece(cbOrder[c], cpColour.White, div);
                div.setAttribute('data-piece', `White ${cbOrder[c]}`);
            }

            else
                div.setAttribute('data-piece', 'None');

            div.addEventListener("dragstart", function () 
            {
                this.style.opacity = "100%"
            })


            div.addEventListener("dragover", function (e) 
            {
                this.style.cursor = 'move';
                e.preventDefault();
            })

            div.style.top = `calc(12.5% * ${r})`;
            div.style.left = `calc(12.5% * ${c})`;

            div.addEventListener("dragend", function (e) 
            {
                console.log(e.screenX + " " + e.screenY)
                let minDistance = 10e100
                let newX = 0;
                let newY = 0;
                for (let row = 0; row < cb.length; row++) 
                {
                    for (let col = 0; col < cb.length; col++) 
                    {
                        let currentBottom = cb[row][col].getBoundingClientRect().bottom
                        let currentLeft = cb[row][col].getBoundingClientRect().left
                        if (Math.sqrt(Math.abs(e.screenX - currentLeft) 
                        + Math.abs(e.screenY - currentBottom)) < minDistance) 
                        {
                            minDistance = Math.sqrt(Math.abs(e.screenX - currentLeft) + Math.abs(e.screenY - currentBottom));
                            //change div to div im holding
                            newX = row;
                            newY = col;
                            //console.log("yeet");
                        }
                    }
                }
                console.log(newX, newY);
            })
            
            
            div.addEventListener("click", function(e)
            {
                if(clicked)
                {
                    clicked=false
                    console.log(e.target)
                    div.setAttribute('data-piece',tempPiece)
                }
                
                else
                {
                    clicked=true;
                    console.log(e.target)
                   tempPiece= document.getElementById(e.target.id).getAttribute("data-piece")
                   console.log(tempPiece)
                }
                /*
                    let pieceType= cb[from.r][from.c]
                    cb[to.r][to.c]=piecetype
                    cb[from.r][from.c]=null
                */
                
            })
            cb[r][c] = div;

            cbSection.appendChild(div);
        }
    }
}
// document.onload = function(){
chessBoard();
// }