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
  windowsWidth = $(window).width()
  windowsWidthPx = windowsWidth.toString() + 'px'
  $('#inner').css('width', windowsWidthPx);
  $('#outer').css('padding', '');
  board = new ChessBoard3('inner', sampleConfig);
  board.position(currentPosition, false);
}

setUpBoard();
