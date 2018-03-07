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



}