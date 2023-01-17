function spiralMatrixs(row, col) {
    let matrix = [];
    let countRow = 0;
    let lastRow = row - 1;
    let countCol = 0;
    let lastCol = col - 1;
    let currNumber = 1;
  
    //create row
    for (let i = 0; i < row; i++) {
      matrix.push([]);
    }
  
    //condition for entires matrix
    while (countRow <= lastRow && countCol <= lastCol) {
  
      //create top row
      for (let i = countCol; i <= lastCol; i++) {
        matrix[countRow][i] = currNumber++;
      }
      countRow++;
  
      //create right column
      for (let i = countRow; i <= lastRow; i++) {
        matrix[i][lastCol] = currNumber++;
      }
      lastCol--;
  
      //create bottom row
      for (let i = lastCol; i >= countCol; i--) {
        matrix[lastRow][i] = currNumber++;
      }
      lastRow--;
  
      //create left column
      for (let i = lastRow; i >= countRow; i--) {
        matrix[i][countCol] = currNumber++;
      }
      countCol++;
    }
    matrix.forEach((row) => {
      console.log(row.join(' '));
    });
  
  }

  spiralMatrixs(5, 5);