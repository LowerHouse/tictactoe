const game = (function(){
    const gameBoard = [ [null, null, null],
                        [null, null, null],
                        [null, null, null]]
    
    const makeMove = (symbol, row, column) => {
        if(!gameBoard[row][column]){
            gameBoard[row][column] = symbol
            
            console.log(gameBoard, gameOverCheck())
        }

    }

    const gameOverCheck = () => {

        const allEqual = arr => arr.every(v => v === arr[0] & v!==null)

        // for loop to check if any row has 3 in line
        for(let row = 0; row <3; row++){
            if (allEqual(gameBoard[row])){return 'Game Over'}
        };

        //check if any column has 3 in line
        for(let column = 0; column <3; column++){
            columnArr = []
            for(let row = 0; row <3; row++){
                columnArr.push(gameBoard[row][column])
            }};
            if (allEqual(columnArr)){
                return 'Game Over'};

        //check if any diagonal has 3 in line
        let diagonals = [[],[]];
        for(let  i= 0; i < 3; i++){
            diagonals[0].push(gameBoard[i][i]);
            diagonals[1].push(gameBoard[(i - 2) * -1][i])};
        
        if(allEqual(diagonals[0]) | allEqual(diagonals[1])){
            return 'Game Over'};

        //Check if any row has null value, if not it's a draw
        for(let row = 0; row <3; row++){
            if (gameBoard[row].indexOf(null) != -1){
                return 'Make Next Move'}
        };
        return 'Game Over'
    }

    return {
        makeMove,
    }
})();

const player = (function(){

}())