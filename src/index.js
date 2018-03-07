module.exports = function solveSudoku(gameBoard) {

    function zeroPositions(gameBoard) {
        var zeroPositionsArr = [];

        for (var i = 0; i < gameBoard.length; i++) {
            for (var j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j] === 0) {
                    zeroPositionsArr.push([i, j]);
                }
            }
        }
        console.log(zeroPositionsArr);
        return zeroPositionsArr;
    }

    function checkRow(gameBoard, boardRow, boardNumValue) {
        for (var i = 0; i < gameBoard[boardRow].length; i++) {
            if (gameBoard[boardRow][i] === boardNumValue) {
                return false;
            }
        }
        return true;
    }

    function checkColumn(gameBoard, boardColumn, boardNumValue) {
        for (var i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i][boardColumn] === boardNumValue) {
                return false;
            }
        }
        return true;
    }

    function checkSquare(gameBoard, boardColumn, boardRow, boardNumValue) {
        // square 3X3
        var boardColumnCorner = 0,
            boardRowCorner = 0,
            boardSquareSize = 3;

        while (boardColumn >= boardColumnCorner + boardSquareSize) {
            boardColumnCorner += boardSquareSize;
        }

        while (boardRow >= boardRowCorner + boardSquareSize) {
            boardRowCorner += boardSquareSize;
        }

        for (var i = boardRowCorner; i < boardRowCorner + boardSquareSize; i++) {
            for (var j = boardColumnCorner; j < boardColumnCorner + boardSquareSize; j++) {
                if (gameBoard[i][j] === boardNumValue) {
                    return false;
                }
            }
        }
        return true;
    }

    function finalCheck(gameBoard, boardColumn, boardRow, boardNumValue) {
        if (this.checkRow(gameBoard, boardRow, boardNumValue) &&
            this.checkColumn(gameBoard, boardColumn, boardNumValue) &&
            this.checkSquare(gameBoard, boardColumn, boardRow, boardNumValue)) {
            return true;
        } else {
            return false;
        }
    }

    var zeroPositions = zeroPositions(gameBoard);

    function finalSolution(gameBoard, zeroPositions) {
        var limit = 9,
            boardRow,
            boardColumn,
            boardNumValue,
            wantedNum;

        for (var i = 0; i < zeroPositions.length;) {
            boardRow = zeroPositions[i][0];
            boardColumn = zeroPositions[i][1];
            // console.log(zeroPositions[i][0]);
            // console.log(zeroPositions[i][1]);
            boardNumValue = gameBoard[boardRow][boardColumn] + 1;
            wantedNum = false;

            while (!wantedNum && boardNumValue <= limit) {

                if (this.finalCheck(gameBoard, boardColumn, boardRow, boardNumValue)) {
                    wantedNum = true;
                    gameBoard[boardRow][boardColumn] = boardNumValue;
                    i++;
                } else {
                    boardNumValue++;
                }
            }
            if (!wantedNum) {
                gameBoard[boardRow][boardColumn] = 0;
                i--;
            }
        }

        gameBoard.forEach(function(row) {
            row.join();
        });

        return gameBoard;
    }

    var temp = finalSolution(gameBoard, zeroPositions);

    return temp;
}