"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWin = exports.isRightMove = exports.isFill = exports.boardToString = exports.boardFromString = void 0;
function boardFromString(s) {
    // TODO
    // преобразовывать текущую позицию из строки (например 00__XX___)
    // в массив (например ['0','0','_','_','X','X','_','_','_'])
    return s.split("");
}
exports.boardFromString = boardFromString;
function boardToString(b) {
    // TODO
    // преобразовывать текущую позицию в виде массива в строку 
    b.concat();
    return " ";
}
exports.boardToString = boardToString;
function isFill(board) {
    // TODO
    // Если ни в одном из элементов массива board нет элементов
    //   равных "_" она возвращает true, иначе - false
    var a = 0;
    for (var i = 0; i < 9; i++) {
        if (board[i] == "_")
            a++;
    }
    if (a != 0)
        return false;
    else
        return true;
}
exports.isFill = isFill;
function isRightMove(move, board) {
    // TODO
    // Если клетка в позиции move доски board равна "_"
    //  (в нее можно пойти) функция возвращает true, иначе - false
    if (board[move] == "_")
        return true;
    else
        return false;
}
exports.isRightMove = isRightMove;
// Список троек позиций, находящихся на одной линии 
//  (выигрышные комбинации)
var winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// Используется в функции checkWin 
//  для выбора одной возможной выигрышной комбинации
function getLineChar(line, board) {
    return [board[line[0]], board[line[1]], board[line[2]]];
}
var data = "_";
function checkWin(board) {
    // TODO
    // Проверяет по winPos, имеется ли выигрышная комбинация
    //  из трех одинаковых символов, находящихся на одной линии.
    // В случае наличия такой комбинации функция должна вернуть
    //  X или 0 соответственно, иначе нужно вернуть _.
    //let count = 0
    for (var i = 0; i < winPos.length; i++) {
        if (board[winPos[i][0]] === board[winPos[i][1]] && board[winPos[i][1]] === board[winPos[i][2]]) {
            //count++
            data = board[winPos[i][0]];
            break;
        }
        //else count == 0
        else
            data = "_";
    }
    if (data != "_")
        return data;
    else
        return "_";
}
exports.checkWin = checkWin;
//# sourceMappingURL=board.js.map