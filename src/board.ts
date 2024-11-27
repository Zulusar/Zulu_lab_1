export function boardFromString(s: string): string[] {
    // TODO
    // преобразовывать текущую позицию из строки (например 00__XX___)
    // в массив (например ['0','0','_','_','X','X','_','_','_'])
    return s.split("")
}
export function boardToString(b: string[]): string {
    // TODO
    // преобразовывать текущую позицию в виде массива в строку 
    b.concat()
    return " "
}

export function isFill(board: string[]): boolean {
    // TODO
    // Если ни в одном из элементов массива board нет элементов
    //   равных "_" она возвращает true, иначе - false
    let a = 0
    for (let i = 0; i < 9; i++) {
        if(board[i] == "_") a++
    }
    if (a != 0) return false
    else return true
    
}

export function isRightMove(move: number, board: string[]): boolean {
    // TODO
    // Если клетка в позиции move доски board равна "_"
    //  (в нее можно пойти) функция возвращает true, иначе - false
    if (board[move] == "_") return true
    else return false
}

// Список троек позиций, находящихся на одной линии 
//  (выигрышные комбинации)
const winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Используется в функции checkWin 
//  для выбора одной возможной выигрышной комбинации
function getLineChar(line: number[], board: string[]): string[] {
    return [board[line[0]], board[line[1]], board[line[2]]]
}



export function checkWin(board: string[]): string {
    // TODO
    // Проверяет по winPos, имеется ли выигрышная комбинация
    //  из трех одинаковых символов, находящихся на одной линии.
    // В случае наличия такой комбинации функция должна вернуть
    //  X или 0 соответственно, иначе нужно вернуть _.
    let data = "_"
        for(let i = 0; i < winPos.length; i++){
            if (getLineChar(winPos[i],board)[0] == getLineChar(winPos[i],board)[1]  && getLineChar(winPos[i],board)[0] == getLineChar(winPos[i],board)[2]&& getLineChar(winPos[i],board)[0] != "_") {
                data = getLineChar(winPos[i],board)[0]
                break
            }
            else  data = "_"   
        }
        return data
    }
