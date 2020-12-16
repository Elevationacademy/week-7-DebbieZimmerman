function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}

function printMatrixValues(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            console.log(matrix[row][column])
        }
    }
}

function printMatrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let line = ""
        for (let column = 0; column < matrix[row].length; column++) {
            line = line + matrix[row][column] + "\t"
        }
        console.log(line)
    }
}

function get (rowNum, columnNum){
    return matrix[rowNum][columnNum]
}

function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

function printRow(rowNum){
    for (let i = 0; i < matrix[rowNum].length; i++) {
        console.log(matrix[rowNum][i])
    }
}

function alter(x, y, val){
    matrix[x][y] = val
}

matrix = generateMatrix(3, 4)
alter(1, 3, 174)
printMatrix(matrix)