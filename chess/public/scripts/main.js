const express = require("express");
const chessBoardJS = require("chessBoard.js");
const chessLogicJS = require("chessLogic.js");
const chessPieceJS = require("chessPiece.js");
const structsJS = require("structs.js");

let app = express = require('express');
const http = require('http');


let router = express.Router();
router.get('/', function(req, res, next) {
     res.sendFile('index.html')}
     );

app.set('port', 8000);
let server = http.createServer(app);

console.log("Hello World");