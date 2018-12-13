(function(exports){
    /*
     * Server to client: set as player A 
     */
    exports.T_PLAYER_TYPE = "PLAYER-TYPE";
    exports.O_PLAYER_A = {                            
        type: exports.T_PLAYER_TYPE,
        data: "A"
    };
    exports.S_PLAYER_A = JSON.stringify(exports.O_PLAYER_A);

    /* 
     * Server to client: set as player B 
     */
    exports.O_PLAYER_B = {                            
        type: exports.T_PLAYER_TYPE,
        data: "B"
    };
    exports.S_PLAYER_B = JSON.stringify(exports.O_PLAYER_B);

    exports.T_MOVE = "PLAYER-TYPE";
    exports.O_MOVE = {                            
        type: exports.T_MOVE,
        turn: null,
        posFrom: null,
        posTo: null,
        pieceT: null
    };

}(typeof exports ==="undefined" ? this.Messages={} : exports));