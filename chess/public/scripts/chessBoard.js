
function chessBoard() {
    let cb = Array(8).fill(0).map(x => Array(8).fill(0));
    const cbOrder = [cpType.Rook, cpType.Knight, cpType.Bishop,
    cpType.King, cpType.Queen, cpType.Bishop,
    cpType.Knight, cpType.Rook];

    const cbSection = document.querySelector("#board");
    console.log(cbSection)

    let counter = 0;

    for (let r = 0; r < cb.length; r++) {
        for (let c = 0; c < cb.length; c++) {
            let div = document.createElement('div');
            console.log('test')
           
            if ((r + c) % 2 === 0)
                div.classList.add('Black');
            else
                div.classList.add('White');
            
            counter++;
            div.setAttribute('id', (counter) + '');
            div.setAttribute('draggable', "true");

            if (r === 0) {
                div.chessPiece = new chessPiece(cbOrder[c], cpColour.Black, div);
                div.setAttribute('piece', `${cbOrder[c]}`);
                div.innerHTML = "bpi"
            }

            if (r === 1) {
        
                div.chessPiece = new chessPiece(cpType.Pawn, cpColour.Black, div);
                div.setAttribute('piece', `${cpType.Pawn}`);
                div.innerHTML = "bp"
            }

            if (r === 6) {
                div.chessPiece = new chessPiece(cpType.Pawn, cpColour.White, div);
                div.setAttribute('piece', `${cpType.Pawn}`)
                div.innerHTML = "wp"
            }

            if (r === 7) {
                div.chessPiece = new chessPiece(cbOrder[c], cpColour.White, div);
                div.setAttribute('piece', `${cbOrder[c]}`);
                div.innerHTML = "wpi"
            }

            else
                div.setAttribute('piece', 'None');

            div.addEventListener("dragstart", function(){
                this.style.opacity="100%"
            })

           
            div.style.top = `calc(12.5% * ${r})` 
            div.style.left = `calc(12.5% * ${c})` 

            div.addEventListener("dragend",function(e){
                console.log(e.screenX+" "+e.screenY)
                let minDistance=10e100
                let newX
                let newY
                for(let row=0;row<cb.length;row++){
                    for(let col=0;col<cb.length;col++){
                        let currentTop = cb[row][col].getBoundingClientRect().top
                        let currentLeft = cb[row][col].getBoundingClientRect().left
                        if(Math.sqrt(Math.abs(e.screenX-currentLeft)+Math.abs(e.screenY-currentTop))<minDistance){
                            minDistance=Math.sqrt(Math.abs(e.screenX-currentLeft)+Math.abs(e.screenY-currentTop));
                            //change div to div im holding
                            newX=row;
                            newY=col;
                            console.log("yeet")
                        }
                    }
                }
                console.log(newX,newY)
            })

            cb[r][c]=div;

            cbSection.appendChild(div);
        }
    }
}
// document.onload = function(){
chessBoard();
// }