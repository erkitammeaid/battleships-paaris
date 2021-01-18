function makeRows(rows, cols, board) {
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        board.appendChild(cell).className = "grid-item";
    };
};

const playerGameBoard = document.getElementById("player-game-board");
const opponentGameBoard = document.getElementById("opponent-game-board");

makeRows(10, 10, playerGameBoard);
makeRows(10, 10, opponentGameBoard);
