var express = require("express");
var http = require("http");
var websocket = require("ws");
var messages = require("./public/scripts/messages");

var Game = require("./game");
var port = process.argv[2];
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/game", (req, res) => {
    res.sendFile("/game.html", {root: "public"});
});

app.get("*", (req, res) => {
    res.sendFile("/splash.html", {root: "public"});
});

var server = http.createServer(app);
const wss = new websocket.Server({ server });
var websockets = {};//property: websocket, value: game

/*
 * regularly clean up the websockets object
 */ 
setInterval(function() {
    for(let i in websockets){
        if(websockets.hasOwnProperty(i)){
            let gameObj = websockets[i];
            //if the gameObj has a final status, the game is complete/aborted
            if(gameObj.finalStatus!=null){
                console.log("\tDeleting element "+i);
                delete websockets[i];
            }
        }
    }
}, 50000);

var currentGame = new Game("minecraft"); //calling a game with a new id
var connectionID = 0;//each websocket receives a unique ID

wss.on("connection", function connection(ws) {
    ws.id = connectionID++;
    let playerType = currentGame.addPlayer(ws);
    websockets[ws.id] = currentGame;

    console.log("Player %s placed in %s game as %s", ws.id, currentGame.id, playerType);
    ws.send((playerType == "A") ? messages.S_PLAYER_A : messages.S_PLAYER_B);

    if (currentGame.hasTwoConnectedPlayers()) {
        console.log("Yay, there is a living connection!");
        currentGame = new Game();
        var firstTurn = messages.T_MOVE;
        firstTurn.turn = "B";
        websockets[ws.id].playerB.send(JSON.stringify(firstTurn));
    }

    /*
     * INCOMING MESSAGES FROM PLAYERS
     */ 
    ws.on("message", function incoming(message) {
        var incomingPlayerMessage = JSON.parse(message);
        console.log(incomingPlayerMessage);
        let gameObj = websockets[ws.id];
        let isPlayerA = (gameObj.playerA == ws) ? true : false;
    });

    ws.on("close", function (code) {
        
        /*
         * [CLOSING CODE]
         */
        console.log(ws.id + " just left for mining diamonds.");

        if (code == "1001") {
            /*
            * when someone aborts the game
            */
            let gameObj = websockets[ws.id];

            if (gameObj.isValidTransition(gameObj.gameState, "ABORTED")) {
                gameObj.setStatus("ABORTED"); 

                /*
                 * determine whose connection remains open;
                 * close it
                 */
                try {
                    gameObj.playerA.close();
                    gameObj.playerA = null;
                }
                catch(e){
                    console.log("Player A closing: "+ e);
                }

                try {
                    gameObj.playerB.close(); 
                    gameObj.playerB = null;
                }
                catch(e){
                    console.log("Player B closing: " + e);
                }                
            }
            
        }
    });
});

server.listen(port);