
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
                div.setAttribute("draggable",true);
            }

            if (r === 1) {
                cb[r][c] = new chessPiece(cpType.Pawn, cpColour.Black, div);
                div.setAttribute('piece', `${cpType.Pawn}`);
                div.innerHTML = "bp"
                div.setAttribute("draggable",true);
            }

            if (r === 6) {
                cb[r, c] = new chessPiece(cpType.Pawn, cpColour.White, div);
                div.setAttribute('piece', `${cpType.Pawn}`)
                div.innerHTML = "wp"
                div.setAttribute("draggable",true);
            }

            if (r === 7) {
                cb[r][c] = new chessPiece(cbOrder[c], cpColour.White, div);
                div.setAttribute('piece', `${cbOrder[c]}`);
                div.innerHTML = "wpi"
                div.setAttribute("draggable",true);
            }

            else
                div.setAttribute('piece', 'None');

            div.addEventListener("dragstart", function(){
                this.style.opacity="100%"
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