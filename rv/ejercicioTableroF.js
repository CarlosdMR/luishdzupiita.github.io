var sampleConfig = {
  position: 'start',
  draggable : true,
  dropOffBoard: 'snapback'
};
var board;
function setUpBoard() {
  var currentPosition = 'start';
  if (board !== undefined) {
    currentPosition = board.position();
    board.destroy();
  }
  windowsWidth = $(window).width()*0.8
  windowsWidthPx = windowsWidth.toString() + 'px'
  $('#inner').css('width', windowsWidthPx);
  $('#outer').css('padding', '');
  board = new ChessBoard3('inner', sampleConfig);
  board.position(currentPosition, false);
}
setUpBoard();

$('#flip').on('click', board.flip);
var moveList = [], scoreList =[];
var game = new Chess(), 
        statusEl = $('#status'),
        fenEl = $('#fen'),
        pgnEl = $('#pgn');

function updateStatus() {

        var status = '';

        var moveColor = 'White';
        if (game.turn() === 'b') {
            moveColor = 'Black';
        }

        if (game.game_over()) {

            if (game.in_checkmate()) {
                status = moveColor + ' jaquemate.';
            } else if (game.in_stalemate()) {
                status = moveColor + " encerrado";
            } else if (game.insufficient_material()) {
                status = "Empate."
            } else if (game.in_threefold_repetition()) {
                status = "Empate."
            } else if (game.in_draw()) {
                status = "Fin de juego."
            }
            alert("Fin del juego")
        }

        // El juego continua
        else {
    
            status += 'Mueven ' + moveColor;

            // Jaque?
            if (game.in_check() === true) {
                status += ' ' + moveColor + ' esta en jaque.';
            }
        }

        fenEl.html(game.fen().replace(/ /g, '&nbsp;'));
        var currentPGN = game.pgn({max_width:10,newline_char:"<br>"});
        var matches = entirePGN.lastIndexOf(currentPGN, 0) === 0;
        if (matches) {
            currentPGN += "<span>" + entirePGN.substring(currentPGN.length, entirePGN.length) + "</span>";
        } else {
            entirePGN = currentPGN;
        }
        pgnEl.html(currentPGN);
        statusEl.html(status);
    };

    var onDrop = function(source, target) {
   
        if (board.hasOwnProperty('removeGreySquares') && typeof board.removeGreySquares === 'function') {
            board.removeGreySquares();
        }

        // see if the move is legal
        var move = game.move({
            from: source,
            to: target,
            promotion: $("#promotion").val()
        });

        // illegal move
        if (move === null) return 'snapback';

        moveList = moveList.slice(0, cursor);
        scoreList = scoreList.slice(0, cursor);
        moveList.push(move);
        scoreList.push(scoreList.length === 0 ? 0 : scoreList[scoreList.length - 1]);
        cursor = moveList.length;
    };

    var onMouseoverSquare = function(square) {
        // Lista de posibles movimientos
        var moves = game.moves({
            square: square,
            verbose: true
        });

        // Si no hay posibles movimientos, salir
        if (moves.length === 0) return;

        if (board.hasOwnProperty('greySquare') && typeof board.greySquare === 'function') {
            // Seleccionar recuadro actual
            board.greySquare(square);

            // Resaltar lugares a donde se puede mover
            for (var i = 0; i < moves.length; i++) {
                board.greySquare(moves[i].to);
            }
        }
    };

    var onMouseoutSquare = function(square, piece) {
        if (board.hasOwnProperty('removeGreySquares') && typeof board.removeGreySquares === 'function') {
            board.removeGreySquares();
        }
    };
var onSnapEnd = function() {
        if (!game.game_over() && game.turn() !== player) {
        }
    };
function createBoard(pieceSet) {
        var cfg = {
            cameraControls: true,
            draggable: true,
            position: 'start',
            onDrop: onDrop,
            onMouseoutSquare: onMouseoutSquare,
            onMouseoverSquare: onMouseoverSquare,
            onSnapEnd: onSnapEnd
        };
            if (pieceSet) {
                if (pieceSet === 'minions') {
                    cfg.whitePieceColor = 0xFFFF00;
                    cfg.blackPieceColor = 0xCC00CC;
                    cfg.lightSquareColor = 0x888888;
                    cfg.darkSquareColor = 0x666666;
                }
                cfg.pieceSet = 'assets/chesspieces/' + pieceSet + '/{piece}.json';
            }
            return new ChessBoard3('board', cfg);
        
    }
board = createBoard();

updateStatus();
