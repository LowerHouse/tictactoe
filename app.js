const game = (function(){
    
    const gameBoard = [ [null, null, null],
                        [null, null, null],
                        [null, null, null]]
    
    let symbol = 'X'
    const changeSymbol = (sym) => (sym === 'X') ? 'O' : 'X'

    const makeMove = (row, column) => {
        if(!gameBoard[row][column]){
            gameBoard[row][column] = symbol
            
            symbol = changeSymbol(symbol)
            console.log(gameBoard, gameOverCheck())
        }

    }

    const gameOverCheck = () => {

        const allEqual = arr => arr.every(v => v === arr[0] & v!==null)

        // for loop to check if any row has 3 in line
        for(let row = 0; row <3; row++){
            if (allEqual(gameBoard[row])){return gameBoard[row][0]}
        };

        //check if any column has 3 in line
        for(let column = 0; column <3; column++){
            columnArr = []
            for(let row = 0; row <3; row++){
                columnArr.push(gameBoard[row][column])
            };            
            if (allEqual(columnArr)){
                return columnArr[0]};
            }

        //check if any diagonal has 3 in line
        let diagonals = [[],[]];
        for(let  i= 0; i < 3; i++){
            diagonals[0].push(gameBoard[i][i]);
            diagonals[1].push(gameBoard[(i - 2) * -1][i])};
        
        if(allEqual(diagonals[0])){
            return diagonals[0][0]}
        
        if(allEqual(diagonals[1])){
            return diagonals[1][0]}

        //Check if there is space left, if not it's a draw
        for(let row = 0; row <3; row++){
            if (gameBoard[row].indexOf(null) != -1){
                return 'Make Next Move'}
        };
        return 'Draw'
    }

    return {
        makeMove,
    }
})();

const handleDom = (function(){
    const playerForm = document.querySelectorAll('.player form')
    const gameBoard = document.querySelector('.tictactoe')
    
    const handleTiles = (function(){
        const tiles = gameBoard.querySelectorAll('div') 
        let rowCownter = 0
        let columnCounter = 0
        tiles.forEach(div => {
            div.id = `${rowCownter}${columnCounter}`;
            
            div.addEventListener('click', (e)=> {
                game.makeMove(div.id[0], div.id[1])
            })

            if (columnCounter ===2) {(rowCownter === 2) ? rowCownter = 0 : rowCownter++}
            (columnCounter === 2) ? columnCounter = 0 : columnCounter++
        })


    })()

    function createPlayerStatus(name, player){
        stat = player.querySelector('.status')
        stat.className = 'status'
        stat.innerHTML = 'Player '+name
    }
    
    playerForm.forEach(form => form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.className = 'hide'
        createPlayerStatus(form.elements['name'].value, form.parentNode )
    }))



})()