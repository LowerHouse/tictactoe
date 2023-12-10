const game = (function(){
    const gameBoard = [ [null, null, null],
                        [null, null, null],
                        [null, null, null]]
    
    const makeMove = (symbol, column, row) => {
        if(!gameBoard[row][column]){
            gameBoard[row][column] = symbol
            
            console.log(gameBoard, gameOverCheck())
        }

    }

    const gameOverCheck = () => {
        let columnArr
        let diagonals = [[],[]]
        const allEqual = arr => arr.every(v => v === arr[0] & v!==null)

        for(let row = 0; row <3; row++){
            if (allEqual(gameBoard[row])){return 'Game Over'}
        }
        
        for(let column = 0; column <3; column++){
            columnArr = []
            for(let row = 0; row <3; row++){
                columnArr.push(gameBoard[row][column])
            }
            if (allEqual(columnArr)){return 'Game Over'}
        }

        for(let  i= 0; i < 3; i++){
            diagonals[0].push(gameBoard[i][i])
            diagonals[1].push(gameBoard[(i - 2) * -1][i])
        }
        if(allEqual(diagonals[0]) | allEqual(diagonals[1])){return 'Game Over'}
    }

    return {
        makeMove,
    }
})();

const player = (function(){

}())