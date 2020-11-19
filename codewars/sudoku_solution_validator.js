function validSolution(board) {
    horizontal = [];
    preVertical = [];
    vertical = [];
    preGrid1 = [];
    preGrid2 = [];
    preGrid3 = [];
    Grid = [];
    
    for(let i = 0; i < board.length; i++) {
        preVertical = [];

        for(let j = 0; j < board.length; j++) {
            preVertical.push(board[j][i]);
        }
        vertical.push(preVertical);
        horizontal.push(board[i]);
        
        preGrid1.push(board[i].slice(0, 3));
        preGrid2.push(board[i].slice(3, 6));
        preGrid3.push(board[i].slice(6, 9));
    }
    
    for(i = 0; i <= preGrid1.length; i++) {
        if(i >= 0 && i <= 2) {
            // console.log(preGrid1[i]);
            Grid.push(preGrid1[i].flat());
        }
        if(i >= 3 && i <= 5) {
            console.log(preGrid2[i]);
        }
    }
    
    console.log(preGrid1);
    console.log(preGrid2);
    console.log(preGrid3);

    // return (!horizontal.map(arr => Array.from(new Set(arr)).filter(x => x !== 0).length === 9).includes(false) && !vertical.map(arr => Array.from(new Set(arr)).filter(x => x !== 0).length === 9).includes(false));
}

console.log(validSolution([
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));

// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]));