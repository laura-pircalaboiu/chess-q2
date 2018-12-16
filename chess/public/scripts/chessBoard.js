function chessBoard(socket) 
{
    let cb = Array(8).fill(0).map(x => Array(8).fill(0))
    const cbOrder = [cpType.Rook, cpType.Knight, cpType.Bishop,
    cpType.King, cpType.Queen, cpType.Bishop,
    cpType.Knight, cpType.Rook]
    let tempPiece= 'None'
    let clicked = false
    let pos1
    let pos2

    const cbSection = document.querySelector("#board")

    for (let r = 0; r < cb.length; r++) 
    {
        for (let c = 0; c < cb.length; c++) 
        {
            let div = document.createElement('div')
            let id = `${r + 1}, ${c + 1}`

            if ((r + c) % 2 === 0)
                div.classList.add('Black') 
            else
                div.classList.add('White') 

            div.setAttribute('id', (id) + '')
            div.setAttribute('draggable', "true") 

            if (r === 0) 
            {
                div.chessPiece = new chessPiece(cbOrder[c], cpColour.Black, div) 
                div.setAttribute('data-piece', `Black ${cbOrder[c]}`) 
            }

            else if (r === 1) 
            {
                div.chessPiece = new chessPiece(cpType.Pawn, cpColour.Black, div) 
                div.setAttribute('data-piece', `Black ${cpType.Pawn}`) 
            }

            else if (r === 6) 
            {
                div.chessPiece = new chessPiece(cpType.Pawn, cpColour.White, div) 
                div.setAttribute('data-piece', `White ${cpType.Pawn}`) 
            }

            else if (r === 7) 
            {
                div.chessPiece = new chessPiece(cbOrder[c], cpColour.White, div) 
                div.setAttribute('data-piece', `White ${cbOrder[c]}`) 
            }

            else
                div.setAttribute('data-piece', 'None') 

            div.addEventListener("dragstart", function () 
            {
                this.style.opacity = "100%"
            })


            div.addEventListener("dragover", function (e) 
            {
                this.style.cursor = 'move' 
                e.preventDefault() 
            })

            div.style.top = `calc(12.5% * ${r})` 
            div.style.left = `calc(12.5% * ${c})` 

            div.addEventListener("dragend", function (e) 
            {
                // console.log(e.screenX + " " + e.screenY)
                let minDistance = 10e100
                let newX = 0 
                let newY = 0 
                for (let row = 0; row < cb.length; row++) 
                {
                    for (let col = 0; col < cb.length; col++) 
                    {
                        let currentBottom = cb[row][col].getBoundingClientRect().bottom
                        let currentLeft = cb[row][col].getBoundingClientRect().left
                        if (Math.sqrt(Math.abs(e.screenX - currentLeft) 
                        + Math.abs(e.screenY - currentBottom)) < minDistance) 
                        {
                            minDistance = Math.sqrt(Math.abs(e.screenX - currentLeft)
                             + Math.abs(e.screenY - currentBottom)) 
                            //change div to div im holding
                            newX = row 
                            newY = col 
                        }
                    }
                }
            })
            
            
            div.addEventListener("click", function(e)
            {
                if(clicked)
                {
                    clicked=false
                    //console.log(e.target)
                    let xy = e.target.id.split(", ")
                    pos2 = new Position(xy[0], xy[1])
                    //console.log(`${pos1.x}, ${pos1.y}`)
                   // console.log(`${pos2.x}, ${pos2.y}`)
                    div.setAttribute('data-piece', tempPiece)
                    move = new Move(pos1, pos2, tempPiece)

                    socket.send(JSON.stringify
                    ({
                        type:'move',
                        move: move
                    }))

                     console.log("move sent!")
                }
                
                else
                {
                    clicked=true 
                    console.log(e.target)
                    let xy = e.target.id.split(", ")
                    pos1 = new Position(xy[0], xy[1])
                    tempPiece = document.getElementById(e.target.id).getAttribute("data-piece")
                    e.target.setAttribute("data-piece","None")
                    //console.log(tempPiece)
                }
            })

            cb[r][c] = div 
            cbSection.appendChild(div) 
        }
    }
}
// document.onload = function(){
//chessBoard() 

/* GAMEUPDATER / Constructor for the game.
*/
function GameUpdater()
{
    this.playerType = null 
    this.getplayerType = function(){
        return this.playerType 
    }
    this.setplayerType = function(p){
        this.playerType = p 
    }

    this.updateGame = function(move){
        // here you update the game with what you pass through from incoming messages
        console.log(move)
        console.log(move.secPos.x+", "+move.secPos.y)
        document.getElementById(move.secPos.x+", "+move.secPos.y).setAttribute("data-piece",move.chessPiece)
        document.getElementById(move.firstPos.x+", "+move.firstPos.y).setAttribute("data-piece","None")
    }
}

var setup = function()
{
    var host = "ws://localhost:3000"
    var socket = new WebSocket(host)
    var gu = new GameUpdater()
    chessBoard(socket)
    /*
    * HERE WE GET AND SENT WS MESSAGES
    */
    socket.onmessage = function(event)
    {
        var newMessage= JSON.parse(event.data)
        console.log(newMessage)

        if(newMessage.type == Messages.T_PLAYER_TYPE)
            gu.setplayerType(newMessage.data)
        
        if(newMessage.type == Messages.T_MOVE){
            if (gu.getplayerType() == "A")
            {
                alert("OMG y r u White?") 
                gu.updateGame(newMessage.move)
            }
            if (gu.getplayerType() == "B")
            {
                alert("Yassss you're playing Black!")
                gu.updateGame(newMessage.move)
            }
        }
        if(newMessage.type=='incomingm'){
            gu.updateGame(newMessage.move)
        }
    }
}()
// }
