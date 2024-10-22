"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
// Текущее состояние доски
var board = [];
// Ссылка на html элемент для вывода сообщений
var info = document.getElementById("info");
// Кнопки игрового поля и их инициализация
var buttons = [];
var _loop_1 = function (i) {
    var b = document.getElementById("f" + i);
    b.onclick = function () { step(i); };
    buttons.push(b);
    var f = b.textContent;
    if (f == null) {
        f = "_";
    }
    ;
    board.push(f);
};
for (var i = 0; i < 9; i++) {
    _loop_1(i);
}
// Начальная поизиция, используется при сбросе
var zeroBoard = board.slice();
// После окончании игры - true.
// Используется для того, что-бы не делать ходов после окончания игры
var gameOver = false;
// Хранит символ, который выставляется на доску при ходе.
var turn = "X";
// Возвращает текущий символ и меняет его для следующего хода.
function getTurn() {
    if (turn == "X") {
        turn = "0";
        return ("X");
    }
    else {
        turn = "X";
        return ("0");
    }
}
// Кнопка для перехода к начальной позиции
var resetButton = document.getElementById("reset");
var reset = function () {
    // TODO
    // Функция  должна установить в начальное состояние переменные
    //  board, turn и gameOver, и установить в начальное состояние
    //  свойство textContent html элементов buttons и info
    //board = zeroBoard
    turn = "X";
    gameOver = false;
    for (var i = 0; i < buttons.length && i < board.length; i++) {
        buttons[i].textContent = "_";
        board[i] = "_";
    }
    info.textContent = "info";
};
resetButton.onclick = reset;
function step(cell) {
    // TODO
    // В случае, если игра не окончена и в клетку cell возможен ход,
    //  должна выполнить ход.
    // При выполнении хода нужно заполнить соответствующие элементы
    //  массивов board и buttons, затем проверить, на закончилась ли игра
    //  и, если игра закончилась, обновить переменные gameOver и info.
    getTurn();
    (0, board_1.isRightMove)(cell, board);
    if ((0, board_1.isRightMove)(cell, board) == true) {
        board[cell] = getTurn();
        buttons[cell].textContent = getTurn();
    }
    (0, board_1.checkWin)(board);
    if ((0, board_1.checkWin)(board) != "_") {
        getTurn();
        info.textContent = "Win ".concat(getTurn());
        //info.textContent = `Win ${checkWin(board)}`
        (0, board_1.isFill)(board) == true;
        gameOver = true;
    }
    (0, board_1.isFill)(board);
    if ((0, board_1.isFill)(board) == true) {
        gameOver = true;
        info.textContent = "Game_Over";
    }
    //getTurn() 
}
//# sourceMappingURL=index.js.map